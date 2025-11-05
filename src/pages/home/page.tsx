
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Ecosystem from './components/Ecosystem';
import Philosophy from './components/Philosophy';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieBanner(false);
  };

  return (
    <div className="bg-[#0B0C0F] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Pillars />
      <Ecosystem />
      <Philosophy />
      <Roadmap />
      <Contact />
      <Footer />
      <ScrollToTop />
      {showCookieBanner && (
        <CookieBanner onAccept={handleCookieAccept} />
      )}
    </div>
  );
}
