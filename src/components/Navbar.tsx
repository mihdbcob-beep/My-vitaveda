import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Calendar, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { 
      name: 'Services', 
      href: '/#services',
      dropdown: [
        { name: '1-on-1 Consultation', href: '/#services' },
        { name: 'Custom Diet Plans', href: '/#services' },
        { name: 'Ayurvedic Wellness', href: '/#services' }
      ]
    },
    { 
      name: 'Shop', 
      href: '/#shop',
      dropdown: [
        { name: 'Supplements', href: '/#shop' },
        { name: 'E-Books', href: '/#shop' },
        { name: 'Apothecary', href: '/#shop' }
      ]
    },
    { 
      name: 'Blog', 
      href: '/#blog',
      dropdown: [
        { name: 'Nutrition', href: '/#blog' },
        { name: 'Fitness', href: '/#blog' },
        { name: 'Lifestyle', href: '/#blog' }
      ]
    },
    { name: 'Contact', href: '/contact', isRoute: true },
    { name: 'Feedback', href: '/#feedback' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-center h-24">
          {/* Logo & Slogan */}
          <Link to="/" className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary-600" />
              <span className="font-serif text-2xl font-bold text-primary-900 leading-none">VitaVeda Wellness</span>
            </div>
            <span className="text-primary-600 text-[10px] sm:text-xs font-medium tracking-widest uppercase mt-1 ml-10">Nutrition, Naturally</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.isRoute || link.href === '/' ? (
                  <Link 
                    to={link.href}
                    className="text-gray-600 hover:text-primary-600 font-medium transition-colors flex items-center gap-1 py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 font-medium transition-colors flex items-center gap-1 py-2"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                )}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                    <div className="py-2">
                      {link.dropdown.map(item => (
                        <a key={item.name} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <button className="bg-primary-600 hover:bg-primary-900 text-white px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
              <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-5 py-2.5 rounded-full font-medium transition-all text-sm">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-primary-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.isRoute || link.href === '/' ? (
                  <Link
                    to={link.href}
                    onClick={toggleMenu}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md flex justify-between items-center"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={!link.dropdown ? toggleMenu : undefined}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md flex justify-between items-center"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                )}
                {link.dropdown && (
                  <div className="pl-4 pb-2 space-y-1">
                    {link.dropdown.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={toggleMenu}
                        className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-3 py-4 space-y-3 border-t border-gray-100 mt-2">
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
              <button className="w-full bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-medium flex items-center justify-center">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
