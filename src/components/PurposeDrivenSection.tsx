import React from 'react';
import reyLeaderImg from '../assets/images/rey_specialist_team_leader_1788182046600.jpg';
import givingBannerImg from '../assets/images/purpose_driven_giving_banner_1788182069046.jpg';

export const PurposeDrivenSection: React.FC = () => {
  return (
    <section
      id="sec-purpose-driven"
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-[rgba(236,197,87,0.15)] overflow-hidden text-white"
    >
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(8,22,47,0.5),#000000_85%)] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* TOP: Centered Grand Headline */}
        <div className="text-center max-w-5xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-normal font-bebas text-white tracking-wide uppercase leading-[1.05]">
            WORK WITH THE #1 GLOBAL BRANDING EXPERT AND HIS TEAM OF SPECIALISTS DEDICATED TO YOUR BUSINESS GROWTH AND SUCCESS
          </h2>

          <p className="text-xl sm:text-3xl lg:text-4xl font-bebas font-normal text-[#ECC557] tracking-wider uppercase leading-snug">
            TRANSFORM YOUR BRAND AND YOUR BUSINESS LIKE YOU NEVER THOUGHT POSSIBLE
          </p>
        </div>

        {/* 2-COLUMN STRUCTURE EXACT TO CLIENT ASSET */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Rey Perez & Specialist Team Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img
                src={reyLeaderImg}
                alt="Work With Rey Perez & Team of Specialists"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT: Plain Descriptive Copy & Banner */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Flat Copy (No background, No border, Pure clean typography) */}
            <p className="text-base sm:text-lg text-zinc-100 font-sans font-normal leading-relaxed">
              Seize the opportunity to elevate your branding and marketing services. And when you invest in your brand, you also give back – 10% of all proceeds support Influence with Love, Org., a nonprofit dedicated to helping underprivileged children. Join us in making a difference while enhancing your business!
            </p>

            {/* Giving Banner Card */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <img
                src={givingBannerImg}
                alt="Become A Purpose Driven Entrepreneur - InfluenceWithLOVE.org"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

