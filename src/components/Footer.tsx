import React from 'react';
import { Award, Heart, Sparkles, Code2, Globe, Shield, ArrowUp } from 'lucide-react';
import { ReyLogo } from './ReyLogo';

interface FooterProps {
  onOpenGHLDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGHLDrawer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000000] border-t border-zinc-900 pt-16 pb-12 overflow-hidden text-zinc-300 text-sm">
      
      {/* Background Subtle Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-[#08162F]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <ReyLogo size="md" />

            <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed max-w-sm">
              Empowering visionary entrepreneurs, corporate executives, and speakers to transform personal identity into category monopolies and monetize stages with surgical precision.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenGHLDrawer}
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-[#FCE689] text-xs sm:text-sm font-mono font-bold flex items-center gap-2 hover:bg-zinc-800 hover:border-[#ECC557] transition-all cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-[#ECC557]" />
                <span>GHL Layout Blueprint &amp; CSS</span>
              </button>
            </div>
          </div>

          {/* Col 3: Programs & Keynotes */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase font-mono font-bold text-white tracking-widest">
              Consulting &amp; Training
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#sec-work-with-rey" className="hover:text-[#ECC557] transition-colors">
                  Business Strategy Session (40 min)
                </a>
              </li>
              <li>
                <a href="#sec-work-with-rey" className="hover:text-[#ECC557] transition-colors">
                  Personal Brand Strategy (90 min)
                </a>
              </li>
              <li>
                <a href="#sec-work-with-rey" className="hover:text-[#ECC557] transition-colors">
                  Powerhour with Rey Perez (2 hrs)
                </a>
              </li>
              <li>
                <a href="#sec-work-with-rey" className="hover:text-[#ECC557] transition-colors">
                  Group Consulting &amp; Mastermind
                </a>
              </li>
              <li>
                <a href="#sec-work-with-rey" className="hover:text-[#ECC557] transition-colors">
                  Master-Planning Powerday
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Philanthropy & Impact */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase font-mono font-bold text-white tracking-widest">
              Impact &amp; Media
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#sec-ssm-showcase" className="hover:text-[#ECC557] transition-colors">
                  Speaking &amp; Sales Mastery Camp
                </a>
              </li>
              <li>
                <a href="#sec-influence-love" className="hover:text-[#ECC557] transition-colors flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#ECC557]" />
                  <span>Influence With Love Foundation</span>
                </a>
              </li>
              <li>
                <a href="#sec-testimonials" className="hover:text-[#ECC557] transition-colors">
                  Client VIP Hall of Fame
                </a>
              </li>
              <li>
                <a href="#sec-work-expert" className="hover:text-[#ECC557] transition-colors">
                  Purpose Driven Entrepreneur
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Booking Office */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase font-mono font-bold text-white tracking-widest">
              Executive Office
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-zinc-200">
                <span className="text-[#ECC557] font-bold">VIP Relations:</span><br />
                booking@whoisreyperez.com
              </p>
              <p className="text-zinc-200">
                <span className="text-[#ECC557] font-bold">Global Office:</span><br />
                Miami, Florida • USA
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-zinc-400">
          <p>
            © {new Date().getFullYear()} Rey Perez International. All Rights Reserved. Powered by GoHighLevel (GHL).
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#FCE689] hover:underline font-bold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
