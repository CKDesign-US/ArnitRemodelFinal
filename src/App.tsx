import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyArnit from '@/components/WhyArnit';
import ServiceArea from '@/components/ServiceArea';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyArnit />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
      {/* Spacer so content isn't hidden behind mobile action bar */}
      <div className="h-14 lg:hidden" />
    </div>
  );
}
