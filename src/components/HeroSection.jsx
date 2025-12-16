import React from 'react';
import { CalendarDaysIcon, TruckIcon } from '@heroicons/react/24/outline';
import heroImage from "../assets/img/0_22img-20210330-150119-resized-20210330-030405423-002_a4e8c306.jpg"

const HeroSection = () => {
  const cards = [
    {
      icon: CalendarDaysIcon,
      title: "Servicetermin buchen",
      description: "Vereinbaren Sie schnell und einfach einen Termin für die Wartung Ihres Fahrzeugs.",
      button: "Service Buchen",
      color: "bg-white",
      btnColor: "bg-[#fdc700] text-gray-900 hover:bg-[#e6b300]",
    },
    {
      icon: TruckIcon,
      title: "Probefahrt vereinbaren", 
      description: "Testen Sie Ihr Traumauto bei einer unverbindlichen Probefahrt.",
      button: "Probefahrt",
      color: "bg-white",
      btnColor: "bg-[#fdc700] text-gray-900 hover:bg-[#e6b300]",
    },
  ];

  return (
    <section id="home" className="relative bg-gray-50">
      {/* --- Bannerbild --- */}
      <div className="relative h-[700px] w-full bg-gray-50">
        <img
          src={heroImage}
          alt="Autocenter LFG"
          className="w-full h-full object-cover"
        />
        {/* leichte Abdunklung */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* --- Überlappende Boxen --- */}
      <div className="relative -mt-50 z-10 max-w-4xl mx-auto px-4 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((box, i) => {
            const IconComponent = box.icon;
            return (
              <div
                key={i}
                className={`${box.color} rounded-xl shadow-lg p-10 text-center`}
              >
                <div className="flex justify-center mb-6">
                  <IconComponent className="h-14 w-14 text-[#fdc700]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {box.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {box.description}
                </p>
                <button
                  className={`${box.btnColor} px-8 py-4 rounded-lg font-semibold text-lg transition-colors`}
                >
                  {box.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;