import React from 'react';
import { METRICS, BRAND_LOGOS } from '../data/siteData';
import { Award } from 'lucide-react';

interface SocialProofSectionProps {
  showPlaceholdersOnly: boolean;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  showPlaceholdersOnly
}) => {
  return (
    <section className="relative bg-[#000000] py-14 border-b border-[rgba(236,197,87,0.15)] overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,22,47,0.4),rgba(0,0,0,1))] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 z-10">
        
        {/* Brand Logos / Media Mentions Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          
          <div className="flex items-center gap-3 shrink-0">
            <Award className="w-5 h-5 text-[#ECC557]" />
            <span className="text-sm font-mono font-bold tracking-widest text-[#FCE689] uppercase">
              FEATURED &amp; TRUSTED BY TITANS
            </span>
          </div>

          {/* Clean Editorial Logo Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            {BRAND_LOGOS.map((brand, idx) => (
              <div
                key={idx}
                className="px-4.5 py-2.5 rounded-xl bg-[#08162F]/80 border border-zinc-700 hover:border-[#ECC557]/60 transition-all duration-200"
              >
                <span className="font-heading font-bold text-sm sm:text-base tracking-wider text-zinc-100 hover:text-white transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* 4-Column Metric Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#08162F]/70 to-black/90 border border-zinc-700/80 hover:border-[#ECC557]/60 transition-all duration-300 text-left space-y-1.5 group"
            >
              <div className="flex items-baseline">
                {metric.prefix && (
                  <span className="text-3xl font-bebas text-[#ECC557] mr-1">
                    {metric.prefix}
                  </span>
                )}
                <span className="text-4xl sm:text-5xl font-normal font-bebas text-gold-gradient tracking-wide">
                  {metric.value}
                </span>
                <span className="text-3xl font-bebas text-[#ECC557] ml-0.5">
                  {metric.suffix}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold font-heading text-white uppercase tracking-wider">
                {metric.label}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-medium font-sans">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
