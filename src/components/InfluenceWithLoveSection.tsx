import React from 'react';
import { Play, ChevronRight, Heart, Globe, Users, ArrowUpRight } from 'lucide-react';
import { InfluenceWithLoveLogo } from './InfluenceWithLoveLogo';
import philanthropyBg from '../assets/images/philanthropy_impact_1788152378730.jpg';

interface InfluenceWithLoveSectionProps {
  onOpenVideo: (title: string, tag: string, subtitle?: string) => void;
  showPlaceholdersOnly: boolean;
}

export const InfluenceWithLoveSection: React.FC<InfluenceWithLoveSectionProps> = ({
  onOpenVideo,
  showPlaceholdersOnly
}) => {
  return (
    <section
      id="sec-influence-love"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Background Image with Deep Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url(${philanthropyBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-[#08162F]/80 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Asymmetrical 2-Column Split: Mission on Left, Video Documentary Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Copy, Purpose & The 3 Ts (Time, Talent, Treasure) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Header with Influence With Love Official Badge */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <InfluenceWithLoveLogo className="h-10 sm:h-12 w-auto" />
                <span className="px-3.5 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                  10% Event Profits Donated
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-normal font-bebas text-white tracking-wide uppercase leading-[0.95]">
                INFLUENCE WITH LOVE <br />
                <span className="text-gold-gradient">& PURPOSE-DRIVEN IMPACT</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed">
                Building multi-million dollar brands is meaningless without purpose. Through the <strong>Influence With Love Foundation</strong>, Rey Perez and his community empower underprivileged youth by teaching them entrepreneurship, leadership, and self-belief.
              </p>
            </div>

            {/* The 3 Pillars: Time, Talent, Treasure */}
            <div className="space-y-3.5 pt-2">
              <div className="p-5 rounded-xl bg-[#08162F]/70 border border-zinc-700/80 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-gold-gradient text-black flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-white">TIME • Youth Mentorship</h4>
                  <p className="text-sm sm:text-base text-zinc-200 font-normal mt-1 leading-relaxed">
                    Volunteer directly with young leaders to help them discover their unique gifts and navigate real-world entrepreneurship.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#08162F]/70 border border-zinc-700/80 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-gold-gradient text-black flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-white">TALENT • Skill Training</h4>
                  <p className="text-sm sm:text-base text-zinc-200 font-normal mt-1 leading-relaxed">
                    Share your expertise in digital marketing, coding, speaking, and financial literacy to bridge educational divides.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#08162F]/70 border border-zinc-700/80 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-gold-gradient text-black flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-white">TREASURE • Philanthropic Giving</h4>
                  <p className="text-sm sm:text-base text-zinc-200 font-normal mt-1 leading-relaxed">
                    Directly sponsor youth education summits, micro-grants for teenage founders, and emergency community healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* Support CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://influencewithlove.org"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4.5 rounded-xl bg-gold-gradient text-black font-extrabold font-heading text-sm sm:text-base uppercase tracking-wider shadow-[0_0_25px_rgba(236,197,87,0.3)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Visit InfluenceWithLove.org</span>
                <ArrowUpRight className="w-5 h-5 stroke-[3]" />
              </a>

              <span className="text-sm text-zinc-300 font-mono text-center sm:text-left">
                100% of non-profit donations go straight to youth initiatives.
              </span>
            </div>

          </div>

          {/* RIGHT: High-Impact Video Documentary Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div 
              onClick={() => onOpenVideo(
                'Influence With Love Global Documentary',
                '[PLACEHOLDER_INFLUENCE_WITH_LOVE_VIDEO]',
                'A Cause That Is Changing The Life Of The Next Generation • InfluenceWithLove.org'
              )}
              className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#ECC557]/50 bg-[#08162F] shadow-[0_20px_50px_rgba(0,0,0,0.9)] group cursor-pointer aspect-[4/5] flex flex-col justify-between p-6"
            >
              <img 
                src={philanthropyBg} 
                alt="Influence With Love Youth Summit"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />

              {/* Top Card Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#ECC557]/40 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#E51937] fill-current" />
                  <span className="text-xs font-mono font-bold text-white">YOUTH FOUNDATION</span>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#ECC557] text-black font-bold">
                  DOCUMENTARY
                </span>
              </div>

              {/* Play Button & Center Title */}
              <div className="relative z-10 my-auto text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-[0_0_30px_rgba(236,197,87,0.7)] group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-[#ECC557] tracking-widest uppercase">
                    A CAUSE CHANGING LIVES
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                    WATCH THE GLOBAL MISSION
                  </h3>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800 text-center text-xs font-mono text-zinc-300">
                <span>Click to stream full youth empowerment story</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
