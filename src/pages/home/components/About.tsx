
export default function About() {
  return (
    <section id="despre" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/5 via-transparent to-[#E4C176]/5" />
      
      {/* Animated Synapses */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFF7] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#E4C176] rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#00FFF7] rounded-full animate-pulse opacity-50" />
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Despre noi
            </span>
          </h2>
        </div>
        
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          {/* Split Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#00FFF7]/10 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#E4C176]/10 to-transparent" />
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Am construit un sistem AI + Human, capabil să creeze website-uri și soluții digitale complete, 
              printr-un proces eficient: <span className="text-[#00FFF7] font-semibold">75% automatizat</span>, 
              <span className="text-[#E4C176] font-semibold"> 25% rafinat manual</span>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
              <span className="text-[#00FFF7] font-semibold">AI lucrează repede.</span> 
              <span className="text-[#E4C176] font-semibold"> Noi lucrăm precis.</span>
            </p>
            
            <div className="text-center">
              <p className="text-sm text-white/60 italic font-light">
                „Într-o lume plină de zgomot, noi construim claritate."
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-8 h-8 border border-[#00FFF7]/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-4 left-4 w-6 h-6 border border-[#E4C176]/30 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
        </div>
      </div>
    </section>
  );
}
