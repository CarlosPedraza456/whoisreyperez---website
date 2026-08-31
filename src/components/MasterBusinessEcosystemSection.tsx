import React from 'react';
import { ExternalLink, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import ecosystemBg from '../assets/images/values_editorial_bg_1788153541759.jpg';

// Imported visual assets
import imgAmpProductions from '../assets/images/master_amp_productions_1788189419528.jpg';
import imgBrandIn2Days from '../assets/images/master_brand_in_2_days_1788189432007.jpg';
import imgTodaysPremier from '../assets/images/master_todays_premier_experts_1788189444222.jpg';
import imgVipBranding from '../assets/images/master_vip_branding_experience_1788189458938.jpg';
import imgMy360Sites from '../assets/images/master_my_360_sites_1788189474680.jpg';
import imgInfluenceLove from '../assets/images/master_influence_love_1788189487426.jpg';
import imgDriveSuccess from '../assets/images/master_drive_to_success_1788189501094.jpg';
import imgEliteTeams from '../assets/images/master_elite_virtual_teams_1788189514281.jpg';
import imgSpiritual from '../assets/images/master_spiritual_attunement_1788189529476.jpg';
import imgChecklist from '../assets/images/master_branding_checklist_1788189542219.jpg';
import imgValiantCeo from '../assets/images/rey_portrait_editorial_1788152356411.jpg';
import imgFractionalVcmo from '../assets/images/consulting_tier5_masterplanning_1788151322072.jpg';

interface EcosystemItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  url: string;
  isEditorialCover?: boolean;
  isVcmoBadge?: boolean;
}

interface MasterBusinessEcosystemSectionProps {
  onOpenBooking?: (subject: string) => void;
}

