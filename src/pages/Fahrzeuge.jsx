import React, { useEffect, useState } from 'react'

const Fahrzeuge = () => {
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    // Prüfe ob wir NICHT auf der erlaubten Domain sind
    const hostname = window.location.hostname;
    const isAllowedDomain = hostname === 'langenfeld.ch' || hostname === 'www.langenfeld.ch';
    setIsLocalhost(!isAllowedDomain);

    // Lade das AutoScout24 Script dynamisch
    const script = document.createElement('script');
    script.src = 'https://www.autoscout24.ch/assets/hci/v2/hci.current.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Entferne das Script beim Unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
   <section className="bg-gray-50 py-24 sm:py-32 min-h-[calc(100vh-400px)]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl mb-8">
          <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">Unser Angebot</p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl mb-12">Neuwagen/Occasionen</h1>
        </div>
        
        {/* Warnung für nicht-erlaubte Domains */}
        {isLocalhost && (
          <div className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              UPS... Da ist etwas schief gelaufen
            </h3>
            <p className="text-yellow-700 mb-4">
              Das AutoScout24 Widget kann nur auf der Live-Domain angezeigt werden.
            </p>
            <p className="text-yellow-700">
              In der Zwischenzeit besuchen Sie unsere AutoScout24 Seite:{' '}
              <a 
                href="https://www.autoscout24.ch/de/s/seller-64300" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800 font-semibold"
              >
                AutoScout24 - Langenfeld Garage AG
              </a>
            </p>
          </div>
        )}
        
        {/* AutoScout24 Widget */}
        <div className="hci-container" data-config-id="13244" data-language="de" data-entry-point="search"></div>
      </div>
   </section>
  )
}

export default Fahrzeuge