import React from 'react';

export default function ServicesPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 py-16 relative z-10">
      
      {/* Sacred Rituals */}
      <section className="mb-20">
        <div className="flex items-baseline gap-4 mb-4 justify-center">
          <span className="font-cinzel text-sm tracking-widest text-saffron font-bold">01</span>
          <h1 className="font-cinzel text-3xl md:text-4xl text-maroon-deep font-bold text-center">Sacred Rituals & Shraddh</h1>
        </div>
        <p className="text-ink-soft italic text-center mb-10 font-noto text-lg">
          Honoring ancestors through Tarpan, Prayers, and Divine Offerings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Pitru Tarpan",
              desc: "Sacred water and sesame seed offerings guided by ancient parampara to honor departed ancestors.",
              icon: "🔱"
            },
            {
              title: "Hawan & Sadhana",
              desc: "Vedic fire rituals and mantra chanting for purification and spiritual elevation of the lineage.",
              icon: "🔥"
            },
            {
              title: "Special Dates Observance",
              desc: "Guidance on specific muhurtas like Maha Bharani, Matru Navami, and Sarvapitri Amavasya.",
              icon: "📅"
            },
            {
              title: "Vedic Astrology",
              desc: "Deep analysis of your birth chart to uncover karmic patterns and future opportunities.",
              icon: "✨"
            },
            {
              title: "Vastu Shastra",
              desc: "Harmonizing your living and workspace with cosmic energies for peace and prosperity.",
              icon: "🏡"
            },
            {
              title: "Personalized Upayas",
              desc: "Effective and scripturally backed remedies for doshas and challenging planetary periods.",
              icon: "📿"
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-gradient-to-br from-amber-50/75 to-parchment-2/50 border border-gold/35 rounded-lg p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-saffron transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-khand text-2xl text-maroon font-bold mb-3">{service.title}</h3>
              <p className="font-noto text-ink-soft text-lg leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daan & Seva */}
      <section>
        <div className="flex items-baseline gap-4 mb-4 justify-center">
          <span className="font-cinzel text-sm tracking-widest text-saffron font-bold">02</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-maroon-deep font-bold text-center">Charity & Compassion</h2>
        </div>
        <p className="text-ink-soft italic text-center mb-10 font-noto text-lg">
          Brahman Bhojan, Anna Daan, and Gau Seva
        </p>
        
        <div className="bg-parchment-2/40 border border-gold/40 rounded-xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          <ul className="list-none p-0 space-y-6">
            {[
              "Brahman Bhojan: Providing sattvic meals and dakshina to learned priests.",
              "Gau Seva (Cow Service): Feeding cows with roti and green fodder, supporting local gaushalas.",
              "Anna Daan: Distributing essential food items and rations to the needy.",
              "Vidyadaan: Supporting underprivileged children with educational materials."
            ].map((item, idx) => (
              <li key={idx} className="relative pl-10 pb-4 border-b border-dotted border-gold/40 last:border-0 font-noto text-ink-soft text-xl">
                <span className="absolute left-2 top-1 text-gold text-2xl leading-none">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
