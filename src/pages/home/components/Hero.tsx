
import { useEffect, useRef } from 'react';

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------
  // Particle animation
  // -------------------------------------------------------------------------
  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      try {
        const particle = document.createElement('div');
        particle.className =
          'absolute w-1 h-1 bg-[#00FFF7] rounded-full opacity-60';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;

        particlesRef.current.appendChild(particle);

        // Safely remove the particle after its animation ends
        setTimeout(() => {
          particle.remove();
        }, 7000);
      } catch (err) {
        console.error('Failed to create particle:', err);
      }
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  // -------------------------------------------------------------------------
  // Smooth scroll helper
  // -------------------------------------------------------------------------
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`scrollToSection: No element found with id "${sectionId}"`);
    }
  };

  // -------------------------------------------------------------------------
  // JSX
  // -------------------------------------------------------------------------
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Cinematic%20dark%20technology%20background%20with%20neural%20network%20connections%2C%20digital%20particles%20floating%20in%20space%2C%20futuristic%20AI%20visualization%2C%20deep%20blue%20and%20cyan%20electric%20colors%2C%20sophisticated%20modern%20tech%20atmosphere%2C%20premium%20digital%20ecosystem%2C%20360%20degree%20circular%20motion%20patterns%2C%20elegant%20minimalist%20design&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B0C0F]/70" />

      {/* Particle container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-[#00FFF7] bg-clip-text text-transparent">
            Construim tehnologie
          </span>
          <br />
          <span className="text-white">care muncește pentru tine</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
          Eficiență inteligentă acolo unde AI și omul colaborează natural
        </p>

        <p className="text-sm text-[#00FFF7] mb-12 font-light tracking-wider">
          AI &amp; Human Efficiency
        </p>

        <button
          onClick={() => scrollToSection('ecosistem')}
          className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#00FFF7] to-[#E4C176] text-[#0B0C0F] font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00FFF7]/30 whitespace-nowrap cursor-pointer text-sm md:text-base"
        >
          <span className="relative z-10">Descoperă ecosistemul</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#E4C176] to-[#00FFF7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <i className="ri-arrow-down-line text-2xl text-[#00FFF7]" />
          </div>
        </div>
      </div>

      {/* Inline CSS for float animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
}
