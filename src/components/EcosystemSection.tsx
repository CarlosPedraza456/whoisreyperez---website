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
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-zinc-900 overflow-hidden"
    >
      {/* Subtle Executive Background Glow & Radial Depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(8,22,47,0.8), #000000 80%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
            <Layers className="w-3.5 h-3.5 text-[#ECC557]" />
            <span className="text-[11px] font-mono font-medium tracking-widest text-[#FCE689] uppercase">
              WHOISREYPEREZ.COM • FULL ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            THE 360 AUTHORITY <span className="text-gold-gradient">ENTERPRISE ECOSYSTEM</span>
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            From premier media broadcast networks to proprietary SaaS and done-for-you celebrity agencies, explore the verified pillars powering Rey Perez's global footprint.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ECOSYSTEM_BRANDS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {getIconForBrand(item.id)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal font-bebas text-white group-hover:text-[#FCE689] transition-colors tracking-wide mt-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#ECC557] font-heading mt-0.5">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mt-2.5">
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
                      className="border border-zinc-800"
                    />
                  </div>
                ) : null}

              </div>

              {/* Action Row */}
              <div className="pt-5 mt-5 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
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
                  <ArrowRight className="w-3.5 h-3.5 text-[#ECC557] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Bottom Trust Note */}
        <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-900 sm:flex sm:items-center sm:justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-normal font-bebas text-white tracking-wide">
              LOOKING TO PARTNER WITH REY PEREZ'S GLOBAL VENTURES?
            </h4>
            <p className="text-xs text-zinc-400 font-light max-w-2xl">
              From syndicated TV guest appearances on <em>Today's Premier Experts</em> to custom white-glove branding under <em>AMP Your Brand</em>, schedule an executive briefing.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Enterprise & Media Partnership')}
            className="mt-4 sm:mt-0 px-6 py-3 rounded-xl bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider font-heading hover:scale-105 transition-all shadow-md shrink-0 cursor-pointer"
          >
            Inquire For Enterprise Access
          </button>
        </div>

      </div>
    </section>
  );
};
