import { useState } from "react";
import bigsterImg from "../assets/img/apline.png";
import serviceImg from "../assets/img/slider_test3.webp";
import r5Img from "../assets/img/slider_test2.webp";
import dusterImg from "../assets/img/slider_test1.webp";

const newsItems = [
  {
    title: "Der brandneue BIGSTER",
    date: "tbd",
    description: "Ab sofort bei uns bereit zur Probefahrt.",
    image: bigsterImg,
  },
  {
    title: "Serviceaktion im Oktober",
    date: "tbd",
    description: "Profitieren Sie von attraktiven Wartungsangeboten für alle Fahrzeugmarken.",
    image: serviceImg,
  },
  {
    title: "Renault 5 E-Tech, LECTRIC R5VOLUTION",
    date: "tbd",
    description: "Und alle anderen E-Tech Modelle",
    image: r5Img,
  },
  {
    title: "Der neue Dacia Duster",
    date: "tbd",
    description: "Mehr Duster als je zuvor",
    image: dusterImg,
  },
];

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalNews = newsItems.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % totalNews);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + totalNews) % totalNews);

  const visibleNews = [
    newsItems[currentIndex],
    newsItems[(currentIndex + 1) % totalNews],
    newsItems[(currentIndex + 2) % totalNews],
  ];

  return (
    <section className="relative py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 my-12 text-center">Aktuelles</h2>

        <div className="relative flex justify-center items-center">
          {/* Linker Pfeil */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 bg-[#fdc700] hover:bg-yellow-300 rounded-full p-3 md:p-4 shadow-xl transition-all duration-200 hover:scale-110 z-30 left-2 md:left-[calc(50%-350px)]"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex justify-center items-center -space-x-4 md:-space-x-8">
            {visibleNews.map((item, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 transition-all duration-500 ${
                  index === 1 
                    ? "w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] z-20 scale-100" 
                    : "w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] z-10 opacity-60 hidden sm:block"
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 md:p-6 flex flex-col justify-end text-white">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-90">{item.date}</p>
                    <p className="text-xs sm:text-sm mb-2 sm:mb-4">{item.description}</p>
                    <button className="text-yellow-400 font-medium hover:underline self-start">
                      Mehr erfahren →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rechter Pfeil */}
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 bg-[#fdc700] hover:bg-yellow-300 rounded-full p-3 md:p-4 shadow-xl transition-all duration-200 hover:scale-110 z-30 right-2 md:right-[calc(50%-350px)]"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}