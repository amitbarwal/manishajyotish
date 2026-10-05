import type { Metadata } from "next";
import { Khand, Noto_Serif_Devanagari, Cinzel, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
        <nav className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-md border-b border-gold/40 px-6 py-3">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full border-2 border-gold/50 flex items-center justify-center bg-gradient-to-br from-maroon to-maroon-deep text-white font-cinzel font-bold text-lg group-hover:scale-105 transition-transform shadow-sm">
                MJ
              </div>
              <span className="font-cinzel font-bold text-maroon hidden sm:block tracking-widest text-sm">
                Manisha Jyotish
              </span>
            </Link>

            {/* Links */}
            <div className="flex gap-2 overflow-x-auto items-center scrollbar-hide">
              <Link href="/" className="font-cinzel text-xs tracking-wider text-ink-soft px-3 py-2 rounded-md hover:bg-gold/10 hover:text-maroon whitespace-nowrap transition-colors">
                Home
              </Link>
              <Link href="/about" className="font-cinzel text-xs tracking-wider text-ink-soft px-3 py-2 rounded-md hover:bg-gold/10 hover:text-maroon whitespace-nowrap transition-colors">
                About Us
              </Link>
              <Link href="/services" className="font-cinzel text-xs tracking-wider text-ink-soft px-3 py-2 rounded-md hover:bg-gold/10 hover:text-maroon whitespace-nowrap transition-colors">
                Services
              </Link>
              <Link href="/privacy" className="font-cinzel text-xs tracking-wider text-ink-soft px-3 py-2 rounded-md hover:bg-gold/10 hover:text-maroon whitespace-nowrap transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="font-cinzel text-xs tracking-wider text-ink-soft px-3 py-2 rounded-md hover:bg-gold/10 hover:text-maroon whitespace-nowrap transition-colors">
                Contact Us
              </Link>
              <Link href="/guidebook" className="font-cinzel text-xs tracking-wider text-maroon font-bold px-4 py-2 rounded-md bg-gold/10 hover:bg-gold/25 whitespace-nowrap transition-colors border border-maroon/20 ml-2 shadow-sm">
                Spiritual Guidebook
              </Link>
            </div>

          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="text-center py-12 px-5 border-t border-gold/40 relative z-10 font-noto bg-gradient-to-b from-transparent to-maroon/5 mt-10">
          
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="text-4xl text-maroon font-extrabold om-text">ॐ</div>
            <div className="w-[1px] h-10 bg-gold/50"></div>
            <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center bg-gradient-to-br from-maroon to-maroon-deep text-parchment font-cinzel font-bold text-xl shadow-md">
              MJ
            </div>
          </div>

          <p className="text-ink-soft text-sm mb-6 max-w-md mx-auto italic font-cormorant text-lg">
            "Bowing with devotion to all deities and revered ancestors." 🙏
          </p>
          
          <div className="font-cinzel text-xs tracking-widest text-saffron font-bold mb-2">
            Manisha Jyotish
          </div>
          <div className="font-cinzel text-xs tracking-wider text-ink-soft opacity-80">
            Pandit Monu Sharma • © {new Date().getFullYear()} All Rights Reserved
          </div>
        </footer>

      </body>
    </html>
  );
}
