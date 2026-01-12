'use client';

import { motion } from 'framer-motion';
import { BarChart2, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    title: 'Real-time Analytics',
    description: 'Track every metric that matters with our advanced dashboard. detailed insights at your fingertips.',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with audiences worldwide through our distributed network. No boundaries, only growth.',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    icon: Zap,
    title: 'Smart Automation',
    description: 'Let our AI-driven tools handle the repetitive tasks for you. Focus on strategy while we handle execution.',
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400'
  }
];

export default function Features() {
  return (
    <section className="py-24 container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-heading">Built for scale</h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Everything you need to grow your business, all in one place.
          Designed for modern teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-surface/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-surface/50 transition-colors duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
            
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-2xl ${feature.iconColor}`}>
                <feature.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold font-heading mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
