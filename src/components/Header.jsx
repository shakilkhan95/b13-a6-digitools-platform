import { ShoppingCart } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center py-6 w-11/12 lg:w-10/12 mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent"
        >
          DigiTools
        </a>

        {/* NavLinks  */}
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        {/* Navbar CTA  */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <ShoppingCart />
            <span className="absolute -top-3 -right-2 text-sm h-5 w-5 rounded-full text-center text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6] select-none">
              0
            </span>
          </div>

          <div className='gap-2'>
            <button className="text-sm font-semibold px-5 py-2 rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text hover:text-transparent transition-colors duration-200 cursor-pointer">
              Login
            </button>

            <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] hover:opacity-90 transition-colors duration-200 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header