import React from 'react';

export const SeoSection: React.FC = () => {
  const cities = [
    'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf',
    'Leipzig', 'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg',
    'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mannheim', 'Karlsruhe',
    'Augsburg', 'Wiesbaden', 'Mönchengladbach', 'Gelsenkirchen', 'Aachen', 'Braunschweig',
    'Kiel', 'Chemnitz', 'Halle (Saale)', 'Magdeburg', 'Freiburg im Breisgau', 'Krefeld',
    'Mainz', 'Lübeck', 'Erfurt', 'Oberhausen', 'Rostock', 'Kassel', 'Hagen', 'Potsdam',
    'Saarbrücken', 'Hamm', 'Ludwigshafen', 'Oldenburg', 'Osnabrück', 'Leverkusen',
    'Heidelberg', 'Darmstadt', 'Solingen', 'Regensburg', 'Ingolstadt', 'Wolfsburg',
    'Offenbach am Main', 'Ulm', 'Heilbronn', 'Göttingen', 'Recklinghausen',
    'Schwerin', 'Salzgitter', 'Witten', 'Markkleeberg', 'Konz'
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16 text-gray-700 leading-relaxed">

        {/* Article 1: Career Info */}
        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-craft-900 mb-6 border-b-4 border-wood-500 inline-block">
            Karriere als Fußbodenleger: Chancen & Perspektiven 2025/2026
          </h2>
          <p className="mb-4">
            Der Beruf des Fußbodenlegers gehört zu den gefragtesten Handwerksberufen in Deutschland.
            Mit dem boomenden Bausektor und der steigenden Nachfrage nach hochwertigen Renovierungen
            sind Fachkräfte für Bodenbeläge rar gesät. Egal ob Parkett, Laminat, Vinyl, Teppich oder
            spezielle Beschichtungen -- die Expertise eines professionellen Bodenlegers ist unverzichtbar
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
          <p className="mb-4">
            <strong>Ausbildung zum Bodenleger:</strong> Die Ausbildung dauert in der Regel 3 Jahre und wird im
            dualen System absolviert. Auszubildende lernen das Verlegen verschiedener Bodenbeläge, den Umgang
            mit Klebstoffen und Werkzeugen sowie die Untergrundprüfung. Nach der Gesellenprüfung stehen
            zahlreiche Weiterbildungsmöglichkeiten offen, etwa der Meister im Parkettleger-Handwerk oder
            Spezialisierungen im Bereich Industrieböden und Sportböden.
          </p>
          <p className="mb-4">
            <strong>Zukunftsaussichten:</strong> Der Fachkräftemangel im Handwerk sorgt für eine hohe
            Jobsicherheit. Nachhaltiges Bauen und ökologische Bodenbeläge eröffnen zudem neue Geschäftsfelder.
            Fußbodenleger mit Kenntnissen in designorientierten Verlegemustern und smarten Bodenheizungssystemen
            sind besonders gefragt.
          </p>
        </article>

        {/* Article 2: For Employers */}
        <article className="bg-wood-50 p-6 md:p-8 rounded-xl border border-wood-100 shadow-sm">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-craft-900 mb-4">
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
            <li><strong>Schnelligkeit:</strong> Innerhalb von 24 Stunden ist Ihre Anzeige online und sichtbar.</li>
          </ul>
          <p>
            Egal ob Sie einen Subunternehmer für ein Großprojekt suchen oder einen Angestellten für
            Ihren Handwerksbetrieb -- hier treffen Angebot und Nachfrage effizient zusammen.
          </p>
        </article>

        {/* FAQ Section with Schema.org FAQPage markup */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-craft-900">Häufige Fragen (FAQ) -- Wissen für Profis</h2>
          <p className="text-sm text-gray-500 italic">
            Alles Wissenswerte rund um den Beruf des Fußbodenlegers, Gehalt, Ausbildung und Karrierechancen.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Was verdient ein Fußbodenleger in Deutschland?</h3>
              <p>
                Das Gehalt eines Fußbodenlegers variiert je nach Bundesland und Erfahrung. Das Einstiegsgehalt
                liegt oft zwischen 2.200 und 2.600 Euro brutto im Monat. Mit Berufserfahrung und Spezialisierung
                (z.B. Parkettleger-Meister) sind Gehälter von 3.500 bis 4.500 Euro möglich. In süddeutschen
                Städten wie München oder Stuttgart liegt das Lohnniveau tendenziell höher als im Bundesdurchschnitt.
              </p>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Welche Voraussetzungen brauche ich?</h3>
              <p>
                Eine abgeschlossene Berufsausbildung als Bodenleger/in oder Parkettleger/in (3 Jahre) ist der
                Standardweg. Quereinsteiger mit handwerklichem Geschick und Erfahrung im Innenausbau haben
                jedoch ebenfalls gute Chancen. Wichtig sind körperliche Belastbarkeit, genaues Arbeiten und
                ein Führerschein der Klasse B, um Baustellen zu erreichen.
              </p>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Wo werden Fußbodenleger am meisten gesucht?</h3>
              <p>
                Besonders hoch ist die Nachfrage in Metropolregionen mit starker Bautätigkeit. Dazu zählen
                Berlin, Hamburg, Frankfurt am Main, München und das Ruhrgebiet (Essen, Dortmund, Düsseldorf).
                Auch im Sanierungsbereich in ländlichen Regionen herrscht Fachkräftemangel.
              </p>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Welche Werkzeuge sind essentiell?</h3>
              <p>
                Zur Grundausstattung gehören Verlegemesser (Delphinmesser), Zahnspachtel für Klebstoffe,
                Schlagschnur, diverse Sägen (Kapp- und Gehrungssäge, Stichsäge) sowie Messgeräte für
                Feuchtigkeitsmessung (CM-Gerät) bei Estricharbeiten.
              </p>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Was ist der Unterschied zwischen Bodenleger und Parkettleger?</h3>
              <p>
                Ein Bodenleger verlegt elastische und textile Bodenbeläge wie Vinyl, PVC, Linoleum, Teppich und
                Kork. Ein Parkettleger ist auf Holzböden spezialisiert (Parkett, Dielen, Holzpflaster). Beide
                Berufe erfordern eine separate Ausbildung, wobei der Parkettleger-Beruf oft als anspruchsvoller
                gilt. Viele Betriebe suchen Fachkräfte, die beide Bereiche abdecken können.
              </p>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Kann ich als Fußbodenleger selbstständig werden?</h3>
              <p>
                Ja, die Selbstständigkeit ist ein beliebter Karriereweg. Das Bodenleger-Handwerk gehört zu den
                zulassungsfreien Handwerken (Anlage B der Handwerksordnung), sodass kein Meisterbrief zwingend
                erforderlich ist. Für den Parkettleger-Beruf ist hingegen ein Meisterbrief oder eine
                Ausübungsberechtigung nötig. Selbstständige Bodenleger können Stundensätze von 35 bis 55 Euro
                erzielen.
              </p>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Wie lange dauert die Ausbildung zum Bodenleger?</h3>
              <p>
                Die Ausbildung zum Bodenleger/in dauert 3 Jahre und findet im dualen System statt (Betrieb und
                Berufsschule). Es gibt auch die Möglichkeit, bei guten Leistungen auf 2,5 Jahre zu verkürzen.
                Nach der Ausbildung können Weiterbildungen zum Meister, Techniker oder Betriebswirt im Handwerk
                absolviert werden.
              </p>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Welche Weiterbildungsmöglichkeiten gibt es?</h3>
              <p>
                Fußbodenleger können sich zum Parkettlegermeister, Estrichlegermeister oder zum geprüften
                Polier weiterbilden. Auch Spezialisierungen auf Industrieböden, Sportböden oder
                Designbeläge sind gefragt. Ein Studium im Bereich Bauingenieurwesen oder Innenarchitektur
                ist mit entsprechender Qualifikation ebenfalls möglich.
              </p>
            </div>
          </div>
        </div>

        {/* Geo-Targeting List - Extended */}
        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Fußbodenleger-Jobs in Ihrer Region finden</h3>
          <p className="mb-4 text-sm text-gray-600">
            Wir verbinden Arbeitgeber und Bodenleger in allen 16 Bundesländern und über 60 deutschen Städten.
            Finden Sie passende Fussbodenleger-Stellenangebote in Ihrer Nähe.
          </p>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span key={city} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-wood-500 hover:text-wood-600 cursor-pointer transition">
                Fußbodenleger Jobs {city}
              </span>
            ))}
          </div>
        </div>

        {/* Karriere-Ratgeber Section */}
        <div className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-craft-900 mb-6">Karriere-Ratgeber für Fußbodenleger</h2>

          <div className="space-y-6">
            <div className="bg-wood-50 p-5 md:p-6 rounded-xl border border-wood-100">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Bewerbungstipps für Fußbodenleger</h3>
              <p className="text-gray-600">
                Eine überzeugende Bewerbung als Fußbodenleger sollte Ihre praktischen Fähigkeiten in den
                Vordergrund stellen. Nennen Sie konkret, welche Bodenbeläge Sie verlegen können (Parkett,
                Vinyl, Teppich, Laminat, Linoleum). Referenzprojekte mit Fotos sind ein großes Plus.
                Betonen Sie Ihre Zuverlässigkeit, Ihren Führerschein und Ihre Bereitschaft zur Montage.
                Auch Zusatzqualifikationen wie ein Gabelstaplerschein oder Asbestschein erhöhen Ihre Chancen.
              </p>
            </div>

            <div className="bg-wood-50 p-5 md:p-6 rounded-xl border border-wood-100">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Gehaltsverhandlung im Handwerk</h3>
              <p className="text-gray-600">
                Der Fachkräftemangel im Bodenleger-Handwerk stärkt Ihre Verhandlungsposition. Informieren
                Sie sich vor dem Gespräch über aktuelle Tariflöhne in Ihrer Region. Argumentieren Sie mit
                Ihrer Erfahrung, Spezialisierung und Flexibilität. Neben dem Grundgehalt können Sie auch
                über Zusatzleistungen verhandeln: Firmenwagen, Werkzeugzulage, Weiterbildungsbudget oder
                Überstundenzuschläge sind in der Branche üblich.
              </p>
            </div>

            <div className="bg-wood-50 p-5 md:p-6 rounded-xl border border-wood-100">
              <h3 className="font-bold text-lg text-craft-800 mb-2">Trends im Bodenbelag 2025/2026</h3>
              <p className="text-gray-600">
                Nachhaltigkeit ist der Megatrend: Ökologische Bodenbeläge aus Kork, Linoleum und
                recyceltem Vinyl sind stark gefragt. Großformatige Fliesen und Designvinyl in Holzoptik
                dominieren den Wohnbereich. Im Gewerbebereich setzen sich fugenlose Beschichtungen und
                Industrieböden mit hoher Belastbarkeit durch. Fußbodenleger, die sich in diesen
                Zukunftsfeldern weiterbilden, sichern sich die besten Karrierechancen.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
