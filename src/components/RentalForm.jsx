import React, { useState } from 'react';

const RentalForm = ({ selectedDate, selectedVehicle }) => {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    strasse: '',
    plz: '',
    telefon: '',
    email: '',
    kontaktVia: 'email',
    hinweis: '',
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
      alert('Bitte akzeptieren Sie die Mietbedingungen.');
      return;
    }
    console.log('Formular gesendet:', { ...formData, datum: selectedDate, fahrzeug: selectedVehicle });
    alert('Ihre Anfrage wurde erfolgreich gesendet!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
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

        {/* Address Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="strasse" className="block text-sm font-medium text-gray-700 mb-2">
              Strasse / Nr. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="strasse"
              name="strasse"
              required
              value={formData.strasse}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="plz" className="block text-sm font-medium text-gray-700 mb-2">
              PLZ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="plz"
              name="plz"
              required
              value={formData.plz}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
            />
          </div>
        </div>

        {/* Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-Mail <span className="text-red-500">*</span>
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
        </div>

        {/* Contact Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Kontakt gewünscht via <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="kontaktVia"
                value="telefon"
                checked={formData.kontaktVia === 'telefon'}
                onChange={handleChange}
                className="w-4 h-4 text-[#fdc700] focus:ring-[#fdc700]"
              />
              <span className="ml-2 text-gray-700">Telefon</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="kontaktVia"
                value="email"
                checked={formData.kontaktVia === 'email'}
                onChange={handleChange}
                className="w-4 h-4 text-[#fdc700] focus:ring-[#fdc700]"
              />
              <span className="ml-2 text-gray-700">E-Mail</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="hinweis" className="block text-sm font-medium text-gray-700 mb-2">
            Hinweis / Nachricht
          </label>
          <textarea
            id="hinweis"
            name="hinweis"
            rows="4"
            value={formData.hinweis}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
            placeholder="Weitere Informationen oder Wünsche..."
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="bedingungen"
            name="bedingungen"
            checked={formData.bedingungen}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#fdc700] focus:ring-[#fdc700] rounded"
            required
          />
          <label htmlFor="bedingungen" className="ml-3 text-sm text-gray-700">
            Ich habe die <a href="#mietbedingungen" className="text-[#fdc700] hover:underline font-medium">Mietbedingungen</a> gelesen und akzeptiere diese. <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#fdc700] text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6b300] transition-colors shadow-lg"
          >
            Anfrage absenden
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalForm;
