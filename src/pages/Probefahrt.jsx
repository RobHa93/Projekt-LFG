import React, { useState } from 'react'

export default function Probefahrt() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    nachricht: '',
    kontaktVia: 'Telefon',
    bedingungen: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bedingungen) {
      alert('Bitte akzeptieren Sie die allgemeinen Geschäftsbedingungen.');
      return;
    }
    console.log('Formular gesendet:', formData);
    alert('Ihre Anfrage wurde erfolgreich gesendet!');
  };

  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">Probefahrt</p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
            Probefahrt vereinbaren
          </h1>
          <p className="mt-6 text-xl/8 text-gray-700">
            Der nächste Schritt zum Traumauto
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Persönliche Daten</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="vorname" className="block text-sm font-medium text-gray-700 mb-2">
                  Vorname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="vorname"
                  name="vorname"
                  required
                  value={formData.vorname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="nachname" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nachname"
                  name="nachname"
                  required
                  value={formData.nachname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
              />
            </div>

            {/* Telefon */}
            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                value={formData.telefon}
                onChange={handleChange}
                placeholder="+41 12 345 67 89"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
              />
            </div>

            {/* Nachricht */}
            <div>
              <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                Nachricht
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                rows={4}
                value={formData.nachricht}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
              />
            </div>

            {/* Kontakt via */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kontakt via <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="kontaktVia"
                    value="Telefon"
                    checked={formData.kontaktVia === 'Telefon'}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#fdc700] focus:ring-[#fdc700]"
                  />
                  <span className="text-sm text-gray-700">Telefon</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="kontaktVia"
                    value="E-Mail"
                    checked={formData.kontaktVia === 'E-Mail'}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#fdc700] focus:ring-[#fdc700]"
                  />
                  <span className="text-sm text-gray-700">E-Mail</span>
                </label>
              </div>
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#fdc700] hover:text-black transition-colors"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
