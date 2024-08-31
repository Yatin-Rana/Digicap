// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#fffefc] p-4 ">
      <div className="container mx-auto flex justify-between items-center text-xl">
        <div className="text-black text-xl font-bold">
          <Link href="/">Digicap</Link>
        </div>
        <div className="flex space-x-8">
          <Link href="/" className="text-black hover:text-[#yourColor] transform hover:scale-110 transition-transform duration-200">Home</Link>
          <Link href="/about" className="text-black hover:text-[#yourColor] transform hover:scale-110 transition-transform duration-200">About</Link>
          <Link href="/contact" className="text-black hover:text-[#yourColor] transform hover:scale-110 transition-transform duration-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
