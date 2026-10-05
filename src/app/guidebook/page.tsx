"use client";

import React, { useState } from 'react';

const AccordionItem = ({ title, icon, children, searchTerm, contentText }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (searchTerm && !title.toLowerCase().includes(searchTerm.toLowerCase()) && !contentText.toLowerCase().includes(searchTerm.toLowerCase())) {
    return null;
  }

  return (
    <div className="bg-white/40 backdrop-blur-sm border border-gold/40 rounded-xl overflow-hidden shadow-sm mb-4 hover:shadow-md hover:border-gold transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 cursor-pointer bg-gradient-to-r hover:from-amber-50/50 hover:to-parchment-2/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl text-saffron opacity-80">{icon || '🕉️'}</span>
          <span className="font-cinzel font-bold text-xl text-maroon-deep text-left">{title}</span>
        </div>
        <span className={`text-gold text-2xl font-noto transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-6 pt-2 border-t border-gold/20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Guidebook() {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    { id: 'mantras', title: 'सिद्ध मंत्र', icon: '📿' },
    { id: 'drishti', title: '60 दृष्टि सिद्धियां', icon: '👁️' },
    { id: 'sri-yantra', title: 'श्री यंत्र साधना', icon: '🔺' },
    { id: 'kalashtami', title: 'कालाष्टमी', icon: '🌙' },
    { id: 'navratri', title: 'नवरात्रि', icon: '🌺' },
    { id: 'diwali', title: 'दीपावली सप्ताह', icon: '🪔' },
    { id: 'diyas', title: 'अखंड ज्योत', icon: '🕯️' },
    { id: 'remedies', title: 'उपाय और समाधान', icon: '🌿' },
    { id: 'trilok', title: 'त्रिलोक नगरी प्रारूप', icon: '🏛️' },
  ];

  return (
    <div className="min-h-screen relative z-10 text-ink font-noto">
      
      {/* Hero Banner for Guidebook */}
      <section className="relative text-center py-20 px-6 bg-gradient-to-b from-maroon/5 to-transparent border-b border-gold/30">
        <div className="text-6xl text-maroon/20 leading-none mb-4 om-text absolute top-10 left-1/2 -translate-x-1/2 font-bold">ॐ</div>
        <span className="inline-block px-5 py-2 border border-gold rounded-full text-maroon font-cinzel text-xs tracking-widest mb-6 font-bold bg-white/50 backdrop-blur-md">
          पवित्र ज्ञान (SACRED KNOWLEDGE)
        </span>
        <h1 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl text-maroon-deep tracking-wider mb-4 relative z-10">
          आध्यात्मिक मार्गदर्शिका
        </h1>
        <p className="italic text-xl md:text-2xl text-ink-soft mb-8 max-w-2xl mx-auto relative z-10 font-noto">
          ऋषि मुद्गल द्वारा मंत्रों, यंत्रों और आध्यात्मिक साधनाओं की विशेष मार्गदर्शिका
        </p>
        
        <div className="max-w-[600px] mx-auto relative z-10">
          <div className="relative shadow-sm rounded-full overflow-hidden border border-gold/50 bg-white/60 backdrop-blur-md focus-within:border-saffron focus-within:ring-2 focus-within:ring-saffron/20 transition-all">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-saffron text-2xl">⌕</span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent p-4 pl-14 text-xl text-ink outline-none font-noto" 
              placeholder="मंत्र, साधना और निर्देश खोजें..." 
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:w-1/4">
          <div className="sticky top-24 bg-gradient-to-b from-amber-50/80 to-parchment-2/40 border border-gold/40 rounded-2xl p-6 shadow-sm">
            <h3 className="font-cinzel text-lg font-bold text-maroon-deep mb-6 pb-4 border-b border-gold/30">
              विषय सूची
            </h3>
            <nav className="flex flex-col gap-2">
              {sections.map(sec => (
                <a 
                  key={sec.id} 
                  href={`#${sec.id}`} 
                  className="flex items-center gap-3 font-cinzel text-sm tracking-wider uppercase text-ink-soft p-3 rounded-lg hover:text-maroon hover:bg-gold/15 transition-all"
                >
                  <span className="text-lg">{sec.icon}</span>
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:w-3/4 pb-20 font-noto">
          
          {/* CHAPTER I */}
          <section id="mantras" className="mb-20 scroll-mt-28">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-cinzel text-sm tracking-widest text-saffron font-bold border-b border-saffron pb-1">अध्याय I</span>
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-maroon-deep">मंत्र जाप के लिए सिद्ध मंत्र</h2>
            </div>
            <p className="italic text-ink-soft text-xl mb-8 leading-relaxed">
              दैनिक जाप के लिए सिद्ध माने जाने वाले पवित्र मंत्र, जो ईश्वरीय ऊर्जा का आवाहन करते हैं और आध्यात्मिक अभ्यास को गहरा करते हैं। पूर्ण एकाग्रता और भक्ति के साथ इनका जाप करें।
            </p>

            <div className="flex flex-col gap-2">
              <AccordionItem title="मूल ध्वनि — ॐ (OAUM)" icon="🕉️" searchTerm={searchTerm} contentText="मूल ध्वनि ॐ ओंकार वह आदि ध्वनि है जिससे पूरी सृष्टि उत्पन्न हुई है। यह हर साधना का आधारभूत बीज-मंत्र है।">
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-lg p-6 border-l-4 border-saffron shadow-sm">
                  <div className="font-noto text-maroon-deep text-center text-4xl mb-4 font-bold tracking-widest">ॐ</div>
                  <div className="text-lg text-ink-soft mt-4 pt-4 border-t border-gold/20 text-center italic">
                    यह वह आदि ध्वनि है जिससे पूरी सृष्टि उत्पन्न हुई है। यह हर साधना का आधारभूत बीज-मंत्र है।
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="गायत्री मंत्र" icon="☀️" searchTerm={searchTerm} contentText="गायत्री महामंत्र ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् यह सूर्य के दिव्य प्रकाश का आवाहन है, जो बुद्धि, ज्ञान और प्रेरणा को जाग्रत करता है।">
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-lg p-6 border-l-4 border-saffron shadow-sm">
                  <div className="font-cinzel text-sm tracking-widest text-saffron uppercase font-bold mb-4">गायत्री महामंत्र</div>
                  <div className="font-noto text-maroon-deep text-xl leading-loose font-medium">
                    ॐ भूर्भुवः स्वः<br/>तत्सवितुर्वरेण्यं<br/>भर्गो देवस्य धीमहि<br/>धियो यो नः प्रचोदयात्
                  </div>
                  <div className="text-lg text-ink-soft mt-6 pt-4 border-t border-gold/20 italic">
                    यह सूर्य के दिव्य प्रकाश का आवाहन है, जो बुद्धि, ज्ञान और प्रेरणा को जाग्रत करता है।
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="शिव मंत्र" icon="🔱" searchTerm={searchTerm} contentText="पंचाक्षरी ॐ नमः शिवाय महामृत्युंजय मंत्र ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् महान मृत्यु-विजेता मंत्र। नई साधना प्रारंभ करने से पूर्व शुद्धि काल में इसका उपयोग किया जाता है।">
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-lg p-6 border-l-4 border-saffron shadow-sm mb-6">
                  <div className="font-cinzel text-sm tracking-widest text-saffron uppercase font-bold mb-3">पंचाक्षरी मंत्र</div>
                  <div className="font-noto text-maroon-deep text-xl font-medium">ॐ नमः शिवाय</div>
                </div>
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-lg p-6 border-l-4 border-saffron shadow-sm">
                  <div className="font-cinzel text-sm tracking-widest text-saffron uppercase font-bold mb-4">महामृत्युंजय मंत्र</div>
                  <div className="font-noto text-maroon-deep text-xl leading-loose font-medium">
                    ॐ त्र्यम्बकं यजामहे<br/>सुगन्धिं पुष्टिवर्धनम्<br/>उर्वारुकमिव बन्धनान्<br/>मृत्योर्मुक्षीय मामृतात्
                  </div>
                  <div className="text-lg text-ink-soft mt-6 pt-4 border-t border-gold/20 italic">
                    महान मृत्यु-विजेता मंत्र। नई साधना प्रारंभ करने से पूर्व शुद्धि काल में इसका उपयोग किया जाता है।
                  </div>
                </div>
              </AccordionItem>
              
              <AccordionItem title="श्री गणेश मंत्र" icon="🐘" searchTerm={searchTerm} contentText="ॐ गं गां गौं गणपतये नमः बाधाओं को दूर करता है और शुभ शुरुआत सुनिश्चित करता है।">
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-lg p-6 border-l-4 border-saffron shadow-sm">
                  <div className="font-noto text-maroon-deep text-xl font-medium tracking-wide">ॐ गं गां गौं गणपतये नमः</div>
                  <div className="text-lg text-ink-soft mt-4 pt-4 border-t border-gold/20 italic">
                    यह मंत्र सभी प्रकार की बाधाओं को दूर करता है और किसी भी कार्य की शुभ शुरुआत सुनिश्चित करता है।
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="कुण्डलिनी बीज मंत्र" icon="🧘" searchTerm={searchTerm} contentText="लं मूलधार वं स्वाधिष्ठान रं मणिपूर यं अनाहत हं विशुद्ध ॐ आज्ञा सहस्रार">
                <div className="overflow-x-auto rounded-lg border border-gold/30">
                  <table className="w-full text-left bg-white/50">
                    <thead className="bg-gradient-to-r from-amber-50 to-parchment-2">
                      <tr className="border-b border-gold/40 text-maroon-deep">
                        <th className="py-4 px-6 font-bold text-lg">बीज मंत्र</th>
                        <th className="py-4 px-6 font-bold text-lg">चक्र (Chakra)</th>
                      </tr>
                    </thead>
                    <tbody className="font-noto text-ink-soft text-lg">
                      <tr className="border-b border-gold/20 hover:bg-white/60 transition-colors"><td className="py-4 px-6 font-bold text-maroon">लं (LAM)</td><td className="py-4 px-6">मूलाधार चक्र (Root Chakra)</td></tr>
                      <tr className="border-b border-gold/20 hover:bg-white/60 transition-colors"><td className="py-4 px-6 font-bold text-maroon">वं (VAM)</td><td className="py-4 px-6">स्वाधिष्ठान चक्र (Sacral Chakra)</td></tr>
                      <tr className="border-b border-gold/20 hover:bg-white/60 transition-colors"><td className="py-4 px-6 font-bold text-maroon">रं (RAM)</td><td className="py-4 px-6">मणिपूर चक्र (Solar Plexus)</td></tr>
                      <tr className="border-b border-gold/20 hover:bg-white/60 transition-colors"><td className="py-4 px-6 font-bold text-maroon">यं (YAM)</td><td className="py-4 px-6">अनाहत चक्र (Heart Chakra)</td></tr>
                      <tr className="border-b border-gold/20 hover:bg-white/60 transition-colors"><td className="py-4 px-6 font-bold text-maroon">हं (HAM)</td><td className="py-4 px-6">विशुद्ध चक्र (Throat Chakra)</td></tr>
                      <tr className="hover:bg-white/60 transition-colors"><td className="py-4 px-6 font-bold text-maroon">ॐ (OM)</td><td className="py-4 px-6">आज्ञा और सहस्रार चक्र (Third Eye & Crown)</td></tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>
            </div>
          </section>

          {/* Other Sections */}
          <div className="space-y-16">
            {[
              { id: 'drishti', num: 'II', title: '60 दृष्टि सिद्धियां', desc: 'दृष्टि पर आधारित आध्यात्मिक शक्तियाँ। ये धारणा और बोध के साठ सूक्ष्म तरीके हैं जो साधना के माध्यम से आंतरिक दृष्टि के गहरे होने पर प्रकट होते हैं।', extra: <div className="bg-teal-900/5 border border-teal-900/20 border-l-4 border-l-teal-700 rounded-lg p-5 mt-4"><span className="font-cinzel text-xs tracking-widest uppercase font-bold mb-2 block text-teal-800">उद्देश्य</span><p className="font-noto text-ink-soft text-lg">इस खंड में आध्यात्मिक धारणा के तरीकों को रेखांकित करने वाला संपूर्ण 60-कार्ड ग्रिड शामिल है।</p></div> },
              { id: 'sri-yantra', num: 'III', title: 'श्री यंत्र साधना', desc: 'श्री यंत्र पर केंद्रित एक पवित्र ज्यामितीय अभ्यास और उसका गहरा आध्यात्मिक अनुशासन।' },
              { id: 'kalashtami', num: 'IV', title: 'कालाष्टमी', desc: 'कालाष्टमी अभ्यास के लिए सख्त व्रत और अनुष्ठान संबंधी अनुशासन।' },
              { id: 'navratri', num: 'V', title: 'नवरात्रि', desc: 'देवी पूजा, साधना और भक्तिपूर्ण व्रत की नौ पवित्र रातें।' },
              { id: 'diwali', num: 'VI', title: 'दीपावली सप्ताह', desc: 'पवित्र उत्सव सप्ताह के दौरान लक्ष्मी, समृद्धि और अनुष्ठान संबंधी व्रत।' },
              { id: 'diyas', num: 'VII', title: 'अखंड ज्योत', desc: 'निरंतर दीपक (अखंड ज्योति) को बनाए रखने के लिए मार्गदर्शन और इसके अनुष्ठानिक अर्थ को समझना।' },
              { id: 'remedies', num: 'VIII', title: 'उपाय और समाधान', desc: 'व्यावहारिक आध्यात्मिक उपाय, धर्मार्थ कार्य और सहायक व्रत।' },
              { id: 'trilok', num: 'IX', title: 'त्रिलोक नगरी प्रारूप', desc: 'आध्यात्मिक योजना, दैनिक अभ्यास और प्रस्तुति के लिए एक अत्यधिक संरचित प्रारूप।' },
            ].map(sec => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28 bg-parchment-2/30 border border-gold/30 rounded-2xl p-8 md:p-10 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-saffron/10 text-saffron font-cinzel font-bold text-lg border border-saffron/30">
                    {sec.num}
                  </span>
                  <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-maroon-deep">{sec.title}</h2>
                </div>
                <p className="font-noto text-ink-soft text-lg leading-relaxed">
                  {sec.desc}
                </p>
                {sec.extra && sec.extra}
              </section>
            ))}
          </div>
        </main>
      </div>

    </div>
  );
}
