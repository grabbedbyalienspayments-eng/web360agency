
export default function Philosophy() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/20 via-[#E4C176]/20 to-[#00FFF7]/20 animate-gradient-x" />
      <div className="absolute inset-0 bg-[#0B0C0F]/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              „Într-o lume în care totul pare complicat, noi alegem simplitatea."
            </span>
          </blockquote>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Web360Agency este despre echilibru între tehnologie și oameni, între automatizare și atenția la detalii, 
              între viteză și calitate. Fiecare produs creat sub umbrela noastră are același ADN: 
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
