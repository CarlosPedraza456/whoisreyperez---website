import { Keynote, Testimonial, StatMetric, GHLSectionGuide, BootcampModule } from '../types';

export const METRICS: StatMetric[] = [
  {
    id: 'revenue',
    value: 120,
    prefix: '$',
    suffix: 'M+',
    label: 'Client Revenue Generated',
    sublabel: 'Through organic 360 branding & authority positioning'
  },
  {
    id: 'stages',
    value: 550,
    suffix: '+',
    label: 'Global Stages & Keynotes',
    sublabel: 'Delivered across 24+ countries worldwide'
  },
  {
    id: 'entrepreneurs',
    value: 65,
    suffix: 'k+',
    label: 'Entrepreneurs & Leaders',
    sublabel: 'Transformed through live bootcamps & masterminds'
  },
  {
    id: 'experience',
    value: 16,
    suffix: '+ Yrs',
    label: 'Industry Dominance',
    sublabel: 'As the #1 Global Branding Authority & Kingmaker'
  }
];

export const BRAND_LOGOS = [
  { name: 'FORBES', tag: '[PLACEHOLDER_LOGO_FORBES]' },
  { name: 'ABC NEWS', tag: '[PLACEHOLDER_LOGO_ABC]' },
  { name: 'CBS', tag: '[PLACEHOLDER_LOGO_CBS]' },
  { name: 'FOX BUSINESS', tag: '[PLACEHOLDER_LOGO_FOX]' },
  { name: 'NBC', tag: '[PLACEHOLDER_LOGO_NBC]' },
  { name: 'ENTREPRENEUR', tag: '[PLACEHOLDER_LOGO_ENTREPRENEUR]' },
  { name: 'ROKU TV', tag: '[PLACEHOLDER_LOGO_ROKU]' },
  { name: 'APPLE TV', tag: '[PLACEHOLDER_LOGO_APPLETV]' },
  { name: 'AMAZON FIRE TV', tag: '[PLACEHOLDER_LOGO_FIRETV]' },
  { name: 'C-SUITE TV', tag: '[PLACEHOLDER_LOGO_CSUITE]' },
];

export interface EcosystemBrand {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  badge: string;
  urlLabel: string;
  placeholderTag: string;
}

export const ECOSYSTEM_BRANDS: EcosystemBrand[] = [
  {
    id: 'amp-your-brand',
    name: 'AMP Your Brand',
    category: 'The Entrepreneurs Agency',
    tagline: 'Elite Multimedia Branding & Celebrity Positioning Agency',
    description: 'Specializing in creating "celebrity brands" for top entrepreneurs, speakers, coaches, and authors. Deploys complete 360 Marketing Systems, PR, digital assets, and high-ticket sales positioning.',
    badge: 'Agency & PR',
    urlLabel: 'AMPYourBrand.com',
    placeholderTag: '[PLACEHOLDER_AMP_BRAND_LOGO]'
  },
  {
    id: 'my360sites',
    name: 'My360Sites.com',
    category: 'Proprietary Tech Platform',
    tagline: 'All-In-One Smart Connection & Media Platform',
    description: 'Rey’s breakthrough digital hub unifying all links, videos, books, podcasts, and direct booking calendars into one high-converting interface that accelerates audience connections.',
    badge: 'SaaS Platform',
    urlLabel: 'My360Sites.com',
    placeholderTag: '[PLACEHOLDER_MY360SITES_LOGO]'
  },
  {
    id: 'todays-premier-experts',
    name: 'Today\'s Premier Experts',
    category: 'Broadcast Media & TV Show',
    tagline: 'Nationally Syndicated TV Show & Podcast on Apple TV, Roku & Amazon Fire',
    description: 'Hosted by Rey Perez, spotlighting global authorities and celebrities including Les Brown and Kevin Harrington. Provides clients with massive national broadcast distribution.',
    badge: 'National TV Show',
    urlLabel: 'TodaysPremierExperts.com',
    placeholderTag: '[PLACEHOLDER_TPE_TV_SHOW]'
  },
  {
    id: 'vip-branding-experience',
    name: 'The VIP Branding Experience',
    category: 'Done-For-You Live Event',
    tagline: 'Brand In 2 Days (Brandin2days.com)',
    description: 'The world’s first done-for-you 3-day live branding transformation. Entrepreneurs walk in with an idea and walk out with full celebrity digital assets, video production, and an actionable marketing plan.',
    badge: 'Done-For-You Event',
    urlLabel: 'TheVIPbrandingExperience.com',
    placeholderTag: '[PLACEHOLDER_VIP_BRANDING_LOGO]'
  },
  {
    id: 'celebrity-code-book',
    name: 'Cracking The Celebrity Code',
    category: 'Best-Selling Book',
    tagline: 'The Ultimate Guide to Authority & Influence',
    description: 'Rey’s best-selling book revealing the psychological blueprint behind celebrity authority. 100% of book proceeds are donated directly to the Influence With Love non-profit.',
    badge: 'Best-Seller',
    urlLabel: 'InfluenceWithLOVE.org Book',
    placeholderTag: '[PLACEHOLDER_BOOK_COVER]'
  },
  {
    id: 'influence-with-love',
    name: 'Influence With Love',
    category: 'Global Non-Profit Foundation',
    tagline: 'Time, Talent & Treasure for Youth Empowerment',
    description: 'Dedicated to teaching youth entrepreneurship and addressing critical social issues such as child poverty, healthcare, and education globally.',
    badge: '501(c)(3) Foundation',
    urlLabel: 'InfluenceWithLOVE.org',
    placeholderTag: '[PLACEHOLDER_INFLUENCE_LOVE_LOGO]'
  }
];

