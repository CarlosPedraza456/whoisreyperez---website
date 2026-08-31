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
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-zinc-900 overflow-hidden"
    >
      {/* Subtle Arena Stage Silhouette Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(8,22,47,0.8), #000000 80%), url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Top Branding Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          
          <div className="flex flex-col items-center justify-center gap-3">
            {showPlaceholdersOnly ? (
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-[#FCE689] font-medium">
                [PLACEHOLDER_SSM_LOGO] • Official Branding Insignia
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
                <Mic2 className="w-3.5 h-3.5 text-[#ECC557]" />
                <span className="text-[11px] font-mono font-medium tracking-widest text-[#FCE689] uppercase">
                  SPEAKING & SALES MASTERY (SSM)
                </span>
              </div>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            DOMINATE THE STAGE. <br />
            <span className="text-gold-gradient">
              CLOSE 40%+ OF ANY ROOM.
            </span>
          </h2>

          <p className="text-base text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
            The legendary 3-day intensive boot camp that turns shy experts, founders, and speakers into magnetic stage sellers capable of generating 6-figure paydays from a single 60-minute presentation.
          </p>
        </div>

        {/* 3-Day Intensive Curriculum (Clean Card Layout) */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#ECC557]" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#FCE689]">
                THE 3-DAY MASTERY ARCHITECTURE
              </h3>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              Live In-Person Simulations & Scripting
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {SSM_DAYS.map((day, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setSelectedDayIdx(idx)}
                className={`p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between group ${
                  selectedDayIdx === idx
                    ? 'bg-zinc-950 border border-zinc-700 shadow-md'
                    : 'bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800'
                }`}
              >
                <div className="space-y-3.5">
                  
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FCE689] text-[11px] font-mono font-medium">
                      {day.day}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      Day Intensive
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-airstrike text-white group-hover:text-[#FCE689] transition-colors leading-snug">
                    {day.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {day.description}
                  </p>

                  {/* Day Deliverables */}
                  <div className="pt-2 space-y-1.5 border-t border-zinc-900">
                    <span className="text-[10px] font-mono font-medium uppercase text-[#ECC557] tracking-wider block">
                      Tangible Assets Created:
                    </span>
                    {day.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#ECC557] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-4 mt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-[#FCE689]">
                  <span className="font-medium">Interactive Rehearsal Included</span>
                  <span>✓</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Action Card & Video Testimonials */}
        <div className="p-6 sm:p-10 rounded-2xl bg-zinc-950/90 border border-zinc-900 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Pill CTA & Callout */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#FCE689] text-[11px] font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#ECC557]" />
                LIMITED TO 35 SPEAKERS PER SESSION
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black font-airstrike text-white leading-tight">
                ARE YOU READY TO COMMAND 5-FIGURE KEYNOTE FEES?
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Stage selling is the single highest ROI skill on earth. Join Rey Perez in an intimate, intensive environment and install the exact psychological closing scripts that created dozens of 7-figure speakers.
              </p>

              {/* High Impact Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-black font-extrabold uppercase tracking-widest text-xs shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer font-heading"
                >
                  <Award className="w-4 h-4" />
                  <span>Secure Your SSM Seat Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: SSM Video Case Studies */}
            <div className="lg:col-span-6 space-y-3">
              {SSM_TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  onClick={() => onOpenVideo(`${t.name} SSM Video Review`, t.videoThumbPlaceholder)}
                  className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col sm:flex-row items-center gap-3.5 cursor-pointer group"
                >
                  <div className="relative w-full sm:w-36 aspect-video rounded-lg bg-zinc-950 overflow-hidden shrink-0 flex items-center justify-center border border-zinc-800">
                    {showPlaceholdersOnly ? (
                      <span className="text-[10px] font-mono text-[#ECC557] text-center p-1 font-medium">
                        {t.videoThumbPlaceholder}
                      </span>
                    ) : (
                      <>
                        <div className="w-8 h-8 rounded-full bg-[#ECC557] text-black flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                        <span className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-black text-[9px] font-mono text-zinc-400">
                          {t.videoDuration}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="space-y-0.5 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-white font-heading group-hover:text-[#FCE689] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#ECC557] font-mono">
                      {t.role} • {t.company}
                    </p>
                    <p className="text-xs text-zinc-400 italic line-clamp-2">
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
