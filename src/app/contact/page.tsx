import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 py-16 relative z-10">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="font-cinzel text-4xl md:text-5xl text-maroon-deep font-bold mb-6">Contact Us</h1>
        <p className="font-cormorant text-2xl text-ink-soft italic mb-12">
          Reach out to Pandit Monu Sharma for guidance, consultations, and spiritual rituals.
        </p>
        
        <div className="bg-gradient-to-br from-maroon-deep to-[#6b1f1a] border border-gold rounded-xl p-8 md:p-14 shadow-xl text-white text-left">
          <div className="text-center mb-10">
            <h2 className="font-cinzel text-3xl font-bold text-[#f6dfaa] mb-4">Connect with Pandit Monu Sharma</h2>
            <p className="font-noto text-[#f2e7ce] text-lg max-w-2xl mx-auto">
              For personalized astrological consultations, conducting Vedic rituals, or spiritual guidance, reach out via the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💬", label: "WhatsApp", val: "+91 78148-49074", link: "https://wa.me/917814849074" },
              { icon: "📞", label: "Phone", val: "+91 78148-49074", link: "tel:+917814849074" },
              { icon: "📧", label: "Email", val: "Support@spiritualrishi.com", link: "mailto:Support@spiritualrishi.com" },
              { icon: "🌐", label: "Website", val: "www.spiritualrishi.com", link: "https://www.spiritualrishi.com" },
              { icon: "▶️", label: "YouTube", val: "Watch Discourses", link: "#" },
              { icon: "📸", label: "Instagram", val: "Daily Updates", link: "#" },
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#f5ecd9]/10 border border-[#d4a85a]/45 rounded-lg p-5 hover:bg-[#f5ecd9]/20 hover:-translate-y-1 hover:border-[#d4a85a] transition-all duration-200"
              >
                <div className="text-3xl mr-4">{social.icon}</div>
                <div>
                  <div className="font-cinzel text-sm tracking-wide text-[#f6dfaa] font-bold uppercase">{social.label}</div>
                  <div className="text-lg text-[#eadfc9] font-noto mt-1">{social.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