export const KEYNOTES: Keynote[] = [
  {
    id: 'branding-monetization',
    title: 'The Million Dollar Brand Blueprint',
    subtitle: 'How to Turn Your Personal Identity Into a Category-Dominating Monopoly',
    description: 'A masterclass on high-ticket positioning, celebrity authority creation, and eliminating market competition by packaging your unique story into high-converting IP and 360 positioning.',
    duration: '45 - 90 Min Keynote',
    targetAudience: 'CEOs, High-Performing Founders, 7-Figure Entrepreneurs & Industry Leaders',
    placeholderId: '[PLACEHOLDER_KEYNOTE_BRAND_BLUEPRINT]',
    imageAlt: 'Rey Perez delivering The Million Dollar Brand Blueprint',
    takeaways: [
      'The 5 Pillars of Celebrity Authority Positioning',
      'How to 10X your fees without losing your core audience',
      'The exact 360 organic omnipresence framework to dominate your niche'
    ]
  },
  {
    id: 'stage-selling',
    title: 'Speaking & Sales Mastery: Closing 40%+ From The Stage',
    subtitle: 'The Non-Pushy Method to Close Any Room from the Platform',
    description: 'Transform every speaking opportunity into an avalanche of high-ticket clients. Master the emotional arc, micro-commitments, and enrollment psychology that moves audiences to immediate action.',
    duration: '60 - 120 Min Keynote / Workshop',
    targetAudience: 'Sales Executives, Keynote Speakers, Agency Owners & Enterprise Leaders',
    placeholderId: '[PLACEHOLDER_KEYNOTE_STAGE_SELLING]',
    imageAlt: 'Rey Perez speaking on stage selling and conversion psychology',
    takeaways: [
      'The Subconscious Conversion Matrix used by top 0.1% speakers',
      'How to orchestrate standing ovations that convert into high-ticket sales',
      'Overcoming room objections before they are even thought of'
    ]
  },
  {
    id: 'scale-no-ads',
    title: 'Scale & Dominate with Zero Paid Ads',
    subtitle: 'Building a 7-Figure Organic Growth Machine Powered by Strategic Alliances',
    description: 'Paid advertising costs are surging. Rey reveals how the world’s most profitable personal brands scale aggressively by tapping into host-beneficiary networks, strategic JV partnerships, and viral authority loops.',
    duration: '45 - 75 Min Keynote',
    targetAudience: 'Fast-Growing Startups, Solopreneurs & B2B Consultants',
    placeholderId: '[PLACEHOLDER_KEYNOTE_ORGANIC_SCALE]',
    imageAlt: 'Rey Perez presenting Organic Scaling framework',
    takeaways: [
      'The zero-ad-spend client acquisition engine that generated millions',
      'How to structure collaborative JV partnerships with industry titans',
      'Building automated referral flywheels that compound month-over-month'
    ]
  }
];

