"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSlider = () => {
  const slides = [
    {
      title: "Awaken Your Cosmic Destiny",
      subtitle: "Vedic Astrology & Spiritual Guidance",
      desc: "Unlock the hidden patterns of your life with profound insights from Pandit Monu Sharma.",
      icon: "✨",
      bg: "from-maroon/20 via-transparent to-transparent"
    },
    {
      title: "Honoring Ancestral Roots",
      subtitle: "Sacred Rituals & Pitru Tarpan",
      desc: "Perform authentic Vedic rituals to seek blessings from your ancestors and clear karmic blockages.",
      icon: "🔱",
      bg: "from-saffron/20 via-transparent to-transparent"
    },
    {
      title: "Harmony in Your Space",
      subtitle: "Vastu Shastra Consultation",
      desc: "Align your home and workspace with universal energies for peace, prosperity, and health.",
      icon: "🏡",
      bg: "from-teal/20 via-transparent to-transparent"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden border-b border-gold/35">
      {slides.map((slide, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 bg-gradient-to-b ${slide.bg} transition-opacity duration-1000 flex flex-col items-center justify-center text-center px-6 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="text-6xl mb-6 drop-shadow-md animate-bounce">{slide.icon}</div>
          <h1 className="font-cinzel text-maroon-deep text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 drop-shadow-sm">
            {slide.title}
          </h1>
          <h2 className="font-cormorant text-2xl md:text-3xl text-maroon font-semibold italic mb-4">
            {slide.subtitle}
          </h2>
          <p className="font-noto text-ink-soft text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {slide.desc}
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/contact" className="font-cinzel border border-gold rounded-full px-8 py-3 bg-maroon text-white hover:bg-maroon-deep hover:shadow-lg hover:shadow-maroon/20 transition-all duration-300 tracking-wider">
              Book a Consultation
            </Link>
            <Link href="/services" className="font-cinzel border border-gold rounded-full px-8 py-3 bg-parchment-2/50 backdrop-blur-sm text-maroon hover:bg-maroon hover:text-white transition-colors duration-300 tracking-wider">
              Explore Services
            </Link>
          </div>
        </div>
      ))}
      
      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-maroon w-8' : 'bg-gold/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Trust Stats Section */}
      <section className="py-12 bg-maroon-deep text-parchment border-b border-gold/40 relative z-10">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gold/20">
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-saffron font-bold mb-2">15+</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80">Years Experience</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-saffron font-bold mb-2">10k+</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80">Horoscopes Read</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-saffron font-bold mb-2">100%</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80">Confidentiality</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-saffron font-bold mb-2">500+</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80">Rituals Performed</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 max-w-[1120px] mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="font-cinzel text-saffron tracking-widest text-sm font-bold uppercase">The Path of Truth</span>
          <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mt-2 mb-4">Why Trust Pandit Monu Sharma?</h2>
          <div className="h-[2px] w-24 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Scriptural Authenticity",
              desc: "Every ritual and astrological reading is deeply rooted in authentic Vedic scriptures and parampara, ensuring spiritual purity.",
              icon: "📜"
            },
            {
              title: "Compassionate Guidance",
              desc: "We listen to your life's challenges with empathy and provide practical, honest, and spiritually elevating solutions.",
              icon: "🙏"
            },
            {
              title: "Absolute Privacy",
              desc: "Your personal details, charts, and consultations are treated with the highest level of sanctity and absolute confidentiality.",
              icon: "🔒"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-amber-50/60 border border-gold/30 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-khand text-2xl text-maroon font-bold mb-3">{item.title}</h3>
              <p className="font-noto text-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-parchment-2/40 border-y border-gold/20 relative z-10">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mb-4">Our Sacred Offerings</h2>
            <p className="font-noto text-ink-soft text-lg max-w-2xl mx-auto italic">Guiding you through life's cosmic journey with wisdom and devotion.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl border border-gold/40 bg-parchment p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-6 text-maroon/20 group-hover:text-maroon/40 transition-colors absolute top-4 right-4">⭐</div>
              <h3 className="font-cinzel text-2xl text-maroon font-bold mb-4 relative z-10">Vedic Astrology</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Discover your life's blueprint through precise Janam Kundali analysis and planetary transits.</p>
              <Link href="/services" className="text-saffron font-bold font-cinzel text-sm tracking-wider hover:text-maroon transition-colors relative z-10">Read More →</Link>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-gold/40 bg-parchment p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-6 text-maroon/20 group-hover:text-maroon/40 transition-colors absolute top-4 right-4">🔥</div>
              <h3 className="font-cinzel text-2xl text-maroon font-bold mb-4 relative z-10">Vedic Rituals</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Authentic Hawans, Pujas, and Pitru Tarpan performed with strict adherence to Shastras.</p>
              <Link href="/services" className="text-saffron font-bold font-cinzel text-sm tracking-wider hover:text-maroon transition-colors relative z-10">Read More →</Link>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-gold/40 bg-parchment p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-6 text-maroon/20 group-hover:text-maroon/40 transition-colors absolute top-4 right-4">🤲</div>
              <h3 className="font-cinzel text-2xl text-maroon font-bold mb-4 relative z-10">Daan & Seva</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Engage in karmic cleansing through guided charity, Brahman Bhojan, and Gau Seva.</p>
              <Link href="/services" className="text-saffron font-bold font-cinzel text-sm tracking-wider hover:text-maroon transition-colors relative z-10">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 max-w-[1120px] mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mb-4">Voices of Faith</h2>
          <div className="h-[2px] w-24 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Pandit ji's astrological reading was incredibly accurate. His upayas brought immediate peace to my family disputes.",
              name: "Rahul Verma",
              location: "New Delhi"
            },
            {
              quote: "The Pitru Paksha Tarpan was conducted with such purity and devotion. I felt a profound sense of spiritual relief.",
              name: "Sneha Sharma",
              location: "Mumbai"
            },
            {
              quote: "His Vastu advice transformed the energy of our new home. Truly blessed to have found his guidance.",
              name: "Amit Desai",
              location: "Ahmedabad"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-parchment to-parchment-2 border border-gold/30 rounded-br-3xl rounded-tl-3xl p-8 relative">
              <div className="text-4xl text-saffron/40 absolute top-4 left-4 font-serif">"</div>
              <p className="font-noto text-ink-soft italic leading-relaxed mb-6 relative z-10 pt-4">
                {testimonial.quote}
              </p>
              <div className="border-t border-gold/20 pt-4">
                <div className="font-cinzel font-bold text-maroon">{testimonial.name}</div>
                <div className="font-noto text-sm text-ink-soft">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 mb-10 max-w-[900px] mx-auto px-6 relative z-10">
        <div className="border-2 border-gold rounded-2xl p-10 md:p-14 bg-gradient-to-b from-amber-50/95 to-parchment-2/80 shadow-[0_6px_22px_var(--shadow)] text-center">
          <div className="font-noto text-4xl text-maroon-deep font-extrabold mb-4 leading-loose">
            ॐ सर्वे भवन्तु सुखिनः
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl text-maroon mb-6 font-bold tracking-wide">
            Ready to Find Clarity & Peace?
          </h2>
          <p className="font-noto text-ink-soft mb-8 text-lg max-w-xl mx-auto">
            Book a confidential consultation today to explore your astrological chart or arrange a sacred ritual tailored to your spiritual needs.
          </p>
          <Link href="/contact" className="inline-block font-cinzel border border-gold rounded-full px-10 py-4 bg-maroon text-white hover:bg-maroon-deep hover:shadow-xl transition-all duration-300 text-lg font-bold tracking-widest">
            Contact Pandit Ji Now
          </Link>
        </div>
      </section>
    </>
  );
}
