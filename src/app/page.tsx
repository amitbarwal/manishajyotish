"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial Entrance Animation
    gsap.fromTo(".hero-text-block > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );

    // Image Entrance Animation
    gsap.fromTo(".hero-image-block",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.4 }
    );
  }, { scope: container });

  return (
    <div ref={container} className="relative min-h-[80vh] md:min-h-[85vh] w-full flex items-stretch pt-24 overflow-hidden">
      {/* Light Theme Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-parchment via-amber-50 to-parchment-2">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Text */}
        <div className="hero-text-block flex flex-col items-start justify-center text-left order-2 lg:order-1 mt-8 lg:mt-0 pb-16">
          <div className="mb-6">
             <span className="inline-block px-5 py-2 border border-gold rounded-full text-maroon font-cinzel text-xs tracking-widest font-bold bg-white/50 backdrop-blur-sm shadow-sm">
               ✨ VEDIC ASTROLOGY ✨
             </span>
          </div>
          <h1 className="font-cinzel text-maroon-deep text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 leading-tight max-w-2xl">
            Awaken Your Cosmic Destiny
          </h1>
          <h2 className="font-cormorant text-xl md:text-2xl lg:text-3xl text-maroon font-semibold italic mb-8">
            Spiritual Guidance & Authentic Rituals
          </h2>
          <p className="font-noto text-ink-soft text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Unlock the hidden patterns of your life with profound insights from Pandit Monu Sharma.
          </p>
          <div className="flex gap-4 flex-wrap justify-start">
            <Link href="/contact" className="font-cinzel border border-gold rounded-full px-8 py-3 bg-gradient-to-r from-maroon to-maroon-deep text-parchment hover:shadow-[0_0_20px_rgba(107,31,26,0.3)] hover:scale-105 transition-all duration-300 tracking-widest font-bold text-sm">
              Book a Consultation
            </Link>
            <Link href="/services" className="font-cinzel border border-maroon/30 rounded-full px-8 py-3 bg-white/60 backdrop-blur-md text-maroon-deep hover:bg-maroon hover:text-parchment hover:scale-105 transition-all duration-300 tracking-widest font-bold text-sm">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Side: Image (Transparent Background) */}
        <div className="hero-image-block order-1 lg:order-2 flex justify-center lg:justify-end relative h-[400px] md:h-[500px] lg:h-[650px] w-full self-end lg:-mr-12">
           <Image 
             src="/monu-transperent.png" 
             alt="Acharya Monu Sharma" 
             fill 
             sizes="(max-width: 1024px) 100vw, 50vw" 
             className="object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]" 
             priority 
           />
        </div>

      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Stats Section */}
      <section className="py-12 border-y border-gold/40 relative z-20 bg-gradient-to-r from-amber-50 to-parchment-2 shadow-sm">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gold/30">
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-maroon-deep font-bold mb-2">15+</div>
            <div className="font-noto text-sm tracking-widest uppercase text-maroon/80 font-bold">Years Experience</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-maroon-deep font-bold mb-2">10k+</div>
            <div className="font-noto text-sm tracking-widest uppercase text-maroon/80 font-bold">Horoscopes Read</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-maroon-deep font-bold mb-2">100%</div>
            <div className="font-noto text-sm tracking-widest uppercase text-maroon/80 font-bold">Confidentiality</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-maroon-deep font-bold mb-2">500+</div>
            <div className="font-noto text-sm tracking-widest uppercase text-maroon/80 font-bold">Rituals Performed</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 max-w-[1120px] mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="font-cinzel text-maroon tracking-widest text-sm font-bold uppercase">The Path of Truth</span>
          <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mt-2 mb-4">Why Trust Pandit Monu Sharma?</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
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
            <div key={idx} className="bg-gradient-to-b from-amber-50/90 to-parchment-2/60 border border-gold/40 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-khand text-2xl text-maroon-deep font-bold mb-3">{item.title}</h3>
              <p className="font-noto text-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 border-y border-gold/30 relative z-10 bg-amber-50/40">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mb-4">Our Sacred Offerings</h2>
            <p className="font-noto text-ink-soft text-lg max-w-2xl mx-auto italic">Guiding you through life's cosmic journey with wisdom and devotion.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl border border-gold/30 bg-white/70 backdrop-blur-sm p-8 hover:shadow-lg hover:border-gold/60 transition-all duration-300">
              <div className="text-5xl mb-6 text-maroon/10 group-hover:text-gold/40 transition-colors absolute top-4 right-4">⭐</div>
              <h3 className="font-cinzel text-2xl text-maroon-deep font-bold mb-4 relative z-10">Vedic Astrology</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Discover your life's blueprint through precise Janam Kundali analysis and planetary transits.</p>
              <Link href="/services" className="text-maroon font-bold font-cinzel text-sm tracking-wider hover:text-gold transition-colors relative z-10 uppercase">Read More →</Link>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-gold/30 bg-white/70 backdrop-blur-sm p-8 hover:shadow-lg hover:border-gold/60 transition-all duration-300">
              <div className="text-5xl mb-6 text-maroon/10 group-hover:text-gold/40 transition-colors absolute top-4 right-4">🔥</div>
              <h3 className="font-cinzel text-2xl text-maroon-deep font-bold mb-4 relative z-10">Vedic Rituals</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Authentic Hawans, Pujas, and Pitru Tarpan performed with strict adherence to Shastras.</p>
              <Link href="/services" className="text-maroon font-bold font-cinzel text-sm tracking-wider hover:text-gold transition-colors relative z-10 uppercase">Read More →</Link>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-gold/30 bg-white/70 backdrop-blur-sm p-8 hover:shadow-lg hover:border-gold/60 transition-all duration-300">
              <div className="text-5xl mb-6 text-maroon/10 group-hover:text-gold/40 transition-colors absolute top-4 right-4">🤲</div>
              <h3 className="font-cinzel text-2xl text-maroon-deep font-bold mb-4 relative z-10">Daan & Seva</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Engage in karmic cleansing through guided charity, Brahman Bhojan, and Gau Seva.</p>
              <Link href="/services" className="text-maroon font-bold font-cinzel text-sm tracking-wider hover:text-gold transition-colors relative z-10 uppercase">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 max-w-[1120px] mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mb-4">Voices of Faith</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
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
            <div key={idx} className="bg-gradient-to-b from-amber-50/90 to-parchment-2/60 border border-gold/40 shadow-sm rounded-br-3xl rounded-tl-3xl p-8 relative">
              <div className="text-5xl text-gold/30 absolute top-2 left-4 font-serif">"</div>
              <p className="font-noto text-ink-soft italic leading-relaxed mb-6 relative z-10 pt-4">
                {testimonial.quote}
              </p>
              <div className="border-t border-maroon/10 pt-4">
                <div className="font-cinzel font-bold text-maroon-deep">{testimonial.name}</div>
                <div className="font-noto text-sm text-ink-soft/80">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 mb-10 max-w-[900px] mx-auto px-6 relative z-10">
        <div className="border border-gold/40 rounded-2xl p-10 md:p-14 bg-gradient-to-b from-amber-50 to-parchment shadow-sm text-center relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 text-gold/60 text-2xl">✧</div>
          <div className="absolute top-4 right-4 text-gold/60 text-2xl">✧</div>
          <div className="absolute bottom-4 left-4 text-gold/60 text-2xl">✧</div>
          <div className="absolute bottom-4 right-4 text-gold/60 text-2xl">✧</div>

          <div className="font-noto text-4xl text-maroon font-extrabold mb-4 leading-loose om-text">
            ॐ सर्वे भवन्तु सुखिनः
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl text-maroon-deep mb-6 font-bold tracking-wide">
            Ready to Find Clarity & Peace?
          </h2>
          <p className="font-noto text-ink-soft mb-8 text-lg max-w-xl mx-auto">
            Book a confidential consultation today to explore your astrological chart or arrange a sacred ritual tailored to your spiritual needs.
          </p>
          <Link href="/contact" className="inline-block font-cinzel border border-gold/50 rounded-full px-10 py-4 bg-maroon text-parchment hover:bg-maroon-deep hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-bold tracking-widest uppercase">
            Contact Pandit Ji Now
          </Link>
        </div>
      </section>
    </>
  );
}
