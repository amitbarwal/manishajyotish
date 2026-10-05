import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 py-16 relative z-10">
      <section className="text-center mb-16">
        <span className="inline-block px-5 py-2 border border-gold rounded-full text-maroon font-cinzel text-xs tracking-widest mb-6 font-bold">
          🕉️ DIVINE GUIDANCE 🕉️
        </span>
        <h1 className="font-cinzel text-maroon-deep text-4xl md:text-5xl mb-4 font-bold">
          About Pandit Monu Sharma
        </h1>
        <h3 className="font-cormorant text-2xl text-maroon font-semibold mb-8">
          Shraddha • Sadhana • Seva
        </h3>
        
        <div className="border border-gold/40 rounded-xl bg-gradient-to-b from-amber-50/90 to-parchment-2/60 p-8 md:p-12 shadow-sm text-left max-w-4xl mx-auto">
          <p className="text-ink-soft font-noto text-lg mb-6 leading-relaxed">
            🌿 Dear Seekers,
          </p>
          <p className="text-ink-soft font-noto text-lg mb-6 leading-relaxed">
            Welcome to the official portal of <strong>Pandit Monu Sharma</strong>. Spirituality is not just about acquiring knowledge, but a path of disciplined practice, self-awareness, service, and inner growth.
          </p>
          <p className="text-ink-soft font-noto text-lg mb-6 leading-relaxed">
            With years of deep study in Vedic sciences, astrology, and ancient rituals (including Pitru Paksha, Tarpan, and Hawan), Pandit Monu Sharma provides profound guidance to align your life with cosmic rhythms and ancestral blessings. 
          </p>
          <p className="text-ink-soft font-noto text-lg leading-relaxed">
            Our mission is to help individuals overcome their life's obstacles through genuine, scripturally backed remedies, compassionate service to the needy (Daan & Seva), and absolute devotion to the Divine. Every consultation and ritual is performed with the utmost purity and dedication.
          </p>
        </div>
      </section>
    </div>
  );
}