export const MasterBusinessEcosystemSection: React.FC<MasterBusinessEcosystemSectionProps> = ({
  onOpenBooking
}) => {
  const ecosystemList: EcosystemItem[] = [
    {
      id: 'amp-productions',
      title: '((amp)) PRODUCTIONS',
      category: 'Media & Production',
      subtitle: 'Advertising • Marketing • Promotions & Keynote Filming',
      image: imgAmpProductions,
      url: 'https://ampproductions.com'
    },
    {
      id: 'brand-in-2-days',
      title: 'BRAND IN 2 DAYS',
      category: 'Live Immersive Workshop',
      subtitle: 'Build an 8-Figure Category Monopoly with Global Super Speakers',
      image: imgBrandIn2Days,
      url: 'https://brandin2days.com'
    },
    {
      id: 'todays-premier-experts',
      title: "TODAY'S PREMIER EXPERTS",
      category: 'Broadcast & Media',
      subtitle: 'Top Tips & Content from Leading Industry Celebrities on C-Suite Radio',
      image: imgTodaysPremier,
      url: 'https://c-suitenetwork.com/radio/shows/todays-premier-experts/'
    },
    {
      id: 'vip-branding-experience',
      title: 'VIP BRANDING EXPERIENCE',
      category: 'Elite Retreat',
      subtitle: 'High-Ticket In-Person Luxury Brand Architecture & Lifestyle Media',
      image: imgVipBranding,
      url: 'https://vipbrandingexperience.com'
    },
    {
      id: 'my-360-sites',
      title: 'My 360 SITES',
      category: 'Proprietary Technology',
      subtitle: 'Interactive Next-Gen Mobile Web & Digital Business Card Platform',
      image: imgMy360Sites,
      url: 'https://my360sites.com'
    },
    {
      id: 'influence-with-love',
      title: 'INFLUENCE WITH LOVE .ORG',
      category: 'Social Impact Foundation',
      subtitle: '10% Proceeds Supporting Underprivileged Children Worldwide',
      image: imgInfluenceLove,
      url: 'https://influencewithlove.org'
    },
    {
      id: 'drive-to-success',
      title: 'The DRIVE to SUCCESS',
      category: 'Performance Mindset',
      subtitle: 'Accelerating Business Trajectory & Unlocking Limitless Potential',
      image: imgDriveSuccess,
      url: 'https://thedrivetosuccess.com'
    },
    {
      id: 'elite-virtual-teams',
      title: 'EVT • ELITE VIRTUAL TEAMS',
      category: 'Operational Scale',
      subtitle: 'High-Performing Remote Executive Teams & Operations Infrastructure',
      image: imgEliteTeams,
      url: 'https://elitevirtualteams.com'
    },
    {
      id: 'group-spiritual-attunement',
      title: 'GROUP SPIRITUAL ATTUNEMENT',
      category: 'Energetic Mastery',
      subtitle: 'Transformational Alignment & Mindset Sessions for High Achievers',
      image: imgSpiritual,
      url: 'https://spiritualattunementsessions.com'
    },
    {
      id: 'my-branding-checklist',
      title: 'MyBrandingCheckList',
      category: 'Diagnostic Audit Tool',
      subtitle: 'Comprehensive Assessment to Pinpoint Authority Leaks & Monetization Gaps',
      image: imgChecklist,
      url: 'https://mybrandingchecklist.com'
    },
    {
      id: 'valiant-ceo-cover',
      title: 'Valiant CEO Magazine Feature',
      category: 'Press & Editorial',
      subtitle: 'Top 20 Inspirational Entrepreneurs • Game-Changing Growth Strategies',
      image: imgValiantCeo,
      url: 'https://valiantceo.com',
      isEditorialCover: true
    },
    {
      id: 'fractional-vcmo',
      title: 'FRACTIONAL vCMO™',
      category: 'Executive Advisory',
      subtitle: 'Chief Marketing Officer-as-a-Service for 7 & 8-Figure Enterprises',
      image: imgFractionalVcmo,
      url: 'https://fractionalvcmo.com',
      isVcmoBadge: true
    }
  ];

  return (
    <section
      id="sec-ecosystem-mastery"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Background Image with Deep Overlay (Matches Core Values & Podcasts) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity pointer-events-none scale-105"
        style={{ backgroundImage: `url(${ecosystemBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#08162F]/90 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(236,197,87,0.08),transparent_75%)] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-none bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest">
            <Layers className="w-4 h-4 text-[#ECC557]" />
            <span>FULL SUITE BRANDING &amp; SCALING ECOSYSTEM</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-bebas text-white tracking-wider uppercase leading-none">
            MASTER EVERY AREA OF YOUR BUSINESS
          </h2>

          <p className="text-base sm:text-lg text-zinc-100 font-normal max-w-3xl mx-auto leading-relaxed">
            With programs and courses designed to meet the highest standards of excellence, with a focus on real-world skills and practical applications. Whether you are looking to upgrade your skills, explore new areas of knowledge, or grow your business, Rey has something for you.
          </p>
        </div>

        {/* Seamless 3-Column Grid (Zero-gap, flat borders, smooth expansion on hover, external link navigation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-800/90 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          {ecosystemList.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              id={`ecosystem-card-${index}`}
              className="group relative flex flex-col bg-[#08162F]/40 border border-zinc-800/80 rounded-none overflow-hidden transition-all duration-300 hover:z-30 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.95)] hover:border-[#ECC557] focus:outline-none cursor-pointer"
            >
              {/* Aspect Ratio 4:3 Graphic Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black rounded-none">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.subtitle}`}
                  className="w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
                />

                {/* Editorial Cover Badge simulation for Valiant CEO */}
                {item.isEditorialCover && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 flex flex-col justify-between p-4 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black font-heading text-[#ECC557] tracking-widest">
                        VALIANT CEO
                      </span>
                      <span className="px-2.5 py-1 bg-[#ECC557] text-black text-xs font-bold font-mono">
                        TOP 20
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-200 uppercase font-mono">Cover Story</span>
                      <p className="text-sm font-bold text-white uppercase">Inspirational Leaders</p>
                    </div>
                  </div>
                )}

                {/* Fractional vCMO Luxury Badge simulation */}
                {item.isVcmoBadge && (
                  <div className="absolute inset-0 bg-[#08162F]/80 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
                    <div className="text-4xl font-black text-[#ECC557] font-heading tracking-widest mb-1">
                      V
                    </div>
                    <div className="text-base font-extrabold text-white tracking-widest uppercase">
                      FRACTIONAL
                    </div>
                    <div className="text-xl font-black text-[#ECC557] tracking-wider">
                      vCMO™
                    </div>
                  </div>
                )}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/90 border border-[#ECC557]/50 text-[#ECC557] text-xs font-mono font-bold uppercase tracking-wider rounded-none opacity-90 group-hover:opacity-100">
                  {item.category}
                </div>

                {/* External Indicator on Hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-none bg-[#ECC557] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-lg">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom Details (Clean Bold Typography) */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#040B17] group-hover:bg-[#08162F] transition-colors duration-300 rounded-none border-t border-zinc-800">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white group-hover:text-[#ECC557] transition-colors tracking-wide uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-200 font-sans font-normal leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs sm:text-sm font-mono text-[#ECC557] group-hover:text-[#FCE689] transition-colors">
                  <span className="uppercase tracking-wider flex items-center gap-1 font-bold">
                    Explore Solution <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    Official Program
                  </span>
                </div>
              </div>

              {/* Gold Progress Underline */}
              <div className="h-0.5 w-0 bg-gold-gradient group-hover:w-full transition-all duration-300 rounded-none" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
