
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afișează butonul după jumătatea paginii
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const halfPage = (documentHeight - windowHeight) / 2;
      
      setIsVisible(scrolled > halfPage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 group transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Cercul principal cu gradient */}
        <div className="w-14 h-14 bg-gradient-to-r from-[#00FFF7] to-[#0099CC] rounded-full shadow-lg shadow-[#00FFF7]/25 group-hover:shadow-xl group-hover:shadow-[#00FFF7]/40 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
          {/* Iconița săgeată */}
          <i className="ri-arrow-up-line text-white text-xl group-hover:text-2xl transition-all duration-300"></i>
        </div>
        
        {/* Efectul de puls */}
        <div className="absolute inset-0 w-14 h-14 bg-[#00FFF7]/20 rounded-full animate-ping"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm">
          Înapoi sus
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
        </div>
      </div>
    </button>
  );
}
