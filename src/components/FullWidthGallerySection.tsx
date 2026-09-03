import React, { useState } from 'react';
import { Maximize2, X, Sparkles, MapPin, Calendar, Award } from 'lucide-react';

import stageImg from '../assets/images/hero_cinematic_stage_1788152344925.jpg';
import boardroomImg from '../assets/images/mastermind_boardroom_1788152367886.jpg';
import studioImg from '../assets/images/podcast_broadcast_studio_parallax_1788190403236.jpg';
import philanthropyImg from '../assets/images/philanthropy_impact_1788152378730.jpg';
import actionImg from '../assets/images/rey_masterclass_boardroom_action_1788155087969.jpg';
import lifestyleImg from '../assets/images/hero_rey_lifestyle_terrace_1788181002252.jpg';
import givingImg from '../assets/images/purpose_driven_giving_banner_1788182069046.jpg';
import arenaImg from '../assets/images/hero_stage_bg_1788150005867.jpg';

interface GalleryItem {
  id: string;
  image: string;
  category: 'keynotes' | 'masterminds' | 'media' | 'philanthropy';
  categoryLabel: string;
  title: string;
  location: string;
  event: string;
  spanCol?: string; // Tailwind grid span
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'arena-stage-1',
    image: stageImg,
    category: 'keynotes',
    categoryLabel: 'Arena Keynote',
    title: 'The Million Dollar Brand Blueprint',
    location: 'Miami Convention Center',
    event: 'Global Business Summit',
    spanCol: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2'
  },
  {
    id: 'mastermind-1',
    image: boardroomImg,
    category: 'masterminds',
    categoryLabel: 'VIP Mastermind',
    title: 'Closed-Door Category Monopoly Boardroom',
    location: 'Ritz-Carlton Penthouse',
    event: '7 & 8-Figure Inner Circle',
    spanCol: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: 'studio-1',
    image: studioImg,
    category: 'media',
    categoryLabel: 'Broadcast Media',
    title: 'Executive Podcast & TV Studio Broadcast',
    location: 'Los Angeles Studio',
    event: 'C-Suite National Media',
    spanCol: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: 'action-intensive',
    image: actionImg,
    category: 'masterminds',
    categoryLabel: 'Live Intensive',
    title: 'Live Pitch & Brand Architecture Session',
    location: 'Dallas Executive Suites',
    event: 'Speaking & Sales Intensive',
    spanCol: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: 'philanthropy-1',
    image: philanthropyImg,
    category: 'philanthropy',
    categoryLabel: 'Philanthropy',
    title: 'Influence With Love Worldwide Mission',
    location: 'International Outreach',
    event: 'Purpose-Driven Impact Tour',
    spanCol: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: 'lifestyle-terrace',
    image: lifestyleImg,
    category: 'masterminds',
    categoryLabel: 'Private Advisory',
    title: 'High-Level Brand & Legacy Masterplanning',
    location: 'Boca Raton Luxury Estate',
    event: 'Executive 1-on-1 Advisory',
    spanCol: 'col-span-1 md:col-span-1 lg:col-span-1'
  },
  {
    id: 'arena-worldwide',
    image: arenaImg,
    category: 'keynotes',
    categoryLabel: 'World Tour',
    title: 'International Celebrity Category Creation Tour',
    location: 'World Tour Arena',
    event: '24+ Countries Keynotes',
    spanCol: 'col-span-1 md:col-span-2 lg:col-span-2'
  },
  {
    id: 'giving-impact',
    image: givingImg,
    category: 'philanthropy',
    categoryLabel: 'Giving Movement',
    title: 'Transforming Lives & Empowering Entrepreneurs',
    location: 'Global Initiative',
    event: 'Influence With Love',
    spanCol: 'col-span-1 md:col-span-1 lg:col-span-1'
  }
];

export const FullWidthGallerySection: React.FC = () => {
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="relative w-full bg-[#000000] border-b border-[#ECC557]/20 py-16 sm:py-20 overflow-hidden">
      {/* Background Volumetric Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial from-[#08162F]/60 via-[#08162F]/15 to-transparent blur-[90px]" />
        <div className="absolute -top-20 right-10 w-[350px] h-[350px] bg-radial from-[#ECC557]/10 to-transparent blur-[70px]" />
      </div>

      {/* Simple Clean Header: Only Title */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
          GLOBAL STAGES &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE689] via-[#ECC557] to-[#EFAF50]">EXECUTIVE IMPACT</span>
        </h2>
      </div>

      {/* FULL-WIDTH CLEAN IMAGE GRID (NO INTERNAL TEXTS) */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-[#08162F]/30 hover:border-[#ECC557] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(236,197,87,0.25)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform duration-500 ease-out group-hover:scale-108"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Simple Fullscreen Lightbox */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#08162F] border border-[#ECC557] text-[#ECC557] hover:bg-[#ECC557] hover:text-black transition-all cursor-pointer shadow-lg"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[88vh] flex items-center justify-center rounded-2xl overflow-hidden border border-[#ECC557]/40 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
