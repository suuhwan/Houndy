import Hero from '@/components/marketing/Hero';
import About from '@/components/marketing/About';
import Team from '@/components/marketing/Team';
import Footer from '@/components/marketing/Footer';

import Features from '@/components/marketing/Features';
import Testimonials from '@/components/marketing/Testimonials';

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
