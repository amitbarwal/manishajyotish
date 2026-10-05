import type { Metadata } from "next";
import { Khand, Noto_Serif_Devanagari, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const khand = Khand({
  weight: ["500", "600", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-khand",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["devanagari", "latin"],
  variable: "--font-noto",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Pandit Monu Sharma | Astrologer Portfolio",
  description: "Official portfolio of Pandit Monu Sharma, expert in Astrology, Vastu, and Vedic Rituals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${khand.variable} ${notoSerifDevanagari.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}>
      <body className="font-noto flex flex-col min-h-screen">
        
        {/* Global Navigation */}
        <Header />

        <main className="flex-grow pt-24">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="text-center py-12 px-5 border-t border-amber-600/40 relative z-10 font-noto bg-orange-50 mt-10">
          
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="text-4xl text-red-900 font-extrabold om-text">ॐ</div>
            <div className="w-[1px] h-10 bg-amber-600/50"></div>
            <div className="w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center bg-gradient-to-br from-red-900 to-red-950 text-orange-50 font-cinzel font-bold text-xl shadow-md">
              MJ
            </div>
          </div>

          <p className="text-stone-800 text-sm mb-6 max-w-md mx-auto italic font-cormorant text-lg">
            "Bowing with devotion to all deities and revered ancestors." 🙏
          </p>
          
          <div className="font-cinzel text-xs tracking-widest text-amber-700 font-bold mb-2">
            Manisha Jyotish
          </div>
          <div className="font-cinzel text-xs tracking-wider text-stone-600">
            Pandit Monu Sharma • © {new Date().getFullYear()} All Rights Reserved
          </div>
        </footer>

      </body>
    </html>
  );
}
