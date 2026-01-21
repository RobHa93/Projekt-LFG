import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import kastenwagenData from '../data/Kastenwagen.json';
import personenbusData from '../data/Personenbus.json';
import RentalForm from '../components/RentalForm';
import Mietbedingungen from '../components/Mietbedingungen';

const Reservation = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  
  const vehicleData = type === 'kastenwagen' ? kastenwagenData : personenbusData;
  const vehicle = vehicleData.find(v => v.id === parseInt(id));
  
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('07:00');
  const [selectedDistance, setSelectedDistance] = useState('50');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  if (!vehicle) {
    return <div className="py-20 text-center">Fahrzeug nicht gefunden</div>;
  }

  const getPrice = () => {
    if (selectedDistance === '500+') {
      return 'individuell';
    }
    return `${vehicle.preisliste[selectedDistance]} CHF`;
  };

  // Simple calendar generation
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDateSelect = (day) => {
    const selected = `${day}.${month + 1}.${year}`;
    setSelectedDate(selected);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#fdc700] mb-2">Reservation</h2>
          <h1 className="text-4xl font-bold text-gray-900">{vehicle.name}</h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calendar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Geben Sie den ersten Tag der Miete an *
            </h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handlePrevMonth}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  &#8592;
                </button>
                <span className="font-semibold">
                  {monthNames[month]} {year}
                </span>
                <button
                  onClick={handleNextMonth}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  &#8594;
                </button>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {dayNames.map(day => (
                  <div key={day} className="font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
                
                {/* Empty cells for days before month starts */}
                {[...Array(startingDayOfWeek)].map((_, i) => (
                  <div key={`empty-${i}`} className="py-2"></div>
                ))}
                
                {/* Days of the month */}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === `${day}.${month + 1}.${year}`;
                  
                  return (
                    <button
                      key={day}
                      onClick={() => handleDateSelect(day)}
                      className={`py-2 rounded hover:bg-[#fdc700] hover:text-gray-900 transition-colors ${
                        isSelected ? 'bg-[#fdc700] text-gray-900 font-bold' : 'bg-gray-100'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Gewähltes Datum:</span> {selectedDate}
                </p>
              </div>
            )}
          </div>

          {/* Distance Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Zeitpunkt zum Abholen
            </h3>
            
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent mb-6"
            >
              <option value="06:00">06:00</option>
              <option value="06:30">06:30</option>
              <option value="07:00">07:00</option>
              <option value="07:30">07:30</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
            </select>

            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Anzahl der im Preis integrierten Kilometer oder die Distanz *
            </h3>
            
            <select
              value={selectedDistance}
              onChange={(e) => setSelectedDistance(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc700] focus:border-transparent"
            >
              <option value="50">50 km</option>
              <option value="100">100 km</option>
              <option value="150">150 km</option>
              <option value="200">200 km</option>
              <option value="300">300 km</option>
              <option value="400">400 km</option>
              <option value="500+">500+ km</option>
            </select>

            {selectedDistance === '500+' && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-gray-700">
                  Bei Fahrten über 500km wird der Preis individuell abgesprochen. Bitte kontaktieren Sie uns.
                </p>
              </div>
            )}
          </div>

          {/* Vehicle Info Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={vehicle.bild}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {vehicle.name}
              </h3>
              {vehicle.anzahlPlaetze && (
                <p className="text-[#fdc700] font-bold mb-2">
                  {vehicle.anzahlPlaetze} Plätze
                </p>
              )}
              <p className="text-gray-700 text-sm mb-4">{vehicle.text}</p>
              
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900 mb-3">Miete</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Distanz:</span>
                  <span className="font-semibold">{selectedDistance} km</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-[#fdc700]">
                      {getPrice()}
                    </span>
                  </div>
                  {selectedDistance !== '500+' && (
                    <p className="text-xs text-gray-500 mt-1">inkl. MwSt.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {vehicle.bilder && vehicle.bilder.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fahrzeugbilder</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {vehicle.bilder.map((img, index) => (
                <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-md">
                  <img
                    src={img}
                    alt={`${vehicle.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rental Form */}
        <RentalForm selectedDate={selectedDate} selectedTime={selectedTime} selectedVehicle={vehicle} />

        {/* Rental Conditions */}
        <Mietbedingungen />
      </div>
    </div>
  );
};

export default Reservation;
