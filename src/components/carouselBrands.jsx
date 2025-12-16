// components/BrandCardsCarousel.jsx
import { useState } from "react";
import daciaImg from "../assets/img/dacia1.png";
import renaultImg from "../assets/img/renault1.png";
import alpineImg from "../assets/img/alpine1.png";
import mobilizeImg from "../assets/img/mobilize.png";

const brands = [
  { name: "Dacia", image: daciaImg },
  { name: "Renault", image: renaultImg },
  { name: "Alpine", image: alpineImg },
  { name: "Mobilize", image: mobilizeImg },
];

export default function BrandCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = brands.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % totalCards);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);

  // Drei sichtbare Cards berechnen
  const visibleCards = [
    brands[currentIndex],
    brands[(currentIndex + 1) % totalCards],
    brands[(currentIndex + 2) % totalCards],
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto py-12">
      
      {/* Überschrift */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Brands</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Entdecken Sie unsere Markenvielfalt – von robusten Alltagshelden bis zu sportlichen Legenden.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex overflow-hidden">
        {visibleCards.map((brand, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 px-6">
            <div
              className="rounded-2xl shadow-xl h-96 flex flex-col justify-end p-8 pb-16 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${brand.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay für besseren Kontrast */}
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

              {/* Text im unteren Drittel */}
              <div className="relative z-10 flex flex-col items-center text-center text-white">
                <h3 className="font-bold text-3xl">{brand.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-2 top-[calc(50%+16px)] bg-[#fdc700] hover:bg-yellow-300 rounded-full p-4 shadow-xl transition-all duration-200 hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-[calc(50%+16px)] bg-[#fdc700] hover:bg-yellow-300 rounded-full p-4 shadow-xl transition-all duration-200 hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}