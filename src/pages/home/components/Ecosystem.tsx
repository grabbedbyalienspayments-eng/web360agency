
export default function Ecosystem() {
  const services = [
    {
      title: 'Website-uri inteligente',
      description: 'Generate în cod real, personalizate prin AI și verificate uman.',
      icon: 'ri-code-line'
    },
    {
      title: 'Soluții digitale rapide',
      description: 'Construim soluții care lucrează în locul tău, nu împotriva ta.',
      icon: 'ri-rocket-line'
    },
    {
      title: 'Instrumente pentru businessuri moderne',
      description: 'Transformăm complexul în eficient fără compromis.',
      icon: 'ri-tools-line'
    }
  ];

  return (
    <section id="ecosistem" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Ecosistemul nostru digital
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12">
              Web360Agency este laboratorul unde AI-ul și omul colaborează pentru a construi produse reale. 
              Nu promitem viitorul, îl dezvoltăm în prezent, cu instrumente concrete: website-uri rapide, 
              platforme funcționale și soluții digitale scalabile.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00FFF7]/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/10 via-transparent to-[#E4C176]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/5 to-[#E4C176]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center space-x-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-[#00FFF7]/20 to-[#E4C176]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-3xl text-[#00FFF7] group-hover:text-[#E4C176] transition-colors duration-300`}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#00FFF7] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-xl text-white/40 group-hover:text-[#00FFF7] group-hover:translate-x-2 transition-all duration-300"></i>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#00FFF7] rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#E4C176] rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
