import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import stageVid from '../assets/images/hero_cinematic_stage_1788152344925.jpg';
import boardroomVid from '../assets/images/rey_masterclass_boardroom_action_1788155087969.jpg';
import lifestyleVid from '../assets/images/hero_rey_lifestyle_terrace_1788181002252.jpg';
import brand2DaysVid from '../assets/images/master_brand_in_2_days_1788189432007.jpg';
import ampProdVid from '../assets/images/master_amp_productions_1788189419528.jpg';
import premierVid from '../assets/images/master_todays_premier_experts_1788189444222.jpg';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
}

interface AboutReyVideosSectionProps {
  onOpenVideo: (title: string, tag: string, subtitle?: string) => void;
}

export const AboutReyVideosSection: React.FC<AboutReyVideosSectionProps> = ({ onOpenVideo }) => {
  const row1Videos: VideoItem[] = [
    {
      id: 'vid-1',
      title: 'ARENA KEYNOTE: THE MILLION DOLLAR BRAND',
      category: 'Stage Presentation',
      duration: '14:20',
      image: stageVid,
    },
    {
      id: 'vid-2',
      title: 'CLOSED-DOOR MASTERMIND: STAGE SELLING POWER',
      category: 'VIP Masterclass',
      duration: '18:45',
      image: boardroomVid,
    },
    {
      id: 'vid-3',
      title: 'EXECUTIVE PROFILE: THE REY PEREZ STORY',
      category: 'Documentary & Impact',
      duration: '09:15',
      image: lifestyleVid,
    },
  ];

  const row2Videos: VideoItem[] = [
    {
      id: 'vid-4',
      title: 'BRAND IN 2 DAYS: LIVE EXPERIENCE RECAP',
      category: 'Live Bootcamp',
      duration: '12:50',
      image: brand2DaysVid,
    },
    {
      id: 'vid-5',
      title: 'AMP YOUR BRAND: 360 MARKETING SYSTEM',
      category: 'Agency Blueprint',
      duration: '16:10',
      image: ampProdVid,
    },
    {
      id: 'vid-6',
      title: '+10 SERVICES TO SCALE TO 8 FIGURES',
      category: 'Strategic Framework',
      duration: '21:30',
      image: premierVid,
    },
  ];

  const renderVideoCard = (video: VideoItem) => (
    <div
      key={video.id}
      onClick={() => onOpenVideo(video.title, video.category, 'Official Media & Masterclass Preview')}
      className="group relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#08162F]/40 hover:border-[#ECC557] transition-all duration-500 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_15px_40px_rgba(236,197,87,0.25)]"
    >
      {/* Video Thumbnail with Hover Zoom */}
      <img
        src={video.image}
        alt={video.title}
        className="w-full h-full object-cover transform duration-700 ease-out group-hover:scale-108"
        loading="lazy"
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 group-hover:opacity-75 transition-opacity duration-300" />

      {/* Top Badges */}
      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
        <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold font-mono uppercase tracking-wider bg-black/80 text-[#ECC557] border border-[#ECC557]/40 backdrop-blur-md">
          {video.category}
        </span>
        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-zinc-300 bg-black/80 backdrop-blur-md border border-zinc-700/60">
          {video.duration}
        </span>
      </div>

      {/* Centered Play Button (Gold & Pulsing) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#ECC557] via-[#FCE689] to-[#EFAF50] text-black flex items-center justify-center shadow-[0_0_30px_rgba(236,197,87,0.5)] transform transition-transform duration-300 group-hover:scale-115">
          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-black" />
        </div>
      </div>

      {/* Bottom Title Bar */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-white font-bold text-sm sm:text-base leading-snug uppercase tracking-wide group-hover:text-[#FCE689] transition-colors line-clamp-2">
          {video.title}
        </h4>
      </div>

      {/* Bottom Gold Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ECC557] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );

  return (
    <section
      id="sec-about-rey-videos"
      className="relative bg-[#000000] py-20 sm:py-24 border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(8,22,47,0.7),#000000_80%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ECC557]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557] mb-2">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#ECC557]" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#FCE689] uppercase">
              FEATURED MEDIA &amp; KEYNOTES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
            WATCH REY PEREZ <span className="text-gold-gradient">IN ACTION</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
            From international arenas to closed-door VIP masterminds, explore live recordings, strategic breakdowns, and high-impact keynotes delivered across the globe.
          </p>
        </div>

        {/* ROW 1: 3 Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {row1Videos.map(renderVideoCard)}
        </div>

        {/* Middle Editorial Divider / Narrative Quote */}
        <div className="max-w-4xl mx-auto my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#08162F]/80 via-[#08162F]/40 to-[#08162F]/80 border border-[#ECC557]/30 text-center backdrop-blur-sm">
          <p className="text-base sm:text-lg text-zinc-200 font-normal italic leading-relaxed">
            "Leveraging two decades of sales, branding, and keynote experience, Rey Perez equips business owners to dominate their categories and turn their personal brands into high-converting revenue engines."
          </p>
        </div>

        {/* ROW 2: 3 Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {row2Videos.map(renderVideoCard)}
        </div>

      </div>
    </section>
  );
};
