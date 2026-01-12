import Hero from '@/components/marketing/Hero';
import About from '@/components/marketing/About';
import Team from '@/components/marketing/Team';
import Footer from '@/components/marketing/Footer';

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Team />
      <Footer />
    </main>
  );
}
