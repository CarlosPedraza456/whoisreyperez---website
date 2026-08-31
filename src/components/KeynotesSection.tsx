import React, { useState } from 'react';
import { KEYNOTES } from '../data/siteData';
import { AssetPlaceholder } from './AssetPlaceholder';
import { Mic, Clock, Users, CheckCircle, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { Keynote } from '../types';

interface KeynotesSectionProps {
  onSelectKeynote: (keynote: Keynote) => void;
  showPlaceholdersOnly: boolean;
}

export const KeynotesSection: React.FC<KeynotesSectionProps> = ({
  onSelectKeynote,
  showPlaceholdersOnly
}) => {
  const [activeTabId, setActiveTabId] = useState(KEYNOTES[0].id);

  const activeKeynote = KEYNOTES.find((k) => k.id === activeTabId) || KEYNOTES[0];

  return (
    <section
      id="sec-keynotes"
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-zinc-900 overflow-hidden"
    >
      {/* Subtle Arena Stage Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 10%, rgba(8,22,47,0.8), #000000 75%), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
            <Mic className="w-3.5 h-3.5 text-[#ECC557]" />
            <span className="text-[11px] font-mono font-medium tracking-widest text-[#FCE689] uppercase">
              WORLD-CLASS KEYNOTE SIGNATURES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal font-bebas text-white leading-none tracking-wide">
            HIGH-IMPACT <span className="text-gold-gradient">KEYNOTES & EXPERIENCES</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Rey Perez electrifies global stages, corporate conventions, and private masterminds with unforgettable stage presence, actionable frameworks, and high-conversion psychology.
          </p>
        </div>

        {/* Tab Selector for Quick Switching */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {KEYNOTES.map((k) => (
            <button
              key={k.id}
              onClick={() => setActiveTabId(k.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTabId === k.id
                  ? 'bg-gold-gradient text-black shadow-md'
                  : 'bg-zinc-950/80 text-zinc-400 border border-zinc-900 hover:border-zinc-800 hover:text-white'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>{k.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Keynote Spotlight Card */}
        <div className="p-6 sm:p-9 rounded-2xl bg-zinc-950/90 border border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FCE689] text-[11px]">
                  <Clock className="w-3 h-3 text-[#ECC557]" />
                  {activeKeynote.duration}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px]">
                  <Users className="w-3 h-3 text-[#ECC557]" />
                  {activeKeynote.targetAudience}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black font-airstrike text-white leading-tight">
                  {activeKeynote.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#ECC557] font-heading uppercase tracking-wide">
                  {activeKeynote.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light pt-1">
                  {activeKeynote.description}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2 pt-1">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#FCE689] font-medium">
                  Core Executive Takeaways:
                </h4>
                <div className="space-y-1.5">
                  {activeKeynote.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-[#ECC557] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectKeynote(activeKeynote)}
                  className="px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer font-heading hover:scale-105"
                >
                  <Calendar className="w-4 h-4" />
                  Request Booking For This Keynote
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Keynote Image Asset Placeholder */}
            <div className="lg:col-span-5">
              {showPlaceholdersOnly ? (
                <AssetPlaceholder
                  tag={activeKeynote.placeholderId}
                  label={activeKeynote.title}
                  dimensions="1200x800 px (Stage Action Shot)"
                  aspectRatio="aspect-video lg:aspect-square"
                  type="keynote"
                  className="border border-zinc-800"
                />
              ) : (
                <div className="relative rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-900/60 p-6 aspect-video lg:aspect-square flex flex-col justify-between group">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[#FCE689] text-[10px] font-mono font-medium">
                      STAGE PRESENTATION MASTER
                    </span>
                    <Mic className="w-4 h-4 text-[#ECC557]" />
                  </div>

                  <div className="text-center my-auto space-y-2">
                    <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto">
                      <Sparkles className="w-6 h-6 text-[#ECC557]" />
                    </div>
                    <div className="text-base font-bold font-airstrike text-white">
                      REY PEREZ LIVE ON STAGE
                    </div>
                    <p className="text-[11px] text-zinc-500 font-mono">
                      High-Definition Keynote Visual Simulation
                    </p>
                  </div>

                  <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 text-[10px] font-mono flex items-center justify-between text-zinc-400">
                    <span className="text-[#ECC557] font-medium">{activeKeynote.placeholderId}</span>
                    <span>1200x800 px</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 3-Column Grid of All Keynotes Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {KEYNOTES.map((k) => (
            <div
              key={k.id}
              onClick={() => setActiveTabId(k.id)}
              className={`p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                activeTabId === k.id
                  ? 'bg-zinc-950 border-zinc-700'
                  : 'bg-zinc-950/50 border-zinc-900 hover:border-zinc-800'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
                  <span className="text-[#ECC557] font-medium">{k.duration}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">Keynote</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-[#FCE689] transition-colors">
                  {k.title}
                </h4>

                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-light">
                  {k.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-[#ECC557]">
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
