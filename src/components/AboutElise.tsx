'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Clock, Users } from 'lucide-react';

const highlights = [
  { icon: Star, text: 'Texas Born, Canada Raised' },
  { icon: Heart, text: 'Passionate About Helping' },
  { icon: Clock, text: '5+ Years of Service' },
  { icon: Users, text: 'Personalized Care' },
];

export default function AboutElise() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4A5A5] to-[#8B2635] rounded-3xl transform rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-br from-[#8B2635] to-[#D4A5A5] rounded-3xl transform -rotate-3 opacity-50" />

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-[#FDF2F2] to-[#FFFBF7] rounded-2xl p-8 shadow-2xl">
                {/* Placeholder for Elise's photo */}
                <div className="aspect-[4/5] bg-gradient-to-br from-[#D4A5A5]/20 to-[#8B2635]/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-[#D4A5A5] rounded-full flex items-center justify-center mb-4">
                      <span className="font-script text-5xl text-white">E</span>
                    </div>
                    <p className="font-script text-4xl text-[#8B2635]">Elise Contreras</p>
                    <p className="text-[#2D2D2D]/60 mt-2">Founder & Delivery Angel</p>
                  </div>
                </div>

                {/* Decorative hearts */}
                <div className="absolute -top-3 -right-3">
                  <Heart className="w-8 h-8 text-[#8B2635] heartbeat" fill="#8B2635" />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <Heart className="w-6 h-6 text-[#D4A5A5]" fill="#D4A5A5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-script text-3xl text-[#D4A5A5]">Nice to Meet You</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-2 mb-6">
              Meet <span className="gradient-text">Elise</span>
              <br />
              Your Local Delivery Angel
            </h2>

            <div className="space-y-6 text-lg text-[#2D2D2D]/70 leading-relaxed">
              <p>
                Hi, I&apos;m <span className="text-[#8B2635] font-semibold">Elise Contreras</span>,
                founder of BRB Delivery. Born in Texas and raised in Canada, I&apos;m proud to hold
                dual citizenship — but my heart has always been drawn back to the Lone Star State.
              </p>
              <p>
                I find true joy and fulfillment in life when I&apos;m helping others — it&apos;s my purpose.
                For the past five years, I&apos;ve been helping people keep their homes clean and I&apos;ve
                loved every moment of it. Now, with BRB Delivery, I&apos;m expanding that mission to
                serve our community in a new way — whether you&apos;re a busy parent, a senior who needs
                a helping hand, or enjoying a weekend at Richland Chambers Lake.
              </p>
              <p>
                I treat every delivery as if I&apos;m bringing it to my own family. That&apos;s the BRB
                promise: <span className="font-semibold text-[#8B2635]">&ldquo;Be Right Back&rdquo;</span> with
                exactly what you need.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-[#FDF2F2] px-4 py-3 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-[#8B2635]" />
                  <span className="text-sm font-medium text-[#2D2D2D]">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Business address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-[#FFFBF7] to-[#FDF2F2] rounded-xl border border-[#D4A5A5]/20"
            >
              <p className="text-sm text-[#2D2D2D]/60 uppercase tracking-wide mb-2">Business Address</p>
              <p className="text-[#2D2D2D] font-medium">
                316 Brandywine Ave<br />
                Streetman, TX 75859
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
