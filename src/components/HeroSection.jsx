import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDaysIcon, ChatBubbleLeftRightIcon, TruckIcon } from '@heroicons/react/24/outline';
import heroVideo from "../assets/mp4/LFG_Banner.mp4"
import heroImage from "../assets/img/lfg_frontImg.jpg"

const HeroSection = () => {
  const cards = [
    {
      icon: CalendarDaysIcon,
      title: "Servicetermin buchen",
      description: "Vereinbaren Sie schnell und einfach einen Termin. ",
      button: "Service Buchen",
      link: "https://langenfeld.sopl.ch/de/",
      external: true,
      color: "bg-white",
      btnColor: "bg-[#000000] text-white hover:bg-[#e6b300]",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Probefahrt vereinbaren", 
      description: "Testen Sie Ihr Traumauto bei einer unverbindlichen Probefahrt.",
      button: "Probefahrt",
      link: "/probefahrt",
      color: "bg-white",
      btnColor: "bg-[#000000] text-white hover:bg-[#e6b300]",
    },
    {
      icon: TruckIcon,
      title: "Mietwagen reservieren",
      description: "Mieten Sie ein Fahrzeug für Ihren Umzug, Transport oder Ihre Reise.",
      button: "Mietwagen",
      link: "/mietwagen",
      color: "bg-white",
      btnColor: "bg-[#000000] text-white hover:bg-[#e6b300]",
    }
  ];

  return (
    <section id="home" className="relative bg-gray-50">
      {/* --- Banner mit Video (Desktop) und Bild (Mobile) --- */}
      <div className="relative h-[700px] w-full bg-gray-50 overflow-hidden">
        {/* Video für Desktop */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        />
        {/* Bild für Mobile */}
        <img
          src={heroImage}
          alt="Autocenter LFG"
          className="block md:hidden w-full h-full object-cover"
        />
        {/* leichte Abdunklung */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* --- Überlappende Boxen --- */}
      <div className="relative -mt-50 z-10 max-w-6xl mx-auto px-4 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                 
                {box.external ? (
                  <a
                    href={box.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#000000] text-white px-8 py-4 rounded-lg hover:bg-[#e6b300] transition-colors font-semibold text-lg"
                  >
                    {box.button}
                  </a>
                ) : (
                  <Link
                    to={box.link}
                    className="inline-block bg-[#000000] text-white px-8 py-4 rounded-lg hover:bg-[#e6b300] transition-colors font-semibold text-lg"
                  >
                    {box.button}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;