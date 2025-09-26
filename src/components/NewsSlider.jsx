import { useState } from "react";

const newsItems = [
  {
    title: "Der brandneue BIGSTER",
    date: "tbd",
    description: "Ab sofort bei uns bereit zur Probefahrt.",
    image: "/images/bigster.jpg",
  },
  {
    title: "Serviceaktion im Oktober",
    date: "tbd",
    description: "Profitieren Sie von attraktiven Wartungsangeboten für alle Fahrzeugmarken.",
    image: "/images/service.jpg",
  },
  {
    title: "Renault 5 E-Tech, LECTRIC R5VOLUTION",
    date: "tbd",
    description: "Und alle anderen E-Tech Modelle",
    image: "/images/r5.jpg",
  },
  {
    title: "Der neue Dacia Duster",
    date: "tbd",
    description: "Mehr Duster als je zuvor",
    image: "/images/duster.jpg",
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
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">News</h2>

        <div className="flex justify-center items-center relative">
          {visibleNews.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-2/5 md:w-1/3 px-2 transition-transform duration-500 ${
                index === 1 ? "scale-100 z-20" : "scale-90 opacity-70 z-10"
              }`}
              style={{
                marginLeft: index === 0 ? "-20%" : "0",
                marginRight: index === 2 ? "-20%" : "0",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                borderRadius: "1rem",
              }}
            >
              <div className="bg-black/30 h-full rounded-2xl p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm mb-4">{item.date}</p>
                <p className="text-sm">{item.description}</p>
                <button className="text-yellow-400 font-medium mt-4 hover:underline">
                  Mehr erfahren →
                </button>
              </div>
            </div>
          ))}

          {/* Pfeile */}
          <button
            onClick={prev}
            className="absolute left-1/2 -translate-x-full top-1/2 -translate-y-1/2 bg-[#fdc700] hover:bg-yellow-300 rounded-full p-3 shadow-lg z-30"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute left-1/2 translate-x-full top-1/2 -translate-y-1/2 bg-[#fdc700] hover:bg-yellow-300 rounded-full p-3 shadow-lg z-30"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
