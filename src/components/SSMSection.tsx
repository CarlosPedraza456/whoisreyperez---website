import React, { useState } from 'react';
import { SSM_DAYS, SSM_TESTIMONIALS } from '../data/siteData';
import { AssetPlaceholder } from './AssetPlaceholder';
import { Mic2, Play, Sparkles, Check, ArrowRight, Shield, Award, Calendar, Layers } from 'lucide-react';

interface SSMSectionProps {
  onOpenVideo: (title: string, tag: string) => void;
  onOpenBooking: () => void;
  showPlaceholdersOnly: boolean;
}

export const SSMSection: React.FC<SSMSectionProps> = ({
  onOpenVideo,
  onOpenBooking,
  showPlaceholdersOnly
}) => {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  return (
    <section
      id="sec-ssm"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Dan Martell-style Subtle Arena Stage Silhouette Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(8,22,47,0.92), #000000 80%), url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Dynamic Golden Flare & Light Leak Overlay */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none animate-flare-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#08162F] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Branding Header with [PLACEHOLDER_SSM_LOGO] */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          
          <div className="flex flex-col items-center justify-center gap-3">
            {showPlaceholdersOnly ? (
              <div className="p-2.5 rounded-xl bg-black border border-[#ECC557]/60 text-xs font-mono text-[#FCE689] font-bold">
                [PLACEHOLDER_SSM_LOGO] • Official Branding Insignia
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#ECC557]/40 shadow-[0_0_20px_rgba(236,197,87,0.2)]">
                <Mic2 className="w-4 h-4 text-[#ECC557]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
                  SPEAKING & SALES MASTERY (SSM)
                </span>
              </div>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            DOMINATE THE STAGE. <br />
            <span className="text-gold-gradient drop-shadow-[0_0_30px_rgba(236,197,87,0.4)]">
              CLOSE 40%+ OF ANY ROOM.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
            The legendary 3-day intensive boot camp that turns shy experts, founders, and speakers into magnetic stage sellers capable of generating 6-figure paydays from a single 60-minute presentation.
          </p>
        </div>

        {/* 3-Day Intensive Curriculum (Interactive Tabbed / Card Layout) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#ECC557]" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#FCE689]">
                THE 3-DAY MASTERY ARCHITECTURE
              </h3>
            </div>
            <span className="text-xs text-zinc-400 font-mono">
              Live In-Person Simulations & Scripting
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SSM_DAYS.map((day, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setSelectedDayIdx(idx)}
                className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group ${
                  selectedDayIdx === idx
                    ? 'glass-card border-2 border-[#ECC557] shadow-[0_0_35px_rgba(236,197,87,0.3)] -translate-y-2'
                    : 'glass-card-dark border border-zinc-800 hover:border-[#ECC557]/60'
                }`}
              >
                <div className="space-y-4">
                  
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-black/80 border border-[#ECC557]/40 text-[#FCE689] text-xs font-mono font-bold">
                      {day.day}
                    </span>
                    <span className="text-[10px] font-mono text-[#ECC557] uppercase font-bold">
                      Day Intensive
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-airstrike text-white group-hover:text-[#FCE689] transition-colors leading-snug">
                    {day.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {day.description}
                  </p>

                  {/* Day Deliverables */}
                  <div className="pt-2 space-y-2 border-t border-zinc-800/80">
                    <span className="text-[11px] font-mono font-bold uppercase text-[#ECC557] tracking-wider block">
                      Tangible Assets Created:
                    </span>
                    {day.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                        <Check className="w-3.5 h-3.5 text-[#ECC557] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-[#FCE689]">
                  <span className="font-semibold">Interactive Rehearsal Included</span>
                  <span>✓</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials & Rounded/Pill CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#08162F] via-[#000000] to-[#08162F] border-2 border-[#ECC557]/50 shadow-[0_0_50px_rgba(236,197,87,0.25)] space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Pill CTA & Callout */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECC557]/15 border border-[#ECC557]/40 text-[#FCE689] text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#ECC557]" />
                LIMITED TO 35 SPEAKERS PER SESSION
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-airstrike text-white leading-tight">
                ARE YOU READY TO COMMAND 5-FIGURE KEYNOTE FEES?
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Stage selling is the single highest ROI skill on earth. Join Rey Perez in an intimate, intensive environment and install the exact psychological closing scripts that created dozens of 7-figure speakers.
              </p>

              {/* Strict Requirement: Rounded / Pill High Impact Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-gold-gradient text-black font-extrabold uppercase tracking-widest text-xs sm:text-sm shadow-[0_0_35px_rgba(236,197,87,0.6)] hover:shadow-[0_0_50px_rgba(236,197,87,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer font-heading"
                >
                  <Award className="w-5 h-5" />
                  <span>Secure Your SSM Seat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: SSM Video Case Studies */}
            <div className="lg:col-span-6 space-y-4">
              {SSM_TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  onClick={() => onOpenVideo(`${t.name} SSM Video Review`, t.videoThumbPlaceholder)}
                  className="p-4 rounded-2xl bg-black/70 border border-[#ECC557]/30 hover:border-[#ECC557] transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 cursor-pointer group shadow-lg hover:shadow-[0_0_20px_rgba(236,197,87,0.25)]"
                >
                  <div className="relative w-full sm:w-40 aspect-video rounded-xl bg-zinc-900 overflow-hidden shrink-0 flex items-center justify-center border border-zinc-800 group-hover:border-[#ECC557]">
                    {showPlaceholdersOnly ? (
                      <span className="text-[10px] font-mono text-[#ECC557] text-center p-1 font-bold">
                        {t.videoThumbPlaceholder}
                      </span>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-zinc-300">
                          {t.videoDuration}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-white font-heading group-hover:text-[#FCE689] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#ECC557] font-mono">
                      {t.role} • {t.company}
                    </p>
                    <p className="text-xs text-zinc-300 italic line-clamp-2">
                      "{t.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
