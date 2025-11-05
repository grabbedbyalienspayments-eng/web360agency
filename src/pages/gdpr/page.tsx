
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function GDPR() {
  return (
    <div className="bg-[#0B0C0F] text-white min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Conformitate GDPR
            </h1>
            <p className="text-white/60 text-lg">
              Regulamentul General privind Protecția Datelor
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">Angajamentul Nostru GDPR</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                ANTEMADAM DISTRIBUTION SRL, prin platforma Web360Agency, respectă în totalitate 
                Regulamentul General privind Protecția Datelor (GDPR) și se angajează să protejeze 
                drepturile fundamentale ale persoanelor fizice în ceea ce privește prelucrarea 
                datelor cu caracter personal.
              </p>
              <p className="text-white/80 leading-relaxed">
                Această pagină detaliază măsurile concrete pe care le implementăm pentru 
                conformitatea GDPR și modul în care vă puteți exercita drepturile.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">Principiile GDPR pe care le Respectăm</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00FFF7] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#E4C176] mb-1">Legalitate și Transparență</h3>
                      <p className="text-white/70 text-sm">Prelucrăm datele doar pe baze legale clare și vă informăm transparent.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00FFF7] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#E4C176] mb-1">Limitarea Scopului</h3>
                      <p className="text-white/70 text-sm">Colectăm date doar pentru scopuri specifice și legitime.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00FFF7] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#E4C176] mb-1">Minimizarea Datelor</h3>
                      <p className="text-white/70 text-sm">Procesăm doar datele strict necesare pentru servicii.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00FFF7] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#E4C176] mb-1">Acuratețea</h3>
                      <p className="text-white/70 text-sm">Menținem datele corecte și actualizate.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00FFF7] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#E4C176] mb-1">Limitarea Stocării</h3>
                      <p className="text-white/70 text-sm">Păstrăm datele doar cât timp este necesar.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00FFF7] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-[#E4C176] mb-1">Securitatea</h3>
                      <p className="text-white/70 text-sm">Implementăm măsuri tehnice și organizatorice robuste.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">Drepturile Dumneavoastră GDPR</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#00FFF7] pl-6">
                  <h3 className="font-semibold text-[#E4C176] mb-2">Dreptul de Acces (Art. 15)</h3>
                  <p className="text-white/80 text-sm mb-2">
                    Aveți dreptul să obțineți confirmarea că prelucrăm datele dumneavoastră și să primiți 
                    o copie a acestora, împreună cu informații despre prelucrare.
                  </p>
                  <p className="text-white/60 text-xs">Timp de răspuns: 30 de zile</p>
                </div>

                <div className="border-l-4 border-[#E4C176] pl-6">
                  <h3 className="font-semibold text-[#E4C176] mb-2">Dreptul de Rectificare (Art. 16)</h3>
                  <p className="text-white/80 text-sm mb-2">
                    Puteți solicita corectarea datelor inexacte sau completarea datelor incomplete.
                  </p>
                  <p className="text-white/60 text-xs">Timp de răspuns: 30 de zile</p>
                </div>

                <div className="border-l-4 border-[#00FFF7] pl-6">
                  <h3 className="font-semibold text-[#E4C176] mb-2">Dreptul de Ștergere (Art. 17)</h3>
                  <p className="text-white/80 text-sm mb-2">
                    Puteți solicita ștergerea datelor în anumite condiții (dreptul de a fi uitat).
                  </p>
                  <p className="text-white/60 text-xs">Timp de răspuns: 30 de zile</p>
                </div>

                <div className="border-l-4 border-[#E4C176] pl-6">
                  <h3 className="font-semibold text-[#E4C176] mb-2">Dreptul de Portabilitate (Art. 20)</h3>
                  <p className="text-white/80 text-sm mb-2">
                    Puteți primi datele într-un format structurat și să le transferați altui operator.
                  </p>
                  <p className="text-white/60 text-xs">Timp de răspuns: 30 de zile</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">Cum să vă Exercitați Drepturile</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-[#E4C176] mb-4">Modalități de Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-[#00FFF7]"></i>
                      <span className="text-white/80">privacy@web360agency.ro</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-building-line text-[#00FFF7]"></i>
                      <span className="text-white/80">ANTEMADAM DISTRIBUTION SRL</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-time-line text-[#00FFF7]"></i>
                      <span className="text-white/80">Răspuns în max. 30 zile</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#E4C176] mb-4">Informații Necesare</h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Numele complet și adresa de email</li>
                    <li>• Descrierea clară a cererii</li>
                    <li>• Documentul de identitate (pentru verificare)</li>
                    <li>• Detalii specifice despre datele vizate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">Măsuri de Securitate Implementate</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-2xl text-[#00FFF7]"></i>
                  </div>
                  <h3 className="font-semibold text-[#E4C176] mb-2">Criptare SSL/TLS</h3>
                  <p className="text-white/70 text-sm">Toate datele sunt transmise criptat</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E4C176]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-lock-line text-2xl text-[#E4C176]"></i>
                  </div>
                  <h3 className="font-semibold text-[#E4C176] mb-2">Acces Restricționat</h3>
                  <p className="text-white/70 text-sm">Doar personalul autorizat are acces</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-database-2-line text-2xl text-[#00FFF7]"></i>
                  </div>
                  <h3 className="font-semibold text-[#E4C176] mb-2">Backup Securizat</h3>
                  <p className="text-white/70 text-sm">Copii de siguranță regulate și criptate</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00FFF7]">Autoritatea de Supraveghere</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Dacă considerați că drepturile dumneavoastră GDPR au fost încălcate, aveți dreptul 
                să depuneți o plângere la autoritatea națională de supraveghere:
              </p>
              <div className="bg-black/30 rounded-lg p-6">
                <h3 className="font-semibold text-[#E4C176] mb-3">
                  Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                </h3>
                <div className="space-y-2 text-white/80">
                  <p><strong>Website:</strong> www.dataprotection.ro</p>
                  <p><strong>Email:</strong> anspdcp@dataprotection.ro</p>
                  <p><strong>Telefon:</strong> +40 21 252 5599</p>
                  <p><strong>Adresă:</strong> B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
