import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16 m-3">
      <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 mt-5">Öffnungszeiten</h2>

        {/* 2-Spalten-Abschnitt: Öffnungszeiten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Spalte 1: Verkauf */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 mt-4">Verkauf</h3>
            <p className="mb-2 text-gray-700">Montag bis Freitag: 08:00 – 12:00 Uhr, 13:00 – 18:00 Uhr<br/>Samstag: 08:00 – 12:00 Uhr</p>
          </div>
          {/* Spalte 2: Kundendienst und Werkstatt */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 mt-4">Kundendienst und Werkstatt</h3>
            <p className="mb-2 text-gray-700">Montag bis Donnerstag: 07:30 – 12:00 Uhr, 13:00 – 17:30 Uhr<br/>Freitag: 07:30 – 12:00 Uhr, 13:00 – 17:00 Uhr</p>
          </div>
        </div>

        {/* Assistance & Kontakt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Renault Assistance */}
          <div className="bg-[#fdc700] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900"> Renault Assistance</h3>
            <p className="text-black">
              044 834 12 00 <br />
              Rund um die Uhr Unterstützung für Ihren Renault.
            </p>
          </div>
          {/* Dacia Assistance */}
          <div className="bg-[#fdc700] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900"> Dacia Assistance</h3>
            <p className="text-black">
              044 777 03 75 <br />
              Hilfe und Support für alle Dacia Modelle jederzeit verfügbar.
            </p>
          </div>
          {/* Kontakt */}
          <div className="bg-[#fdc700] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900"> Kontakt</h3>
            <p className="text-black">
              Tel: 062 871 17 16<br />
              Fax: 062 871 58 16<br />
              <a href="mailto:info@langenfeld.ch" className="underline hover:text-blue-700">info@langenfeld.ch</a>
            </p>
          </div>
        </div>


        {/* Box: Google Map */}
        <div className="grid grid-cols-1 gap-8">
          {/* Google Map */}
          <div className="bg-[#fdc700] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">📍 Standort</h3>
            <p className="text-black mb-4">Oeschgen-Frick</p>
            {/* Optional: Google Maps Embed */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.015011262733!2d7.978720015760567!3d47.52511697915761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906f7993db48f5%3A0x9bb6b1c8b1c2a8cb!2sLangenfeld%20Garage%20AG!5e0!3m2!1sde!2sch!4v1697263212345!5m2!1sde!2sch"
              width="100%"
              height="400"
              className="rounded"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;