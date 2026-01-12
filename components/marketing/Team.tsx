'use client';

import { motion } from 'framer-motion';

const leaders = [
  { name: 'Phil Kwok', role: 'Co-Founder', bio: 'Former Cambridge researcher...', color: 'from-blue-500/20 to-purple-500/20' },
  { name: 'Dom Kwok', role: 'Co-Founder', bio: 'Ex-Goldman Sachs...', color: 'from-purple-500/20 to-pink-500/20' },
];

const team = [
  { name: 'Martin', role: 'Engineering' },
  { name: 'Noah', role: 'Product' },
  { name: 'Zubel', role: 'Design' },
  { name: 'Charlotte', role: 'Marketing' },
  { name: 'George', role: 'Operations' },
  { name: 'Bilwan', role: 'Strategy' },
];

export default function Team() {
  return (
    <section className="py-24 container mx-auto px-4 relative z-10">
      <div className="mb-16">
        <h3 className="text-3xl font-bold font-heading mb-8">Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group"
            >
              <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full flex-shrink-0 relative z-10 overflow-hidden">
                {/* Placeholder Avatar */}
                <div className="w-full h-full bg-linear-to-tr from-gray-600 to-gray-800" /> 
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold font-heading">{leader.name}</h4>
                <p className="text-primary text-sm uppercase tracking-wide mb-4">{leader.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold font-heading mb-8">Meet the team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface/30 border border-white/5 rounded-2xl p-4 text-center hover:bg-surface/50 transition-colors"
            >
              <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-3" />
              <h5 className="font-bold">{member.name}</h5>
              <p className="text-xs text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
