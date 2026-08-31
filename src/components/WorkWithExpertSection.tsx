import React from 'react';
import { Award, CheckCircle2, Sparkles, Star, Target, Compass, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import reyPortrait from '../assets/images/rey_portrait_editorial_1788152356411.jpg';

interface WorkWithExpertSectionProps {
  onOpenBooking: () => void;
  showPlaceholdersOnly: boolean;
}

export const WorkWithExpertSection: React.FC<WorkWithExpertSectionProps> = ({
  onOpenBooking,
  showPlaceholdersOnly
}) => {
  return (
    <section
      id="sec-work-expert"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Background Radial Glow & Midnight Blue Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_50%,rgba(8,22,47,0.65),#000000_80%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Split Screen 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Portrait of Rey Perez with Frame & Credentials */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Luxury Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#ECC557]/50 bg-[#08162F] shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
                
                {/* Photo Element */}
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src={reyPortrait}
                    alt="Rey Perez #1 Global Branding Authority"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/90 backdrop-blur-md border border-[#ECC557]/50 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ECC557]" />
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#FCE689] uppercase tracking-wider">
                      Forbes &amp; Media Featured
                    </span>
                  </div>

                  {/* Bottom Credentials Tag */}
                  <div className="absolute bottom-4 inset-x-4 p-5 rounded-2xl bg-[#08162F]/95 backdrop-blur-md border border-[#ECC557]/50 space-y-1.5">
                    <div className="flex items-center justify-between text-[#ECC557]">
                      <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                        EXECUTIVE ARCHITECT
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="text-2xl font-bold font-heading text-white">
                      REY PEREZ
                    </div>
                    <p className="text-sm text-zinc-200 font-normal">
                      The Strategist Behind 7 &amp; 8-Figure Personal Brand Monopolies
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating 16+ Years Experience Badge */}
              <div className="absolute -bottom-4 -right-4 px-5 py-3.5 rounded-2xl bg-black/95 border-2 border-[#ECC557] shadow-2xl backdrop-blur-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-gradient text-black flex items-center justify-center font-black text-base">
                  16+
                </div>
                <div>
                  <div className="text-sm font-extrabold font-heading text-white uppercase">Years Authority</div>
                  <div className="text-xs text-[#ECC557] font-mono font-semibold">100% Proven Methodologies</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetrical Editorial Narrative & Strategic Pillars */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Header Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557]">
                <Sparkles className="w-4 h-4 fill-current text-[#ECC557]" />
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#FCE689] uppercase">
                  THE AUTHORITY ARCHITECTURE
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-[66px] font-normal font-bebas text-white tracking-wide uppercase leading-[0.95]">
                WORK WITH THE <span className="text-gold-gradient">#1 GLOBAL BRANDING EXPERT</span>
              </h2>

              <p className="text-lg sm:text-xl text-zinc-100 font-normal leading-relaxed">
                Most entrepreneurs remain the best-kept secret in their industry because they rely on commoditized tactics. Rey Perez engineers the structural shift from standard practitioner to undisputed celebrity category authority.
              </p>
            </div>

            {/* 3 High-Impact Pillars */}
            <div className="space-y-4 pt-1">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#08162F]/90 to-black/70 border border-zinc-700/80 hover:border-[#ECC557]/70 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#08162F] border border-[#ECC557]/50 text-[#ECC557] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-gradient group-hover:text-black transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#ECC557] transition-colors">
                    Category Monopoly &amp; Premium Price Elasticity
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                    Eliminate competition entirely. We position your intellectual property so you charge 5x to 10x industry standard rates with zero resistance.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#08162F]/90 to-black/70 border border-zinc-700/80 hover:border-[#ECC557]/70 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#08162F] border border-[#ECC557]/50 text-[#ECC557] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-gradient group-hover:text-black transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#ECC557] transition-colors">
                    Zero Paid Ads Organic Client Acquisition
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                    Deploy high-leverage joint ventures, host-beneficiary alliances, and stage selling systems that fill high-ticket pipelines on autopilot.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#08162F]/90 to-black/70 border border-zinc-700/80 hover:border-[#ECC557]/70 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#08162F] border border-[#ECC557]/50 text-[#ECC557] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-gradient group-hover:text-black transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#ECC557] transition-colors">
                    Stage Closing &amp; 40%+ Audience Conversion
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                    Convert rooms into 5-figure coaching, licensing, and advisory deals with genuine heart-centered closing frameworks that never feel salesy.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Callout & Direct CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4.5 rounded-xl bg-gold-gradient text-black font-extrabold font-heading text-sm sm:text-base uppercase tracking-wider shadow-[0_0_25px_rgba(236,197,87,0.3)] hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Executive Strategy Consult</span>
                <ArrowUpRight className="w-5 h-5 stroke-[3]" />
              </button>

              <span className="text-sm text-zinc-300 font-mono text-center sm:text-left">
                Direct advisory calendar open by application only.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
