"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
// import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Only render form elements after component has mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would make an API call
    alert(`Application recovery email sent to: ${email}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  // Get current year for copyright
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Fama Barber Shop & Beauty Salon | Premium Haircuts & Styling</title>
        <meta name="description" content="Premium barber and salon services in Denton, TX. Book your appointment today for a fresh new look!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight">FAMA BARBER</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-yellow-400 transition duration-300">Services</a>
              <a href="#gallery" className="hover:text-yellow-400 transition duration-300">Gallery</a>
              <a href="#testimonials" className="hover:text-yellow-400 transition duration-300">Testimonials</a>
              <a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
            </div>
            <div className="md:hidden">
              <button 
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-800 animate-fade-in-down">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#services" 
                  className="hover:text-yellow-400 transition duration-300 px-2 py-1"
                  onClick={handleMobileMenuClick}
                >
                  Services
                </a>
                <a 
                  href="#gallery" 
                  className="hover:text-yellow-400 transition duration-300 px-2 py-1"
                  onClick={handleMobileMenuClick}
                >
                  Gallery
                </a>
                <a 
                  href="#testimonials" 
                  className="hover:text-yellow-400 transition duration-300 px-2 py-1"
                  onClick={handleMobileMenuClick}
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  className="hover:text-yellow-400 transition duration-300 px-2 py-1"
                  onClick={handleMobileMenuClick}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Cuts & Styling</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Experience the art of grooming at Fama Barber Shop & Beauty Salon</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300">Book Now</a>
            <a href="#services" className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">Our Services</a>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <div className="font-bold">Rating</div>
              <div className="text-yellow-400 flex items-center justify-center md:justify-start">
                <span className="mr-1">4.6</span>
                <span>★★★★★</span>
                <span className="ml-1 text-sm text-gray-400">(116+ reviews)</span>
              </div>
            </div>
            <div className="mb-4 md:mb-0">
              <div className="font-bold">Hours</div>
              <div><span className="text-green-500">Open</span> · Closes 7 PM</div>
            </div>
            <div className="mb-4 md:mb-0">
              <div className="font-bold">Location</div>
              <div>500 N Bell Ave #109, Denton, TX</div>
            </div>
            <div>
              <a href="tel:+19406129127" className="flex items-center justify-center md:justify-start hover:text-yellow-400">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1 940-612-9127
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional grooming services for all your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Classic Haircut</h3>
              <p className="text-gray-600 text-center">Precision cut to enhance your natural style</p>
              <div className="mt-4 text-center text-xl font-bold">$25</div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Beard Trim</h3>
              <p className="text-gray-600 text-center">Shape and style your beard to perfection</p>
              <div className="mt-4 text-center text-xl font-bold">$15</div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Hair Coloring</h3>
              <p className="text-gray-600 text-center">Professional coloring to transform your look</p>
              <div className="mt-4 text-center text-xl font-bold">$45+</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">View All Services</a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See our latest styles and cuts</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-w-1 aspect-h-1 bg-gray-300 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-300 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-300 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-300 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">View More</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">What our customers say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
                <div className="ml-2 text-gray-600">5.0</div>
              </div>
              <p className="text-gray-600 mb-4">&ldquo;The best haircut I&lsquo;ve ever had! The barbers really take their time and make sure you leave looking your best.&ldquo;</p>
              <div className="font-semibold">- Michael T.</div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★☆</div>
                <div className="ml-2 text-gray-600">4.0</div>
              </div>
              <p className="text-gray-600 mb-4">&ldquo;Great atmosphere and skilled barbers. A bit on the pricey side but the quality is there. I&lsquo;m a regular customer.&ldquo;</p>
              <div className="font-semibold">- David R.</div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
                <div className="ml-2 text-gray-600">5.0</div>
              </div>
              <p className="text-gray-600 mb-4">&ldquo;The beard trim was perfect! Friendly staff and very professional service. Will definitely come back.&ldquo;</p>
              <div className="font-semibold">- James L.</div>
            </div>
          </div>
          
          <div className="mt-8 text-center italic text-gray-600">
            <p>&ldquo;Costly compared to other barbershops with better haircuts.&ldquo;</p>
            <p className="mt-2">Our overall rating: <span className="text-yellow-500 font-bold">4.6★</span> based on 116+ reviews</p>
          </div>
        </div>
      </section>

      {/* Contact Section - Only render form inputs client-side */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg max-w-2xl mx-auto">Book your appointment or visit us today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Our Shop</h3>
              <p className="mb-4">500 N Bell Ave #109<br />Denton, TX 76209<br />United States</p>
              
              <h4 className="text-xl font-semibold mt-6 mb-2">Hours</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>Monday - Friday</div>
                <div>9:00 AM - 7:00 PM</div>
                <div>Saturday</div>
                <div>8:00 AM - 5:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
              
              <h4 className="text-xl font-semibold mt-6 mb-2">Contact</h4>
              <p className="mb-2">
                <a href="tel:+19406129127" className="hover:text-yellow-400">
                  <span className="mr-2">📞</span> +1 940-612-9127
                </a>
              </p>
              <p>
                <a href="mailto:info@famabarber.com" className="hover:text-yellow-400">
                  <span className="mr-2">✉️</span> info@famabarber.com
                </a>
              </p>
              
              <div className="mt-8">
                <a
                  href="https://goo.gl/maps/X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
              {mounted ? (
                <form className="space-y-4">
                  <div>
                    <label className="block mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Service</label>
                    <select className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-500">
                      <option>Select a service</option>
                      <option>Haircut</option>
                      <option>Beard Trim</option>
                      <option>Hair Coloring</option>
                      <option>Shave</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1">Preferred Date & Time</label>
                    <input
                      type="datetime-local"
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Message (Optional)</label>
                    <textarea
                      className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
                      rows="3"
                      placeholder="Any special requests"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              ) : (
                // Simple loading state while client-side rendering kicks in
                <div className="space-y-4 animate-pulse">
                  <div className="h-10 bg-gray-800 rounded mb-4"></div>
                  <div className="h-10 bg-gray-800 rounded mb-4"></div>
                  <div className="h-10 bg-gray-800 rounded mb-4"></div>
                  <div className="h-10 bg-gray-800 rounded mb-4"></div>
                  <div className="h-24 bg-gray-800 rounded mb-4"></div>
                  <div className="h-10 bg-gray-800 rounded"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Recovery Section */}
      <section id="recover" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Recover Your Application</h2>
            <p className="mb-8">Please enter the email address you used during registration to retrieve your application.</p>
            
            {mounted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300 whitespace-nowrap"
                >
                  Retrieve
                </button>
              </form>
            ) : (
              // Simple loading state while client-side rendering kicks in
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 h-12 bg-gray-800 rounded"></div>
                <div className="h-12 w-24 bg-gray-800 rounded"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fama Barber Shop</h3>
              <p className="text-gray-400">Premium barber and salon services in Denton, TX.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>500 N Bell Ave #109</li>
                <li>Denton, TX 76209</li>
                <li>+1 940-612-9127</li>
                <li>info@famabarber.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 015 3s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {year} Fama Barber Shop & Beauty Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}