
import { useState } from 'react';

export default function Roadmap() {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const roadmapItems = [
    {
      year: 2025,
      title: 'Sistemul Web360',
      description: 'Am creat Web360, un sistem AI + Human care generează website-uri reale, în cod, rapid și precis. Așa s-a născut WebsiteON.ro, primul produs al ecosistemului nostru, dedicat afacerilor care vor rezultate imediate și clare.',
      details: 'Primele rezultate: timpi de livrare reduși cu 80%, calitatea crescută cu 200%.'
    },
    {
      year: 2026,
      title: 'Sistemul Web360 Store',
      description: 'Extindem procesul către soluții de comerț online scalabile, menținând principiul „Build Smart, Not Big".',
      details: 'Focus: accesibilitate, viteză și libertatea clientului.'
    },
    {
      year: 2027,
      title: 'Automatizări inteligente',
      description: 'Introducem automatizări inteligente pentru businessuri. AI care asistă, nu înlocuiește.',
      details: 'Obiectiv: un ecosistem unde AI și omul colaborează natural.'
    }
  ];

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Drumul nostru către eficiență totală
            </span>
          </h2>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from[#00FFF7] to[#E4C176] transform -translate-y-1/2" />
          
          <div className="flex justify-between items-start relative">
            {roadmapItems.map((item, index) => (
              <div 
                key={item.year}
                className="flex flex-col items-center relative group cursor-pointer w-1/3 px-4"
                onMouseEnter={() => setHoveredYear(item.year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Year Point */}
                <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 relative z-10 ${
                  hoveredYear === item.year 
                    ? 'bg-[#00FFF7] border-[#E4C176] scale-150' 
                    : 'bg-[#0B0C0F] border-[#00FFF7]'
                }`}>
                  {hoveredYear === item.year && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#00FFF7] opacity-75" />
                  )}
                </div>
                
                {/* Connecting Line */}
                <div className={`w-0.5 h-8 transition-all duration-300 ${
                  hoveredYear === item.year ? 'bg-[#E4C176]' : 'bg-[#00FFF7]/50'
                }`} />
                
                {/* Content Card */}
                <div className={`p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 w-full min-h-[280px] flex flex-col justify-between transition-all duration-300 ${
                  hoveredYear === item.year 
                    ? 'border-[#00FFF7]/50 shadow-lg shadow-[#00FFF7]/20 transform scale-105' 
                    : 'hover:border-white/20'
                }`}>
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      hoveredYear === item.year ? 'text-[#00FFF7]' : 'text-[#E4C176]'
                    }`}>
                      {item.year}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h4>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    <div className={`border-t border-white/20 pt-3 mt-3 transition-all duration-300 ${
                      hoveredYear === item.year 
                        ? 'opacity-100 max-h-20' 
                        : 'opacity-0 max-h-0 overflow-hidden pt-0 mt-0 border-transparent'
                    }`}>
                      <p className="text-[#00FFF7] text-xs leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {roadmapItems.map((item, index) => (
            <div 
              key={item.year}
              className="relative"
              onTouchStart={() => setHoveredYear(item.year)}
              onTouchEnd={() => setHoveredYear(null)}
            >
              <div className="flex items-start space-x-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                    hoveredYear === item.year 
                      ? 'bg-[#00FFF7] border-[#E4C176]' 
                      : 'bg-[#0B0C0F] border-[#00FFF7]'
                  }`}>
                    {hoveredYear === item.year && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-[#00FFF7] opacity-75" />
                    )}
                  </div>
                  {index < roadmapItems.length - 1 && (
                    <div className="w-0.5 h-20 bg-gradient-to-b from-[#00FFF7] to-[#E4C176] mt-2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className={`p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 ${
                    hoveredYear === item.year 
                      ? 'border-[#00FFF7]/50 shadow-lg shadow-[#00FFF7]/20' 
                      : ''
                  }`}>
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      hoveredYear === item.year ? 'text-[#00FFF7]' : 'text-[#E4C176]'
                    }`}>
                      {item.year}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h4>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    <div className={`border-t border-white/20 pt-3 mt-3 transition-all duration-300 ${
                      hoveredYear === item.year 
                        ? 'opacity-100' 
                        : 'opacity-70'
                    }`}>
                      <p className="text-[#00FFF7] text-xs leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
