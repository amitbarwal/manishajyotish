import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-16 relative z-10 font-noto">
      <h1 className="font-cinzel text-4xl md:text-5xl text-maroon-deep font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="font-cormorant text-xl text-ink-soft italic mb-10 text-center">
        Your trust and spiritual sanctity are our highest priorities.
      </p>

      <div className="bg-amber-50/70 border border-gold/30 rounded-xl p-8 md:p-12 shadow-sm text-ink-soft text-lg space-y-8">
        
        <section>
          <h2 className="font-cinzel text-2xl text-maroon font-bold mb-3">1. Information Collection</h2>
          <p className="leading-relaxed">
            When you interact with our platform to book a consultation or request spiritual guidance, we may collect personal information such as your name, date of birth, time of birth, place of birth, and contact details. This information is solely used to accurately generate astrological charts and provide precise spiritual advice.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl text-maroon font-bold mb-3">2. Confidentiality of Readings</h2>
          <p className="leading-relaxed">
            Astrological consultations and personal discussions are kept strictly confidential. Your data, life challenges, and spiritual journey are sacred. We do not sell, trade, or otherwise transfer your personal information to outside parties under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl text-maroon font-bold mb-3">3. Use of Information</h2>
          <p className="leading-relaxed mb-3">
            The information collected is used for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-gold">
            <li>To personalize your experience and deliver relevant astrological insights.</li>
            <li>To schedule and confirm appointments or rituals.</li>
            <li>To send periodic updates, spiritual guidance, or festival reminders (only if you opt-in).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl text-maroon font-bold mb-3">4. Security</h2>
          <p className="leading-relaxed">
            We implement a variety of security measures to maintain the safety of your personal information. All sensitive information provided is kept secure and accessed only by Pandit Monu Sharma and authorized assistants who manage appointments.
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-2xl text-maroon font-bold mb-3">5. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions regarding this privacy policy, you may contact us using the information on our Contact Us page.
          </p>
        </section>

      </div>
    </div>
  );
}
