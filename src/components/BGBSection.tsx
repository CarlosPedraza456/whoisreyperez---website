import React from 'react';
import { BGB_FEATURES, BGB_TESTIMONIALS } from '../data/siteData';
import { AssetPlaceholder } from './AssetPlaceholder';
import { Play, Sparkles, Rocket, CheckCircle2, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { Testimonial } from '../types';

interface BGBSectionProps {
  onOpenVideo: (title: string, tag: string) => void;
  onOpenBooking: () => void;
  showPlaceholdersOnly: boolean;
}

export const BGBSection: React.FC<BGBSectionProps> = ({
  onOpenVideo,
  onOpenBooking,
  showPlaceholdersOnly
}) => {
  return (
    <section
      id="sec-bgb"
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-zinc-900 overflow-hidden"
    >
      {/* Subtle Mastermind Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(8,22,47,0.8), #000000 80%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
            <Rocket className="w-3.5 h-3.5 text-[#ECC557]" />
            <span className="text-[11px] font-mono font-medium tracking-widest text-[#FCE689] uppercase">
              PREMIER LIVE ACCELERATOR EXPERIENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            THE BUSINESS GROWTH <br />
            <span className="text-gold-gradient">
              BOOTCAMP (BGB)
            </span>
          </h2>

          <p className="text-base text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
            The immersive 3-day executive experience where high-performing entrepreneurs and founders scale their companies to 7 and 8 figures <span className="text-zinc-200 font-medium">without spending a single dollar on paid ads</span>.
          </p>
        </div>

        {/* Featured Video Player & Core Value Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Main Video Player Container */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              
              {showPlaceholdersOnly ? (
                <AssetPlaceholder
                  tag="[PLACEHOLDER_BGB_MAIN_VIDEO]"
                  label="BGB Experience Trailer & Documentary"
                  dimensions="1920x1080 (4K HD Stream)"
                  aspectRatio="aspect-video"
                  type="video"
                />
              ) : (
                <div
                  onClick={() => onOpenVideo('Business Growth Bootcamp Official Documentary', '[PLACEHOLDER_BGB_MAIN_VIDEO]')}
                  className="relative aspect-video w-full cursor-pointer flex flex-col justify-between p-6 bg-zinc-950"
                >
                  <div className="flex justify-between items-center z-10">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[#FCE689] font-mono text-[11px] font-medium">
                      OFFICIAL BGB EXPERIENCE TRAILER
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#ECC557] text-black text-[10px] font-bold font-mono">
                      03:45 MIN
                    </span>
                  </div>

                  <div className="my-auto text-center z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center text-black shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                    <span className="mt-3 font-bold text-white uppercase tracking-wider text-sm font-heading">
                      Watch Inside The Closed-Door Room
                    </span>
                    <span className="text-xs text-zinc-400 font-mono mt-0.5">
                      See how founders add $500K+ in 72 hours
                    </span>
                  </div>

                  <div className="z-10 p-2 rounded bg-zinc-900/80 border border-zinc-800/80 text-[11px] font-mono flex items-center justify-between text-zinc-400">
                    <span className="text-[#ECC557] font-medium truncate">[PLACEHOLDER_BGB_MAIN_VIDEO]</span>
                    <span>1920x1080 px</span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Key Bootcamp Features */}
          <div className="lg:col-span-5 space-y-3">
            {BGB_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#FCE689] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-black font-extrabold uppercase tracking-wider text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-heading"
              >
                <Sparkles className="w-4 h-4" />
                Apply For The Next BGB Cohort
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Video Testimonials Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-900 pb-3">
            <div>
              <div className="text-[11px] font-mono font-medium text-[#ECC557] uppercase tracking-wider">
                DOCUMENTED FOUNDER ROI
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-airstrike text-white mt-1">
                BGB GRADUATE CASE STUDIES
              </h3>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Real verified metrics from active alumni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BGB_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-xl bg-zinc-950/60 p-5 border border-zinc-900 hover:border-zinc-800 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  
                  {/* Video Thumbnail */}
                  <div
                    onClick={() => onOpenVideo(`${t.name} Case Study`, t.videoThumbPlaceholder)}
                    className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer flex items-center justify-center"
                  >
                    {showPlaceholdersOnly ? (
                      <span className="text-[11px] font-mono text-[#ECC557] font-medium p-2 text-center">
                        {t.videoThumbPlaceholder}
                      </span>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-[#ECC557] text-black flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                        <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/90 text-[10px] font-mono text-zinc-300 border border-zinc-800">
                          {t.videoDuration}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#ECC557]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-zinc-300 italic leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3.5 mt-3.5 border-t border-zinc-900 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#ECC557] font-mono">
                      {t.role} • {t.company}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono text-[#FCE689]">
                    ✓
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
