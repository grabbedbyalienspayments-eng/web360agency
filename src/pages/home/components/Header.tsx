
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B0C0F]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between md:justify-center relative">
          {/* Logo centrat pe mobil și desktop */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <img 
              src="https://static.readdy.ai/image/ef28c49b8616055595ccec32476a2655/9cbf0670b5bb6aa2479cf180eb0ee4f4.png" 
              alt="Web360Agency Logo" 
              className="h-12 w-auto sm:h-16 md:h-20 object-contain"
            />
          </div>
          
          {/* Meniu desktop - poziționat absolut la dreapta */}
          <div className="hidden md:flex items-center space-x-8 absolute right-0">
            <button 
              onClick={() => scrollToSection('despre')}
              className="text-white/80 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Despre
            </button>
            <button 
              onClick={() => scrollToSection('ecosistem')}
              className="text-white/80 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Ecosistem
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-white/80 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
