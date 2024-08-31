// components/Footer.js

import React from 'react';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us Section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">Digicap</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We are dedicated to providing outstanding digital marketing solutions that drive results and help brands grow in the ever-evolving digital landscape.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-white transition duration-300">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Follow Us Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-blue-400">Get in Touch</h2>
                        <p className="text-gray-300 mb-2">Email: digicapmedia@gmail.com</p>
                        <p className="text-gray-300 mb-4">
                            Phone:
                            <a href="tel:+917559781539">+91 7559781539</a>,
                            <a href="tel:+917807763447">+91 7807763447</a>
                        </p>

                        <h3 className="text-lg font-semibold mb-2 text-blue-400">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                <i className="ri-facebook-fill text-2xl"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                <i className="ri-twitter-fill text-2xl"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                <i className="ri-instagram-fill text-2xl"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                <i className="ri-linkedin-fill text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Digicap. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
