import React from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Digicap - Digital Marketing Agency</title>
                <meta name="description" content="Welcome to Digicap, your partner in digital marketing." />
            </Head>

            <header className="bg-white shadow">
                <nav className="container mx-auto flex justify-between items-center p-6">
                    <div className="text-2xl font-bold text-blue-600">Digicap</div>
                    <div className="space-x-6">
                        <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                    </div>
                </nav>
            </header>

            <main className="bg-gray-50">
                <section id="hero" className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
                    <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                        <h1 className="text-5xl font-bold text-white mb-4">Elevate Your Brand with Cutting-Edge Digital Marketing</h1>
                        <p className="text-xl text-white mb-6">Transforming Your Online Presence into a Powerful Business Asset</p>
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>
                    </div>
                </section>

                <section className="py-10">
                    <div className="container mx-auto text-center">
                        <p className="text-gray-700 text-lg mb-4">Digital marketing is essential for businesses to connect with their audience and drive growth. At Digicap, we specialize in crafting personalized strategies that deliver results.</p>
                        <div className="flex justify-center space-x-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-blue-600">2.8x</h3>
                                <p className="text-gray-600">Revenue Growth</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-blue-600">3x</h3>
                                <p className="text-gray-600">More Engagement</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
                        <div className="flex flex-wrap justify-center space-x-8">
                            <div className="w-1/3 p-4">
                                <h3 className="text-2xl font-semibold text-blue-600">SEO</h3>
                                <p className="text-gray-600">Optimize your website to rank higher on search engines.</p>
                            </div>
                            <div className="w-1/3 p-4">
                                <h3 className="text-2xl font-semibold text-blue-600">Social Media Marketing</h3>
                                <p className="text-gray-600">Engage your audience on social media platforms.</p>
                            </div>
                            <div className="w-1/3 p-4">
                                <h3 className="text-2xl font-semibold text-blue-600">Content Marketing</h3>
                                <p className="text-gray-600">Create valuable content to attract and retain customers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="py-20 bg-blue-50">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">At Digicap, we are passionate about helping brands succeed in the digital landscape. Our team of experts leverages innovative strategies tailored to meet each client’s unique needs.</p>
                    </div>
                </section>

                <section id="contact" className="py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
                        <form className="max-w-lg mx-auto space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2024 Digicap. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
