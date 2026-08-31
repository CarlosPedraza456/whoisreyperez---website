import React, { useState } from 'react';
import { Menu, X, Calendar, Sparkles, Code2, PhoneCall } from 'lucide-react';
import { ReyLogo } from './ReyLogo';

interface NavbarProps {
  onOpenGHLDrawer: () => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGHLDrawer,
  onOpenBookingModal
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Rey', href: '#sec-work-expert' },
    { label: 'Work With Rey', href: '#sec-work-with-rey' },
    { label: 'Core Values', href: '#sec-our-values' },
    { label: 'Newsletter', href: '#sec-newsletter' },
    { label: 'Speaker Camp', href: '#sec-ssm-showcase' },
    { label: 'Bootcamp', href: '#sec-bgb-showcase' },
    { label: 'Books', href: '#sec-books' },
    { label: 'Influence With Love', href: '#sec-influence-love' },
    { label: 'Endorsements', href: '#sec-testimonials' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000000]/90 backdrop-blur-xl border-b border-[rgba(236,197,87,0.25)] transition-all">
      {/* Top micro VIP bar */}
      <div className="w-full bg-gradient-to-r from-[#08162F] via-[#000000] to-[#08162F] border-b border-zinc-800/80 py-1.5 px-4 text-center">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECC557] animate-ping" />
            <span className="text-[#FCE689] font-bold">2026/2027 TOUR:</span>
            <span className="hidden sm:inline text-zinc-300">Accepting Select Stadium Keynotes & Private VIP Masterminds</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenGHLDrawer}
              className="inline-flex items-center gap-1.5 text-[#FCE689] hover:underline cursor-pointer font-bold"
            >
              <Code2 className="w-3.5 h-3.5 text-[#ECC557]" />
              <span>GHL Blueprint & Code</span>
            </button>
            <span className="text-zinc-500 hidden sm:inline">|</span>
            <button
              onClick={onOpenBookingModal}
              className="hidden sm:inline-flex items-center gap-1.5 text-zinc-200 hover:text-white cursor-pointer font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#ECC557]" />
              <span>Direct Booking Office</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center group py-1" aria-label="Rey Perez Home">
          <ReyLogo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-4 text-zinc-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#ECC557] transition-colors duration-200 uppercase text-[11px] xl:text-xs tracking-wide font-semibold whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-gradient text-black font-extrabold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(236,197,87,0.4)] hover:shadow-[0_0_30px_rgba(236,197,87,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-heading"
          >
            <Calendar className="w-4.5 h-4.5" />
            Book Keynote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBookingModal}
            className="px-4 py-2.5 rounded-lg bg-gold-gradient text-black font-black uppercase text-xs font-heading"
          >
            Book
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 hover:text-white hover:border-[#ECC557] flex items-center justify-center transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#08162F]/98 border-b border-[#ECC557]/40 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold uppercase tracking-wider text-zinc-100 hover:text-[#ECC557] py-2.5 border-b border-zinc-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3.5 rounded-lg bg-gold-gradient text-black font-extrabold uppercase tracking-wider text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Keynote With Rey
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenGHLDrawer();
              }}
              className="w-full py-2.5 rounded-lg bg-[#000000] border border-[#ECC557]/40 text-[#FCE689] font-bold text-xs uppercase flex items-center justify-center gap-2"
            >
              <Code2 className="w-4 h-4 text-[#ECC557]" />
              Open GHL Architecture Blueprint
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
