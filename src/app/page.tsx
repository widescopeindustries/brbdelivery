import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import AboutElise from '@/components/AboutElise';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FallingPetals from '@/components/FallingPetals';

export default function Home() {
  return (
    <main className="relative">
      <FallingPetals />
      <Header />
      <Hero />
      <Services />
      <ServiceArea />
      <AboutElise />
      <Contact />
      <Footer />
    </main>
  );
}
