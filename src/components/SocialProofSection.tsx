import React from 'react';
import { METRICS, BRAND_LOGOS } from '../data/siteData';
import { TrendingUp, Award, Sparkles, Building2 } from 'lucide-react';

interface SocialProofSectionProps {
  showPlaceholdersOnly: boolean;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  showPlaceholdersOnly
}) => {
  return (
    <section className="relative bg-[#000000] py-14 border-b border-zinc-900 overflow-hidden">
      
      {/* Subtle Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,22,47,0.4),rgba(0,0,0,1))] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Brand Logos / Media Mentions Bar - Softened & Refined */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-zinc-800" />
            <span className="text-[11px] font-mono font-medium tracking-[0.2em] text-zinc-400 uppercase">
              Featured & Recognized Across Global Media
            </span>
            <span className="h-px w-8 bg-zinc-800" />
          </div>

          {/* Clean Monochrome/Subtle Media Grid */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {BRAND_LOGOS.map((brand, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-zinc-950/80 border border-zinc-800/80 hover:border-[#ECC557]/40 hover:bg-[#08162F]/40 transition-all duration-300 flex items-center gap-2 group shadow-sm"
                >
                  <Building2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#ECC557] transition-colors" />
                  {showPlaceholdersOnly ? (
                    <span className="font-mono text-[11px] text-[#FCE689] font-medium">
                      {brand.tag}
                    </span>
                  ) : (
                    <span className="font-heading font-medium text-xs tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Column Live Metric Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="relative group p-6 rounded-xl bg-gradient-to-b from-[#08162F]/50 via-zinc-950/80 to-[#000000] border border-zinc-800 hover:border-[#ECC557]/60 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(236,197,87,0.15)] hover:-translate-y-0.5 text-center"
            >
              <div className="flex items-baseline justify-center">
                {metric.prefix && (
                  <span className="text-2xl sm:text-3xl font-normal text-[#FCE689] font-bebas mr-1">
                    {metric.prefix}
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-normal font-bebas text-gold-gradient tracking-wide">
                  {metric.value}
                </span>
                <span className="text-xl sm:text-2xl font-normal text-[#ECC557] font-bebas ml-0.5">
                  {metric.suffix}
                </span>
              </div>

              <h3 className="mt-2 text-sm font-normal text-white uppercase tracking-wider font-bebas">
                {metric.label}
              </h3>

              <p className="mt-1 text-xs text-zinc-400 font-light">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