export const BGB_FEATURES = [
  {
    title: 'Zero Paid Ads Architecture',
    desc: 'Deploy proven organic funnels and 360 joint-venture positioning that generates qualified leads on demand.'
  },
  {
    title: 'High-Ticket Offer Engineering',
    desc: 'Restructure your service or mentorship into an irresistible premium package valued between $10K to $100K.'
  },
  {
    title: 'Live Stage & Platform Execution',
    desc: 'Real-time pitch calibration and feedback directly with Rey Perez to maximize room conversions.'
  },
  {
    title: 'Celebrity Network & VIP Access',
    desc: 'Connect with high-caliber entrepreneurs, investors, and potential JV partners inside an intimate setting.'
  }
];

export const BGB_TESTIMONIALS: Testimonial[] = [
  {
    id: 'bgb-1',
    name: 'Dr. Michael Sterling',
    role: 'Founder & CEO',
    company: 'Sterling Peak BioHealth',
    quote: 'Before BGB, we were spending $40k/month on ads with declining ROAS. Rey re-engineered our positioning in 3 days. We added $840k in 90 days completely organic.',
    videoDuration: '02:45',
    videoThumbPlaceholder: '[PLACEHOLDER_BGB_VIDEO_TESTIMONIAL_1]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_MICHAEL_S]',
    rating: 5,
    featured: true
  },
  {
    id: 'bgb-2',
    name: 'Elena Rostova',
    role: 'Global Wealth Coach',
    company: 'Rostova Advisory',
    quote: 'Rey taught me the difference between a speaker who gets applause and a speaker who gets paid. My closing rate jumped from 12% to 44% immediately.',
    videoDuration: '03:12',
    videoThumbPlaceholder: '[PLACEHOLDER_BGB_VIDEO_TESTIMONIAL_2]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_ELENA_R]',
    rating: 5
  },
  {
    id: 'bgb-3',
    name: 'David Vance',
    role: 'Real Estate Syndicate Leader',
    company: 'Vance Capital Partners',
    quote: 'The caliber of minds in this room is unmatched. The ROI on Rey Perez’s Business Growth Bootcamp was realized in our first joint venture deal.',
    videoDuration: '01:58',
    videoThumbPlaceholder: '[PLACEHOLDER_BGB_VIDEO_TESTIMONIAL_3]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_DAVID_V]',
    rating: 5
  }
];

export const SSM_DAYS: BootcampModule[] = [
  {
    day: 'DAY 01',
    title: 'Platform Authority & The Million-Dollar Story Arc',
    description: 'Deconstruct your background and architect an emotionally gripping keynote that commands immediate respect, eliminates skepticism, and positions you as the undisputed #1 authority in the room.',
    deliverables: ['Custom Origin Story Script', 'Audience State-Change Formula', 'High-Status Body Language & Vocal Tone']
  },
  {
    day: 'DAY 02',
    title: 'The Stage Selling Engine & Seamless Transitions',
    description: 'Learn the exact psychology of shifting an audience from passive listening to urgent desire to buy. Master the non-salesy offer bridge, objection inoculation, and multi-tier price stack.',
    deliverables: ['Word-for-Word Offer Transition Scripts', 'Micro-Commitment Stacking Guide', 'Live In-Room Pitch Simulations']
  },
  {
    day: 'DAY 03',
    title: 'High-Ticket Table Rush & Back-End Monetization',
    description: 'Execute the high-ticket table rush protocol. Structure VIP breakout rooms, corporate keynote contracts, and post-event automated follow-up sequences that convert 5-figure retainers.',
    deliverables: ['Back-Of-Room Closing Playbook', 'Corporate Keynote Rider & Contract Templates', 'VIP Upsell Architecture']
  }
];

export const SSM_TESTIMONIALS: Testimonial[] = [
  {
    id: 'ssm-1',
    name: 'Marcus Holloway',
    role: 'Keynote Speaker & Author',
    company: 'NextGen Leadership',
    quote: 'In my first speaking gig after Speaking & Sales Mastery, I closed 37 high-ticket clients at $15k each. Rey is the Michael Jordan of stage monetization.',
    videoDuration: '04:10',
    videoThumbPlaceholder: '[PLACEHOLDER_SSM_VIDEO_TESTIMONIAL_1]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_MARCUS_H]',
    rating: 5
  },
  {
    id: 'ssm-2',
    name: 'Sarah Chen-Morrison',
    role: 'SaaS Founder & Executive Coach',
    company: 'ScaleMetric Global',
    quote: 'I used to get terrified before stepping on stage. Rey gave me a surgical, repeatable blueprint. Today I command $25k keynote fees with ease.',
    videoDuration: '03:30',
    videoThumbPlaceholder: '[PLACEHOLDER_SSM_VIDEO_TESTIMONIAL_2]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_SARAH_C]',
    rating: 5
  }
];

