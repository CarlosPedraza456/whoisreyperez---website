import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import book1 from '../assets/images/book_million_dollar_brand_1788180037222.jpg';
import book2 from '../assets/images/book_stage_selling_mastery_1788180050910.jpg';
import book3 from '../assets/images/book_category_monopoly_1788180067621.jpg';
import book4 from '../assets/images/book_influence_with_love_1788180079901.jpg';

interface BooksShowcaseSectionProps {
  showPlaceholdersOnly?: boolean;
}

export const BooksShowcaseSection: React.FC<BooksShowcaseSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const books = [
    {
      id: 'book-1',
      title: 'THE MILLION DOLLAR BRAND BLUEPRINT',
      badge: 'Wall Street Journal Best Seller',
      image: book1,
      tag: 'Brand Architecture',
      buyUrl: 'https://www.amazon.com',
    },
    {
      id: 'book-2',
      title: 'STAGE SELLING MASTERY',
      badge: 'USA Today National Best Seller',
      image: book2,
      tag: 'High-Ticket Conversion',
      buyUrl: 'https://www.amazon.com',
    },
    {
      id: 'book-3',
      title: 'CATEGORY MONOPOLY',
      badge: 'Global Authority Award Winner',
      image: book3,
      tag: 'Market Dominance',
      buyUrl: 'https://www.amazon.com',
    },
    {
      id: 'book-4',
      title: 'INFLUENCE WITH LOVE',
      badge: 'Philanthropy & Purpose Leader',
      image: book4,
      tag: 'Purpose-Driven Impact',
      buyUrl: 'https://www.amazon.com',
    }
  ];

  const total = books.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Smooth auto slide every 5 seconds if not paused by hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total, isPaused]);

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const currentBook = books[currentIndex];

  return (
    <section
      id="sec-books"
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Background Atmosphere Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_50%,rgba(8,22,47,0.85),#000000_80%)] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#ECC557]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT: Dan Martell-style Copywriting */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557]">
              <Sparkles className="w-4 h-4 fill-current" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FCE689] uppercase">
                BEST-SELLING BOOKS &amp; PLAYBOOKS
              </span>
            </div>

            {/* General Header */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-normal font-bebas text-white tracking-wide uppercase leading-[0.95]">
              EXPAND YOUR INFLUENCE, <br />
              <span className="text-zinc-300">MASTER THE STAGE &amp; </span>
              <span className="text-gold-gradient">BUILD YOUR EMPIRE</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Rey Perez's best-selling books provide the proven blueprints, organic client acquisition frameworks, and high-ticket stage conversion strategies used by 7 and 8-figure leaders worldwide.
            </p>

            {/* Active Book Detail Card */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBook.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl bg-[#08162F]/60 border border-[#ECC557]/30 backdrop-blur-sm inline-block max-w-md"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ECC557] font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentBook.badge}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase text-white font-bebas tracking-wide">
                    {currentBook.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Controls & Indicators */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-xl bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557] hover:border-[#ECC557] hover:bg-[#ECC557] hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
                  aria-label="Libro anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-xl bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557] hover:border-[#ECC557] hover:bg-[#ECC557] hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
                  aria-label="Siguiente libro"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {books.map((b, idx) => (
                  <button
                    key={b.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-gradient-to-r from-[#ECC557] to-[#FCE689] shadow-[0_0_10px_rgba(236,197,87,0.8)]'
                        : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Ver libro ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: 3-BOOK SOPHISTICATED 3D COVERFLOW SLIDER */}
          <div
            className="lg:col-span-7 flex flex-col items-center justify-center py-6 sm:py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Centered Ambient Gold & Blue Volumetric Aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] bg-gradient-to-tr from-[#08162F] via-[#ECC557]/20 to-transparent rounded-full blur-3xl opacity-80" />
            </div>

            {/* 3D Stage Container */}
            <div className="relative w-full max-w-[680px] h-[370px] sm:h-[450px] md:h-[490px] flex items-center justify-center perspective-[1200px]">
              
              {/* 1. LEFT BOOK: Less blurred, larger scale, shifted further left */}
              <motion.div
                key={`left-${books[prevIndex].id}`}
                onClick={handlePrev}
                initial={{ opacity: 0.3, scale: 0.75, x: -220 }}
                animate={{
                  opacity: 0.75,
                  scale: 0.83,
                  x: -185,
                  rotateY: 12,
                  filter: 'blur(1px)',
                  zIndex: 10,
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute cursor-pointer w-[210px] sm:w-[260px] aspect-[4/5] flex items-center justify-center transform-gpu transition-all hover:opacity-95 hover:scale-[0.86]"
                title={`Anterior: ${books[prevIndex].title}`}
              >
                <img
                  src={books[prevIndex].image}
                  alt={books[prevIndex].title}
                  className="w-full h-full object-contain pointer-events-none drop-shadow-[0_18px_30px_rgba(0,0,0,0.85)]"
                />
              </motion.div>

              {/* 2. RIGHT BOOK: Less blurred, larger scale, shifted further right to reveal cover */}
              <motion.div
                key={`right-${books[nextIndex].id}`}
                onClick={handleNext}
                initial={{ opacity: 0.3, scale: 0.75, x: 220 }}
                animate={{
                  opacity: 0.75,
                  scale: 0.83,
                  x: 185,
                  rotateY: -12,
                  filter: 'blur(1px)',
                  zIndex: 10,
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute cursor-pointer w-[210px] sm:w-[260px] aspect-[4/5] flex items-center justify-center transform-gpu transition-all hover:opacity-95 hover:scale-[0.86]"
                title={`Siguiente: ${books[nextIndex].title}`}
              >
                <img
                  src={books[nextIndex].image}
                  alt={books[nextIndex].title}
                  className="w-full h-full object-contain pointer-events-none drop-shadow-[0_18px_30px_rgba(0,0,0,0.85)]"
                />
              </motion.div>

              {/* 3. CENTER BOOK: Crisp, High Resolution, Full Focus, Illuminated Aura */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`center-${currentBook.id}`}
                  initial={{ opacity: 0.4, scale: 0.92, y: 15 }}
                  animate={{
                    opacity: 1,
                    scale: 1.06,
                    y: 0,
                    rotateY: 0,
                    filter: 'blur(0px)',
                    zIndex: 30,
                  }}
                  exit={{ opacity: 0.3, scale: 0.88, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative cursor-default w-[230px] sm:w-[290px] md:w-[320px] aspect-[4/5] flex items-center justify-center transform-gpu"
                >
                  {/* Concentrated Gold Halo Glow behind the center book */}
                  <div className="absolute inset-0 -m-6 bg-gradient-to-t from-[#ECC557]/25 via-[#ECC557]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* Main High-Res Book Image */}
                  <img
                    src={currentBook.image}
                    alt={currentBook.title}
                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] filter contrast-[1.03] brightness-[1.02]"
                  />
                </motion.div>
              </AnimatePresence>

            </div>

            {/* CTA PURCHASE BUTTON: VIEW BOOK */}
            <div className="mt-6 z-20 flex justify-center">
              <a
                href={currentBook.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ECC557] via-[#FCE689] to-[#EFAF50] text-black font-extrabold uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(236,197,87,0.4)] hover:shadow-[0_0_35px_rgba(236,197,87,0.65)] hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
              >
                <span>VIEW BOOK</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


