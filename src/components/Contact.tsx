'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, Heart, CheckCircle } from 'lucide-react';

const orderTips = [
  'Your name & address',
  'Shopping list or errand details',
  'Preferred delivery window',
  'Special instructions (if any)',
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#8B2635] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        {/* Floating hearts */}
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Valentine's special badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#2D2D2D] px-5 py-2 rounded-full text-sm font-bold mb-8"
        >
          <Heart className="w-4 h-4" fill="currentColor" />
          Valentine&apos;s Week Special: Mention &ldquo;LOVE&rdquo; for 10% off your first order!
          <Heart className="w-4 h-4" fill="currentColor" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-script text-4xl text-[#D4A5A5]">Let&apos;s Connect</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            Ready for Your Delivery?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Just call or text Elise — it&apos;s that simple!
          </p>
        </motion.div>

        {/* Phone CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <a
            href="tel:469-506-6606"
            className="group inline-flex items-center gap-4 bg-white text-[#8B2635] px-10 py-6 rounded-full text-2xl md:text-3xl font-bold hover:bg-[#FDF2F2] transition-all duration-300 pulse-cta hover:scale-105 shadow-2xl"
          >
            <Phone className="w-10 h-10 group-hover:rotate-12 transition-transform" />
            469-506-6606
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </div>
            <span>or</span>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Text</span>
            </div>
          </div>
        </motion.div>

        {/* What to include */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6">What to include in your message:</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {orderTips.map((tip, index) => (
              <motion.div
                key={tip}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 text-white/90"
              >
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>{tip}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/80"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4A5A5]" />
            <span>Monday - Saturday, 8AM - 7PM</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
            <span>Same-day delivery for orders before 2PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
