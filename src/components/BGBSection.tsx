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
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Dan Martell-style Subtle Mastermind Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(8,22,47,0.92), #000000 80%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Ambient Gold Light Leaks & Lens Flares */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none animate-flare-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#08162F] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#ECC557]/40 shadow-[0_0_20px_rgba(236,197,87,0.2)]">
            <Rocket className="w-4 h-4 text-[#ECC557]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
              PREMIER LIVE ACCELERATOR EXPERIENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            THE BUSINESS GROWTH <br />
            <span className="text-gold-gradient drop-shadow-[0_0_30px_rgba(236,197,87,0.4)]">
              BOOTCAMP (BGB)
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed">
            The immersive 3-day executive experience where high-performing entrepreneurs and founders scale their companies to 7 and 8 figures <span className="text-white font-semibold underline decoration-[#ECC557]">without spending a single dollar on paid ads</span>.
          </p>
        </div>

        {/* Featured Video Player & Core Value Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Main Video Player Container */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden border-2 border-[#ECC557]/50 bg-black shadow-[0_0_45px_rgba(236,197,87,0.25)]">
              
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
                  className="relative aspect-video w-full cursor-pointer flex flex-col justify-between p-6 bg-gradient-to-b from-[#08162F]/90 to-[#000000]"
                >
                  <div className="flex justify-between items-center z-10">
                    <span className="px-3 py-1 rounded bg-black/80 border border-[#ECC557]/40 text-[#FCE689] font-mono text-xs font-bold">
                      OFFICIAL BGB EXPERIENCE TRAILER
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#ECC557] text-black text-[10px] font-bold font-mono">
                      03:45 MIN
                    </span>
                  </div>

                  <div className="my-auto text-center z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center text-black shadow-[0_0_35px_rgba(236,197,87,0.6)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                    <span className="mt-4 font-bold text-white uppercase tracking-wider text-sm font-heading">
                      Watch Inside The Closed-Door Room
                    </span>
                    <span className="text-xs text-[#ECC557] font-mono mt-1">
                      See how founders add $500K+ in 72 hours
                    </span>
                  </div>

                  <div className="z-10 p-2.5 rounded-lg bg-black/80 border border-[#ECC557]/30 text-xs font-mono flex items-center justify-between text-zinc-300">
                    <span className="text-[#ECC557] font-bold truncate">[PLACEHOLDER_BGB_MAIN_VIDEO]</span>
                    <span>1920x1080 px</span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Key Bootcamp Features (Glassmorphism Cards) */}
          <div className="lg:col-span-5 space-y-3.5">
            {BGB_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-card hover:border-[#ECC557] transition-all duration-300 shadow-md group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-gradient text-black flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading group-hover:text-[#FCE689] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Glowing CTA Button */}
            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-xl bg-gold-gradient text-black font-extrabold uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(236,197,87,0.5)] hover:shadow-[0_0_45px_rgba(236,197,87,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-heading"
              >
                <Sparkles className="w-5 h-5" />
                Apply For The Next BGB Cohort
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Video Testimonials Grid (Massive Redesign) */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <div className="text-xs font-mono font-bold text-[#ECC557] uppercase tracking-wider">
                DOCUMENTED FOUNDER ROI
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-airstrike text-white mt-1">
                BGB GRADUATE CASE STUDIES
              </h3>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Real verified metrics from active alumni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BGB_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl glass-card-dark p-5 border border-[#ECC557]/30 hover:border-[#ECC557] transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  
                  {/* Video Thumbnail Placeholder / Card Preview */}
                  <div
                    onClick={() => onOpenVideo(`${t.name} Case Study`, t.videoThumbPlaceholder)}
                    className="relative aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800 group-hover:border-[#ECC557]/60 cursor-pointer flex items-center justify-center"
                  >
                    {showPlaceholdersOnly ? (
                      <span className="text-[11px] font-mono text-[#ECC557] font-bold p-2 text-center">
                        {t.videoThumbPlaceholder}
                      </span>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/90 text-[10px] font-mono text-white border border-zinc-700">
                          {t.videoDuration}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#ECC557]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#ECC557] font-mono">
                      {t.role} • {t.company}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#08162F] border border-[#ECC557]/40 flex items-center justify-center text-[10px] font-mono text-[#FCE689]">
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
