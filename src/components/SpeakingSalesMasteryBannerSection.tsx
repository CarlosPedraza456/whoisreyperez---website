import React from 'react';
import { Play, ChevronRight, Sparkles, Star, Award, CheckCircle2 } from 'lucide-react';
import speakerManThumb from '../assets/images/speaker_testimonial_man_1788151421585.jpg';
import speakerWomanThumb from '../assets/images/speaker_testimonial_woman_1788151433285.jpg';
import fabioMarquesThumb from '../assets/images/fabio_marques_speaker_1788151444675.jpg';

interface SpeakingSalesMasteryBannerSectionProps {
  onOpenBooking: () => void;
  onOpenVideo: (title: string, tag: string, desc?: string) => void;
  showPlaceholdersOnly: boolean;
}

export const SpeakingSalesMasteryBannerSection: React.FC<SpeakingSalesMasteryBannerSectionProps> = ({
  onOpenBooking,
  onOpenVideo,
  showPlaceholdersOnly
}) => {
  const testimonials = [
    {
      id: 'ssm-video-1',
      name: 'Dr. Michael Chen',
      title: 'Founder & Keynote Strategist',
      tag: '[PLACEHOLDER_SSM_SPEAKER_1_VIDEO]',
      thumb: speakerManThumb,
      duration: '02:40',
      quote: 'Generated $140,000 from a 45-minute keynote using Rey’s heart-centered closing script.'
    },
    {
      id: 'ssm-video-2',
      name: 'Brenda Jackson',
      title: 'Executive Leadership Coach',
      tag: '[PLACEHOLDER_SSM_SPEAKER_2_VIDEO]',
      thumb: speakerWomanThumb,
      duration: '03:15',
      quote: 'The 3-Day Live Camp completely removed my fear of selling from the stage. Sold out my mastermind.'
    },
    {
      id: 'ssm-video-3',
      name: 'Fabio Marques',
      title: 'Global Influence Expert',
      tag: '[PLACEHOLDER_SSM_SPEAKER_3_VIDEO]',
      thumb: fabioMarquesThumb,
      duration: '04:05',
      badge: 'Fabio Marques • Global Influence Expert',
      quote: 'Rey Perez is without question the #1 master in the world at stage authority and closing.'
    }
  ];

  return (
    <section 
      id="sec-ssm-showcase" 
      className="relative bg-[#000000] text-white py-24 sm:py-32 overflow-hidden border-b border-[rgba(236,197,87,0.2)]"
    >
      {/* Brand Midnight Blue & Gold Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(8,22,47,0.7),#000000_80%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ECC557]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Asymmetrical Top Layout: Left Crest & Branding, Right Editorial Hook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-10 border-b border-zinc-800/80">
          
          {/* LEFT: Official Crest & Title */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557]">
              <Sparkles className="w-4 h-4 fill-current" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#FCE689] uppercase">
                LIVE 3-DAY IMMERSIVE ACCELERATOR
              </span>
            </div>

            {/* Premium Gold Vector Crest */}
            <div className="flex items-center gap-5">
              <svg 
                viewBox="0 0 400 320" 
                className="w-24 sm:w-28 h-auto shrink-0 drop-shadow-[0_0_20px_rgba(236,197,87,0.3)]"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M170 45 L180 25 L200 40 L220 25 L230 45 Z" fill="url(#goldGradSSM2)" />
                <g transform="translate(60, 40)">
                  <path d="M40 70 C10 40, 20 10, 60 20" stroke="url(#goldGradSSM2)" strokeWidth="6" strokeLinecap="round" />
                  <path d="M30 85 C0 60, 10 30, 50 40" stroke="url(#goldGradSSM2)" strokeWidth="5" strokeLinecap="round" />
                  <rect x="65" y="30" width="22" height="40" rx="11" transform="rotate(-30 75 50)" fill="url(#goldGradSSM2)" />
                  <path d="M55 65 L45 85" stroke="url(#goldGradSSM2)" strokeWidth="6" strokeLinecap="round" />
                </g>
                <g transform="translate(240, 40)">
                  <path d="M60 70 C90 40, 80 10, 40 20" stroke="url(#goldGradSSM2)" strokeWidth="6" strokeLinecap="round" />
                  <path d="M70 85 C100 60, 90 30, 50 40" stroke="url(#goldGradSSM2)" strokeWidth="5" strokeLinecap="round" />
                  <rect x="15" y="30" width="22" height="40" rx="11" transform="rotate(30 25 50)" fill="url(#goldGradSSM2)" />
                  <path d="M45 65 L55 85" stroke="url(#goldGradSSM2)" strokeWidth="6" strokeLinecap="round" />
                </g>
                <path 
                  d="M140 55 C170 50, 230 50, 260 55 C265 110, 245 160, 200 190 C155 160, 135 110, 140 55 Z" 
                  fill="#08162F" 
                  stroke="url(#goldGradSSM2)" 
                  strokeWidth="8" 
                />
                <path 
                  d="M175 115 C165 95, 180 80, 195 90 C205 98, 200 115, 185 125 C170 135, 168 150, 195 160 M225 115 C235 95, 220 80, 205 90 C195 98, 200 115, 215 125 C230 135, 232 150, 205 160" 
                  stroke="url(#goldGradSSM2)" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                />
                <defs>
                  <linearGradient id="goldGradSSM2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ECC557" />
                    <stop offset="50%" stopColor="#D8A938" />
                    <stop offset="100%" stopColor="#B38622" />
                  </linearGradient>
                </defs>
              </svg>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-widest leading-none">
                  SPEAKING <span className="text-[#ECC557]">&amp;</span> SALES
                </h3>
                <div className="text-xs sm:text-sm font-bold text-[#ECC557] tracking-[0.4em] uppercase font-mono mt-1">
                  MASTERY (SSM)
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Headline & Pitch */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-normal font-bebas text-white tracking-wide leading-tight uppercase">
              ENHANCE YOUR PRESENTATION SKILLS &amp; <br className="hidden sm:inline" />
              <span className="text-gold-gradient">MASTER STAGE MONETIZATION</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed">
              Speaking &amp; Sales Mastery is Rey Perez's signature 3-day experiential speaker camp. You don't just learn theory — you stand on stage, deliver live pitches, get real-time coaching from Rey, and master the exact formula to close 40%+ of any room.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-xl bg-gold-gradient text-black font-extrabold font-heading text-sm sm:text-base uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Speaker Camp Dates</span>
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </button>
              <span className="text-sm font-mono text-zinc-300 text-center sm:text-left">Strict limit of 25 attendees per cohort</span>
            </div>
          </div>

        </div>

        {/* 3-Column Video Proof Showcase (High Contrast Modern Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              onClick={() => onOpenVideo(`${item.name} Experience`, item.tag, `${item.title} • Speaking & Sales Mastery Graduate`)}
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
                    Watch Reel →
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
