
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function Privacy() {
  return (
    <div className="bg-[#0B0C0F] text-white min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Politica de Confidențialitate
            </h1>
            <p className="text-white/60 text-lg">
              Ultima actualizare: Ianuarie 2025
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">1. Informații Generale</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                ANTEMADAM DISTRIBUTION SRL, prin platforma Web360Agency, se angajează să protejeze 
                confidențialitatea datelor personale ale utilizatorilor. Această politică explică 
                cum colectăm, utilizăm și protejăm informațiile dumneavoastră.
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong>Operator de date:</strong> ANTEMADAM DISTRIBUTION SRL<br />
                <strong>Platforma:</strong> Web360Agency<br />
                <strong>Contact DPO:</strong> privacy@web360agency.ro
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">2. Date Colectate</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Colectăm următoarele categorii de date personale:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• <strong>Date de identificare:</strong> nume, prenume, email, telefon</li>
                <li>• <strong>Date tehnice:</strong> adresa IP, browser, sistem de operare</li>
                <li>• <strong>Date de utilizare:</strong> pagini vizitate, timp petrecut, interacțiuni</li>
                <li>• <strong>Date de comunicare:</strong> mesaje trimise prin formulare de contact</li>
                <li>• <strong>Cookie-uri:</strong> preferințe, sesiuni, analiză trafic</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">3. Scopurile Prelucrării</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Utilizăm datele personale pentru următoarele scopuri:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• Furnizarea serviciilor AI + Human pentru dezvoltare web</li>
                <li>• Comunicarea cu clienții și suportul tehnic</li>
                <li>• Îmbunătățirea calității serviciilor și a experienței utilizatorului</li>
                <li>• Analiză statistică și optimizare platformă</li>
                <li>• Respectarea obligațiilor legale și contractuale</li>
                <li>• Marketing direct (doar cu consimțământul explicit)</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">4. Temeiurile Legale</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Prelucrăm datele personale pe baza următoarelor temeiuri legale:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• <strong>Executarea contractului</strong> - pentru furnizarea serviciilor</li>
                <li>• <strong>Consimțământul</strong> - pentru marketing și cookie-uri non-esențiale</li>
                <li>• <strong>Interesul legitim</strong> - pentru îmbunătățirea serviciilor</li>
                <li>• <strong>Obligația legală</strong> - pentru respectarea legislației</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">5. Partajarea Datelor</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Nu vindem datele personale terților. Partajăm informații doar în următoarele situații:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• Cu furnizori de servicii tehnice (hosting, analiză, suport)</li>
                <li>• Cu autoritățile competente, la cererea legală</li>
                <li>• În cazul fuziunilor sau achiziții (cu notificare prealabilă)</li>
                <li>• Cu consimțământul explicit al utilizatorului</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">6. Drepturile Utilizatorilor</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="text-white/80 space-y-2 ml-6">
                <li>• <strong>Dreptul de acces</strong> - să cunoașteți ce date procesăm</li>
                <li>• <strong>Dreptul de rectificare</strong> - să corectați datele inexacte</li>
                <li>• <strong>Dreptul de ștergere</strong> - să solicitați eliminarea datelor</li>
                <li>• <strong>Dreptul de restricționare</strong> - să limitați prelucrarea</li>
                <li>• <strong>Dreptul de portabilitate</strong> - să primiți datele în format structurat</li>
                <li>• <strong>Dreptul de opoziție</strong> - să vă opuneți prelucrării</li>
                <li>• <strong>Dreptul de retragere a consimțământului</strong></li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">7. Securitatea Datelor</h2>
              <p className="text-white/80 leading-relaxed">
                Implementăm măsuri tehnice și organizatorice pentru protejarea datelor:
                criptare SSL/TLS, acces restricționat, backup-uri regulate, monitorizare securitate, 
                formare personal în protecția datelor. În cazul unei încălcări, veți fi notificați 
                în termen de 72 de ore.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">8. Contact</h2>
              <p className="text-white/80 leading-relaxed">
                Pentru exercitarea drepturilor sau întrebări despre protecția datelor:<br />
                <strong>Email:</strong> privacy@web360agency.ro<br />
                <strong>Entitate:</strong> ANTEMADAM DISTRIBUTION SRL<br />
                <strong>Autoritate de supraveghere:</strong> ANSPDCP (www.dataprotection.ro)
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
