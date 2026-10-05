"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
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

    // Scroll Fade Out Animation
    gsap.to(".hero-text-block", {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -150,
      opacity: 0,
      scale: 0.95
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative h-[100vh] w-full">
      {/* Sticky Background - Premium Maroon/Ink Fallback */}
      <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden z-0 bg-gradient-to-br from-maroon-deep via-[#1a0e08] to-maroon">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 object-cover w-full h-full opacity-30 mix-blend-screen"
        >
          {/* Add a video named hero-bg.mp4 in the public folder to use it */}
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Golden dust texture overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        {/* Gradient Overlay that fades into the rest of the site */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1a0e08]"></div>
      </div>

      {/* Hero Content aligned center */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 mt-10">
        <div className="hero-text-block flex flex-col items-center">
          <div className="text-5xl md:text-6xl mb-6 drop-shadow-[0_0_20px_rgba(212,168,90,0.6)]">
            ✨
          </div>
          <h1 className="font-cinzel text-parchment text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] leading-tight max-w-4xl">
            Awaken Your Cosmic Destiny
          </h1>
          <h2 className="font-cormorant text-xl md:text-2xl lg:text-3xl text-gold font-semibold italic mb-6 drop-shadow-[0_0_15px_rgba(212,168,90,0.3)]">
            Vedic Astrology & Spiritual Guidance
          </h2>
          <p className="font-noto text-parchment-2 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Unlock the hidden patterns of your life with profound insights from Pandit Monu Sharma.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/contact" className="font-cinzel border border-gold rounded-full px-8 py-3 bg-gradient-to-r from-gold to-gold-soft text-ink hover:shadow-[0_0_25px_rgba(176,132,56,0.6)] hover:scale-105 transition-all duration-300 tracking-widest font-bold text-sm">
              Book a Consultation
            </Link>
            <Link href="/services" className="font-cinzel border border-gold/40 rounded-full px-8 py-3 bg-ink/40 backdrop-blur-md text-gold hover:bg-gold hover:text-ink hover:scale-105 transition-all duration-300 tracking-widest font-bold text-sm">
              Explore Services
            </Link>
          </div>
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
      <section className="py-12 bg-gradient-to-r from-maroon-deep to-maroon text-parchment border-y border-gold/40 relative z-20 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gold/30">
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-gold-soft font-bold mb-2 drop-shadow-md">15+</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80 text-parchment-2">Years Experience</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-gold-soft font-bold mb-2 drop-shadow-md">10k+</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80 text-parchment-2">Horoscopes Read</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-gold-soft font-bold mb-2 drop-shadow-md">100%</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80 text-parchment-2">Confidentiality</div>
          </div>
          <div>
            <div className="font-cinzel text-3xl md:text-4xl text-gold-soft font-bold mb-2 drop-shadow-md">500+</div>
            <div className="font-noto text-sm tracking-widest uppercase opacity-80 text-parchment-2">Rituals Performed</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 max-w-[1120px] mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="font-cinzel text-saffron tracking-widest text-sm font-bold uppercase drop-shadow-sm">The Path of Truth</span>
          <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mt-2 mb-4 drop-shadow-sm">Why Trust Pandit Monu Sharma?</h2>
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
            <div key={idx} className="bg-gradient-to-b from-parchment to-parchment-2 border border-gold/30 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_15px_var(--shadow)]">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-khand text-2xl text-maroon-deep font-bold mb-3">{item.title}</h3>
              <p className="font-noto text-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-b from-parchment-2/50 to-parchment/80 border-y border-maroon/10 relative z-10 shadow-inner">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm">Our Sacred Offerings</h2>
            <p className="font-noto text-ink-soft text-lg max-w-2xl mx-auto italic">Guiding you through life's cosmic journey with wisdom and devotion.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl border border-maroon/20 bg-gradient-to-br from-parchment to-parchment-2 p-8 hover:shadow-[0_8px_25px_var(--shadow)] hover:border-gold/50 transition-all duration-300">
              <div className="text-5xl mb-6 text-maroon/10 group-hover:text-gold/30 transition-colors absolute top-4 right-4">⭐</div>
              <h3 className="font-cinzel text-2xl text-maroon-deep font-bold mb-4 relative z-10">Vedic Astrology</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Discover your life's blueprint through precise Janam Kundali analysis and planetary transits.</p>
              <Link href="/services" className="text-maroon font-bold font-cinzel text-sm tracking-wider hover:text-saffron transition-colors relative z-10 uppercase">Read More →</Link>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-maroon/20 bg-gradient-to-br from-parchment to-parchment-2 p-8 hover:shadow-[0_8px_25px_var(--shadow)] hover:border-gold/50 transition-all duration-300">
              <div className="text-5xl mb-6 text-maroon/10 group-hover:text-gold/30 transition-colors absolute top-4 right-4">🔥</div>
              <h3 className="font-cinzel text-2xl text-maroon-deep font-bold mb-4 relative z-10">Vedic Rituals</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Authentic Hawans, Pujas, and Pitru Tarpan performed with strict adherence to Shastras.</p>
              <Link href="/services" className="text-maroon font-bold font-cinzel text-sm tracking-wider hover:text-saffron transition-colors relative z-10 uppercase">Read More →</Link>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-maroon/20 bg-gradient-to-br from-parchment to-parchment-2 p-8 hover:shadow-[0_8px_25px_var(--shadow)] hover:border-gold/50 transition-all duration-300">
              <div className="text-5xl mb-6 text-maroon/10 group-hover:text-gold/30 transition-colors absolute top-4 right-4">🤲</div>
              <h3 className="font-cinzel text-2xl text-maroon-deep font-bold mb-4 relative z-10">Daan & Seva</h3>
              <p className="font-noto text-ink-soft mb-6 relative z-10">Engage in karmic cleansing through guided charity, Brahman Bhojan, and Gau Seva.</p>
              <Link href="/services" className="text-maroon font-bold font-cinzel text-sm tracking-wider hover:text-saffron transition-colors relative z-10 uppercase">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 max-w-[1120px] mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-cinzel text-maroon-deep text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm">Voices of Faith</h2>
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
            <div key={idx} className="bg-white/40 backdrop-blur-sm border border-gold/40 shadow-[0_4px_15px_var(--shadow)] rounded-br-3xl rounded-tl-3xl p-8 relative">
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
        <div className="border-2 border-maroon/20 rounded-2xl p-10 md:p-14 bg-gradient-to-b from-parchment-2 to-parchment shadow-[0_10px_40px_var(--shadow)] text-center relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 text-gold/30 text-2xl">✧</div>
          <div className="absolute top-4 right-4 text-gold/30 text-2xl">✧</div>
          <div className="absolute bottom-4 left-4 text-gold/30 text-2xl">✧</div>
          <div className="absolute bottom-4 right-4 text-gold/30 text-2xl">✧</div>

          <div className="font-noto text-4xl text-maroon/80 font-extrabold mb-4 leading-loose om-text">
            ॐ सर्वे भवन्तु सुखिनः
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl text-maroon-deep mb-6 font-bold tracking-wide drop-shadow-sm">
            Ready to Find Clarity & Peace?
          </h2>
          <p className="font-noto text-ink-soft mb-8 text-lg max-w-xl mx-auto">
            Book a confidential consultation today to explore your astrological chart or arrange a sacred ritual tailored to your spiritual needs.
          </p>
          <Link href="/contact" className="inline-block font-cinzel border border-gold/50 rounded-full px-10 py-4 bg-gradient-to-r from-maroon to-maroon-deep text-parchment hover:from-maroon-deep hover:to-maroon hover:shadow-[0_4px_15px_rgba(107,31,26,0.4)] hover:scale-105 transition-all duration-300 text-lg font-bold tracking-widest uppercase">
            Contact Pandit Ji Now
          </Link>
        </div>
      </section>
    </>
  );
}
