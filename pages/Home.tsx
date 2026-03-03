// HR-UPDATER: v1.0
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, MapPin, Briefcase, Search, Menu, Mic, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { SeoSection } from '../components/SeoSection';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { JOB_LISTINGS } from '../constants';

const App = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Top Bar */}
      <div className="bg-craft-900 text-gray-300 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> 0800 - 123 456 78</span>
            <span className="flex items-center gap-1"><Mail size={14} /> kontakt@fussbodenleger-jobs.de</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Für Arbeitgeber</a>
            <a href="#" className="hover:text-white transition">Preise</a>
            <a href="#" className="hover:text-white transition">Anmelden</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-wood-500 p-2 rounded text-white">
                <Layout size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-craft-900 leading-none tracking-tight">
                  BODEN<span className="text-wood-500">PROFI</span>
                </h1>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Stellenmarkt</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-craft-800 font-medium">
              <a href="#" className="hover:text-wood-600 transition">Jobs finden</a>
              <a href="#" className="hover:text-wood-600 transition">Firmen</a>
              <a href="#" className="hover:text-wood-600 transition">Karriere-Ratgeber</a>
              <button className="bg-wood-500 text-white px-5 py-2 rounded-full hover:bg-wood-700 transition shadow-md">
                Stelle inserieren
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
            <a href="#" className="block text-gray-700 font-medium">Jobs finden</a>
            <a href="#" className="block text-gray-700 font-medium">Firmen</a>
            <a href="#" className="block text-gray-700 font-medium">Ratgeber</a>
            <button className="w-full bg-wood-500 text-white py-3 rounded hover:bg-wood-700 transition">
              Stelle inserieren
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-craft-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Fußbodenleger bei der Arbeit" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-craft-900 via-craft-900/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-wood-500/20 text-wood-100 px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-wood-500/30">
              <Award size={16} /> Nr. 1 Jobbörse für Bodenleger
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Deutschlands Netzwerk für <span className="text-wood-500">Fußbodenprofis</span>.
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Wir verbinden qualifizierte Handwerker mit Top-Arbeitgebern. 
              Egal ob Parkett, Estrich, Vinyl oder Fliesen – finden Sie jetzt Ihren nächsten Auftrag oder Traumjob.
            </p>
            
            {/* Search Box */}
            <div className="bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row gap-2 max-w-2xl">
              <div className="flex-1 flex items-center px-4 bg-gray-50 rounded md:bg-transparent">
                <Search className="text-gray-400 w-5 h-5 mr-3" />
                <input 
                  type="text" 
                  placeholder="Jobtitel, z.B. Parkettleger..." 
                  className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder-gray-500"
                />
              </div>
              <div className="h-px md:h-auto md:w-px bg-gray-200 mx-2"></div>
              <div className="flex-1 flex items-center px-4 bg-gray-50 rounded md:bg-transparent">
                <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                <input 
                  type="text" 
                  placeholder="Ort oder PLZ" 
                  className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder-gray-500"
                />
              </div>
              <button className="bg-wood-500 hover:bg-wood-700 text-white font-bold py-3 px-8 rounded-md transition duration-200">
                Suchen
              </button>
            </div>
            
            <div className="mt-8 flex gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-wood-500" /> Über 500 neue Jobs</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-wood-500" /> Geprüfte Arbeitgeber</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-wood-500" /> Kostenlos für Bewerber</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Job Listings Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-craft-900">Aktuelle Top-Stellen</h3>
              <p className="text-gray-600 mt-2">Die neuesten Angebote aus unserem Netzwerk.</p>
            </div>
            <a href="#" className="hidden md:block text-wood-600 font-semibold hover:underline">Alle Jobs anzeigen →</a>
          </div>

          <div className="grid gap-6">
            {JOB_LISTINGS.map((job) => (
              <div key={job.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200 flex flex-col md:flex-row gap-6 items-start md:items-center group">
                <div className="w-12 h-12 bg-wood-50 text-wood-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-wood-500 group-hover:text-white transition">
                  <Briefcase size={24} />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <h4 className="text-lg font-bold text-craft-900 group-hover:text-wood-600 transition">{job.title}</h4>
                    <span className="hidden md:inline text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{job.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">{job.type}</span>
                    <span className="text-wood-700 font-medium">{job.salary}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2 min-w-[120px]">
                  <span className="text-xs text-gray-400">{job.postedDate}</span>
                  <button className="bg-white border-2 border-wood-500 text-wood-600 hover:bg-wood-500 hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition w-full md:w-auto">
                    Bewerben
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button className="text-wood-600 font-semibold">Alle Jobs anzeigen</button>
          </div>
        </section>

        {/* SEO Content Component */}
        <SeoSection />

        {/* Employer CTA */}
        <section className="bg-craft-900 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Sie suchen Verstärkung für Ihr Team?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Erreichen Sie mit einer Anzeige über 10.000 Fachkräfte im Bereich Bodenbelag, Parkett und Estrich.
              Schnell, unkompliziert und zielgenau.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-wood-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-wood-600 transition shadow-lg shadow-wood-900/50">
                Jetzt Anzeige schalten
              </button>
              <button className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/5 transition">
                Preise & Konditionen
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-wood-500 p-1.5 rounded text-white">
                  <Layout size={20} />
                </div>
                <span className="font-heading font-bold text-xl text-craft-900">BODENPROFI</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Das führende Karriereportal für das Bodenleger-Handwerk. Wir bringen Qualität und Fachkompetenz zusammen.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-craft-900 mb-4 uppercase text-sm tracking-wider">Für Bewerber</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-wood-500">Alle Stellenangebote</a></li>
                <li><a href="#" className="hover:text-wood-500">Gehaltsvergleich</a></li>
                <li><a href="#" className="hover:text-wood-500">Lebenslauf-Tipps</a></li>
                <li><a href="#" className="hover:text-wood-500">Job-Alarm aktivieren</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-craft-900 mb-4 uppercase text-sm tracking-wider">Für Arbeitgeber</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-wood-500">Anzeige schalten</a></li>
                <li><a href="#" className="hover:text-wood-500">Preise</a></li>
                <li><a href="#" className="hover:text-wood-500">Kandidaten-Datenbank</a></li>
                <li><a href="#" className="hover:text-wood-500">Partner werden</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-craft-900 mb-4 uppercase text-sm tracking-wider">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/impressum" className="hover:text-wood-500">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-wood-500">Datenschutz</Link></li>
                <li><Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link></li>
                <li><Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link></li>
                <li><a href="#" className="hover:text-wood-500">AGB</a></li>
                <li><a href="#" className="hover:text-wood-500">Kontakt</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>&copy; 2024 fussbodenleger-stellenangebote.de - Ein fiktives Projekt.</p>
            <div className="flex gap-4">
              <span>Made with React & Gemini</span>
            </div>
          </div>
          
          {/* Impressum Placeholder (Content requirement) */}
          <div className="mt-8 p-4 bg-gray-50 rounded border border-gray-100 text-xs text-gray-400">
            <strong>Impressum (Platzhalter):</strong><br/>
            Musterfirma GmbH, Musterstraße 1, 12345 Musterstadt<br/>
            Geschäftsführer: Max Mustermann<br/>
            Handelsregister: HRB 12345, Amtsgericht Musterstadt<br/>
            Kontakt: info@fussbodenleger-stellenangebote.de
          </div>
        </div>
      </footer>

      {/* Floating Action Button for AI Assistant */}
      <button 
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-wood-500 hover:bg-wood-600 text-white rounded-full p-4 shadow-2xl flex items-center gap-2 transition transform hover:scale-105"
        aria-label="KI Assistent starten"
      >
        <Mic className="h-6 w-6" />
        <span className="hidden md:inline font-bold pr-1">Job-Assistent</span>
      </button>

      {/* AI Assistant Modal */}
      {isAssistantOpen && (
        <VoiceAssistant onClose={() => setIsAssistantOpen(false)} />
      )}

    </div>
  );
};

export default Home;
