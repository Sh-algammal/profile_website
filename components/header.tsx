"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800">
            Skills
          </a>
          <a href="#experience" className="text-gray-600 hover:text-gray-800">
            Experience
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-2">
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#experience" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header

