
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function Terms() {
  return (
    <div className="bg-[#0B0C0F] text-white min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Termeni și Condiții
            </h1>
            <p className="text-white/60 text-lg">
              Ultima actualizare: Ianuarie 2025
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">1. Informații Generale</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Acești termeni și condiții reglementează utilizarea serviciilor oferite de ANTEMADAM DISTRIBUTION SRL, 
                prin platforma Web360Agency. Prin accesarea și utilizarea serviciilor noastre, acceptați în totalitate 
                acești termeni și condiții.
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong>Furnizor de servicii:</strong> ANTEMADAM DISTRIBUTION SRL<br />
                <strong>Denumire comercială:</strong> Web360Agency<br />
                <strong>Activitate:</strong> Servicii digitale AI + Human pentru dezvoltare web și soluții tehnologice
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">2. Servicii Oferite</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Web360Agency oferă servicii de dezvoltare web prin combinația unică AI + Human:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• Dezvoltare website-uri inteligente cu cod real</li>
                <li>• Soluții digitale personalizate pentru business-uri</li>
                <li>• Optimizare automată și verificare umană</li>
                <li>• Consultanță tehnologică și suport tehnic</li>
                <li>• Instrumente pentru eficiență digitală</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">3. Obligațiile Utilizatorului</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Prin utilizarea serviciilor noastre, vă angajați să:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• Furnizați informații corecte și actualizate</li>
                <li>• Utilizați serviciile în conformitate cu legea</li>
                <li>• Nu încălcați drepturile de proprietate intelectuală</li>
                <li>• Nu distribuiți conținut ilegal sau dăunător</li>
                <li>• Respectați termenii de utilizare ai platformelor terțe</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">4. Proprietate Intelectuală</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Toate drepturile de proprietate intelectuală asupra tehnologiei, metodologiei și sistemelor 
                dezvoltate de Web360Agency aparțin ANTEMADAM DISTRIBUTION SRL.
              </p>
              <p className="text-white/80 leading-relaxed">
                Clientul obține dreptul de utilizare asupra produsului final livrat, conform specificațiilor 
                contractuale. Codul sursă și documentația tehnică rămân proprietatea noastră, cu excepția 
                cazurilor în care se specifică altfel în contract.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">5. Limitarea Răspunderii</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                ANTEMADAM DISTRIBUTION SRL nu poate fi trasă la răspundere pentru:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• Daune indirecte sau pierderi de profit</li>
                <li>• Întreruperi temporare ale serviciilor din cauze de forță majoră</li>
                <li>• Utilizarea necorespunzătoare a serviciilor de către client</li>
                <li>• Probleme cauzate de platforme terțe sau furnizori externi</li>
                <li>• Modificări ale tehnologiilor sau standardelor industriei</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">6. Modificări și Actualizări</h2>
              <p className="text-white/80 leading-relaxed">
                Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                Modificările vor fi comunicate prin email sau prin afișare pe website. 
                Continuarea utilizării serviciilor după modificări constituie acceptarea noilor termeni.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">7. Contact</h2>
              <p className="text-white/80 leading-relaxed">
                Pentru întrebări referitoare la acești termeni și condiții, ne puteți contacta la:<br />
                <strong>Email:</strong> contact@web360agency.ro<br />
                <strong>Entitate juridică:</strong> ANTEMADAM DISTRIBUTION SRL
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
