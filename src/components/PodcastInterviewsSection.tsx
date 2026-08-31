import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Mic, Radio, Play, Sparkles } from 'lucide-react';
import podcastBg from '../assets/images/podcast_broadcast_studio_parallax_1788190403236.jpg';

// Podcast cover images
import coverCSuite from '../assets/images/podcast_cover_csuite_experts_1788187472768.jpg';
import coverNickyBillou from '../assets/images/podcast_cover_nicky_billou_1788187486228.jpg';
import coverMikeSaunders from '../assets/images/podcast_cover_influential_entrepreneurs_1788187497396.jpg';
import coverRickJordan from '../assets/images/podcast_cover_all_in_rick_jordan_1788187509904.jpg';
import coverInnovations from '../assets/images/podcast_cover_innovations_breakthroughs_1788187524814.jpg';
import coverJamesDentley from '../assets/images/podcast_cover_james_dentley_1788187537546.jpg';
import coverDianeHamilton from '../assets/images/podcast_cover_diane_hamilton_1788187549166.jpg';
import coverAddValue from '../assets/images/podcast_cover_add_value_entrepreneurs_1788187560104.jpg';
import coverMarquesOgden from '../assets/images/podcast_cover_marques_ogden_1788187574972.jpg';
import coverHighProfit from '../assets/images/podcast_cover_high_profit_event_1788187587301.jpg';
import coverThinkRealty from '../assets/images/podcast_cover_think_realty_1788187598492.jpg';
import coverCarlGould from '../assets/images/podcast_cover_carl_gould_1788187610051.jpg';

interface PodcastItem {
  id: string;
  title: string;
  hostOrShow: string;
  image: string;
  url: string;
  category: string;
}

