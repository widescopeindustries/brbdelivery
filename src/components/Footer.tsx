'use client';

import { Heart, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-[#D4A5A5]" fill="#D4A5A5" />
              <span className="text-2xl font-bold">BRB Deliveries</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Your trusted local delivery partner for Streetman, Corsicana & Richland Chambers.
              Be Right Back with exactly what you need.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#D4A5A5]"></span>
              Quick Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:469-506-6606"
                className="flex items-center gap-3 text-white/80 hover:text-[#D4A5A5] transition-colors"
              >
                <Phone className="w-5 h-5" />
                469-506-6606
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  316 Brandywine Ave<br />
                  Streetman, TX 75859
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#D4A5A5]"></span>
              Service Areas
            </h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-[#D4A5A5]" fill="#D4A5A5" />
                Streetman, TX
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-[#D4A5A5]" fill="#D4A5A5" />
                Corsicana, TX
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-[#D4A5A5]" fill="#D4A5A5" />
                Richland Chambers Reservoir
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-[#D4A5A5]" fill="#D4A5A5" />
                Navarro County
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} BRB Deliveries. Made with
            <Heart className="w-4 h-4 text-[#D4A5A5] heartbeat" fill="#D4A5A5" />
            in Streetman, Texas.
          </p>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#8B2635] to-transparent md:hidden z-50">
        <a
          href="tel:469-506-6606"
          className="flex items-center justify-center gap-3 w-full bg-white text-[#8B2635] py-4 rounded-full font-bold text-lg shadow-2xl"
        >
          <Phone className="w-6 h-6" />
          Call Elise: 469-506-6606
        </a>
      </div>
    </footer>
  );
}
