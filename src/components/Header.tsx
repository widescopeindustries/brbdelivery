'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Service Area', href: '#service-area' },
  { name: 'About Elise', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Heart
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-[#8B2635]' : 'text-[#8B2635]'
              }`}
              fill="currentColor"
            />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-[#2D2D2D]' : 'text-[#2D2D2D]'
              }`}
            >
              BRB Delivery
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-[#8B2635] ${
                  isScrolled ? 'text-[#2D2D2D]' : 'text-[#2D2D2D]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:469-506-6606"
              className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#6d1e2a] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#FDF2F2] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2D2D2D]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2D2D2D]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#D4A5A5]/20"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-[#2D2D2D] hover:text-[#8B2635] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:469-506-6606"
                className="flex items-center justify-center gap-2 bg-[#8B2635] text-white px-6 py-3 rounded-full font-semibold mt-4"
              >
                <Phone className="w-5 h-5" />
                469-506-6606
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
