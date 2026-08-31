import React, { useState } from 'react';
import { Star, Play, Quote, Award, Sparkles, CheckCircle2, User } from 'lucide-react';
import { CELEBRITY_TESTIMONIALS } from '../data/siteData';
import { AssetPlaceholder } from './AssetPlaceholder';

interface TestimonialsSectionProps {
  onOpenVideo: (title: string, tag: string, subtitle?: string) => void;
  showPlaceholdersOnly: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenVideo,
  showPlaceholdersOnly
}) => {
  const [filter, setFilter] = useState<'celebrity' | 'graduates'>('celebrity');

  const clientGraduates = [
    {
      id: 'g1',
      name: 'Dr. Kimberly Adams',
      role: 'CEO, Adams BioHealth Group',
      company: '7-Figure Founder',
      category: 'graduates',
      quote: 'Attending Rey’s Business Growth Bootcamp completely re-engineered our revenue architecture. In 6 months we scaled from $1.2M to $4.8M completely organically.',
      tag: '[PLACEHOLDER_CLIENT_AVATAR_2]',
      videoTag: '[PLACEHOLDER_TESTIMONIAL_VIDEO_2]',
      rating: 5
    },
    {
      id: 'g2',
      name: 'Christian Valenti',
      role: 'Real Estate Fund Manager & Keynote Speaker',
      company: 'Valenti Capital',
      category: 'graduates',
      quote: 'Before Speaking & Sales Mastery, I was leaving 7-figures on the table every time I spoke. Rey gave me the exact non-pushy script to close 42% of the room.',
      tag: '[PLACEHOLDER_CLIENT_AVATAR_3]',
      videoTag: '[PLACEHOLDER_TESTIMONIAL_VIDEO_3]',
      rating: 5
    },
    {
      id: 'g3',
      name: 'Vanessa Montgomery',
      role: 'High-Ticket Agency Founder',
      company: 'Montgomery Media',
      category: 'graduates',
      quote: 'Rey taught me the celebrity authority positioning model. We instantly doubled our retainer fees to $25k/mo without losing a single client.',
      tag: '[PLACEHOLDER_CLIENT_AVATAR_4]',
      videoTag: '[PLACEHOLDER_TESTIMONIAL_VIDEO_4]',
      rating: 5
    }
  ];

  return (
    <section
      id="sec-testimonials"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 10%, rgba(8,22,47,0.92), #000000 80%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#08162F]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#ECC557]/40">
            <Award className="w-4 h-4 text-[#ECC557]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
              WHOISREYPEREZ.COM • PROVEN ENDORSEMENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal font-bebas text-white leading-none tracking-wide">
            WHAT INDUSTRY TITANS & CELEBRITIES <br />
            <span className="text-gold-gradient">SAY ABOUT REY PEREZ</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            From iconic motivational legends and Shark Tank pioneers to high-growth CEOs, explore genuine endorsements of Rey Perez's authority and stage mastery.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setFilter('celebrity')}
            className={`px-5 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'celebrity'
                ? 'bg-gold-gradient text-black shadow-[0_0_20px_rgba(236,197,87,0.35)]'
                : 'bg-[#08162F]/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-[#ECC557]/40'
            }`}
          >
            Celebrity Mentors & Titans (Les Brown, Kevin Harrington, Jack Canfield...)
          </button>
          <button
            onClick={() => setFilter('graduates')}
            className={`px-5 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'graduates'
                ? 'bg-gold-gradient text-black shadow-[0_0_20px_rgba(236,197,87,0.35)]'
                : 'bg-[#08162F]/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-[#ECC557]/40'
            }`}
          >
            BGB & SSM Founders & Leaders
          </button>
        </div>

        {/* Testimonials Grid */}
        {filter === 'celebrity' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CELEBRITY_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#08162F]/50 via-zinc-950/80 to-[#000000] border border-[#ECC557]/30 hover:border-[#ECC557] transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-[#ECC557]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#ECC557]/40 group-hover:text-[#ECC557] transition-colors" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-zinc-200 italic font-light leading-relaxed">
                    "{t.quote}"
                  </p>

                  {/* Watch Video Button */}
                  <button
                    onClick={() => onOpenVideo(`${t.name} Endorsement`, t.videoThumbPlaceholder, `${t.role} • ${t.company}`)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FCE689] hover:underline cursor-pointer pt-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#ECC557]" />
                    <span>Watch Full Endorsement Reel</span>
                  </button>
                </div>

                {/* Author & Avatar */}
                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#08162F] border border-[#ECC557] flex items-center justify-center text-[#ECC557] font-bold text-xs">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-[#ECC557] font-mono leading-tight">
                        {t.role}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-mono">
                        {t.company}
                      </p>
                    </div>
                  </div>

                  {showPlaceholdersOnly && (
                    <span className="text-[9px] font-mono text-zinc-500">
                      {t.avatarPlaceholder}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientGraduates.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#08162F]/50 via-zinc-950/80 to-[#000000] border border-[#ECC557]/30 hover:border-[#ECC557] transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-[#ECC557]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#ECC557]/40 group-hover:text-[#ECC557] transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-200 italic font-light leading-relaxed">
                    "{t.quote}"
                  </p>

                  <button
                    onClick={() => onOpenVideo(`${t.name} VIP Review`, t.videoTag)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FCE689] hover:underline cursor-pointer pt-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#ECC557]" />
                    <span>Watch Case Study Video</span>
                  </button>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#08162F] border border-[#ECC557]/50 flex items-center justify-center text-[#ECC557] font-bold text-xs">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-[#ECC557] font-mono">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {showPlaceholdersOnly && (
                    <span className="text-[9px] font-mono text-zinc-500">
                      {t.tag}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

