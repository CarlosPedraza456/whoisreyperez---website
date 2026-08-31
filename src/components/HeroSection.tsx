import React from 'react';
import { Calendar, Play, ArrowRight, CheckCircle } from 'lucide-react';
import heroBgImage from '../assets/images/hero_rey_lifestyle_terrace_1788181002252.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenVideo: (title: string, tag: string, subtitle?: string) => void;
  showPlaceholdersOnly: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenVideo
}) => {
  return (
    <section className="relative overflow-hidden bg-[#000000] min-h-[92vh] flex items-center border-b border-[rgba(236,197,87,0.2)]">
      
      {/* Background Layer: Cinematic Widescreen Photo (Aligned Right) with Seamless Dark Masking */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Rey Perez Lifestyle & Vision"
          className="w-full h-full object-cover object-[78%_center] lg:object-right filter brightness-[0.92] contrast-[1.05]"
        />

        {/* Horizontal Gradient: Blends from Solid Black on Left to Transparent over Rey on the Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent lg:via-[#000000]/80 lg:to-black/20" />
        
        {/* Deep Left Shading for Flawless Readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black via-black/95 to-transparent pointer-events-none" />

        {/* Vertical Vignette Top & Bottom */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        
        {/* Subtle Ambient Brand Atmosphere Glow */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#08162F]/80 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-[350px] h-[350px] bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container (Single-Column Focus on Left Side) */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-28 pb-20 sm:pt-36 sm:pb-24">
        
        <div className="max-w-2xl xl:max-w-3xl space-y-7 text-left">
          
          {/* Eyebrow Label (Dan Martell Style) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#08162F]/90 border border-[#ECC557]/50 shadow-[0_0_20px_rgba(236,197,87,0.25)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECC557] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FCE689] uppercase">
              AUTHOR, SPEAKER, PHILANTHROPIST &amp; COACH
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] xl:text-[92px] font-normal font-bebas tracking-wide leading-[0.92] text-white uppercase drop-shadow-lg">
              BUILD AN UNSTOPPABLE <br />
              <span className="text-gold-gradient">CATEGORY MONOPOLY</span> <br />
              FROM ANY STAGE.
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-100 font-sans font-normal leading-relaxed max-w-2xl drop-shadow-sm">
              You have what it takes. Stop playing small in the noise, transform your personal identity into an industry icon, and start building your multi-million dollar empire.
            </p>
          </div>

          {/* Quick Proof Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-2xl">
            <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-zinc-100">
              <CheckCircle className="w-5 h-5 text-[#ECC557] shrink-0" />
              <span>$120M+ Client Revenue Generated</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-zinc-100">
              <CheckCircle className="w-5 h-5 text-[#ECC557] shrink-0" />
              <span>550+ Keynotes Across 24 Countries</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-zinc-100">
              <CheckCircle className="w-5 h-5 text-[#ECC557] shrink-0" />
              <span>Zero-Ad-Spend Authority Blueprints</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-zinc-100">
              <CheckCircle className="w-5 h-5 text-[#ECC557] shrink-0" />
              <span>Endorsed by Top Industry Icons</span>
            </div>
          </div>

          {/* Action CTAs: Solid Contrast */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4.5 rounded-xl bg-gold-gradient text-black font-extrabold font-heading text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(236,197,87,0.35)] hover:shadow-[0_0_40px_rgba(236,197,87,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Rey For Your Stage</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onOpenVideo(
                'Rey Perez 2026 Keynote & Authority Reel',
                '[PLACEHOLDER_SPEAKER_REEL_VIDEO]',
                'Stage Monetization, Global Events & Celebrity Endorsements'
              )}
              className="px-7 py-4.5 rounded-xl bg-[#08162F]/90 hover:bg-[#0c224a] border border-[#ECC557]/40 hover:border-[#ECC557] text-white font-bold font-heading text-sm sm:text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-full bg-gold-gradient text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="text-zinc-100 group-hover:text-white">Watch Keynote Reel</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
