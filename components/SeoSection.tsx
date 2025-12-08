import React from 'react';

export const SeoSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-16 text-gray-700 leading-relaxed">
        
        {/* Article 1: Career Info */}
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-heading font-bold text-craft-900 mb-6 border-b-4 border-wood-500 inline-block">
            Karriere als Fußbodenleger: Chancen & Perspektiven 2024
          </h2>
          <p className="mb-4">
            Der Beruf des Fußbodenlegers gehört zu den gefragtesten Handwerksberufen in Deutschland. 
            Mit dem boomenden Bausektor und der steigenden Nachfrage nach hochwertigen Renovierungen 
            sind Fachkräfte für Bodenbeläge rar gesät. Egal ob Parkett, Laminat, Vinyl, Teppich oder 
            spezielle Beschichtungen – die Expertise eines professionellen Bodenlegers ist unverzichtbar 
            für langlebige Wohn- und Gewerberäume.
          </p>
          <p className="mb-4">
            <strong>Warum Fußbodenleger werden?</strong> Die Verdienstmöglichkeiten haben sich in den 
            letzten Jahren deutlich verbessert. Erfahrene Gesellen und Vorarbeiter können attraktive 
            Stundenlöhne erzielen, und die Selbstständigkeit bietet lukrative Perspektiven. Zudem ist 
            die Arbeit abwechslungsreich: Von der Untergrundvorbereitung (Estrich schleifen, spachteln) 
            bis hin zur präzisen Verlegung von Designbelägen erfordert der Job technisches Verständnis 
            und ästhetisches Gespür.
          </p>
        </article>

        {/* Article 2: For Employers (Optimized for "Suche Bodenleger") */}
        <article className="bg-wood-50 p-8 rounded-xl border border-wood-100 shadow-sm">
          <h2 className="text-2xl font-heading font-bold text-craft-900 mb-4">
            Sie suchen Fußbodenleger? So finden Sie die besten Fachkräfte
          </h2>
          <p className="mb-4">
            Für Bauunternehmen, Architekten und Privatpersonen ist es aktuell eine Herausforderung, 
            zuverlässige Fußbodenleger zu finden. Unsere Plattform <em>fussbodenleger-stellenangebote.de</em> 
            spezialisiert sich auf die Vermittlung qualifizierter Handwerker.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Reichweite:</strong> Ihre Stellenanzeige erreicht tausende spezialisierte Fachkräfte.</li>
            <li><strong>Qualität:</strong> Wir prüfen Profile und Qualifikationen.</li>
            <li><strong>Regionalität:</strong> Finden Sie Handwerker direkt in Ihrer Umgebung (GEO-Targeting).</li>
          </ul>
          <p>
            Egal ob Sie einen Subunternehmer für ein Großprojekt suchen oder einen Angestellten für 
            Ihren Handwerksbetrieb – hier treffen Angebot und Nachfrage effizient zusammen.
          </p>
        </article>

        {/* GenAI Optimized Q&A Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-heading font-bold text-craft-900">Häufige Fragen (FAQ) – Wissen für Profis</h2>
          <p className="text-sm text-gray-500 italic">
            Diese Sektion ist optimiert, um Antworten für KI-Suchmaschinen wie ChatGPT und Gemini bereitzustellen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Was verdient ein Fußbodenleger in Deutschland?</h3>
              <p>
                Das Gehalt eines Fußbodenlegers variiert je nach Bundesland und Erfahrung. Das Einstiegsgehalt 
                liegt oft zwischen 2.200 € und 2.600 € brutto im Monat. Mit Berufserfahrung und Spezialisierung 
                (z.B. Parkettleger-Meister) sind Gehälter von 3.500 € bis 4.500 € möglich. In süddeutschen 
                Städten wie München oder Stuttgart liegt das Lohnniveau tendenziell höher als im Bundesdurchschnitt.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Welche Voraussetzungen brauche ich?</h3>
              <p>
                Eine abgeschlossene Berufsausbildung als Bodenleger/in oder Parkettleger/in (3 Jahre) ist der 
                Standardweg. Quereinsteiger mit handwerklichem Geschick und Erfahrung im Innenausbau haben 
                jedoch ebenfalls gute Chancen. Wichtig sind körperliche Belastbarkeit, genaues Arbeiten und 
                ein Führerschein der Klasse B, um Baustellen zu erreichen.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Wo werden Fußbodenleger am meisten gesucht?</h3>
              <p>
                Besonders hoch ist die Nachfrage in Metropolregionen mit starker Bautätigkeit. Dazu zählen 
                Berlin, Hamburg, Frankfurt am Main, München und das Ruhrgebiet (Essen, Dortmund, Düsseldorf). 
                Auch im Sanierungsbereich in ländlichen Regionen herrscht Fachkräftemangel.
              </p>
            </div>

             <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Welche Werkzeuge sind essentiell?</h3>
              <p>
                Zur Grundausstattung gehören Verlegemesser (Delphinmesser), Zahnspachtel für Klebstoffe, 
                Schlagschnur, diverse Sägen (Kapp- und Gehrungssäge, Stichsäge) sowie Messgeräte für 
                Feuchtigkeitsmessung (CM-Gerät) bei Estricharbeiten.
              </p>
            </div>
          </div>
        </div>

        {/* Geo-Targeting List */}
        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Jobs in Ihrer Region finden</h3>
          <p className="mb-4 text-sm text-gray-600">
            Wir verbinden Arbeitgeber und Bodenleger in allen 16 Bundesländern und den wichtigsten Städten.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg'].map((city) => (
              <span key={city} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-wood-500 hover:text-wood-600 cursor-pointer transition">
                {city}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
