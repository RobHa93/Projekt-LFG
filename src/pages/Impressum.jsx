import React from 'react'

const Impressum = () => {
  return (
   <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">Rechtliches</p>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl mb-12">Impressum</h1>
        <div className="text-xl/8 text-gray-700">
          <p className="font-semibold">Langenfeld Garage AG</p>
          <p>Hauptstrasse 142</p>
          <p>5072 Oeschgen</p>
          <p className="mt-4">Tel: 062 871 17 16</p>
          <p>Fax: 062 871 58 16</p>
        </div>
      </div>
   </section>
  )
}

export default Impressum