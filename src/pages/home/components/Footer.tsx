
export default function Footer() {
  return (
    <footer className="py-12 bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <img 
              src="https://static.readdy.ai/image/ef28c49b8616055595ccec32476a2655/9cbf0670b5bb6aa2479cf180eb0ee4f4.png" 
              alt="Web360Agency Logo" 
              className="h-16 w-auto sm:h-20 md:h-24 object-contain"
            />
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-white/80 text-base sm:text-lg">
              © 2025 Web360Agency - AI & Human Efficiency
            </p>
            <p className="text-white/60 text-sm sm:text-base">
              Designed by <a 
                href="https://websiteon.ro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer"
              >
                WebsiteON.ro
              </a>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base">
            <a 
              href="/termeni-si-conditii" 
              className="text-white/60 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Termeni și condiții
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href="/politica-de-confidentialitate" 
              className="text-white/60 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Politica de confidențialitate
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href="/gdpr" 
              className="text-white/60 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              GDPR
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href="https://readdy.ai/?origin=logo" 
              className="text-white/60 hover:text-[#00FFF7] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
