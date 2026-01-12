'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "This platform completely transformed how we handle our marketing. The results have been absolutely incredible.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    avatar: "/images/avatar-2.png"
  },
  {
    quote: "The best investment we've made this year. The ROI has been outstanding and the team is amazing to work with.",
    author: "Michael Ross",
    role: "Founder, Zenith",
    avatar: "/images/avatar-3.png"
  },
  {
    quote: "Intuitive, powerful, and beautiful. Highly recommended for any serious business looking to scale.",
    author: "Emily Zhang",
    role: "VP Marketing, Aura",
    avatar: "/images/avatar-4.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading">Trusted by builders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface/20 backdrop-blur-md border border-white/5 p-8 rounded-3xl relative"
            >
              <Quote className="text-primary/20 mb-6 w-10 h-10" />
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed italic">
                &quot;{item.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image 
                    src={item.avatar} 
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold font-heading">{item.author}</div>
                  <div className="text-xs text-primary uppercase tracking-wide">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
