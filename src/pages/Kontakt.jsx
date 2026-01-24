import React from 'react';
import garageImage from '../assets/img/lfg_frontImg.jpg';

const Contact = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Header mit Bild */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  mb-20">
          <div>
            <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">Kontakt & Öffnungszeiten</p>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
              Besuchen Sie uns
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              Wir sind gerne für Sie da. Besuchen Sie uns zu unseren Öffnungszeiten oder kontaktieren Sie uns telefonisch oder per E-Mail.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={garageImage} 
              alt="Langenfeld Garage" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Öffnungszeiten */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Öffnungszeiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Verkauf */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Verkauf</h3>
              <div className="space-y-2 text-gray-700 text-lg">
                <p><span className="font-medium">Montag – Freitag:</span><br/>08:00 – 12:00 Uhr, 13:00 – 18:00 Uhr</p>
                <p><span className="font-medium">Samstag:</span><br/>08:00 – 12:00 Uhr</p>
              </div>
            </div>
            {/* Kundendienst und Werkstatt */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Kundendienst & Werkstatt</h3>
              <div className="space-y-2 text-gray-700 text-lg">
                <p><span className="font-medium">Montag – Donnerstag:</span><br/>07:30 – 12:00 Uhr, 13:00 – 17:30 Uhr</p>
                <p><span className="font-medium">Freitag:</span><br/>07:30 – 12:00 Uhr, 13:00 – 17:00 Uhr</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt & Assistance */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Kontakt & Assistance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kontakt */}
            <div className="bg-black rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-[#fdc700]">Kontakt</h3>
              <div className="text-white space-y-2 text-lg">
                <p><a href="tel:0628711716" className="hover:text-[#fdc700] transition-colors">062 871 17 16</a></p>
                <p className="text-gray-400">Fax: 062 871 58 16</p>
                <p><a href="mailto:info@langenfeld.ch" className="hover:text-[#fdc700] transition-colors underline">info@langenfeld.ch</a></p>
              </div>
            </div>
            {/* Renault Assistance */}
            <div className="bg-black rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-[#fdc700]">Renault Assistance</h3>
              <div className="text-white space-y-2 text-lg">
                <p className="font-semibold text-xl"><a href="tel:0448341200" className="hover:text-[#fdc700] transition-colors">044 834 12 00</a></p>
                <p className="text-gray-300">Rund um die Uhr Unterstützung für Ihren Renault</p>
              </div>
            </div>
            {/* Dacia Assistance */}
            <div className="bg-black rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-[#fdc700]">Dacia Assistance</h3>
              <div className="text-white space-y-2 text-lg">
                <p className="font-semibold text-xl"><a href="tel:0447770375" className="hover:text-[#fdc700] transition-colors">044 777 03 75</a></p>
                <p className="text-gray-300">Hilfe und Support für alle Dacia Modelle</p>
              </div>
            </div>
          </div>
        </section>


        {/* Standortkarte */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Unser Standort</h2>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg overflow-hidden">
            <div className="mb-4 text-center">
              <p className="text-xl font-semibold text-gray-900">Langenfeld Garage AG</p>
              <p className="text-gray-600">Hauptstrasse 142, 5072 Oeschgen</p>
            </div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.015011262733!2d7.978720015760567!3d47.52511697915761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906f7993db48f5%3A0x9bb6b1c8b1c2a8cb!2sLangenfeld%20Garage%20AG!5e0!3m2!1sde!2sch!4v1697263212345!5m2!1sde!2sch"
              width="100%"
              height="300"
              className="rounded-xl"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;