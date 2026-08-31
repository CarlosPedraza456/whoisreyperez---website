import React from 'react';

interface ReyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ReyLogo: React.FC<ReyLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeStyles = {
    sm: {
      title: 'text-lg sm:text-xl tracking-[0.14em]',
      subtitle: 'text-[9px] sm:text-[10px] tracking-[0.12em]',
      spacing: 'space-y-0.5'
    },
    md: {
      title: 'text-xl sm:text-2xl lg:text-[26px] tracking-[0.14em]',
      subtitle: 'text-[10px] sm:text-[11.5px] tracking-[0.12em]',
      spacing: 'space-y-0.5'
    },
    lg: {
      title: 'text-2xl sm:text-3xl lg:text-4xl tracking-[0.16em]',
      subtitle: 'text-xs sm:text-sm tracking-[0.15em]',
      spacing: 'space-y-1'
    }
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`flex flex-col text-left select-none group ${currentSize.spacing} ${className}`}>
      {/* Top Main Name: Clean Bold White */}
      <div className={`font-black uppercase text-white font-heading leading-none ${currentSize.title} group-hover:text-zinc-100 transition-colors drop-shadow-sm`}>
        REY PEREZ
      </div>
      
      {/* Bottom Subtitle: Italic Gold */}
      <div className={`font-black italic uppercase text-[#ECC557] font-heading leading-none ${currentSize.subtitle} drop-shadow-[0_0_12px_rgba(236,197,87,0.3)]`}>
        #1 GLOBAL BRANDING EXPERT
      </div>
    </div>
  );
};
