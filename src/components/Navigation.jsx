import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/lfg_black.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Mietwagen', path: '/mietwagen' },
    { name: 'Neuwagen/Occasionen', path: '/fahrzeuge' },
   /* { name: 'Service', path: '/service' },*/
    { name: 'Werkstatt', path: '/werkstatt' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Kontakt', path: '/kontakt' }
  ]

  return (
    <nav className="bg-black shadow-lg fixed w-full h-25 top-0 z-50">
      <div className="max-w-7xl mx-auto px-auto mt-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
      <a href="/" className="md:ml-0 ml-auto mr-auto">
    <img src={Logo} alt="AutoCenter LFG" className="h-12" />
  </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 lg:px-4 xl:px-6 mr-5 py-2 text-base lg:text-lg font-medium transition-colors whitespace-nowrap
                  ${isActive ? 'text-[#FFD131]' : 'text-white hover:text-[#FFD131]'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons */}
        {/* CTA Buttons */}
<div className="hidden ml-2 md:flex space-x-2 lg:space-x-4">
  <a
    href="https://langenfeld.sopl.ch/de/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#ffd131] text-gray-900 px-3 lg:px-4 py-2 rounded-lg hover:bg-[#e6b300] transition-colors text-sm lg:text-base whitespace-nowrap"
  >
    Service Buchen
  </a>
 <NavLink
  to="/Probefahrt"
  className="bg-[#ffd131] text-gray-900 px-3 lg:px-4 py-2 rounded-lg hover:bg-[#e6b300] transition-colors text-sm lg:text-base whitespace-nowrap"
>
  Probefahrt
</NavLink>

</div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#ffd131]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-700">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium
                    ${isActive ? 'text-[#fdc700]' : 'text-white hover:text-[#fdc700]'}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

             <div className="space-y-2 mt-4">
  <a
    href="https://langenfeld.sopl.ch/de/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block text-center bg-[#fdc700] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#e6b300] transition-colors"
  >
    Service Buchen
  </a>
  <NavLink
  to="/Probefahrt"
  onClick={() => setIsOpen(false)}
  className="w-full block text-center bg-[#fdc700] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#e6b300] transition-colors"
>
  Probefahrt
</NavLink>

</div>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation