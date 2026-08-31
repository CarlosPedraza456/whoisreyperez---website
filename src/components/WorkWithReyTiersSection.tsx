import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Crown, Zap, Check, ArrowUpRight } from 'lucide-react';
import { AssetPlaceholder } from './AssetPlaceholder';
import tier1Img from '../assets/images/consulting_tier1_bottleneck_1788151271960.jpg';
import tier2Img from '../assets/images/consulting_tier2_authority_1788151284894.jpg';
import tier3Img from '../assets/images/consulting_tier3_powerhour_1788151297138.jpg';
import tier4Img from '../assets/images/consulting_tier4_group_1788151309153.jpg';
import tier5Img from '../assets/images/consulting_tier5_masterplanning_1788151322072.jpg';
import boardroomPhoto from '../assets/images/mastermind_boardroom_1788152367886.jpg';

interface WorkWithReyTiersSectionProps {
  onSelectTier: (tierTitle: string) => void;
  showPlaceholdersOnly: boolean;
}

export const WorkWithReyTiersSection: React.FC<WorkWithReyTiersSectionProps> = ({
  onSelectTier,
  showPlaceholdersOnly
}) => {
  const quickSessions = [
    {
      id: 'tier-1',
      title: 'Business Strategy Session',
      duration: '40 min',
      price: '$1,250',
      image: tier1Img,
      tag: 'Rapid Diagnostic',
      desc: 'Walk in with your biggest bottleneck. Walk out with a pinpoint roadmap and Rey’s immediate diagnostic feedback on marketing, sales, or team operations.',
      cta: 'Book 40-Min Diagnostic'
    },
    {
      id: 'tier-2',
      title: 'Personal Brand Strategy',
      duration: '90 min',
      price: '$2,500',
      image: tier2Img,
      tag: 'Positioning & Tone',
      desc: 'Lock in your official Expert Title, signature messaging, and hook so the right decision makers immediately recognize why you are the authority.',
      cta: 'Book Brand Strategy'
    },
    {
      id: 'tier-3',
      title: 'Powerhour with Rey Perez',
      duration: '2 hrs',
      price: '$3,500',
      image: tier3Img,
      tag: 'Offer Alignment',
      desc: 'Deep strategic dive on high-ticket offer creation, closing mechanics, and joint venture alliances to walk away with instant executable momentum.',
      cta: 'Book Powerhour'
    }
  ];

  return (
    <section 
      id="sec-work-with-rey" 
      className="relative bg-[#000000] text-white py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Brand Midnight Blue Aura & Ambient Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(8,22,47,0.85),#000000_80%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ECC557]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Section Header: Left-Aligned Editorial with Right-Aligned Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-zinc-800/80">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#08162F] border border-[#ECC557]/30 text-[#ECC557]">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#FCE689] uppercase">
                EXECUTIVE ADVISORY & BOARDROOM CONSULTING
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-[76px] font-normal font-bebas text-white tracking-wide uppercase leading-none">
              WORK DIRECTLY WITH <span className="text-gold-gradient">REY PEREZ</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-zinc-100 font-sans text-base sm:text-lg font-normal leading-relaxed">
            Choose between rapid diagnostic strategy sessions or immersive full-day private boardrooms designed for 7 and 8-figure revenue scaling.
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 1: THE ELITE IMMERSIVE DAYS (Tier 4 & Tier 5) - HERO FEATURE PANELS */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="text-sm font-mono font-bold text-[#ECC557] tracking-widest uppercase flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#ECC557]" />
            <span>VIP INTENSIVES &amp; MASTER-PLANNING EXPERIENCES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* TIER 4: Group Consulting Powerday (7 Hrs Mastermind) */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#08162F] to-[#020712] border-2 border-[#ECC557] p-8 sm:p-10 flex flex-col justify-between shadow-[0_0_40px_rgba(236,197,87,0.2)] relative group hover:border-[#FCE689] transition-all duration-300">
              
              {/* Highlight Tag */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <span className="px-4 py-1.5 rounded-full bg-gold-gradient text-black font-extrabold font-mono text-xs sm:text-sm uppercase tracking-wider">
                  HOT SEAT MASTERMIND
                </span>
                <span className="text-sm font-mono text-zinc-200 font-bold">7 Hours Intensive</span>
              </div>

              <div className="py-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-white">
                    Group Consulting Powerday
                  </h3>
                  <div className="text-4xl font-black font-mono text-gold-gradient">
                    $5,000
                  </div>
                </div>

                <p className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
                  A high-level mastermind with an intimate room of elite entrepreneurs. You take the hot seat with Rey Perez to dissect your revenue model, eliminate business bottlenecks, and receive direct strategic feedback alongside peers operating at your level.
                </p>

                <div className="space-y-3 pt-2 text-sm sm:text-base text-zinc-100">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#ECC557] shrink-0" />
                    <span>Dedicated Hot Seat with Rey Perez</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#ECC557] shrink-0" />
                    <span>Peer Syndicate &amp; High-Leverage Strategic Alliances</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#ECC557] shrink-0" />
                    <span>Full Blueprint Execution Framework</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectTier('Group Consulting Powerday 7 hrs ($5000)')}
                  className="w-full py-4.5 rounded-xl bg-gold-gradient text-black font-black font-heading text-base uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply For Elite Mastermind</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>
              </div>

            </div>

            {/* TIER 5: Master-Planning Powerday (1-on-1 VIP Day) */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#08162F]/90 to-[#020712] border-2 border-zinc-700 hover:border-[#ECC557] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative group transition-all duration-300">
              
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <span className="px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/50 text-[#ECC557] font-bold font-mono text-xs sm:text-sm uppercase tracking-wider">
                  PRIVATE 1-ON-1 VIP DAY
                </span>
                <span className="text-sm font-mono text-zinc-200 font-bold">7 Hours With Rey</span>
              </div>

              <div className="py-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-white">
                    Master-Planning Powerday
                  </h3>
                  <div className="text-4xl font-black font-mono text-gold-gradient">
                    $15,000
                  </div>
                </div>

                <p className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
                  A full day dedicated exclusively to you and your enterprise. No limits. Whether it’s architecting your stage closing engine, positioning your brand monopoly, or engineering 8-figure operations, you walk away with an exhaustive execution roadmap.
                </p>

                <div className="space-y-3 pt-2 text-sm sm:text-base text-zinc-100">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#ECC557] shrink-0" />
                    <span>Exclusive 1-on-1 Access with No Agenda Limits</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#ECC557] shrink-0" />
                    <span>Complete 7 &amp; 8-Figure Revenue System Re-Architecture</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#ECC557] shrink-0" />
                    <span>Strict Executive Confidentiality &amp; Direct Follow-up</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectTier('Master-Planning Powerday 7 hrs ($15,000)')}
                  className="w-full py-4.5 rounded-xl bg-[#08162F] hover:bg-[#0c224a] text-[#ECC557] hover:text-white border-2 border-[#ECC557]/60 hover:border-[#ECC557] font-bold font-heading text-base uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Reserve Private VIP Day</span>
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 2: TARGETED STRATEGY SESSIONS (Tiers 1, 2, 3) - REFINED 3-COL GRID */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-6">
          <div className="text-sm font-mono font-bold text-zinc-300 tracking-widest uppercase flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#ECC557]" />
            <span>FOCUSED STRATEGY &amp; POSITIONING INTENSIVES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickSessions.map((tier) => (
              <div 
                key={tier.id}
                className="rounded-2xl bg-gradient-to-b from-[#08162F]/70 to-black/90 border border-zinc-700 hover:border-[#ECC557]/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 shadow-xl"
              >
                <div className="space-y-4">
                  {/* Tag & Duration */}
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                    <span className="text-[#ECC557] font-bold">{tier.tag}</span>
                    <span className="text-zinc-200 font-bold px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700">{tier.duration}</span>
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h4 className="text-xl sm:text-2xl lg:text-[26px] font-bold font-heading text-white group-hover:text-[#ECC557] transition-colors">
                      {tier.title}
                    </h4>
                    <div className="text-3xl font-black font-mono text-gold-gradient mt-1.5">
                      {tier.price}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onSelectTier(`${tier.title} ${tier.duration} (${tier.price})`)}
                    className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-[#08162F] text-zinc-100 hover:text-[#ECC557] border border-zinc-700 hover:border-[#ECC557]/60 font-bold font-heading text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Guarantee Note */}
        <div className="p-5 rounded-2xl bg-[#08162F]/60 border border-zinc-700/80 flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base text-zinc-200 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#ECC557]" />
            <span className="font-semibold">Strict NDA &amp; Strategic Exclusivity Guaranteed</span>
          </div>
          <span className="text-zinc-500 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="font-medium">Direct Advisory Led Exclusively by Rey Perez</span>
          </div>
        </div>

      </div>
    </section>
  );
};
