'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart, Phone } from 'lucide-react';

const locations = [
  { name: 'Streetman, TX', type: 'Home Base', highlight: true },
  { name: 'Richland Chambers Reservoir', type: 'Lake Deliveries', highlight: true },
  { name: 'Corsicana, TX', type: 'Full Service', highlight: false },
  { name: 'Fairfield, TX', type: 'Available', highlight: false },
  { name: 'Navarro County', type: 'Surrounding Areas', highlight: false },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-24 bg-gradient-to-b from-[#FDF2F2] to-[#FFFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-[#D4A5A5]">Where We Serve</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-2">
            Serving Our Community <span className="gradient-text">With Love</span>
          </h2>
          <p className="text-xl text-[#2D2D2D]/70 mt-4 max-w-2xl mx-auto">
            Based in Streetman, covering Corsicana & Richland Chambers Lake area
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Map background */}
              <div className="absolute inset-0 bg-[#FFFBF7] rounded-full border-4 border-[#D4A5A5]/30 shadow-2xl">
                {/* Radius circles */}
                <div className="absolute inset-4 border-2 border-dashed border-[#D4A5A5]/20 rounded-full" />
                <div className="absolute inset-12 border-2 border-dashed border-[#D4A5A5]/30 rounded-full" />
                <div className="absolute inset-20 border-2 border-dashed border-[#D4A5A5]/40 rounded-full" />

                {/* Center point - Streetman */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-[#8B2635] rounded-full flex items-center justify-center animate-pulse">
                      <Heart className="w-4 h-4 text-white" fill="white" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-[#8B2635]">
                      Streetman (HQ)
                    </span>
                  </div>
                </div>

                {/* Other locations */}
                <div className="absolute top-1/4 right-1/4">
                  <div className="w-6 h-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#2D2D2D]/70">
                    Corsicana
                  </span>
                </div>

                <div className="absolute bottom-1/3 right-1/4">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#2D2D2D]/70">
                    Richland Chambers
                  </span>
                </div>

                <div className="absolute top-1/3 left-1/4">
                  <div className="w-5 h-5 bg-[#D4A5A5]/70 rounded-full flex items-center justify-center">
                    <MapPin className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#2D2D2D]/50">
                    Fairfield
                  </span>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-[#D4A5A5]/20">
                <span className="text-sm text-[#2D2D2D]/70">~30 mile service radius</span>
              </div>
            </div>
          </motion.div>

          {/* Location list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  location.highlight
                    ? 'bg-white shadow-lg border-2 border-[#D4A5A5]'
                    : 'bg-white/50 border border-[#D4A5A5]/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  location.highlight ? 'bg-[#8B2635]' : 'bg-[#D4A5A5]/30'
                }`}>
                  <MapPin className={`w-6 h-6 ${location.highlight ? 'text-white' : 'text-[#8B2635]'}`} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D]">{location.name}</h3>
                  <p className="text-sm text-[#2D2D2D]/60">{location.type}</p>
                </div>
                {location.highlight && (
                  <Heart className="w-5 h-5 text-[#D4A5A5] ml-auto" fill="#D4A5A5" />
                )}
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6"
            >
              <div className="bg-gradient-to-r from-[#8B2635] to-[#D4A5A5] p-6 rounded-2xl text-white">
                <p className="text-lg mb-4">
                  <span className="font-bold">Don&apos;t see your area?</span>
                  <br />
                  Call Elise — we go the extra mile!
                </p>
                <a
                  href="tel:469-506-6606"
                  className="inline-flex items-center gap-2 bg-white text-[#8B2635] px-6 py-3 rounded-full font-semibold hover:bg-[#FDF2F2] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  469-506-6606
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
