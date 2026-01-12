'use client';

import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 pt-32 pb-16 container mx-auto px-4 overflow-hidden">
      {/* Download CTA */}
      <div className="text-center mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 hover:bg-primary/30 blur-[120px] rounded-full transition-colors duration-700 pointer-events-none" />
        
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 relative z-10">Download the App</h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto relative z-10">
          Learn about the world's leading blockchains, right from your phone.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
             App Store
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform hover:bg-white/20">
             Google Play
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold font-heading tracking-widest">EASY A</div>
        
        <div className="flex gap-6">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Meet the team</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Events</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Challenges</Link>
        </div>

        <div className="flex gap-4">
          <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer transition-colors"><Twitter size={20} /></div>
          <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer transition-colors"><Linkedin size={20} /></div>
          <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer transition-colors"><Instagram size={20} /></div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-xs mt-12">
        © 2026 EasyA. All Rights Reserved
      </div>
    </footer>
  );
}
