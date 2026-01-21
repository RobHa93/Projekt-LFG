import React from 'react';
import { Link } from 'react-router-dom';
import kastenwagenData from '../data/Kastenwagen.json';
import personenbusData from '../data/Personenbus.json';
import Mietbedingungen from '../components/Mietbedingungen.jsx';

const Mietwagen = () => {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <p className="md:text-3xl font-semibold text-[#fdc700]">
            Schnell und unkompliziert
          </p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
            Mietwagen
          </h1>
          
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Text */}
            <div className="lg:col-span-2">
              <p className="text-xl/8 text-balance text-gray-700">
                Ob für die Vermietung, einen Umzug oder den Möbeltransport: Hier finden Sie das passende Mietauto. In unserem Personentransport reisen Sie bequem zwischen neun und vierzehn Personen. Für Transporte jeder Art bieten wir Ihnen das Mietfahrzeug ganz einfach online an reservieren Sie das Mietfahrzeug aus und reservieren es.
              </p>
            </div>
            
            {/* Contact Info Box */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Mara Keller</h3>
              <p className="text-gray-700 text-sm mb-1">Ihr Ansprechpartner Mietwagen</p>
              <p className="text-gray-900 font-medium">+41 62 871 17 16</p>
              <a href="mailto:info@langenfeld.ch" className="text-[#fdc700] hover:underline">
                info@langenfeld.ch
              </a>
            </div>
          </div>
        </div>

        {/* Kastenwagen Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Kastenwagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kastenwagenData.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Price Tag */}
                <div className="bg-[#fdc700] text-gray-900 font-bold px-4 py-2 text-sm">
                  Ab {vehicle.preisProStunde} CHF pro Stunde
                </div>
                
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.bild}
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    {vehicle.art}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {vehicle.text}
                  </p>
                  
                  <Link
                    to={`/mietwagen/${vehicle.id}?type=kastenwagen`}
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Mieten
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personenbus Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Personenbus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personenbusData.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Price Tag */}
                <div className="bg-[#fdc700] text-gray-900 font-bold px-4 py-2 text-sm">
                  Ab {vehicle.preisProHalbtag} CHF pro 1/2 Tag
                </div>
                
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.bild}
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1 font-medium">
                    {vehicle.art}
                  </p>
                  <p className="text-sm text-[#fdc700] font-bold mb-3">
                    {vehicle.anzahlPlaetze} Plätze
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {vehicle.text}
                  </p>
                  
                  <Link
                    to={`/mietwagen/${vehicle.id}?type=personenbus`}
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Mieten
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
                {/* Rental Conditions */}
        <Mietbedingungen />
      </div>
    </div>
  );
};

export default Mietwagen;