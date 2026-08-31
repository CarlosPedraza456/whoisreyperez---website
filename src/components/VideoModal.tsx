import React from 'react';
import { X, Play, Volume2, ShieldCheck, Sparkles, Calendar } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  tag: string;
  onBookClick?: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  tag,
  onBookClick
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-2xl border border-[#ECC557]/40 bg-gradient-to-b from-[#08162F] to-[#000000] p-6 shadow-[0_0_50px_rgba(236,197,87,0.2)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECC557]/15 border border-[#ECC557]/30 text-[#FCE689] text-xs font-mono font-medium mb-1">
              <Sparkles className="w-3 h-3 text-[#ECC557]" />
              {tag}
            </div>
            <h3 className="text-xl font-bold text-white font-heading">{title}</h3>
            {subtitle && <p className="text-sm text-zinc-400">{subtitle}</p>}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#ECC557] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#ECC557]/30 flex flex-col items-center justify-center group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
          
          {/* Animated Gold Aura Background */}
          <div className="absolute w-72 h-72 rounded-full bg-[#ECC557]/15 blur-3xl pointer-events-none animate-flare-pulse" />

          {/* Central Play Button */}
          <div className="relative z-10 flex flex-col items-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center text-black shadow-[0_0_30px_rgba(236,197,87,0.6)] cursor-pointer group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <span className="mt-4 font-bold text-white uppercase tracking-wider text-sm font-heading">
              Click to Stream High-Definition Masterclass
            </span>
            <span className="text-xs text-zinc-400 mt-1 font-mono">
              GHL Embedded Video Engine • 4K Dolby Digital Master
            </span>
          </div>

          {/* Player Controls Bar Mock */}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/95 to-transparent flex items-center justify-between text-xs text-zinc-300">
            <div className="flex items-center gap-3">
              <button className="text-[#ECC557] font-semibold hover:underline">00:00 / 08:45</button>
              <div className="w-32 sm:w-64 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-[#ECC557]" />
              </div>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <span className="flex items-center gap-1"><Volume2 className="w-4 h-4 text-[#ECC557]" /> 100%</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-200 border border-zinc-700">1080p 60fps</span>
            </div>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-[#ECC557]" />
            <span>Official Rey Perez Worldwide Media Archive. All rights reserved.</span>
          </div>

          {onBookClick && (
            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-[0_0_20px_rgba(236,197,87,0.4)] transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Rey for Your Event
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