export const CELEBRITY_TESTIMONIALS: Testimonial[] = [
  {
    id: 'les-brown',
    name: 'Les Brown',
    role: 'World-Renowned Motivational Speaker & Legend',
    company: 'Live Your Dreams',
    quote: 'What I like best about Rey Perez is that he can make you look good! He is a person who is truly about giving and creating undeniable celebrity authority for everyone he works with.',
    videoDuration: '03:45',
    videoThumbPlaceholder: '[PLACEHOLDER_VIDEO_LES_BROWN]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_LES_BROWN]',
    rating: 5,
    featured: true
  },
  {
    id: 'kevin-harrington',
    name: 'Kevin Harrington',
    role: 'Original Shark on ABC\'s Shark Tank',
    company: 'Inventor of the Infomercial & Pioneer',
    quote: 'Rey Perez can help you take YOUR brand to the next level in the best way possible. His 360 branding model and stage mastery are unmatched in our industry.',
    videoDuration: '02:30',
    videoThumbPlaceholder: '[PLACEHOLDER_VIDEO_KEVIN_HARRINGTON]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_KEVIN_HARRINGTON]',
    rating: 5,
    featured: true
  },
  {
    id: 'jack-canfield',
    name: 'Jack Canfield',
    role: 'Co-Creator of Chicken Soup for the Soul',
    company: 'Author of The Success Principles',
    quote: 'Rey Perez understands the psychology of celebrity authority and high-ticket positioning better than anyone. If you want to own your market, Rey is the kingmaker.',
    videoDuration: '04:00',
    videoThumbPlaceholder: '[PLACEHOLDER_VIDEO_JACK_CANFIELD]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_JACK_CANFIELD]',
    rating: 5,
    featured: true
  },
  {
    id: 'sharon-lechter',
    name: 'Sharon Lechter',
    role: 'Co-Author of Rich Dad Poor Dad',
    company: 'Financial Literacy Pioneer & Author',
    quote: 'Rey’s frameworks for brand monetization, stage influence, and purpose-driven entrepreneurship are extraordinary. He teaches you how to truly create legacy value.',
    videoDuration: '02:15',
    videoThumbPlaceholder: '[PLACEHOLDER_VIDEO_SHARON_LECHTER]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_SHARON_LECHTER]',
    rating: 5,
    featured: true
  },
  {
    id: 'bob-proctor',
    name: 'Bob Proctor',
    role: 'Legendary Master of Personal Development',
    company: 'Proctor Gallagher Institute',
    quote: 'Rey teaches entrepreneurs how to shift their paradigm, step into their true power on stage, and command their category with absolute certainty.',
    videoDuration: '03:10',
    videoThumbPlaceholder: '[PLACEHOLDER_VIDEO_BOB_PROCTOR]',
    avatarPlaceholder: '[PLACEHOLDER_AVATAR_BOB_PROCTOR]',
    rating: 5
  }
];

