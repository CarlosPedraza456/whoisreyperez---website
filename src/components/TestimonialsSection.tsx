import React, { useState } from 'react';
import { Star, Play, Quote, Award, Sparkles, CheckCircle2, User } from 'lucide-react';
import { CELEBRITY_TESTIMONIALS } from '../data/siteData';

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
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(8,22,47,0.6),#000000_80%)] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557]">
              <Award className="w-4 h-4 fill-current" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#FCE689] uppercase">
                PROVEN VIP ENDORSEMENTS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-normal font-bebas text-white tracking-wide uppercase leading-none">
              WHAT INDUSTRY TITANS <br />
              <span className="text-gold-gradient">SAY ABOUT REY PEREZ</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilter('celebrity')}
              className={`px-6 py-3 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === 'celebrity'
                  ? 'bg-gold-gradient text-black shadow-lg shadow-[#ECC557]/20'
                  : 'bg-[#08162F] text-zinc-300 border border-zinc-700 hover:text-white hover:border-[#ECC557]/60'
              }`}
            >
              Celebrity Mentors
            </button>
            <button
              onClick={() => setFilter('graduates')}
              className={`px-6 py-3 rounded-xl text-sm font-heading font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === 'graduates'
                  ? 'bg-gold-gradient text-black shadow-lg shadow-[#ECC557]/20'
                  : 'bg-[#08162F] text-zinc-300 border border-zinc-700 hover:text-white hover:border-[#ECC557]/60'
              }`}
            >
              BGB &amp; SSM Founders
            </button>
          </div>
        </div>

        {/* Testimonials Masonry Grid */}
        {filter === 'celebrity' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CELEBRITY_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#08162F]/80 to-black border border-zinc-700 hover:border-[#ECC557] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  
                  {/* Stars & Quote Icon */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-[#ECC557]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-zinc-500 group-hover:text-[#ECC557] transition-colors" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-base text-zinc-100 italic font-normal leading-relaxed">
                    "{t.quote}"
                  </p>

                  {/* Video Trigger */}
                  <button
                    onClick={() => onOpenVideo(`${t.name} Endorsement`, t.videoThumbPlaceholder, `${t.role} • ${t.company}`)}
                    className="inline-flex items-center gap-2.5 text-sm font-mono font-bold text-[#FCE689] hover:underline cursor-pointer pt-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-gradient text-black flex items-center justify-center">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span>Watch Endorsement Video</span>
                  </button>
                </div>

                {/* Author Info */}
                <div className="pt-5 mt-5 border-t border-zinc-700/80 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#08162F] border border-[#ECC557]/60 flex items-center justify-center text-[#ECC557] font-extrabold text-sm shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#ECC557] font-mono font-bold">
                      {t.role}
                    </p>
                    <p className="text-xs text-zinc-300 font-mono">
                      {t.company}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientGraduates.map((t) => (
              <div
                key={t.id}
                className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#08162F]/80 to-black border border-zinc-700 hover:border-[#ECC557] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-[#ECC557]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-zinc-500 group-hover:text-[#ECC557] transition-colors" />
                  </div>

                  <p className="text-base text-zinc-100 italic font-normal leading-relaxed">
                    "{t.quote}"
                  </p>

                  <button
                    onClick={() => onOpenVideo(`${t.name} VIP Review`, t.videoTag)}
                    className="inline-flex items-center gap-2.5 text-sm font-mono font-bold text-[#FCE689] hover:underline cursor-pointer pt-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-gradient text-black flex items-center justify-center">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span>Watch Case Study</span>
                  </button>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-700/80 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#08162F] border border-[#ECC557]/60 flex items-center justify-center text-[#ECC557] font-extrabold text-sm shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#ECC557] font-mono font-bold">
                      {t.role}
                    </p>
                    <p className="text-xs text-zinc-300 font-mono">
                      {t.company}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
