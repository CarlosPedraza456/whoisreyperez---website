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
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Dan Martell-style Subtle Arena Stage Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 10%, rgba(8,22,47,0.92), #000000 75%), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#08162F]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#08162F]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#ECC557]/40">
            <Mic className="w-4 h-4 text-[#ECC557]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
              WORLD-CLASS KEYNOTE SIGNATURES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal font-bebas text-white leading-none tracking-wide">
            HIGH-IMPACT <span className="text-gold-gradient">KEYNOTES & EXPERIENCES</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Rey Perez electrifies global stages, corporate conventions, and private masterminds with unforgettable stage presence, actionable frameworks, and high-conversion psychology.
          </p>
        </div>

        {/* Tab Selector for Quick Switching */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {KEYNOTES.map((k) => (
            <button
              key={k.id}
              onClick={() => setActiveTabId(k.id)}
              className={`px-5 py-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeTabId === k.id
                  ? 'bg-gold-gradient text-black shadow-[0_0_25px_rgba(236,197,87,0.4)] scale-105'
                  : 'bg-[#08162F]/80 text-zinc-300 border border-[rgba(236,197,87,0.25)] hover:border-[#ECC557] hover:text-white'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>{k.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Keynote Spotlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#08162F]/90 via-[#000000] to-[#08162F]/80 border border-[#ECC557]/40 shadow-[0_0_50px_rgba(236,197,87,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-[#ECC557]/40 text-[#FCE689]">
                  <Clock className="w-3.5 h-3.5 text-[#ECC557]" />
                  {activeKeynote.duration}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-zinc-700 text-zinc-300">
                  <Users className="w-3.5 h-3.5 text-[#ECC557]" />
                  {activeKeynote.targetAudience}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl font-black font-airstrike text-white leading-tight">
                  {activeKeynote.title}
                </h3>
                <p className="text-sm font-semibold text-[#ECC557] font-heading uppercase tracking-wide">
                  {activeKeynote.subtitle}
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed font-light pt-2">
                  {activeKeynote.description}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#FCE689] font-bold">
                  Core Executive Takeaways:
                </h4>
                <div className="space-y-2">
                  {activeKeynote.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle className="w-4 h-4 text-[#ECC557] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectKeynote(activeKeynote)}
                  className="px-7 py-3.5 rounded-xl bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(236,197,87,0.4)] hover:shadow-[0_0_35px_rgba(236,197,87,0.7)] transition-all flex items-center gap-2 cursor-pointer font-heading"
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
                  className="border-2 border-[#ECC557]/60 shadow-2xl"
                />
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-[#ECC557]/40 bg-gradient-to-b from-[#08162F] to-[#000000] p-6 aspect-video lg:aspect-square flex flex-col justify-between shadow-2xl group">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded bg-black/80 border border-[#ECC557]/40 text-[#FCE689] text-[10px] font-mono font-bold">
                      STAGE PRESENTATION MASTER
                    </span>
                    <Mic className="w-5 h-5 text-[#ECC557]" />
                  </div>

                  <div className="text-center my-auto space-y-3">
                    <div className="w-20 h-20 rounded-full bg-[#08162F] border-2 border-[#ECC557] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(236,197,87,0.3)]">
                      <Sparkles className="w-8 h-8 text-[#ECC557]" />
                    </div>
                    <div className="text-lg font-bold font-airstrike text-white">
                      REY PEREZ LIVE ON STAGE
                    </div>
                    <p className="text-xs text-zinc-400 font-mono">
                      High-Definition Keynote Visual Simulation
                    </p>
                  </div>

                  <div className="p-2 rounded bg-black/80 border border-[#ECC557]/30 text-[11px] font-mono flex items-center justify-between text-zinc-300">
                    <span className="text-[#ECC557] font-semibold">{activeKeynote.placeholderId}</span>
                    <span>1200x800 px</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 3-Column Grid of All Keynotes Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {KEYNOTES.map((k) => (
            <div
              key={k.id}
              onClick={() => setActiveTabId(k.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                activeTabId === k.id
                  ? 'bg-[#08162F] border-[#ECC557] shadow-[0_0_30px_rgba(236,197,87,0.25)]'
                  : 'bg-black/60 border-zinc-800 hover:border-[#ECC557]/60 hover:bg-[#08162F]/50'
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span className="text-[#ECC557] font-bold">{k.duration}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black border border-zinc-800">Keynote</span>
                </div>

                <h4 className="text-lg font-bold font-heading text-white group-hover:text-[#FCE689] transition-colors">
                  {k.title}
                </h4>

                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-light">
                  {k.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-[#ECC557] font-semibold">
                <span>View Full Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