export const GHL_SECTIONS_GUIDE: GHLSectionGuide[] = [
  {
    sectionId: 'sec-hero',
    title: 'Hero Section (Dan Martell Style)',
    ghlLayout: '1 Full-Width Section > Centered High-Impact Layout + 4 Metric Proof Bar',
    background: 'Pure Black (#000000) with Navy (#08162F) stage glow & gold flare lights',
    components: ['H1 Title with Bebas Neue class', 'Sub-headline in Barlow', 'Custom Gold CTA Button with glowing drop-shadow', 'Watch Keynote Reel Trigger'],
    cssCustomHook: '.ghl-hero-container { background: #000000; border-bottom: 1px solid rgba(236,197,87,0.2); }'
  },
  {
    sectionId: 'sec-social-proof',
    title: 'Social Proof & Media Grid',
    ghlLayout: '1 Full-Width Section > Monochrome Media Grid + 4 Stat Cards',
    background: 'Pure Black (#000000) with subtle grid backdrop',
    components: ['Refined Media Grid', '4 Counter Cards with Gold Bebas Numbers & Labels'],
    cssCustomHook: '.ghl-stat-card { background: rgba(8,22,47,0.5); border: 1px solid rgba(236,197,87,0.2); }'
  },
  {
    sectionId: 'sec-ecosystem',
    title: 'The 360 Authority Ecosystem (WhoIsReyPerez.com)',
    ghlLayout: '1 Full-Width Section > 6 Bento Grid Cards (AMP, My360, TV Show, Book, VIP, Non-Profit)',
    background: 'Black (#000000) with Navy (#08162F) subtle gradient',
    components: ['Ecosystem Bento Cards', 'Category Badges', 'Asset Placeholders', 'Link Triggers'],
    cssCustomHook: '.ghl-ecosystem-card:hover { border-color: #ECC557; transform: translateY(-2px); }'
  },
  {
    sectionId: 'sec-work-expert',
    title: 'WORK WITH THE #1 GLOBAL BRANDING EXPERT',
    ghlLayout: '1 Full-Width Section (STRICT STRUCTURAL REPLICA) > 2 Columns',
    background: 'Deep Navy (#08162F) replacing old cyan/turquoise + Gold borders',
    components: ['Original Headline & Copy', 'Credentials block', 'Rey Perez composition image placeholder', 'Purpose Driven Entrepreneur initiative card'],
    cssCustomHook: '.ghl-expert-replica { background: #08162F; color: #FFFFFF; }'
  },
  {
    sectionId: 'sec-keynotes',
    title: 'Keynotes & Speaking Signatures',
    ghlLayout: '1 Section > 3 Column Grid or Tabs Component',
    background: 'Deep Navy (#08162F) & Black (#000000) dual tone',
    components: ['Keynote Cards with hover glow', 'Duration & Audience badges', 'Keynote Image Placeholders', 'Book Rey Modal Trigger'],
    cssCustomHook: '.ghl-keynote-card:hover { border-color: #ECC557; box-shadow: 0 0 25px rgba(236,197,87,0.3); }'
  },
  {
    sectionId: 'sec-bgb',
    title: 'Business Growth Bootcamp (BGB) - Massively Redesigned',
    ghlLayout: '1 Full-Width Section > 2 Column Hero + 3 Column Video Testimonials Grid',
    background: 'Black (#000000) with Gold Lens Flare ambient overlay',
    components: ['Main Video Embed Frame', 'Glassmorphic perk cards', 'Interactive Video Testimonial cards with gold play button', 'Golden Gradient CTA'],
    cssCustomHook: '.ghl-bgb-glass { backdrop-filter: blur(12px); border: 1px solid rgba(236,197,87,0.3); }'
  },
  {
    sectionId: 'sec-ssm',
    title: 'Speaking & Sales Mastery (SSM) - Massively Redesigned',
    ghlLayout: '1 Full-Width Section > SSM Brand Header + 3 Accordion/Tab Rows + Video Reviews',
    background: 'Deep Navy (#08162F) with Gold radial aura',
    components: ['[PLACEHOLDER_SSM_LOGO]', 'Day 1/2/3 Breakdown interactive blocks', 'High-impact Rounded/Pill CTA', 'Attendee Video Grid'],
    cssCustomHook: '.ghl-ssm-pill-btn { border-radius: 9999px; background: linear-gradient(135deg, #FCE689, #ECC557, #EFAF50); }'
  },
  {
    sectionId: 'sec-influence-love',
    title: 'THANK YOU FOR YOUR GIVING / INFLUENCE WITH LOVE',
    ghlLayout: '1 Full-Width Section (STRICT STRUCTURAL REPLICA) > Centered Layout',
    background: 'Pure Black (#000000) with Navy (#08162F) vignette',
    components: ['Original Headline', 'Time, Talent, Treasure 3-Pillar layout', 'Featured Video player container', 'Support Non-Profit CTA button in gold'],
    cssCustomHook: '.ghl-influence-replica { background: #000000; border-top: 1px solid rgba(236,197,87,0.3); }'
  },
  {
    sectionId: 'sec-booking',
    title: 'GHL Calendar & VIP Executive Booking',
    ghlLayout: '1 Full-Width Section > 2 Column Row (Calendar / Application Form)',
    background: 'Deep Navy (#08162F) with Gold Shimmer framing',
    components: ['Interactive GHL Calendar Element', 'VIP Booking Form with Qualification fields', 'Instant Booking Confirmation'],
    cssCustomHook: '.ghl-calendar-wrap iframe, .ghl-form-wrap { border: 1px solid #ECC557; }'
  }
];

