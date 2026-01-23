import React, { useState, useEffect } from 'react'
import Img1 from '../assets/img/Werkstatt1.jpg'
import Img2 from '../assets/img/Werkstatt5.jpg'
import Img3 from '../assets/img/Werkstatt3.jpg'
import Img4 from '../assets/img/Werkstatt4.jpg' 


const Werkstatt = () => {
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImagesVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="md:text-3xl font-semibold text-[#fdc700]">Leistungen rund ums Auto</p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
            Die Werkstatt
          </h1>
          <p className="mt-6 text-base/7 text-gray-600">
            Seit 1995 folgen wir den strengen Vorgaben unseres Qualitätsmanagements und garantieren unseren Kunden dadurch besten Service. Unsere Mitarbeiter verfügen über eine grosse Expertise, unsere Werkstatt ist mit den modernsten Gerätschaften ausgestattet.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
              Service und Unterhalt
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Die Langenfeld Garage AG ist zertifizierter Servicepartner für die Marken Renault und Dacia. Natürlich haben wir auch viele zufriedene Kunden mit anderen Marken in unserem Kundenstamm.
            </p>
            <p className="mt-8 text-base/7 text-gray-600">
              Ob Wartung, Reparatur oder aktuelle Aktion: Bei uns dreht sich alles um Ihr Auto! Wir garantieren Ihnen beste Qualität und langjährige Kompetenz rund um das Thema Mobilität.
            </p>
            <p className="mt-8 text-base/7 text-gray-600">
              Unser qualifiziertes Service- und Wartungsteam ist bestens ausgebildet und wird laufend geschult. Es sorgt dafür, dass Ihr Fahrzeug seinen Top-Zustand und seine Qualitäten in Sachen Sicherheit beibehält. Auf hochwertige Ersatzteile und Zubehör haben wir raschen Zugriff, so dass Sie schnellstmöglich wieder über ihr Fahrzeug verfügen können.
            </p>

            {/* Werkstattleistungen */}
            <div className="mt-12">
              <h2 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
                Werkstattleistungen
              </h2>
              <ul className="mt-6 list-disc list-inside text-base/7 text-gray-600 space-y-2">
                <li>Service und Wartung aller Fahrzeugmarken</li>
                <li>Mobilitätslösungen / Ersatzwagen auf Wunsch</li>
                <li>Carrosserie & Unfallinstandsetzung</li>
                <li>Glas‑Service und Reparaturen</li>
                <li>Motorfahrzeugkontrolle (MFK) Vorbereitung</li>
              </ul>
            </div>

            {/* Ansprechpartner */}
            <div className="mt-12 bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#fdc700] mb-6">
                Ihre Ansprechpartner
              </h2>

              {/* Ansprechpartner 1 */}
              <div className="mb-6 border-l-2 border-black pl-4">
                <p className="font-semibold text-gray-800">Roland Heiz</p>
                <p className="text-gray-700">Leiter Aftersales</p>
                <p className="text-gray-700">+41 62 871 17 16</p>
                <a
                  href="mailto:rheiz@langenfeld.ch"
                  className=" hover:underline"
                >
                  rheiz@langenfeld.ch
                </a>
              </div>

              {/* Ansprechpartner 2 */}
              <div className="border-l-2 border-black pl-4">
                <p className="font-semibold text-gray-800">Liridon Pajaziti</p>
                <p className="text-gray-700">Kundendienst</p>
                <p className="text-gray-700">+41 62 871 17 16</p>
                <a
                  href="mailto:kundendienst@langenfeld.ch"
                  className=" hover:underline"
                >
                  kundendienst@langenfeld.ch
                </a>
              </div>
            </div>
          </div>

          {/* Rechte Spalte - Bildergalerie */}
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              <div className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 transition-all duration-700 ease-in ${
                imagesVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}>
                <img
                      alt="Werkstatt Bild 1"
                      src={Img1}
                  className="block size-full object-cover"
                />
              </div>
              <div className={`-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 transition-all duration-700 ease-in delay-150 ${
                imagesVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}>
                <img
                  alt="Werkstatt Bild 2"
                  src={Img2}
                  className="block size-full object-cover"
                />
              </div>
              <div className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 transition-all duration-700 ease-in delay-300 ${
                imagesVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}>
                <img
                  alt="Werkstatt Bild 3"
                  src={Img3}
                  className="block size-full object-cover"
                />
              </div>
              <div className={`-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 transition-all duration-700 ease-in delay-500 ${
                imagesVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}>
                <img
                  alt="Werkstatt Bild 4"
                  src={Img4}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Werkstatt