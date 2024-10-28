// components/Navbar.js
'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#fffefc] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">
          <Link href="/">Digicap</Link>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/blogs">Blogs</NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <NavLink href="/" mobile>Home</NavLink>
          <NavLink href="/about" mobile>About</NavLink>
          <NavLink href="/contact" mobile>Contact</NavLink>
          <NavLink href="/blogs" mobile>Blogs</NavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, mobile }:any) {
  return (
    <Link href={href} className={`text-black hover:text-[#yourColor] transform hover:scale-110 transition-transform duration-200 ${mobile ? 'block py-2' : ''}`}>
      {children}
    </Link>
  );
}
