import React from 'react';
import { Layers, Tv, Globe, Sparkles, BookOpen, Heart, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import { ECOSYSTEM_BRANDS, EcosystemBrand } from '../data/siteData';
import { AssetPlaceholder } from './AssetPlaceholder';

interface EcosystemSectionProps {
  onOpenBooking: (brandName: string) => void;
  onOpenVideo: (title: string, tag: string, subtitle?: string) => void;
  showPlaceholdersOnly: boolean;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onOpenBooking,
  onOpenVideo,
  showPlaceholdersOnly
}) => {
  const getIconForBrand = (id: string) => {
    switch (id) {
      case 'amp-your-brand':
        return <Briefcase className="w-5 h-5 text-[#ECC557]" />;
      case 'my360sites':
        return <Globe className="w-5 h-5 text-[#ECC557]" />;
      case 'todays-premier-experts':
        return <Tv className="w-5 h-5 text-[#ECC557]" />;
      case 'vip-branding-experience':
        return <Sparkles className="w-5 h-5 text-[#ECC557]" />;
      case 'celebrity-code-book':
        return <BookOpen className="w-5 h-5 text-[#ECC557]" />;
      case 'influence-with-love':
        return <Heart className="w-5 h-5 text-[#ECC557]" />;
      default:
        return <Layers className="w-5 h-5 text-[#ECC557]" />;
    }
  };

  return (
    <section
      id="sec-ecosystem"
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Subtle Executive Background Glow & Radial Depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(8,22,47,0.92), #000000 80%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#ECC557]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#08162F]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#ECC557]/40 shadow-inner">
            <Layers className="w-4 h-4 text-[#ECC557]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
              WHOISREYPEREZ.COM • FULL ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            THE 360 AUTHORITY <span className="text-gold-gradient">ENTERPRISE ECOSYSTEM</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            From premier media broadcast networks to proprietary SaaS and done-for-you celebrity agencies, explore the verified pillars powering Rey Perez's global footprint.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_BRANDS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#08162F]/40 via-zinc-950/80 to-[#000000] border border-zinc-800 hover:border-[#ECC557]/70 p-6 transition-all duration-300 shadow-lg hover:shadow-[0_10px_35px_rgba(236,197,87,0.15)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-black/80 border border-[#ECC557]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIconForBrand(item.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#08162F] border border-[#ECC557]/30 text-[10px] font-mono font-bold text-[#FCE689] uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-normal font-bebas text-white group-hover:text-gold-gradient transition-colors tracking-wide mt-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#ECC557] font-heading mt-0.5">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>

                {/* Asset Placeholder Preview */}
                {showPlaceholdersOnly ? (
                  <div className="pt-2">
                    <AssetPlaceholder
                      tag={item.placeholderTag}
                      label={`${item.name} Official Asset`}
                      dimensions="600x350 px"
                      aspectRatio="aspect-[16/9]"
                      type="graphic"
                      className="border border-[#ECC557]/30"
                    />
                  </div>
                ) : null}

              </div>

              {/* Action Row */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  {item.urlLabel}
                </span>

                <button
                  onClick={() => {
                    if (item.id === 'todays-premier-experts') {
                      onOpenVideo("Today's Premier Experts TV Show", '[PLACEHOLDER_TPE_TV_SHOW]', 'Broadcasting on Apple TV, Roku, Amazon Fire & C-Suite TV');
                    } else {
                      onOpenBooking(item.name);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-wider text-[#FCE689] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>{item.id === 'todays-premier-experts' ? 'Watch Episode' : 'Explore Platform'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ECC557] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Bottom Trust Note */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#08162F]/60 via-zinc-950 to-[#000000] border border-[#ECC557]/30 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-normal font-bebas text-white tracking-wide">
              LOOKING TO PARTNER WITH REY PEREZ'S GLOBAL VENTURES?
            </h4>
            <p className="text-xs text-zinc-300 font-light max-w-2xl">
              From syndicated TV guest appearances on <em>Today's Premier Experts</em> to custom white-glove branding under <em>AMP Your Brand</em>, schedule an executive briefing.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Enterprise & Media Partnership')}
            className="mt-4 sm:mt-0 px-6 py-3 rounded-xl bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider font-heading hover:scale-105 transition-all shadow-[0_0_20px_rgba(236,197,87,0.3)] shrink-0 cursor-pointer"
          >
            Inquire For Enterprise Access
          </button>
        </div>

      </div>
    </section>
  );
};
