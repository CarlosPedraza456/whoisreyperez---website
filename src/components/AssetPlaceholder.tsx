import React from 'react';
import { Image as ImageIcon, Sparkles, Video, Award, UserCheck } from 'lucide-react';

interface AssetPlaceholderProps {
  id?: string;
  tag: string;
  label?: string;
  dimensions?: string;
  aspectRatio?: string;
  type?: 'hero' | 'logo' | 'keynote' | 'video' | 'badge' | 'avatar' | 'event';
  className?: string;
  fallbackGraphic?: React.ReactNode;
}

export const AssetPlaceholder: React.FC<AssetPlaceholderProps> = ({
  id,
  tag,
  label,
  dimensions = '1920x1080',
  aspectRatio = 'aspect-video',
  type = 'keynote',
  className = '',
  fallbackGraphic
}) => {
  const getIcon = () => {
    switch (type) {
      case 'hero':
      case 'avatar':
        return <UserCheck className="w-6 h-6 text-[#ECC557]" />;
      case 'video':
        return <Video className="w-6 h-6 text-[#ECC557]" />;
      case 'badge':
      case 'logo':
        return <Award className="w-5 h-5 text-[#ECC557]" />;
      default:
        return <ImageIcon className="w-6 h-6 text-[#ECC557]" />;
    }
  };

  return (
    <div
      id={id}
      className={`relative group overflow-hidden rounded-xl border border-[rgba(236,197,87,0.3)] bg-gradient-to-br from-[#08162F]/90 via-[#000000] to-[#08162F]/80 p-4 transition-all duration-300 hover:border-[#ECC557] hover:shadow-[0_0_20px_rgba(236,197,87,0.25)] ${aspectRatio} ${className} flex flex-col items-center justify-center text-center`}
    >
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ECC557]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ECC557]/10 rounded-full blur-2xl pointer-events-none" />

      {fallbackGraphic ? (
        <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
          {fallbackGraphic}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2.5 py-1 rounded bg-[#000000]/80 backdrop-blur-md border border-[#ECC557]/30 text-[10px] text-zinc-300 font-mono">
            <span className="text-[#ECC557] font-semibold truncate">{tag}</span>
            <span className="text-zinc-400 ml-2 shrink-0">{dimensions}</span>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center p-3 max-w-full">
          <div className="w-12 h-12 rounded-lg bg-[#08162F] border border-[#ECC557]/40 flex items-center justify-center mb-2 shadow-inner group-hover:scale-105 transition-transform duration-300">
            {getIcon()}
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECC557]/15 border border-[#ECC557]/40 text-[#FCE689] font-mono text-xs font-bold tracking-wider mb-1.5">
            <Sparkles className="w-3 h-3 text-[#ECC557]" />
            <span className="truncate">{tag}</span>
          </div>

          {label && (
            <p className="text-sm font-semibold text-white tracking-wide uppercase font-heading">
              {label}
            </p>
          )}

          <span className="text-[11px] text-zinc-400 font-mono mt-1">
            GHL Asset Slot • {dimensions}
          </span>
        </div>
      )}
    </div>
  );
};
