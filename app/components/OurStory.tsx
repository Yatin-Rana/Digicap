export default function OurStory() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden transform -translate-y-6">
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2 sm:mb-4">Meet Digicap</h2>
          <h3 className="text-lg sm:text-xl font-medium text-center text-gray-600 mb-8 sm:mb-12">Where Innovation Meets Impact</h3>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Founded in June 2024 by Yatin Rana and Akhil Kapoor, Digicap was born out of a shared passion for empowering businesses in the digital landscape. Yatin, a full-stack developer, and Akhil, a BBA graduate specializing in digital marketing, recognized a significant gap in the market: many brands struggled to establish a strong digital presence.
            </p>
            
            <p>
              At Digicap, our mission is to make businesses visible in the vast world of the internet. We combine innovative strategies with a results-driven approach to help our clients thrive online.
            </p>
            
            <p>
              As a brand-new agency, we are committed to leveraging our unique skills and insights to create impactful digital solutions that drive growth and success for our clients.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 flex justify-center">
            <a href="/contact" className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
