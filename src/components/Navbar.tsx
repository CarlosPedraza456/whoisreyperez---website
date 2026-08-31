import React, { useState } from 'react';
import { Menu, X, Calendar, Sparkles, Code2, PhoneCall } from 'lucide-react';

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
    { label: 'Ecosystem', href: '#sec-ecosystem' },
    { label: 'Keynotes', href: '#sec-keynotes' },
    { label: 'BGB Bootcamp', href: '#sec-bgb' },
    { label: 'SSM Mastery', href: '#sec-ssm' },
    { label: 'Influence With Love', href: '#sec-influence-love' },
    { label: 'Celebrity Proof', href: '#sec-testimonials' },
    { label: 'Booking & Contact', href: '#sec-booking' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000000]/90 backdrop-blur-xl border-b border-[rgba(236,197,87,0.25)] transition-all">
      {/* Top micro VIP bar */}
      <div className="w-full bg-gradient-to-r from-[#08162F] via-[#000000] to-[#08162F] border-b border-zinc-800/80 py-1 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ECC557] animate-ping" />
            <span className="text-[#FCE689] font-bold">2026/2027 TOUR:</span>
            <span className="hidden sm:inline text-zinc-400">Accepting Select Stadium Keynotes & Private VIP Masterminds</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenGHLDrawer}
              className="inline-flex items-center gap-1 text-[#FCE689] hover:underline cursor-pointer font-bold"
            >
              <Code2 className="w-3 h-3 text-[#ECC557]" />
              <span>GHL Blueprint & Code</span>
            </button>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <a
              href="#sec-booking"
              className="hidden sm:inline-flex items-center gap-1 text-zinc-300 hover:text-white"
            >
              <PhoneCall className="w-3 h-3 text-[#ECC557]" />
              <span>Direct Booking Office</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#08162F] to-[#000000] border border-[#ECC557]/60 flex items-center justify-center shadow-[0_0_20px_rgba(236,197,87,0.3)] group-hover:border-[#ECC557] group-hover:scale-105 transition-all">
            <span className="text-xl font-bold font-airstrike text-gold-gradient">RP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black font-airstrike tracking-wider text-white group-hover:text-[#FCE689] transition-colors">
              REY PEREZ
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#ECC557] font-mono">
              #1 Global Branding Expert
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#ECC557] transition-colors duration-200 uppercase text-xs tracking-wider font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(236,197,87,0.4)] hover:shadow-[0_0_30px_rgba(236,197,87,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-heading"
          >
            <Calendar className="w-4 h-4" />
            Book Keynote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBookingModal}
            className="px-3.5 py-2 rounded-lg bg-gold-gradient text-black font-bold uppercase text-[11px] font-heading"
          >
            Book
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-[#ECC557] flex items-center justify-center transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                className="text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#ECC557] py-2 border-b border-zinc-800"
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
              className="w-full py-3 rounded-lg bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
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
