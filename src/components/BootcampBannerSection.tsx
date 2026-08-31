import React from 'react';
import { Play, ChevronRight, Sparkles } from 'lucide-react';
import speakerManThumb from '../assets/images/speaker_testimonial_man_1788151421585.jpg';
import speakerWomanThumb from '../assets/images/speaker_testimonial_woman_1788151433285.jpg';
import fabioMarquesThumb from '../assets/images/fabio_marques_speaker_1788151444675.jpg';

interface BootcampBannerSectionProps {
  onOpenBooking: () => void;
  onOpenVideo: (title: string, tag: string, desc?: string) => void;
  showPlaceholdersOnly: boolean;
}

export const BootcampBannerSection: React.FC<BootcampBannerSectionProps> = ({
  onOpenBooking,
  onOpenVideo,
  showPlaceholdersOnly
}) => {
  const testimonials = [
    {
      id: 'bgb-video-1',
      name: 'Marcus Vance',
      title: 'Founder, Apex Logistics ($8M ARR)',
      tag: '[PLACEHOLDER_BGB_SPEAKER_1_VIDEO]',
      thumb: speakerManThumb,
      duration: '03:10',
      quote: 'We restructured our entire business in 3 days. Added $2.1M in net profit without spending an extra dollar on ads.'
    },
    {
      id: 'bgb-video-2',
      name: 'Elena Rostova',
      title: 'Managing Partner, Rostova Legal Group',
      tag: '[PLACEHOLDER_BGB_SPEAKER_2_VIDEO]',
      thumb: speakerWomanThumb,
      duration: '02:50',
      quote: 'Rey identified our primary operational bottleneck in 15 minutes. The ROI from this bootcamp was over 20x.'
    },
    {
      id: 'bgb-video-3',
      name: 'David Sterling',
      title: 'CEO, Sterling Media Holdings',
      tag: '[PLACEHOLDER_BGB_SPEAKER_3_VIDEO]',
      thumb: fabioMarquesThumb,
      duration: '04:15',
      badge: 'David Sterling • Scale Strategist',
      quote: 'The Joint Venture frameworks alone are worth six figures. Business Growth Bootcamp is mandatory for 7-figure founders.'
    }
  ];

  return (
    <section 
      id="sec-bgb-showcase" 
      className="relative bg-[#000000] text-white py-24 sm:py-32 overflow-hidden border-b border-[rgba(236,197,87,0.2)]"
    >
      {/* Brand Midnight Blue & Gold Aura - Mirrored to Right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(8,22,47,0.7),#000000_80%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[700px] h-[300px] bg-[#ECC557]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Right-Oriented Asymmetrical Top Layout: Left Editorial Hook, Right Crest & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-10 border-b border-zinc-800/80">
          
          {/* LEFT: Headline & Pitch */}
          <div className="lg:col-span-7 space-y-4 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557]">
              <Sparkles className="w-4 h-4 fill-current" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#FCE689] uppercase">
                3-DAY BUSINESS ACCELERATOR FOR 6 &amp; 7-FIGURE FOUNDERS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-normal font-bebas text-white tracking-wide leading-tight uppercase">
              SCALE YOUR ENTERPRISE &amp; <br className="hidden sm:inline" />
              <span className="text-gold-gradient">SYSTEMATIZE 7-FIGURE REVENUE</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed">
              Business Growth Bootcamp (BGB) is Rey Perez's signature operational &amp; revenue sprint. In 3 intensive days, you rebuild your business architecture, eliminate fulfillment bottlenecks, and engineer proprietary joint-venture pipelines that produce predictable cash flow.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-xl bg-gold-gradient text-black font-extrabold font-heading text-sm sm:text-base uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply For Next Bootcamp Cohort</span>
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </button>
              <span className="text-sm font-mono text-zinc-300 text-center sm:text-left">Strictly limited to 30 qualified CEOs per room</span>
            </div>
          </div>

          {/* RIGHT: Official BGB Crest & Title (Oriented to the Right) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right space-y-4 order-1 lg:order-2">
            
            <div className="flex items-center gap-5 lg:flex-row-reverse">
              {/* Premium Gold Vector Emblem for Business Growth Bootcamp */}
              <svg 
                viewBox="0 0 400 320" 
                className="w-24 sm:w-28 h-auto shrink-0 drop-shadow-[0_0_20px_rgba(236,197,87,0.3)]"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Crown / Pinnacle of Scale */}
                <path d="M160 45 L180 20 L200 35 L220 20 L240 45 Z" fill="url(#goldGradBGB)" />
                
                {/* Left Laurel Growth Leaf */}
                <g transform="translate(60, 40)">
                  <path d="M40 70 C15 40, 25 10, 65 20" stroke="url(#goldGradBGB)" strokeWidth="6" strokeLinecap="round" />
                  <path d="M30 85 C5 60, 15 30, 55 40" stroke="url(#goldGradBGB)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M45 100 C20 80, 25 50, 60 60" stroke="url(#goldGradBGB)" strokeWidth="4" strokeLinecap="round" />
                </g>

                {/* Right Laurel Growth Leaf */}
                <g transform="translate(240, 40)">
                  <path d="M60 70 C85 40, 75 10, 35 20" stroke="url(#goldGradBGB)" strokeWidth="6" strokeLinecap="round" />
                  <path d="M70 85 C95 60, 85 30, 45 40" stroke="url(#goldGradBGB)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M55 100 C80 80, 75 50, 40 60" stroke="url(#goldGradBGB)" strokeWidth="4" strokeLinecap="round" />
                </g>

                {/* Central Diamond Scale Shield */}
                <path 
                  d="M140 55 C170 50, 230 50, 260 55 C265 110, 245 160, 200 190 C155 160, 135 110, 140 55 Z" 
                  fill="#08162F" 
                  stroke="url(#goldGradBGB)" 
                  strokeWidth="8" 
                />
                
                {/* Growth Chart / Ascending Arrow Monogram inside Shield */}
                <path 
                  d="M165 145 L185 125 L205 135 L235 95 M235 95 L220 95 M235 95 L235 110" 
                  stroke="url(#goldGradBGB)" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                <defs>
                  <linearGradient id="goldGradBGB" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ECC557" />
                    <stop offset="50%" stopColor="#D8A938" />
                    <stop offset="100%" stopColor="#B38622" />
                  </linearGradient>
                </defs>
              </svg>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-widest leading-none">
                  BUSINESS <span className="text-[#ECC557]">GROWTH</span>
                </h3>
                <div className="text-xs sm:text-sm font-bold text-[#ECC557] tracking-[0.4em] uppercase font-mono mt-1">
                  BOOTCAMP (BGB)
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3-Column Video Proof Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              onClick={() => onOpenVideo(`${item.name} Experience`, item.tag, `${item.title} • Business Growth Bootcamp Graduate`)}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#08162F] to-[#020712] border border-zinc-700 hover:border-[#ECC557] shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img 
                  src={item.thumb} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient text-black flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-[#ECC557]/40">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/90 border border-zinc-700 text-xs font-mono text-[#ECC557] font-bold">
                  {item.duration}
                </div>
              </div>

              {/* Card Meta & Quote */}
              <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                <p className="text-sm sm:text-base text-zinc-100 italic font-normal leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="pt-3 border-t border-zinc-700/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-[#ECC557] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 font-mono">
                      {item.title}
                    </p>
                  </div>

                  <span className="text-xs sm:text-sm font-mono font-bold text-[#ECC557] group-hover:underline">
                    Watch Case Study →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
