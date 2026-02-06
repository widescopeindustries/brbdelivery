'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Package, Waves, Phone, ShoppingBag, Truck } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Grocery Shopping',
    description: 'From H-E-B, Walmart, or your favorite Corsicana stores. We shop, you relax.',
    color: 'bg-[#8B2635]',
  },
  {
    icon: Package,
    title: 'Errand Running',
    description: 'Pharmacy pickup, post office, dry cleaning, and any other errands you need done.',
    color: 'bg-[#D4A5A5]',
  },
  {
    icon: Waves,
    title: 'Lake Delivery',
    description: 'Specializing in Richland Chambers Reservoir vacation and weekend deliveries.',
    color: 'bg-[#D4AF37]',
  },
];

const steps = [
  {
    number: '1',
    icon: Phone,
    title: 'Call or Text',
    description: 'Reach out to Elise at 469-506-6606',
  },
  {
    number: '2',
    icon: ShoppingBag,
    title: 'We Shop',
    description: 'We gather everything on your list with care',
  },
  {
    number: '3',
    icon: Truck,
    title: 'We Deliver',
    description: 'Right to your door, with a smile',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-[#D4A5A5]">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-2">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-[#FFFBF7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4A5A5]/20"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">{service.title}</h3>
              <p className="text-[#2D2D2D]/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-script text-3xl text-[#D4A5A5]">Simple as</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-2">
            How It <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#D4A5A5] via-[#8B2635] to-[#D4A5A5] -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number with heart */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-[#FDF2F2] rounded-full flex items-center justify-center border-4 border-[#D4A5A5] relative z-10">
                    <step.icon className="w-8 h-8 text-[#8B2635]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#8B2635] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{step.title}</h3>
                <p className="text-[#2D2D2D]/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
