
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    mesaj: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nume || !formData.email || !formData.mesaj) {
      return;
    }

    if (formData.mesaj.length > 500) {
      alert('Mesajul nu poate depăși 500 de caractere.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('nume', formData.nume);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('mesaj', formData.mesaj);

      const response = await fetch('https://readdy.ai/api/form/d45autvgaed3g6l51ro0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nume: '', email: '', mesaj: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#00FFF7]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#E4C176]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-[#00FFF7]/10 rounded-full animate-spin transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '25s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#E4C176] bg-clip-text text-transparent">
              Hai să construim eficiența împreună
            </span>
          </h2>
          
          <p className="text-lg text-white/90 mb-12">
            Trimite-ne un mesaj și îți răspundem în 24h. Fiecare proiect începe cu o conversație reală.
          </p>
          
          <form 
            id="contact-web360"
            onSubmit={handleSubmit}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6"
            data-readdy-form
          >
            <div>
              <input
                type="text"
                name="nume"
                value={formData.nume}
                onChange={handleInputChange}
                placeholder="Numele tău"
                required
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#00FFF7] focus:outline-none transition-colors duration-300 text-sm"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Adresa ta de email"
                required
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#00FFF7] focus:outline-none transition-colors duration-300 text-sm"
              />
            </div>
            
            <div>
              <textarea
                name="mesaj"
                value={formData.mesaj}
                onChange={handleInputChange}
                placeholder="Mesajul tău (max 500 caractere)"
                required
                maxLength={500}
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#00FFF7] focus:outline-none transition-colors duration-300 resize-none text-sm"
              />
              <div className="text-right text-xs text-white/50 mt-1">
                {formData.mesaj.length}/500 caractere
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#E4C176] to-[#00FFF7] text-[#0B0C0F] font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E4C176]/30 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7] to-[#E4C176] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            {submitStatus === 'success' && (
              <div className="text-center text-[#00FFF7] text-sm">
                Mesajul a fost trimis cu succes! Îți vom răspunde în curând.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-center text-red-400 text-sm">
                A apărut o eroare. Te rugăm să încerci din nou.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
