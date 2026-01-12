'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Hackathons', value: '25', colSpan: 1, type: 'stat' },
  { label: 'Developers', value: '600k+', colSpan: 1, type: 'stat' },
  { label: 'Prizes Won', value: '$550k', colSpan: 1, type: 'stat' },
  { type: 'image', colSpan: 1, src: '', bg: 'bg-indigo-900' },
  { type: 'image', colSpan: 2, src: '', bg: 'bg-purple-900' },
  { type: 'image', colSpan: 1, src: '', bg: 'bg-blue-900' },
];

export default function About() {
  return (
    <section className="py-24 container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Heritage</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-heading">How it all started</h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Founded in 2019, we set out to change the way software is built.
          From humble beginnings to a global movement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`
              relative rounded-2xl overflow-hidden
              ${item.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'}
              min-h-[200px]
              ${item.type === 'stat' ? 'bg-surface/50 border border-white/5 backdrop-blur-sm p-8 flex flex-col justify-center items-center' : `${item.bg}`}
            `}
          >
            {item.type === 'stat' && (
              <>
                <span className="text-5xl font-bold text-secondary mb-2">{item.value}</span>
                <span className="text-gray-400 uppercase tracking-wider text-sm">{item.label}</span>
              </>
            )}
            {item.type === 'image' && (
               <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl">
                 IMAGE
               </div>
            )}
            
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
