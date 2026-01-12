'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MarketingLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4000; // 4 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200); // Small delay to show 100%
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4"
          >
            <div className="w-full max-w-xs relative">
              {/* Logo or Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold text-center mb-8 font-heading tracking-widest text-white"
              >
                EASY A
              </motion.h1>

              {/* Progress Bar Container */}
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="flex justify-between mt-2 text-xs text-gray-500 uppercase tracking-wider font-mono">
                <span>Initializing assets</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 
        We render children always, so Spline and images can load in the background. 
        Once loading is false, the overlay fades out revealing the content.
       */}
      {children}
    </>
  );
}
