
export default function Pillars() {
  const pillars = [
    {
      icon: 'ri-brain-line',
      title: 'AI + Human Precision',
      description: 'Combinația unică dintre viteză și finețe.'
    },
    {
      icon: 'ri-palette-line',
      title: 'Efficiency is Art',
      description: 'Mai puțin timp, mai multă claritate.'
    },
    {
      icon: 'ri-building-line',
      title: 'Build Smart, Not Big',
      description: 'Scalabil, curat, liber.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Ethical Technology',
      description: 'Fiecare linie de cod e pentru oameni reali.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Eficiența, redefinită
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#00FFF7]/50 transition-all duration-500 hover:scale-105 hover:rotate-y-12 cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/20 to-[#E4C176]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <i className={`${pillar.icon} text-2xl text-[#00FFF7] group-hover:text-[#E4C176] transition-colors duration-300`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-[#00FFF7] transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-white/70 text-center text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#00FFF7]/30 group-hover:border-[#E4C176]/60 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hover\\:rotate-y-12:hover {
          transform: rotateY(12deg) scale(1.05);
        }
      `}</style>
    </section>
  );
}