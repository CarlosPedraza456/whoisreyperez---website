import React from 'react';
import { Award, Heart, Sparkles, Code2, Globe, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenGHLDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGHLDrawer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000000] border-t border-[rgba(236,197,87,0.3)] pt-16 pb-12 overflow-hidden text-zinc-400 text-xs">
      
      {/* Background Subtle Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-[#08162F]/60 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#08162F] to-[#000000] border border-[#ECC557]/60 flex items-center justify-center shadow-[0_0_15px_rgba(236,197,87,0.3)]">
                <span className="text-lg font-bold font-airstrike text-gold-gradient">RP</span>
              </div>
              <div>
                <span className="text-xl font-bold font-airstrike tracking-wider text-white">
                  REY PEREZ
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#ECC557] font-mono">
                  #1 Global Branding Expert
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-sm">
              Empowering visionary entrepreneurs, corporate executives, and speakers to transform personal identity into category monopolies and monetize stages with surgical precision.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenGHLDrawer}
                className="px-3.5 py-1.5 rounded-lg bg-[#08162F] border border-[#ECC557]/40 text-[#FCE689] text-[11px] font-mono font-bold flex items-center gap-1.5 hover:bg-[#08162F]/80 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-[#ECC557]" />
                <span>GHL Layout Blueprint & CSS</span>
              </button>
            </div>
          </div>

          {/* Col 3: Programs & Keynotes */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold text-white tracking-widest">
              Programs & Events
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sec-bgb" className="hover:text-[#ECC557] transition-colors">
                  Business Growth Bootcamp (BGB)
                </a>
              </li>
              <li>
                <a href="#sec-ssm" className="hover:text-[#ECC557] transition-colors">
                  Speaking & Sales Mastery (SSM)
                </a>
              </li>
              <li>
                <a href="#sec-keynotes" className="hover:text-[#ECC557] transition-colors">
                  Signature Keynote Speeches
                </a>
              </li>
              <li>
                <a href="#sec-work-expert" className="hover:text-[#ECC557] transition-colors">
                  Private 1-on-1 Branding Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Philanthropy & Impact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold text-white tracking-widest">
              Impact & Media
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sec-influence-love" className="hover:text-[#ECC557] transition-colors flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#ECC557]" />
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
              <li>
                <a href="#sec-booking" className="hover:text-[#ECC557] transition-colors">
                  Press & Media Kit Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Booking Office */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold text-white tracking-widest">
              Booking Office
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-zinc-300">
                <span className="text-[#ECC557] font-semibold">VIP Relations:</span><br />
                booking@whoisreyperez.com
              </p>
              <p className="text-zinc-300">
                <span className="text-[#ECC557] font-semibold">Global Office:</span><br />
                Miami, Florida • USA
              </p>
              <a
                href="#sec-booking"
                className="inline-block px-3.5 py-1.5 rounded-lg bg-gold-gradient text-black font-bold uppercase text-[10px] tracking-wider mt-1"
              >
                Schedule VIP Call
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <p>
            © {new Date().getFullYear()} Rey Perez International. All Rights Reserved. Powered by GoHighLevel (GHL).
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#FCE689] hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
