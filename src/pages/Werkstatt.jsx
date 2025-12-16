import React from 'react'

const Werkstatt = () => {
  return (
    <section className="bg-white py-16 m-3">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Titel */}
            <h2 className="text-2xl font-semibold text-[#fdc700] mt-4 mb-3">
                Leistungen rund ums Auto

              </h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Die Werkstatt
        </h1>

        {/* Einleitung */}
        <p className="text-gray-700 mb-8 leading-relaxed max-w-[500px]">
         Seit 1995 folgen wir den strengen Vorgaben unseres Qualitätsmanagements und garantieren unseren Kunden dadurch besten Service. Unsere Mitarbeiter verfügen über eine grosse Expertise, unsere Werkstatt ist mit den modernsten Gerätschaften ausgestattet.
        </p>

        {/* Zweispaltiger Bereich */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Linke Spalte – Leistungen */}
          <div className="space-y-6">

            {/* Service & Unterhalt */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Service und Unterhalt
              </h2>
              <p className="text-gray-700 leading-relaxed">
             Die Langenfeld Garage AG ist zertifizierter Servicepartner für die Marken Renault und Dacia. Natürlich haben wir auch viele zufriedene Kunden mit anderen Marken in unserem Kundenstamm.

            Ob Wartung, Reparatur oder aktuelle Aktion: Bei uns dreht sich alles um Ihr Auto! Wir garantieren Ihnen beste Qualität und langjährige Kompetenz rund um das Thema Mobilität.

            Unser qualifiziertes Service- und Wartungsteam ist bestens ausgebildet und wird laufend geschult. Es sorgt dafür, dass Ihr Fahrzeug seinen Top-Zustand und seine Qualitäten in Sachen Sicherheit beibehält. Auf hochwertige Ersatzteile und Zubehör haben wir raschen Zugriff, so dass Sie schnellstmöglich wieder über ihr Fahrzeug verfügen können.
              </p>
            </div>

            {/* Weitere Leistungen */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Werkstattleistungen
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Service und Wartung aller Fahrzeugmarken</li>
                <li>Mobilitätslösungen / Ersatzwagen auf Wunsch</li>
                <li>Carrosserie & Unfallinstandsetzung</li>
                <li>Glas‑Service und Reparaturen</li>
                <li>Motorfahrzeugkontrolle (MFK) Vorbereitung</li>
              </ul>
            </div>

          </div>

          {/* Rechte Spalte – Ansprechpartner */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#fdc700] mb-4">
              Ihre Ansprechpartner
            </h2>

            {/* Ansprechpartner 1 */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800">Roland Heiz</p>
              <p className="text-gray-700">Leiter Aftersales</p>
              <p className="text-gray-700">+41 62 871 17 16</p>
              <a
                href="mailto:rheiz@langenfeld.ch"
                className="text-sky-500 hover:underline"
              >
                rheiz@langenfeld.ch
              </a>
            </div>

            {/* Ansprechpartner 2 */}
            <div>
              <p className="font-semibold text-gray-800">Liridon Pajaziti</p>
              <p className="text-gray-700">Kundendienst</p>
              <p className="text-gray-700">+41 62 871 17 16</p>
              <a
                href="mailto:kundendienst@langenfeld.ch"
                className="text-sky-500 hover:underline"
              >
                kundendienst@langenfeld.ch
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Werkstatt