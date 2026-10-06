import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 py-16 relative z-10">
      <section className="text-center mb-16">
        <span className="inline-block px-5 py-2 border border-gold rounded-full text-maroon font-cinzel text-xs tracking-widest mb-6 font-bold">
          🙏 ABOUT ACHARYA MONU SHARMA 🙏
        </span>
        <h1 className="font-cinzel text-maroon-deep text-4xl md:text-5xl mb-4 font-bold">
          आचार्य मोनू शर्मा
        </h1>
        <h3 className="font-cormorant text-2xl text-maroon font-semibold mb-8">
          🔱 वैदिक ज्ञान • KP Astrology • कर्मकाण्ड • आध्यात्मिक मार्गदर्शन
        </h3>
        
        <div className="border border-gold/40 rounded-xl bg-gradient-to-b from-amber-50/90 to-parchment-2/60 p-8 md:p-12 shadow-sm text-left max-w-4xl mx-auto space-y-8">
          
          {/* Image and Intro block */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-56 h-56 md:w-72 md:h-80 shrink-0 rounded-2xl overflow-hidden border-4 border-gold/40 shadow-xl relative">
              <Image src="/monu-sharma.jpg" alt="Acharya Monu Sharma" fill sizes="(max-width: 768px) 224px, 288px" className="object-cover object-top" />
            </div>
            <div className="space-y-4 text-ink-soft font-noto text-lg leading-relaxed flex-1">
              <p className="font-bold text-maroon text-xl text-center md:text-left">हर हर महादेव।</p>
              <p>
                मैं <strong>आचार्य मोनू शर्मा</strong> हूँ। मेरा उद्देश्य केवल भविष्य बताना नहीं, बल्कि सनातन ज्ञान के माध्यम से प्रत्येक व्यक्ति को सही दिशा, आत्मविश्वास और आध्यात्मिक उन्नति की ओर प्रेरित करना है।
              </p>
              <p className="italic font-semibold text-maroon-deep">
                "मेरा विश्वास है कि ज्योतिष केवल भविष्यवाणी नहीं, बल्कि जीवन को समझने और सही निर्णय लेने का दिव्य विज्ञान है।"
              </p>
              <p>
                KP Astrology, वैदिक ज्योतिष, कर्मकाण्ड, मंत्र साधना और आध्यात्मिक अध्ययन के माध्यम से मैं लोगों की समस्याओं का समाधान खोजने का प्रयास करता हूँ।
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gold/30 my-8"></div>

          {/* Objectives */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-maroon text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">🌺</span> मेरा उद्देश्य
            </h2>
            <ul className="list-disc list-inside text-ink-soft font-noto text-lg space-y-2 ml-4">
              <li>लोगों को सही मार्गदर्शन देना।</li>
              <li>ज्योतिष को वैज्ञानिक एवं तर्कसंगत रूप में प्रस्तुत करना।</li>
              <li>सनातन धर्म का प्रचार एवं प्रसार करना।</li>
              <li>कर्मकाण्ड एवं वैदिक संस्कारों को समाज तक पहुँचाना।</li>
              <li>साधना एवं आध्यात्मिक जीवन के प्रति जागरूकता बढ़ाना।</li>
            </ul>
          </div>

          <div className="w-full h-px bg-gold/30 my-8"></div>

          {/* Services */}
          <div>
            <h2 className="font-cinzel text-maroon text-3xl font-bold flex items-center gap-2 mb-8 justify-center">
              <span className="text-3xl">🔯</span> हमारी प्रमुख सेवाएँ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white/50 p-6 rounded-lg border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-cormorant text-maroon-deep text-xl font-bold mb-4 flex items-center gap-2 border-b border-gold/30 pb-2">
                  <span>⭐</span> KP Astrology
                </h3>
                <ul className="list-disc list-inside text-ink-soft font-noto space-y-1">
                  <li>करियर</li>
                  <li>नौकरी</li>
                  <li>व्यापार</li>
                  <li>विवाह</li>
                  <li>प्रेम</li>
                  <li>विदेश योग</li>
                  <li>संतान</li>
                  <li>स्वास्थ्य</li>
                  <li>कोर्ट केस</li>
                  <li>संपत्ति विवाद</li>
                  <li>आर्थिक स्थिति</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-white/50 p-6 rounded-lg border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-cormorant text-maroon-deep text-xl font-bold mb-4 flex items-center gap-2 border-b border-gold/30 pb-2">
                  <span>🔥</span> वैदिक कर्मकाण्ड
                </h3>
                <ul className="list-disc list-inside text-ink-soft font-noto space-y-1 text-sm">
                  <li>गृह प्रवेश</li>
                  <li>भूमि पूजन</li>
                  <li>वास्तु शांति</li>
                  <li>रुद्राभिषेक</li>
                  <li>महामृत्युंजय जाप</li>
                  <li>नवग्रह शांति</li>
                  <li>सत्यनारायण कथा</li>
                  <li>दुर्गा सप्तशती पाठ</li>
                  <li>हवन एवं यज्ञ</li>
                  <li>पितृ दोष निवारण</li>
                  <li>श्राद्ध कर्म</li>
                  <li>त्रिपिंडी श्राद्ध</li>
                  <li>नारायणबली</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-white/50 p-6 rounded-lg border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-cormorant text-maroon-deep text-xl font-bold mb-4 flex items-center gap-2 border-b border-gold/30 pb-2">
                  <span>🕉️</span> साधना मार्गदर्शन
                </h3>
                <ul className="list-disc list-inside text-ink-soft font-noto space-y-1">
                  <li>श्री यंत्र साधना</li>
                  <li>माँ बगलामुखी साधना</li>
                  <li>माँ प्रत्यंगिरा साधना</li>
                  <li>काल भैरव साधना</li>
                  <li>महाकाली साधना</li>
                  <li>गुप्त नवरात्रि साधना</li>
                  <li>कालाष्टमी साधना</li>
                  <li>मंत्र चयन</li>
                  <li>ध्यान एवं आध्यात्मिक मार्गदर्शन</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gold/30 my-8"></div>

          {/* Research */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-maroon text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">📚</span> अध्ययन एवं शोध
            </h2>
            <p className="text-ink-soft font-noto text-lg mb-4">
              मैं निरंतर निम्न विषयों पर अध्ययन एवं शोध करता हूँ—
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "KP Astrology", "Medical Astrology", "Horary Astrology", "Nakshatra Research", 
                "ग्रह एवं भाव विश्लेषण", "वैदिक कर्मकाण्ड", "मंत्र विज्ञान", "यंत्र विज्ञान", 
                "तंत्र साधना", "श्रीविद्या"
              ].map((topic, idx) => (
                <span key={idx} className="bg-maroon/5 text-maroon border border-maroon/20 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gold/30 my-8"></div>

          {/* Sankalp */}
          <div className="text-center space-y-4 bg-maroon/5 p-8 rounded-xl border border-maroon/20 shadow-inner">
            <h2 className="font-cinzel text-maroon text-2xl font-bold flex justify-center items-center gap-2">
              <span className="text-3xl">🌼</span> हमारा संकल्प
            </h2>
            <p className="font-cormorant text-3xl text-maroon-deep font-bold italic py-2">
              "ज्ञान, सेवा और साधना"
            </p>
            <p className="text-ink-soft font-noto text-lg max-w-2xl mx-auto">
              हमारा प्रयास है कि प्रत्येक व्यक्ति को उसकी समस्या के अनुसार उचित मार्गदर्शन मिले तथा वह अपने जीवन में शांति, सफलता और आध्यात्मिक संतुलन प्राप्त कर सके।
            </p>
          </div>

          {/* Consultation */}
          <div className="mt-12 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-8 rounded-xl border border-gold/30">
            <h2 className="font-cinzel text-maroon text-2xl font-bold mb-8 text-center flex justify-center items-center gap-2">
              <span className="text-3xl">📞</span> Consultation
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 text-ink-soft font-noto text-lg bg-white/60 px-4 py-2 rounded-lg border border-gold/20">
                <div className="text-2xl">📲</div>
                <span className="font-semibold text-maroon-deep">WhatsApp Consultation</span>
              </div>
              <div className="flex items-center gap-3 text-ink-soft font-noto text-lg bg-white/60 px-4 py-2 rounded-lg border border-gold/20">
                <div className="text-2xl">💻</div>
                <span className="font-semibold text-maroon-deep">Online Video Consultation</span>
              </div>
              <div className="flex items-center gap-3 text-ink-soft font-noto text-lg bg-white/60 px-4 py-2 rounded-lg border border-gold/20">
                <div className="text-2xl">🏡</div>
                <span className="font-semibold text-maroon-deep">Offline Consultation</span>
              </div>
              <div className="flex items-center gap-3 text-ink-soft font-noto text-lg w-full justify-center mt-4">
                <div className="text-2xl animate-pulse">📅</div>
                <span className="font-bold text-maroon bg-white/80 px-6 py-3 rounded-full border border-maroon/30 shadow-sm uppercase tracking-wide text-sm">
                  Advance Appointment Required
                </span>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center space-y-6 mt-16 pb-4">
            <h2 className="font-cinzel text-maroon text-2xl font-bold flex justify-center items-center gap-2">
              <span className="text-3xl">🔱</span> अंतिम संदेश
            </h2>
            <p className="font-cormorant text-2xl md:text-3xl text-maroon-deep italic font-medium leading-relaxed max-w-3xl mx-auto">
              "ज्योतिष भय का विषय नहीं, बल्कि प्रकाश का मार्ग है। सही मार्गदर्शन, सही समय और सही कर्म—यही जीवन की सबसे बड़ी सफलता है।"
            </p>
            <p className="font-bold text-maroon text-2xl mt-4">हर हर महादेव।</p>
          </div>

        </div>
      </section>
    </div>
  );
}
