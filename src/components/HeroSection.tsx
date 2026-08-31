import React from 'react';
import { Calendar, Play, Sparkles, Award, ArrowRight, ShieldCheck, TrendingUp, Users, Globe } from 'lucide-react';
import { AssetPlaceholder } from './AssetPlaceholder';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenVideo: (title: string, tag: string) => void;
  showPlaceholdersOnly: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenVideo,
  showPlaceholdersOnly
}) => {
  return (
    <section className="relative overflow-hidden bg-[#000000] pt-20 pb-20 sm:pt-28 sm:pb-24 border-b border-[rgba(236,197,87,0.2)]">
      
      {/* Cinematic Dark Background with Dan Martell-style Stage Depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(8,22,47,0.95), #000000 75%), url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Atmospheric Stage Glows and Gold Lens Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#ECC557]/15 via-[#08162F]/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#08162F]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none animate-flare-pulse" />

      {/* Grid line texture overlay for sleek modern finish */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* VIP Micro-Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F]/90 border border-[#ECC557]/50 shadow-[0_0_20px_rgba(236,197,87,0.2)] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#ECC557]" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
            #1 Global Branding Authority & Keynote Speaker
          </span>
        </div>

        {/* High-Impact Bebas Neue Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal font-bebas tracking-wide leading-[0.95] text-white">
            TRANSFORM YOUR IDENTITY INTO <br />
            <span className="text-gold-gradient drop-shadow-[0_0_35px_rgba(236,197,87,0.4)]">
              AN UNSTOPPABLE CATEGORY MONOPOLY
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed pt-2">
            Rey Perez engineers high-ticket positioning, stage monetization architecture, and 7-figure organic authority for high-growth founders, corporate leaders, and visionary speakers worldwide.
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm shadow-[0_0_30px_rgba(236,197,87,0.45)] hover:shadow-[0_0_45px_rgba(236,197,87,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer font-heading"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Book Rey For Your Stage</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={() => onOpenVideo('Rey Perez Official Keynote Reel', '[PLACEHOLDER_SPEAKER_REEL_VIDEO]', '2026 Stage & Media Highlight Reel')}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#08162F]/80 hover:bg-[#08162F] border border-[#ECC557]/40 hover:border-[#ECC557] text-white font-bold uppercase tracking-wider text-xs shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group font-heading backdrop-blur-sm"
          >
            <div className="w-7 h-7 rounded-full bg-[#ECC557] text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span className="text-zinc-200 group-hover:text-white">Watch Keynote Reel</span>
          </button>
        </div>

        {/* Dan Martell-style Clean Proof Bar */}
        <div className="pt-10 max-w-4xl mx-auto border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
            
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-normal font-bebas text-gold-gradient tracking-wide">
                $120M+
              </div>
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Client Revenue Generated
              </p>
            </div>

            <div className="space-y-1 sm:border-l sm:border-zinc-800">
              <div className="text-2xl sm:text-3xl font-normal font-bebas text-white tracking-wide">
                550+
              </div>
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Global Stages & Keynotes
              </p>
            </div>

            <div className="space-y-1 md:border-l md:border-zinc-800">
              <div className="text-2xl sm:text-3xl font-normal font-bebas text-gold-gradient tracking-wide">
                50,000+
              </div>
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Entrepreneurs Trained
              </p>
            </div>

            <div className="space-y-1 sm:border-l sm:border-zinc-800">
              <div className="text-2xl sm:text-3xl font-normal font-bebas text-white tracking-wide">
                24+
              </div>
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Countries Reached
              </p>
            </div>

          </div>

          {showPlaceholdersOnly && (
            <div className="mt-4 inline-block px-3 py-1 rounded bg-black/80 border border-zinc-800 font-mono text-[10px] text-zinc-500">
              Asset Reference: [PLACEHOLDER_REY_PEREZ_HERO_IMAGE] (Clean Cinematic Stage Layout)
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
