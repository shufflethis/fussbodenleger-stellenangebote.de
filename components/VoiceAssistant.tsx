import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { AssistantState } from '../types';
import { createPcmBlob, decodeAudioData, base64ToUint8Array } from '../services/audioUtils';
import { Mic, MicOff, Volume2, X, Activity } from 'lucide-react';

interface VoiceAssistantProps {
  onClose: () => void;
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ onClose }) => {
  const [state, setState] = useState<AssistantState>(AssistantState.CONNECTING);
  const [volume, setVolume] = useState(0); // For visualizer
  
  // Refs for audio handling to avoid closures issues
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputContextRef = useRef<AudioContext | null>(null);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);

  const cleanup = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
    }
    if (sourceNodeRef.current) {
      sourceNodeRef.current.disconnect();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    if (inputContextRef.current) {
      inputContextRef.current.close();
    }
    
    // Attempt to close session if stored (API limitations might prevent clean close of promise directly, 
    // but the socket closes when context dies usually)
    sessionPromiseRef.current = null;
    
    sourcesRef.current.forEach(source => source.stop());
    sourcesRef.current.clear();
  }, []);

  useEffect(() => {
    // Component Mount - Start Session
    const startSession = async () => {
      try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
          console.error("No API KEY");
          setState(AssistantState.ERROR);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        
        // Initialize Audio Contexts
        // Input: 16kHz for Gemini
        // Output: 24kHz for playback quality
        inputContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

        // Get User Media
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;

        // Establish Live Connection
        const sessionPromise = ai.live.connect({
          model: 'gemini-2.5-flash-native-audio-preview-09-2025',
          config: {
            responseModalities: [Modality.AUDIO],
            systemInstruction: `Du bist ein freundlicher, hilfreicher Karriereberater für die Website 'fussbodenleger-stellenangebote.de'. 
            Du hilfst Fußbodenlegern, Jobs zu finden, und Arbeitgebern, Fachkräfte zu finden. 
            Antworte kurz, prägnant und professionell auf Deutsch.`,
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
            },
          },
          callbacks: {
            onopen: () => {
              console.log("Gemini Live Session Opened");
              setState(AssistantState.LISTENING);
              setupAudioInput(stream);
            },
            onmessage: async (message: LiveServerMessage) => {
              // Handle Audio Output
              const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
              if (base64Audio && audioContextRef.current) {
                 setState(AssistantState.SPEAKING);
                 await playAudioChunk(base64Audio);
                 // Reset to listening after a delay (approximation) or wait for next input
                 setTimeout(() => setState(AssistantState.LISTENING), 1000); 
              }

              // Handle Interruption
              if (message.serverContent?.interrupted) {
                sourcesRef.current.forEach(source => {
                  try { source.stop(); } catch(e) {}
                });
                sourcesRef.current.clear();
                nextStartTimeRef.current = 0;
                setState(AssistantState.LISTENING);
              }
            },
            onclose: () => {
              console.log("Session Closed");
              setState(AssistantState.IDLE);
            },
            onerror: (err) => {
              console.error("Session Error", err);
              setState(AssistantState.ERROR);
            }
          }
        });

        sessionPromiseRef.current = sessionPromise;

      } catch (err) {
        console.error("Failed to initialize AI", err);
        setState(AssistantState.ERROR);
      }
    };

    startSession();

    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setupAudioInput = (stream: MediaStream) => {
    if (!inputContextRef.current || !sessionPromiseRef.current) return;

    const source = inputContextRef.current.createMediaStreamSource(stream);
    sourceNodeRef.current = source;
    
    // Use ScriptProcessor (as per GenAI guidelines examples) for simpler PCM extraction
    const processor = inputContextRef.current.createScriptProcessor(4096, 1, 1);
    processorRef.current = processor;

    processor.onaudioprocess = (e) => {
      const inputData = e.inputBuffer.getChannelData(0);
      
      // Calculate volume for visualizer
      let sum = 0;
      for (let i = 0; i < inputData.length; i++) {
        sum += inputData[i] * inputData[i];
      }
      const rms = Math.sqrt(sum / inputData.length);
      setVolume(Math.min(rms * 10, 1)); // Scale for visual

      const pcmBlob = createPcmBlob(inputData);
      
      sessionPromiseRef.current?.then((session) => {
        session.sendRealtimeInput({ media: pcmBlob });
      });
    };

    source.connect(processor);
    processor.connect(inputContextRef.current.destination);
  };

  const playAudioChunk = async (base64Audio: string) => {
    if (!audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const arrayBuffer = base64ToUint8Array(base64Audio);
    
    try {
      const audioBuffer = await decodeAudioData(arrayBuffer, ctx, 24000, 1);
      
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      
      const outputNode = ctx.createGain();
      outputNode.gain.value = 1.0;
      source.connect(outputNode);
      outputNode.connect(ctx.destination);

      // Schedule playback
      const currentTime = ctx.currentTime;
      const startTime = Math.max(nextStartTimeRef.current, currentTime);
      source.start(startTime);
      
      nextStartTimeRef.current = startTime + audioBuffer.duration;
      sourcesRef.current.add(source);
      
      source.onended = () => {
        sourcesRef.current.delete(source);
      };

    } catch (e) {
      console.error("Error decoding audio", e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative border border-gray-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-wood-700 to-wood-500 p-4 flex justify-between items-center text-white">
          <h3 className="font-heading font-bold text-lg flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            Job-Assistent (KI)
          </h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col items-center justify-center min-h-[300px] gap-6">
          
          {/* Status Indicator */}
          <div className="relative">
            <div className={`h-32 w-32 rounded-full flex items-center justify-center transition-all duration-300 ${
              state === AssistantState.SPEAKING ? 'bg-wood-100 scale-110' : 'bg-gray-100'
            }`}>
              {state === AssistantState.CONNECTING && (
                <div className="animate-spin h-8 w-8 border-4 border-wood-500 border-t-transparent rounded-full" />
              )}
              
              {(state === AssistantState.LISTENING || state === AssistantState.SPEAKING) && (
                 <div className="relative">
                   {state === AssistantState.LISTENING && (
                      <div 
                        className="absolute inset-0 bg-wood-200 rounded-full opacity-50 animate-pulse"
                        style={{ transform: `scale(${1 + volume})` }}
                      />
                   )}
                   <Mic className={`h-12 w-12 ${state === AssistantState.LISTENING ? 'text-wood-600' : 'text-gray-400'}`} />
                 </div>
              )}

              {state === AssistantState.ERROR && (
                <MicOff className="h-12 w-12 text-red-500" />
              )}
            </div>
            
            {/* Pulsing rings for Speaking */}
             {state === AssistantState.SPEAKING && (
              <>
                <div className="absolute inset-0 rounded-full border-4 border-wood-300 animate-[ping_2s_ease-in-out_infinite]" />
                <div className="absolute inset-0 rounded-full border-4 border-wood-200 animate-[ping_2s_ease-in-out_infinite_0.5s]" />
              </>
            )}
          </div>

          <div className="text-center space-y-2">
            <h4 className="text-xl font-bold text-gray-800">
              {state === AssistantState.CONNECTING && "Verbinde..."}
              {state === AssistantState.LISTENING && "Ich höre zu..."}
              {state === AssistantState.SPEAKING && "Ich antworte..."}
              {state === AssistantState.ERROR && "Fehler bei der Verbindung"}
            </h4>
            <p className="text-gray-500 max-w-xs">
              {state === AssistantState.LISTENING 
                ? "Fragen Sie nach Jobs in Ihrer Nähe oder nach Gehaltstabellen." 
                : "Unser KI-Assistent analysiert den Stellenmarkt für Sie."}
            </p>
          </div>

          {/* Visualizer Bar */}
          {state === AssistantState.LISTENING && (
            <div className="flex gap-1 h-8 items-end">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-wood-500 rounded-t-sm transition-all duration-100"
                  style={{ height: `${Math.max(20, Math.random() * volume * 100)}%` }}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-3 text-center text-xs text-gray-400 border-t">
          Powered by Gemini Live API
        </div>
      </div>
    </div>
  );
};
