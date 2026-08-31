import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import valuesBg from '../assets/images/values_editorial_bg_1788153541759.jpg';

interface OurValuesSectionProps {
  showPlaceholdersOnly?: boolean;
}

export const OurValuesSection: React.FC<OurValuesSectionProps> = () => {
  const missionItems = [
    "I live my life with integrity.",
    "I honor my word.",
    "I am committed to being a positive impact in others' lives.",
    "I lead by example.",
    "I show love & kindness to all.",
    "May everything I say be good & provide value to those around me."
  ];

  return (
    <section
      id="sec-our-values"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Background Image with Deep Overlay Branding */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity pointer-events-none scale-105"
        style={{ backgroundImage: `url(${valuesBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#08162F]/85 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(236,197,87,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Top Header & Core Philosophy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Official Brand Logo Mark */}
          <div className="inline-flex flex-col items-center space-y-1">
            <div className="text-xl sm:text-2xl font-black font-heading tracking-[0.25em] text-white uppercase">
              REY PEREZ
            </div>
            <div className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.35em] text-[#ECC557] uppercase">
              #1 GLOBAL BRANDING EXPERT
            </div>
          </div>

          {/* Section Main Title */}
          <h2 className="text-5xl sm:text-7xl lg:text-[80px] font-normal font-bebas text-white tracking-wider uppercase leading-none">
            OUR CORE VALUES
          </h2>

          {/* Core Principle 1 */}
          <div className="space-y-1 font-heading text-lg sm:text-2xl lg:text-3xl font-bold tracking-wide text-zinc-100">
            <p>
              DO THE <span className="text-[#FCE689] italic">RIGHT THING</span>... AT THE <span className="text-[#FCE689] italic">RIGHT TIME</span>
            </p>
            <p>
              FOR THE <span className="text-[#FCE689] italic">RIGHT REASON</span>... <span className="text-[#ECC557] underline decoration-[#ECC557] decoration-2 underline-offset-4 font-black">ALL</span> THE TIME
            </p>
          </div>

          {/* Gold Accent Divider */}
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#ECC557] to-transparent rounded-full shadow-[0_0_12px_rgba(236,197,87,0.6)]" />

          {/* Core Principle 2 */}
          <div className="text-sm sm:text-base md:text-lg font-heading font-medium tracking-wider text-zinc-300 uppercase leading-relaxed max-w-3xl mx-auto">
            <p>
              THE <span className="font-extrabold text-white">QUALITY</span> OF OUR RELATIONSHIPS ARE <span className="font-extrabold text-[#ECC557]">BASED</span> ON
            </p>
            <p className="mt-1">
              THE <span className="font-extrabold text-white">QUALITY</span> OF OUR <span className="font-extrabold text-[#FCE689]">QUESTIONS</span>, <span className="font-extrabold text-[#FCE689]">COMMUNICATION</span> & <span className="font-extrabold text-[#FCE689]">COMMITMENT</span>
            </p>
          </div>

        </div>

        {/* 2-Column Split: Mission Statement & Vision Statement Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Mission Statement List */}
          <div className="lg:col-span-6 space-y-6 text-left pl-0 sm:pl-4">
            
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-heading tracking-wide uppercase leading-tight">
              <span className="text-gold-gradient">MISSION</span> <span className="text-white">STATEMENT</span>
            </h3>

            <div className="space-y-4">
              {missionItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 group">
                  <ChevronRight className="w-6 h-6 text-[#ECC557] stroke-[3] shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Vision Statement Framed Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#08162F]/90 to-black/95 border-2 border-[#ECC557]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl space-y-6 text-center">
              
              <div className="absolute top-4 right-4 text-[#ECC557]/40">
                <Sparkles className="w-7 h-7" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-heading tracking-wide uppercase leading-tight">
                <span className="text-gold-gradient">VISION</span> <span className="text-white">STATEMENT</span>
              </h3>

              <blockquote className="text-base sm:text-lg lg:text-xl font-heading font-medium italic text-zinc-100 uppercase leading-relaxed sm:leading-loose tracking-wide">
                "WE ARE THE WORLD'S LEADING SOCIALLY CONSCIOUS BRANDING &amp; MARKETING AGENCY THAT ELEVATES ENTREPRENEURIAL LEADERS TO MAXIMIZE THEIR INFLUENCE AND MONETIZE THEIR MISSION SO THEY CAN LIVE TO THEIR FULL POTENTIAL"
              </blockquote>

              <div className="pt-2">
                <div className="inline-block px-5 py-2 rounded-full bg-[#08162F] border border-[#ECC557]/50 text-[#FCE689] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest">
                  Global Social Consciousness
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Brand Ecosystem Ecosystem Logos */}
        <div className="pt-10 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-90 hover:opacity-100 transition-opacity">
          
          {/* Logo 1: R Rey Perez Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gold-gradient text-black flex items-center justify-center font-black text-2xl font-heading shadow-md">
              R
            </div>
            <div className="text-left">
              <div className="text-sm font-black tracking-wider text-white uppercase font-heading leading-tight">REY PEREZ</div>
              <div className="text-xs font-mono text-[#ECC557]">GLOBAL BRAND</div>
            </div>
          </div>

          {/* Logo 2: My 360 Sites */}
          <div className="flex flex-col items-center">
            <div className="text-xl sm:text-2xl font-black font-heading tracking-tight text-white leading-none">
              My<span className="text-[#ECC557]">360</span>
            </div>
            <div className="text-xs font-mono font-bold tracking-[0.3em] text-zinc-300 uppercase">
              SITES
            </div>
          </div>

          {/* Logo 3: AMP YOUR BRAND */}
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl font-black font-heading tracking-wider text-white uppercase leading-none flex items-center gap-1">
              <span>AMP</span>
              <span className="text-[#ECC557]">)))</span>
            </div>
            <div className="text-xs font-mono font-bold tracking-widest text-zinc-200 uppercase">
              YOUR BRAND
            </div>
            <div className="text-[11px] font-mono text-zinc-400">
              iAMPYourBrand.com
            </div>
          </div>

          {/* Logo 4: EA Entrepreneurs Agency */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-black font-heading tracking-tighter text-[#ECC557]">
              EA
            </div>
            <div className="text-left border-l border-zinc-700 pl-2.5">
              <div className="text-xs font-bold font-heading text-white uppercase leading-none">ENTREPRENEURS</div>
              <div className="text-[11px] font-mono text-zinc-300 uppercase">AGENCY</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
