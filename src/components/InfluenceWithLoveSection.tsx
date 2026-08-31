import React from 'react';
import { Play, MousePointerClick, ChevronRight, HandHeart, Heart } from 'lucide-react';
import { InfluenceWithLoveLogo } from './InfluenceWithLoveLogo';
import { MasterclassEventBackdrop } from './MasterclassEventBackdrop';
import { AssetPlaceholder } from './AssetPlaceholder';

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
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Background Masterclass Atmosphere with High Visibility (Rey Perez Speaking at Live Branding Power Day Masterclass) */}
      <MasterclassEventBackdrop />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================= */}
        {/* TOP ROW: EXACT CENTERED HEADER (LOGO + HEADLINE BLOCK)    */}
        {/* ========================================================= */}
        <div className="w-full flex justify-center pb-8 border-b border-zinc-800/80">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-4xl text-center sm:text-left">
            
            {/* Left: Influence With Love Official Logo */}
            <div className="shrink-0 flex items-center justify-center">
              <InfluenceWithLoveLogo className="h-16 sm:h-20 lg:h-22 w-auto" />
            </div>

            {/* Right: Exactly formatted text block */}
            <div className="space-y-1.5 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-wide uppercase leading-tight">
                THANK YOU FOR YOUR GIVING
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg font-bold font-heading text-white tracking-wide uppercase leading-snug">
                10% OF EVENT PROFITS GO TO{' '}
                <a
                  href="https://influencewithlove.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ECC557] hover:text-[#FCE689] underline underline-offset-4 decoration-[#ECC557]/60 transition-colors"
                >
                  INFLUENCE WITHLOVE.ORG
                </a>
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 italic font-light font-sans tracking-wide">
                Make a difference while growing your business
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM ROW: 2-COLUMN STRUCTURE (VIDEO/BTN LEFT + COPY RIGHT) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Video Thumbnail Card + Golden Pill Button */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-6">
            
            {/* Interactive Video Box */}
            <div className="w-full relative rounded-2xl overflow-hidden border-2 border-[#ECC557]/40 bg-zinc-950 shadow-[0_15px_45px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-[#ECC557]">
              {showPlaceholdersOnly ? (
                <AssetPlaceholder
                  tag="[PLACEHOLDER_INFLUENCE_WITH_LOVE_VIDEO]"
                  label="Influence With Love Foundation Documentary"
                  dimensions="1280x720 (HD)"
                  aspectRatio="aspect-[16/10]"
                  type="video"
                />
              ) : (
                <div
                  onClick={() => onOpenVideo(
                    'Influence With Love Global Mission Video',
                    '[PLACEHOLDER_INFLUENCE_WITH_LOVE_VIDEO]',
                    'A Cause That Is Changing The Life Of The Next Generation • InfluenceWithLOVE.org'
                  )}
                  className="relative aspect-[16/10] w-full cursor-pointer flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-b from-[#08162F]/90 via-black/80 to-black overflow-hidden"
                >
                  {/* Background Children Photo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                  {/* Top Bar inside Card: Logo on Left + Red 'Click To know more' Badge on Right */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-black/80 px-3 py-1.5 rounded-lg border border-[#ECC557]/30 flex items-center gap-2 backdrop-blur-md">
                      <Heart className="w-4 h-4 text-[#E51937] fill-[#E51937]" />
                      <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                        INFLUENCE WITH <span className="text-[#E51937]">LOVE</span>
                      </span>
                    </div>

                    {/* Red Speech Bubble / Pointer: 'Click To know more' */}
                    <div className="relative bg-[#E51937] text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 animate-pulse">
                      <div className="text-right">
                        <div className="text-xs font-black font-heading uppercase leading-none">
                          Click
                        </div>
                        <div className="text-[9px] font-sans font-medium text-white/90 leading-tight">
                          To know more
                        </div>
                      </div>
                      <MousePointerClick className="w-4 h-4 text-white" />
                      {/* Little triangle tail */}
                      <div className="absolute -bottom-1 right-3 w-2 h-2 bg-[#E51937] rotate-45" />
                    </div>
                  </div>

                  {/* Center Text & Glowing Play Button */}
                  <div className="relative z-10 my-auto text-center space-y-3">
                    <div className="space-y-0.5 max-w-sm mx-auto">
                      <p className="text-xs sm:text-sm font-extrabold font-heading text-white uppercase tracking-wider drop-shadow-md">
                        A CAUSE THAT IS CHANGING
                      </p>
                      <p className="text-sm sm:text-base font-black font-heading text-[#ECC557] uppercase tracking-wider drop-shadow-md">
                        THE LIFE OF THE NEXT GENERATION
                      </p>
                    </div>

                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gold-gradient flex items-center justify-center text-black shadow-[0_0_30px_rgba(236,197,87,0.7)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Footer inside Card */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-300 bg-black/70 px-3 py-1.5 rounded-lg border border-zinc-800 backdrop-blur-sm">
                    <span className="text-[#ECC557] font-semibold">
                      [PLACEHOLDER_INFLUENCE_WITH_LOVE_VIDEO]
                    </span>
                    <span>1280x720 HD Documentary</span>
                  </div>

                </div>
              )}
            </div>

            {/* Exact Golden Pill Button as in Screenshot */}
            <button
              onClick={() => onOpenVideo(
                'Support Influence With Love Non-Profit',
                '[PLACEHOLDER_INFLUENCE_WITH_LOVE_VIDEO]',
                'Donations directly fund youth entrepreneurship education & community healthcare'
              )}
              className="w-full max-w-md px-8 py-4 rounded-full bg-gold-gradient text-black font-extrabold shadow-[0_0_30px_rgba(236,197,87,0.4)] hover:shadow-[0_0_45px_rgba(236,197,87,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer border border-[#ECC557]/40"
            >
              <div className="inline-flex items-center gap-2 text-base sm:text-lg font-black font-heading tracking-wide uppercase leading-tight text-black">
                <span>SUPPORT THE NON-PROFIT</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold font-heading tracking-wider uppercase text-zinc-900/80 mt-0.5">
                & OUR FUTURE GENERATION
              </span>
            </button>

          </div>

          {/* RIGHT COLUMN: Exact Mission Copy & Bullet Points */}
          <div className="lg:col-span-6 space-y-6 text-zinc-200">
            
            {/* Mission Statement */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
                <strong className="font-extrabold text-white uppercase tracking-wide">
                  OUR MISSION AT{' '}
                  <a
                    href="https://influencewithlove.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ECC557] hover:text-[#FCE689] underline underline-offset-2 transition-colors"
                  >
                    InfluenceWithLOVE.org
                  </a>
                </strong>{' '}
                We empower underprivileged children by teaching them entrepreneurship skills, mentoring them to recognize their potential, and inspiring them to follow their passions and achieve their dreams. We invite socially conscious individuals, entrepreneurs, business owners, and professionals, to join us in making a difference by contributing their Time, Talent, or Treasure:
              </p>
            </div>

            {/* Exact 3 Bullets: TIME, TALENT, TREASURE */}
            <div className="space-y-4 pt-2 border-t border-zinc-800/80">
              
              {/* TIME */}
              <div className="flex items-start gap-2.5">
                <span className="text-[#ECC557] font-bold text-base select-none leading-relaxed">•</span>
                <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300 font-light">
                  <strong className="font-extrabold text-[#ECC557] uppercase tracking-wider font-heading">
                    TIME:
                  </strong>{' '}
                  Volunteer to mentor and educate children, helping them unlock their potential and become the next generation of leaders.
                </p>
              </div>

              {/* TALENT */}
              <div className="flex items-start gap-2.5">
                <span className="text-[#ECC557] font-bold text-base select-none leading-relaxed">•</span>
                <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300 font-light">
                  <strong className="font-extrabold text-[#ECC557] uppercase tracking-wider font-heading">
                    TALENT:
                  </strong>{' '}
                  Share your unique skills or resources to support the cause. From photographers raising awareness to doctors offering medical care, every contribution makes an impact.
                </p>
              </div>

              {/* TREASURE */}
              <div className="flex items-start gap-2.5">
                <span className="text-[#ECC557] font-bold text-base select-none leading-relaxed">•</span>
                <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300 font-light">
                  <strong className="font-extrabold text-[#ECC557] uppercase tracking-wider font-heading">
                    TREASURE:
                  </strong>{' '}
                  Provide financial or material donations such as money, clothes, or toys to support programs, events, and essential resources for the children we serve.
                </p>
              </div>

            </div>

            {/* Bottom Foundation Direct Link */}
            <div className="pt-2">
              <a
                href="https://influencewithlove.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ECC557] hover:text-[#FCE689] hover:underline"
              >
                <HandHeart className="w-4 h-4 text-[#ECC557]" />
                <span>Visit Official InfluenceWithLOVE.org Foundation Portal</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
