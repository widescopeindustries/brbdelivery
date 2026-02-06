'use client';

import { motion } from 'framer-motion';
import { Phone, Heart, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFBF7] via-[#FDF2F2] to-[#FFFBF7]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4A5A5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B2635]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#D4A5A5]/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4A5A5]/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Valentine's badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Heart className="w-4 h-4 heartbeat" fill="currentColor" />
            <span>Valentine&apos;s Week Special: Free delivery on orders over $75!</span>
            <Heart className="w-4 h-4 heartbeat" fill="currentColor" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Bringing Love</span>
            <br />
            <span className="text-[#2D2D2D]">& Convenience Home</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#2D2D2D]/70 max-w-2xl mx-auto mb-8"
          >
            Personal delivery service for{' '}
            <span className="text-[#8B2635] font-semibold">Streetman</span>,{' '}
            <span className="text-[#8B2635] font-semibold">Corsicana</span> &{' '}
            <span className="text-[#8B2635] font-semibold">Richland Chambers</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:469-506-6606"
              className="group inline-flex items-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#6d1e2a] transition-all duration-300 pulse-cta hover:scale-105"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Call Elise: 469-506-6606
            </a>
            <a
              href="#service-area"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#D4A5A5] text-[#8B2635] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF2F2] transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              View Service Area
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#2D2D2D]/60"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#D4A5A5]" fill="#D4A5A5" />
              <span>Local & Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#D4A5A5]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Same-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#D4A5A5]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Personal Service</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#D4A5A5] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-[#D4A5A5] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
