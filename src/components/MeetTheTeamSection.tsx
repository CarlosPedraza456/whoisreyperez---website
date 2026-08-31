import React, { useState, useEffect, useRef } from 'react';
import { Users, User, UserPlus, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import teamBg from '../assets/images/mastermind_boardroom_1788152367886.jpg';

interface TeamMember {
  id: string;
  name: string;
  badgeName?: string;
  role: string;
  initials: string;
  isJoinSlot?: boolean;
  featured?: boolean;
}

export const MeetTheTeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
              setScrollY(progress * 50);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamList: TeamMember[] = [
    {
      id: 'rey-perez',
      name: 'Rey Perez',
      badgeName: 'REY PEREZ',
      role: 'Global Branding Expert',
      initials: 'RP',
      featured: true
    },
    {
      id: 'bree-cook',
      name: 'Bree Cook',
      badgeName: 'BREE COOK',
      role: 'Event Host & Brand Manager',
      initials: 'BC'
    },
    {
      id: 'nicolle-cruz',
      name: 'Nicolle Cruz',
      badgeName: 'NICOLLE CRUZ',
      role: 'Operations Manager',
      initials: 'NC'
    },
    {
      id: 'maria-clara-zabala',
      name: 'María Clara Zabala',
      badgeName: 'MARÍA CLARA ZABALA',
      role: 'Creative Director',
      initials: 'MZ'
    },
    {
      id: 'mario-castrillon',
      name: 'Mario Castrillon',
      badgeName: 'MARIO CASTRILLON',
      role: 'SaaS Developer',
      initials: 'MC'
    },
    {
      id: 'lourdes-de-la-cruz',
      name: 'Lourdes de la Cruz',
      badgeName: 'LOURDES BAYRON',
      role: 'Graphic Designer',
      initials: 'LD'
    },
    {
      id: 'armando-alvarez',
      name: 'Armando Alvarez',
      badgeName: 'ARMANDO ALVAREZ',
      role: 'Video Editor',
      initials: 'AA'
    },
    {
      id: 'carlos-pedraza',
      name: 'Carlos Pedraza',
      badgeName: 'CARLOS PEDRAZA',
      role: 'Web Developer',
      initials: 'CP'
    },
    {
      id: 'javier-munoz',
      name: 'Javier Munoz',
      badgeName: 'JAVIER MUNOZ',
      role: 'Web Developer',
      initials: 'JM'
    },
    {
      id: 'jose-jimenez',
      name: 'Jose Jimenez',
      badgeName: 'JOSE JIMENEZ',
      role: 'Video Editor',
      initials: 'JJ'
    },
    {
      id: 'pedro-lozada',
      name: 'Pedro Lozada',
      badgeName: 'PEDRO LOZADA',
      role: 'Graphic Designer',
      initials: 'PL'
    },
    {
      id: 'join-team-1',
      name: 'Join the Team',
      role: "We're always looking",
      initials: '+',
      isJoinSlot: true
    },
    {
      id: 'join-team-2',
      name: 'Join the Team',
      role: "We're always looking",
      initials: '+',
      isJoinSlot: true
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="sec-meet-the-team"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Dynamic Parallax Background with Refined Balanced Overlay */}
      <div
        className="absolute -top-16 -bottom-16 inset-x-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none transition-transform duration-100 ease-out will-change-transform scale-110"
        style={{
          backgroundImage: `url(${teamBg})`,
          transform: `translate3d(0, ${scrollY - 25}px, 0)`
        }}
      />
      {/* Slightly Darker Gradient Overlay for Balanced Depth & Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#08162F]/80 to-black/90 pointer-events-none" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(236,197,87,0.08),transparent_70%)] pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Section Header: Clean, serious, left aligned + Team Rey Perez brand badge on the right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-8 border-b border-zinc-800/80">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest">
              <Users className="w-4 h-4 text-[#ECC557]" />
              <span>THE POWERHOUSE BEHIND THE OPERATION</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-normal font-bebas text-white tracking-wider uppercase leading-none">
              MEET THE BRAINS BEHIND THE OPERATION
            </h2>

            <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed">
              We are so excited to see you here. Meet the dedicated, in-house team of strategists, developers, designers, and media editors that is going to make it happen for <span className="text-[#ECC557] font-bold">YOU</span>.
            </p>
          </div>

          {/* Clean Brand Shield Badge */}
          <div className="flex-shrink-0 flex items-center gap-3.5 px-6 py-3.5 bg-[#08162F]/90 border border-[#ECC557]/40 shadow-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-black border border-[#ECC557]/70 flex items-center justify-center font-bebas text-2xl text-[#ECC557] font-black tracking-wider">
              RP
            </div>
            <div>
              <div className="text-sm font-mono font-bold uppercase tracking-widest text-white">
                TEAM <span className="text-[#ECC557]">REY PEREZ</span>
              </div>
              <div className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                Internal Operations &amp; Production
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid: Larger circle placeholders, ultra-fine delicate gold hairline rim */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-14 gap-x-6 sm:gap-x-10 items-start justify-center">
          {teamList.map((member, index) => {
            if (member.isJoinSlot) {
              return (
                <div
                  key={member.id}
                  id={`team-slot-${index}`}
                  className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                >
                  {/* Join Slot Silhouette / Avatar (Enlarged, Delicate Hairline Border) */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-[1px] bg-zinc-800/80 group-hover:bg-[#ECC557]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#08162F]/80 to-black border border-dashed border-zinc-700/80 group-hover:border-[#ECC557]/60 flex flex-col items-center justify-center p-4 text-center transition-colors">
                      <div className="w-12 h-12 rounded-full bg-zinc-900/90 border border-zinc-700/50 group-hover:border-[#ECC557]/40 flex items-center justify-center mb-2 transition-colors">
                        <UserPlus className="w-6 h-6 text-zinc-400 group-hover:text-[#ECC557] transition-colors" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 group-hover:text-white font-bold">
                        APPLY NOW
                      </span>
                    </div>

                    {/* Join Badge Ribbon */}
                    <div className="absolute -bottom-1 inset-x-3 py-1 bg-black/95 border border-zinc-800 group-hover:border-[#ECC557]/50 text-zinc-300 group-hover:text-[#ECC557] text-[10px] font-mono font-bold uppercase tracking-widest text-center shadow-md">
                      YOUR NAME
                    </div>
                  </div>

                  {/* Clean Typography */}
                  <div className="mt-4 space-y-1">
                    <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#ECC557] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base font-sans italic text-sky-400 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={member.id}
                id={`team-member-${index}`}
                className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Enlarged Circular Medallion Placeholder with Ultra-Delicate Gold Hairline Rim */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-[1px] bg-gradient-to-b from-[#ECC557]/50 via-[#ECC557]/20 to-zinc-900 shadow-[0_12px_32px_rgba(0,0,0,0.9)] group-hover:shadow-[0_15px_35px_rgba(236,197,87,0.18)] group-hover:from-[#ECC557] group-hover:to-zinc-800 transition-all duration-300">
                  
                  {/* Clean Elegant Placeholder Container */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#0B1A35] via-[#050E1D] to-black border border-black/80 relative flex flex-col items-center justify-center p-3">
                    
                    {/* Architectural Mesh Grid & Ambient Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,197,87,0.1),transparent_70%)] pointer-events-none" />
                    
                    {/* User Silhouette / Monogram Avatar Placeholder */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 border border-[#ECC557]/30 flex items-center justify-center shadow-inner group-hover:border-[#ECC557]/70 transition-colors mb-1">
                      <User className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-400 group-hover:text-[#ECC557] transition-colors" />
                    </div>

                    {/* Member Initials / Code Monogram */}
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                      {member.initials}
                    </span>
                  </div>

                  {/* Delicate, Clean Team Ribbon Banner Over Badge (Fine 1px border) */}
                  <div className="absolute -bottom-1.5 inset-x-2.5 py-1 bg-black/95 border border-[#ECC557]/40 text-[10px] font-mono font-bold uppercase tracking-wider text-center shadow-lg group-hover:border-[#ECC557]">
                    <span className="text-[#ECC557] drop-shadow-sm font-black">
                      TEAM REY PEREZ
                    </span>
                  </div>

                  {/* Founder Crown Indicator */}
                  {member.featured && (
                    <div className="absolute -top-1.5 right-2 px-2.5 py-0.5 bg-[#ECC557] text-black text-[10px] font-mono font-black uppercase shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-current" />
                      FOUNDER
                    </div>
                  )}
                </div>

                {/* Clean, Modern & Serious Typography */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#ECC557] transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base font-sans italic text-sky-400 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Bottom Note / Careers Link */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-mono text-zinc-200 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#ECC557]" />
            <span className="font-semibold">Dedicated In-House Creative, Development &amp; Operations Corps</span>
          </div>
          <a
            href="#sec-work-with-rey"
            className="inline-flex items-center gap-2 text-[#ECC557] hover:underline uppercase font-bold tracking-wider text-xs sm:text-sm"
          >
            <span>Want to work with our specialist team?</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
