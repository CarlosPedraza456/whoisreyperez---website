import React from 'react';
import { Award, CheckCircle2, Sparkles, Star, Target, Compass, ArrowUpRight } from 'lucide-react';
import { AssetPlaceholder } from './AssetPlaceholder';

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
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Dan Martell-style Subtle Executive Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(8,22,47,0.92), #000000 80%), url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#08162F] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#ECC557]/40 shadow-inner">
            <Award className="w-4 h-4 text-[#ECC557]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
              EXECUTIVE BRANDING AUTHORITY
            </span>
          </div>

          {/* Exact Headline Structure with Bebas Neue */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal font-bebas text-white leading-none tracking-wide">
            WORK WITH THE <span className="text-gold-gradient">#1 GLOBAL BRANDING EXPERT</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            Elevate your positioning, accelerate your authority, and transform your personal brand into an undeniable industry powerhouse with bespoke strategies engineered for elite founders and organizations.
          </p>
        </div>

        {/* 2-Column Structural Replication */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Composition of Rey Perez with Credentials */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {showPlaceholdersOnly ? (
                <AssetPlaceholder
                  tag="[PLACEHOLDER_REY_PEREZ_CREDENTIALS_COMPOSITION]"
                  label="Rey Perez Credentials & Media Composition"
                  dimensions="1000x1200 px"
                  aspectRatio="aspect-[4/5]"
                  type="hero"
                  className="border-2 border-[#ECC557]/60 shadow-[0_0_35px_rgba(236,197,87,0.25)]"
                />
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-[#ECC557]/50 bg-gradient-to-b from-[#000000] to-[#08162F] p-6 shadow-[0_0_40px_rgba(8,22,47,0.8)] aspect-[4/5] flex flex-col justify-between">
                  
                  {/* Top Credentials Badges */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded bg-[#ECC557]/15 border border-[#ECC557]/40 text-[#FCE689] font-mono text-xs font-bold">
                      PROVEN CREDENTIALS
                    </span>
                    <div className="flex items-center gap-1 text-[#ECC557]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Core Graphic Visual */}
                  <div className="my-auto text-center space-y-3">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-[#ECC557] to-[#08162F] p-0.5 shadow-[0_0_25px_rgba(236,197,87,0.4)]">
                      <div className="w-full h-full rounded-2xl bg-[#000000] flex items-center justify-center">
                        <Award className="w-12 h-12 text-[#ECC557]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-airstrike text-white">
                      REY PEREZ
                    </h3>
                    <p className="text-xs text-[#ECC557] font-semibold uppercase tracking-wider font-heading">
                      The Architect of 7 & 8-Figure Personal Brands
                    </p>
                    <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed">
                      Trusted advisor to Fortune 500 executives, celebrity speakers, and pioneering visionaries across the globe.
                    </p>
                  </div>

                  {/* Bottom Metadata Tag */}
                  <div className="p-2.5 rounded-lg bg-black/80 border border-[#ECC557]/30 text-xs font-mono flex items-center justify-between">
                    <span className="text-[#ECC557] font-semibold truncate">[PLACEHOLDER_BRANDING_BADGE]</span>
                    <span className="text-zinc-400">Verified GHL Asset</span>
                  </div>

                </div>
              )}

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 p-3.5 rounded-xl bg-black/90 border border-[#ECC557]/50 shadow-2xl backdrop-blur-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ECC557] text-black flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase font-heading">16+ Years Experience</div>
                  <div className="text-[10px] text-zinc-400 font-mono">100% Guaranteed Methodology</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Strategic Pillars + Purpose Driven Entrepreneur Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Key Deliverables List */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-xl bg-black/50 border border-[rgba(236,197,87,0.25)] hover:border-[#ECC557] transition-all flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-[#08162F] border border-[#ECC557]/60 text-[#ECC557] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Celebrity Positioning & Monopoly Status
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light leading-relaxed">
                    Stop competing on price. We engineer your brand architecture so that you become the only logical choice in your marketplace.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-[rgba(236,197,87,0.25)] hover:border-[#ECC557] transition-all flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-[#08162F] border border-[#ECC557]/60 text-[#ECC557] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Zero Paid Ads Organic Client Acquisition
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light leading-relaxed">
                    Deploy high-leverage joint ventures, host-beneficiary alliances, and stage selling systems that fill high-ticket pipelines on autopilot.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-[rgba(236,197,87,0.25)] hover:border-[#ECC557] transition-all flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-[#08162F] border border-[#ECC557]/60 text-[#ECC557] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    High-Ticket Offer Packaging & Stage Closing
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light leading-relaxed">
                    Convert 40%+ of audiences into 5-figure coaching, consulting, or licensing clients from the platform without high-pressure sales.
                  </p>
                </div>
              </div>
            </div>

            {/* Strict Requirement: BECOME A PURPOSE DRIVEN ENTREPRENEUR Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#08162F] to-[#000000] border-2 border-[#ECC557]/60 shadow-[0_0_30px_rgba(236,197,87,0.2)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ECC557]/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient text-black flex items-center justify-center shrink-0 shadow-lg">
                  <Compass className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECC557]/20 border border-[#ECC557]/40 text-[#FCE689] text-[11px] font-mono font-bold">
                    <Sparkles className="w-3 h-3 text-[#ECC557]" />
                    GLOBAL MOVEMENT INITIATIVE
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-airstrike text-white">
                    BECOME A PURPOSE DRIVEN ENTREPRENEUR
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    Building wealth without purpose is empty. Rey Perez champions the global philosophy of aligning high-profit business models with meaningful humanitarian impact through the Influence With Love foundation.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FCE689] hover:text-white group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Partnership & Advisory Opportunities</span>
                      <ArrowUpRight className="w-4 h-4 text-[#ECC557]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