export const PodcastInterviewsSection: React.FC = () => {
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
            // Calculate relative offset when section enters the viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
              setScrollY(progress * 70); // 70px parallax travel range
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

  const podcastList: PodcastItem[] = [
    {
      id: 'csuite-premier-experts',
      title: "Today's Premier Experts",
      hostOrShow: 'C-Suite Radio • with Rey Perez',
      image: coverCSuite,
      url: 'https://c-suitenetwork.com/radio/shows/todays-premier-experts/',
      category: 'C-Suite Radio'
    },
    {
      id: 'nicky-billou',
      title: 'How To Create A Powerful Personal Brand',
      hostOrShow: 'The Thought Leader Revolution • with Nicky Billou',
      image: coverNickyBillou,
      url: 'https://podcasts.apple.com/us/podcast/the-thought-leader-revolution/id1451631587',
      category: 'Thought Leadership'
    },
    {
      id: 'mike-saunders',
      title: 'Cracking the Celebrity Code',
      hostOrShow: 'Influential Entrepreneurs • with Mike Saunders, MBA',
      image: coverMikeSaunders,
      url: 'https://influentialentrepreneursradio.com/',
      category: 'Authority & PR'
    },
    {
      id: 'rick-jordan',
      title: 'How To Create A Profitable Personal Brand',
      hostOrShow: 'ALL IN • with Rick Jordan',
      image: coverRickJordan,
      url: 'https://www.rickjordan.tv/podcast',
      category: 'Business & Tech'
    },
    {
      id: 'innovations-breakthroughs',
      title: 'How to Leverage Branding to Increase Company Value',
      hostOrShow: 'Innovations & Breakthroughs',
      image: coverInnovations,
      url: 'https://podcasts.apple.com/us/podcast/innovations-and-breakthroughs/id1527788410',
      category: 'Company Valuation'
    },
    {
      id: 'james-dentley',
      title: 'Done for You Branding & Marketing',
      hostOrShow: 'The James Dentley Show',
      image: coverJamesDentley,
      url: 'https://jamesdentley.com/',
      category: 'Done-For-You Scale'
    },
    {
      id: 'diane-hamilton',
      title: 'How to Attract More Business Leads',
      hostOrShow: 'Take The Lead Radio • with Dr. Diane Hamilton',
      image: coverDianeHamilton,
      url: 'https://drdianehamilton.com/take-the-lead-radio/',
      category: 'Lead Generation'
    },
    {
      id: 'add-value-2-entrepreneurs',
      title: 'How to Attract More Business Leads',
      hostOrShow: 'Add Value 2 Entrepreneurs Podcast • with Rey Perez',
      image: coverAddValue,
      url: 'https://podcasts.apple.com/us/podcast/add-value-2-entrepreneurs/id1552554558',
      category: 'Entrepreneurship'
    },
    {
      id: 'marques-ogden',
      title: 'Get Authentic',
      hostOrShow: 'Get Authentic • with Marques Ogden',
      image: coverMarquesOgden,
      url: 'https://marquesogden.com/podcast/',
      category: 'Keynote & Leadership'
    },
    {
      id: 'high-profit-event',
      title: 'High Profit Event Show (#46)',
      hostOrShow: 'Cool Technology To Connect With Audiences • Rudy Rodriguez',
      image: coverHighProfit,
      url: 'https://highprofitevents.com/',
      category: 'Stage Technology'
    },
    {
      id: 'think-realty',
      title: 'Think Realty Podcast',
      hostOrShow: 'Straight Talk for Savvy Investors',
      image: coverThinkRealty,
      url: 'https://thinkrealty.com/podcast/',
      category: 'Investor Branding'
    },
    {
      id: 'carl-gould',
      title: 'Carl Gould Collective Podcast',
      hostOrShow: 'E-Circle Academy • Spotify & Apple Podcasts',
      image: coverCarlGould,
      url: 'https://carlgould.com/podcast/',
      category: 'Global Strategy'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="sec-podcasts"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Parallax Background Image with Deep Luxury Broadcast Studio Overlay */}
      <div
        className="absolute -top-16 -bottom-16 inset-x-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity pointer-events-none transition-transform duration-100 ease-out will-change-transform scale-110"
        style={{
          backgroundImage: `url(${podcastBg})`,
          transform: `translate3d(0, ${scrollY - 35}px, 0)`
        }}
      />
      
      {/* Luxury Gradient & Radial Atmospheric Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#08162F]/90 to-black pointer-events-none" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(236,197,87,0.12),transparent_70%)] pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(0, ${(scrollY - 35) * 0.4}px, 0)`
        }}
      />
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-[#08162F]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-none bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest">
            <Radio className="w-4 h-4 text-[#ECC557] animate-pulse" />
            <span>GLOBAL MEDIA &amp; GUEST APPEARANCES</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-bebas text-white tracking-wider uppercase leading-none">
            PODCAST INTERVIEWS
          </h2>

          <p className="text-base sm:text-lg text-zinc-100 font-normal max-w-2xl mx-auto leading-relaxed">
            Rey Perez shared stage-monetization blueprints, high-ticket branding architectures, and audience engagement systems on top business broadcasts.
          </p>
        </div>

        {/* Seamless Grid (No rounded corners, No gaps, Zero-gap border-collapse styling with smooth expand on hover) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-zinc-800/90 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          {podcastList.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              id={`podcast-card-${index}`}
              className="group relative flex flex-col bg-[#08162F]/50 border border-zinc-800/80 rounded-none overflow-hidden transition-all duration-300 hover:z-30 hover:scale-105 hover:shadow-[0_20px_45px_rgba(0,0,0,0.95)] hover:border-[#ECC557] focus:outline-none cursor-pointer"
            >
              {/* 1:1 Aspect Ratio Cover Artwork (Expands on Hover) */}
              <div className="relative w-full aspect-square overflow-hidden bg-black rounded-none">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.hostOrShow}`}
                  className="w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Floating Play & External Link Indicator on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 p-4 text-center">
                  <div className="w-12 h-12 rounded-none bg-gold-gradient text-black flex items-center justify-center font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#FCE689] uppercase tracking-wider flex items-center gap-1.5">
                    Listen to Episode <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                {/* Top Badge Category */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-black/90 border border-[#ECC557]/40 text-[#ECC557] text-[11px] font-mono font-bold uppercase tracking-wider rounded-none opacity-90 group-hover:opacity-100">
                  {item.category}
                </div>
              </div>

              {/* Bottom Episode Title (Clean Bold Typography without rounding) */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#040B17] group-hover:bg-[#08162F] transition-colors duration-300 rounded-none border-t border-zinc-800">
                <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-[#ECC557] transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans mt-1.5 line-clamp-1">
                  {item.hostOrShow}
                </p>
              </div>

              {/* Bottom Gold Indicator Line */}
              <div className="h-0.5 w-0 bg-gold-gradient group-hover:w-full transition-all duration-300 rounded-none" />
            </a>
          ))}
        </div>

        {/* Bottom Platform Badges Bar */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-zinc-300 text-sm font-mono">
          <span className="text-zinc-400 uppercase tracking-widest font-bold">Available On:</span>
          <span className="hover:text-white transition-colors">Spotify Podcasts</span>
          <span className="text-zinc-600">•</span>
          <span className="hover:text-white transition-colors">Apple Podcasts</span>
          <span className="text-zinc-600">•</span>
          <span className="hover:text-white transition-colors">C-Suite Radio Network</span>
          <span className="text-zinc-600">•</span>
          <span className="hover:text-white transition-colors">YouTube Video Podcasts</span>
        </div>

      </div>
    </section>
  );
};
