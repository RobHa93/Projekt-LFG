import React from 'react'

const Fahrzeuge = () => {
  return (
   <section className="bg-gray-50 py-24 sm:py-32 min-h-[calc(100vh-400px)]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">Unser Angebot</p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl mb-12">Neuwagen/Occasionen</h1>
          <h2 className='mt-6 text-xl/8 text-gray-700'>UPS. . . Da kommt noch was. <br /> In der Zwischenzeit besuchen Sie unsere Autoscout24 Seite: <a href="https://www.autoscout24.ch/de/s/seller-64300" target="_blank" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Autoscout24 - Langenfeld Garage AG</a>
          </h2>
        </div>
      </div>
   </section>
  )
}

export default Fahrzeuge