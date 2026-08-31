import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import book1 from '../assets/images/book_million_dollar_brand_1788180037222.jpg';
import book2 from '../assets/images/book_stage_selling_mastery_1788180050910.jpg';
import book3 from '../assets/images/book_category_monopoly_1788180067621.jpg';
import book4 from '../assets/images/book_influence_with_love_1788180079901.jpg';

interface BooksShowcaseSectionProps {
  showPlaceholdersOnly?: boolean;
}

export const BooksShowcaseSection: React.FC<BooksShowcaseSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      id: 'book-1',
      title: 'THE MILLION DOLLAR BRAND BLUEPRINT',
      badge: 'Wall Street Journal Best Seller',
      image: book1,
    },
    {
      id: 'book-2',
      title: 'STAGE SELLING MASTERY',
      badge: 'USA Today National Best Seller',
      image: book2,
    },
    {
      id: 'book-3',
      title: 'CATEGORY MONOPOLY',
      badge: 'Global Authority Award Winner',
      image: book3,
    },
    {
      id: 'book-4',
      title: 'INFLUENCE WITH LOVE',
      badge: 'Philanthropy & Purpose Leader',
      image: book4,
    }
  ];

  // Smooth auto slide every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [books.length]);

  const currentBook = books[currentIndex];

  return (
    <section
      id="sec-books"
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Background Atmosphere Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_50%,rgba(8,22,47,0.8),#000000_80%)] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Clean Dan Martell-style Text Block (Only Header & Description) */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557]">
              <Sparkles className="w-4 h-4 fill-current" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FCE689] uppercase">
                BEST-SELLING BOOKS &amp; PLAYBOOKS
              </span>
            </div>

            {/* General Header (Dan Martell Punchy Style) */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[78px] font-normal font-bebas text-white tracking-wide uppercase leading-[0.95]">
              EXPAND YOUR INFLUENCE, <br />
              <span className="text-zinc-300">MASTER THE STAGE &amp; </span>
              <span className="text-gold-gradient">BUILD YOUR EMPIRE</span>
            </h2>

            {/* General Description */}
            <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed">
              Rey Perez's best-selling books provide the proven blueprints, organic client acquisition frameworks, and high-ticket stage conversion strategies used by 7 and 8-figure leaders worldwide. Get the exact step-by-step guides to scale your authority, dominate your niche, and unlock true impact.
            </p>

          </div>

          {/* RIGHT: 3D Book Interactive Slider Showcase (Clean & Ultra-Focused) */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[400px] sm:min-h-[480px]">
            
            {/* Ambient Backlight for the 3D Book */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-[#08162F] via-[#ECC557]/15 to-transparent rounded-full blur-2xl" />
            </div>

            {/* Animated 3D Book Render Slider */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBook.id}
                  initial={{ opacity: 0, scale: 0.9, x: 30, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -30, rotateY: 10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={currentBook.image}
                    alt={currentBook.title}
                    className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
                  />

                  {/* Best Seller Gold Badge Overlay */}
                  <div className="absolute -top-2 -right-2 sm:top-2 sm:right-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#08162F] to-black border border-[#ECC557] text-[#FCE689] shadow-[0_0_20px_rgba(236,197,87,0.4)] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#ECC557] fill-current" />
                    <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                      {currentBook.badge}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
