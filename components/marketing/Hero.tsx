

import Spline from '@splinetool/react-spline/next';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Placeholder Spline Scene - User needs to replace the URL */}
        <Spline
          scene="https://prod.spline.design/g2gCyTmwkHbx08hc/scene.splinecode" 
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ededed] to-gray-400 mb-6 tracking-tight drop-shadow-2xl">
          Get to know the brains <br />
          behind EasyA
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
          We are a team of visionaries, builders, and creators.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent z-20" />
    </section>
  );
}
