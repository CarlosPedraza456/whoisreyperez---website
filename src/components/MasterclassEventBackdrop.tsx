import React from 'react';

export const MasterclassEventBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Base Deep Navy Canvas */}
      <div className="absolute inset-0 bg-[#040c1a]" />

      {/* SVG Exact Recreation of the Rey Perez Branding Power Day Masterclass Atmosphere */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Navy to Black Vignette */}
          <radialGradient id="stageGlow" cx="65%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#123668" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#081b36" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#020812" stopOpacity="0.98" />
          </radialGradient>

          {/* Geometric Diamond Gradient 1 */}
          <linearGradient id="geomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a457f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#091c38" stopOpacity="0.1" />
          </linearGradient>

          {/* Geometric Diamond Gradient 2 */}
          <linearGradient id="geomGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0c2b57" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#030b17" stopOpacity="0.05" />
          </linearGradient>

          {/* Laptop Screen Glow */}
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8ab4f8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1a4073" stopOpacity="0" />
          </radialGradient>

          {/* Rey Perez Silhouette Gradient */}
          <linearGradient id="reyJacket" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6884a8" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#2c4263" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0f1e33" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Base Stage Lighting */}
        <rect width="1600" height="900" fill="url(#stageGlow)" />

        {/* ========================================================= */}
        {/* BACKGROUND ROLLUP BANNER (Rey Perez Branding Power Day)    */}
        {/* ========================================================= */}
        <g transform="translate(920, 180)" opacity="0.65">
          {/* Banner Body */}
          <rect x="0" y="0" width="240" height="520" rx="4" fill="#0d213f" stroke="#1d4378" strokeWidth="2" />
          
          {/* Banner Header */}
          <rect x="8" y="10" width="224" height="60" fill="#08172c" rx="2" />
          <text x="120" y="36" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="19" textAnchor="middle" letterSpacing="1">
            REY PEREZ
          </text>
          <text x="120" y="52" fill="#ECC557" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" textAnchor="middle" letterSpacing="1.5">
            #1 GLOBAL BRANDING EXPERT
          </text>

          {/* Badges on Banner */}
          <rect x="18" y="80" width="90" height="34" rx="2" fill="#051021" stroke="#254e85" strokeWidth="1" />
          <text x="63" y="95" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="800" fontSize="9" textAnchor="middle">
            360
          </text>
          <text x="63" y="106" fill="#8cb3e8" fontFamily="sans-serif" fontWeight="600" fontSize="6.5" textAnchor="middle">
            MARKETING SYSTEM
          </text>

          <rect x="120" y="80" width="102" height="34" rx="2" fill="#051021" stroke="#ECC557" strokeWidth="1" />
          <text x="171" y="95" fill="#ECC557" fontFamily="sans-serif" fontWeight="800" fontSize="8" textAnchor="middle">
            BRANDING
          </text>
          <text x="171" y="106" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="7" textAnchor="middle">
            POWER DAY
          </text>

          {/* Testimonial Feature 1 (Tanya Bashani ESQ) */}
          <circle cx="170" cy="170" r="28" fill="#17355e" stroke="#2c5791" strokeWidth="1.5" />
          <text x="170" y="174" fill="#a8c5eb" fontFamily="sans-serif" fontSize="8" textAnchor="middle">Photo</text>
          <text x="65" y="165" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="9">Tanya Bashani ESQ</text>
          <text x="65" y="178" fill="#ECC557" fontFamily="sans-serif" fontSize="7">★★★★★</text>
          <text x="65" y="190" fill="#7d9ec4" fontFamily="sans-serif" fontSize="6.5">VIP Client Case Study</text>

          {/* Testimonial Feature 2 (Brian Salles) */}
          <line x1="15" y1="215" x2="225" y2="215" stroke="#1c3b66" strokeWidth="1" />
          <text x="120" y="235" fill="#ECC557" fontFamily="sans-serif" fontSize="8" textAnchor="middle">★★★★★</text>
          <text x="120" y="250" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="10" textAnchor="middle">Brian Salles</text>
          <text x="120" y="266" fill="#9dbde3" fontFamily="sans-serif" fontSize="7.5" textAnchor="middle">
            "Rey took my brand to 7-figures"
          </text>

          {/* Lower Banner Detail */}
          <rect x="20" y="290" width="200" height="80" rx="3" fill="#061224" />
          <text x="120" y="325" fill="#587ea8" fontFamily="sans-serif" fontSize="8" textAnchor="middle">
            Done-For-You Celebrity Assets
          </text>
        </g>

        {/* ========================================================= */}
        {/* AUDIENCE / ATTENDEES AT WORKSHOP TABLE (MIDDLE-LEFT)      */}
        {/* ========================================================= */}
        <g transform="translate(420, 420)" opacity="0.75">
          {/* Tripod & Camera recording session */}
          <path d="M220 180 L235 290 M220 180 L205 290 M220 180 L220 290" stroke="#0a1a33" strokeWidth="3" />
          <rect x="210" y="150" width="20" height="30" rx="3" fill="#08162b" stroke="#1d4073" strokeWidth="1.5" />
          <circle cx="220" cy="165" r="4" fill="#6ba4ed" />

          {/* Attendee 1 (Woman in Center with Laptop) */}
          <circle cx="310" cy="100" r="32" fill="#0c2345" stroke="#1f467a" strokeWidth="1" />
          {/* Long Hair */}
          <path d="M280 100 Q310 60 340 100 Q345 160 330 170 Q280 170 280 100 Z" fill="#061224" />
          {/* Shoulders */}
          <path d="M260 180 Q310 145 360 180 L370 280 L250 280 Z" fill="#08172e" />

          {/* Attendee 2 (Man in Background Left) */}
          <circle cx="120" cy="80" r="28" fill="#091b36" />
          <path d="M80 150 Q120 120 160 150 L170 240 L70 240 Z" fill="#061326" />

          {/* Attendee 3 (Left Foreground Silhouette) */}
          <path d="M-50 220 Q50 160 120 240 L110 380 L-80 380 Z" fill="#030a17" opacity="0.9" />

          {/* Masterclass Table */}
          <ellipse cx="260" cy="310" rx="280" ry="80" fill="#061326" stroke="#122c54" strokeWidth="1.5" />

          {/* Open Laptop on Table */}
          <g transform="translate(290, 200)">
            {/* Screen */}
            <polygon points="10,0 150,0 140,90 20,90" fill="#0a1f3d" stroke="#2b5591" strokeWidth="2" />
            <polygon points="18,8 142,8 134,82 26,82" fill="#1b4175" />
            {/* Presentation Grid on Laptop Screen */}
            <rect x="36" y="16" width="40" height="26" fill="#8bb4eb" opacity="0.7" rx="1" />
            <rect x="84" y="16" width="40" height="26" fill="#4d7db8" opacity="0.6" rx="1" />
            <rect x="36" y="48" width="88" height="26" fill="#2d5b94" opacity="0.6" rx="1" />
            {/* Keyboard base */}
            <polygon points="0,92 160,92 180,125 -20,125" fill="#051021" stroke="#183661" strokeWidth="1.5" />
            {/* Glow projection */}
            <circle cx="80" cy="50" r="90" fill="url(#screenGlow)" />
          </g>

          {/* Water Bottle & Paper Notes */}
          <rect x="250" y="270" width="12" height="30" rx="3" fill="#1d457a" opacity="0.6" />
          <polygon points="460,260 520,265 510,295 450,290" fill="#102545" opacity="0.7" />
        </g>

        {/* ========================================================= */}
        {/* REY PEREZ (FOREGROUND RIGHT - SPEAKING & MASTERCLASS)     */}
        {/* ========================================================= */}
        <g transform="translate(1000, 120)">
          {/* Trademark Mohawk / Fade Haircut */}
          <path
            d="M210 110 Q240 60 265 50 Q285 55 295 85 Q290 120 280 135 Q265 145 250 145 Z"
            fill="#050e1c"
          />
          {/* High Top Center Crest (Mohawk Texture) */}
          <path
            d="M230 80 Q255 35 280 40 Q290 60 285 85 Z"
            fill="#091a33"
          />

          {/* Head & Neck Profile */}
          <path
            d="M205 130 Q215 110 235 110 Q265 110 270 145 Q270 180 250 200 L240 230 L195 220 L195 160 Z"
            fill="#152e52"
          />

          {/* Ear Profile */}
          <ellipse cx="242" cy="155" rx="9" ry="14" fill="#1c3a63" />

          {/* White / Light Blazer / Jacket (Back & Shoulders Profile) */}
          <path
            d="M170 230 Q230 215 310 240 Q390 280 420 370 L470 650 L110 650 L120 340 Q135 270 170 230 Z"
            fill="url(#reyJacket)"
            stroke="#3b5d8c"
            strokeWidth="1.5"
          />

          {/* Jacket Collar & Seam Details */}
          <path d="M240 230 L230 330 M280 245 L295 360 M170 270 L140 450" stroke="#4d74a8" strokeWidth="2" opacity="0.6" strokeLinecap="round" />

          {/* Arm Gesture / Keynote Position */}
          <path
            d="M140 330 Q110 420 70 480 Q50 510 30 520 L60 550 Q110 520 150 440 Z"
            fill="#1d385e"
          />

          {/* Rim Light / Silhouette Glow on Rey's Head & Shoulder */}
          <path
            d="M225 55 Q255 40 280 45 Q295 65 290 100 Q285 150 310 235 Q375 275 405 340"
            fill="none"
            stroke="#6aa7f7"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.75"
          />
        </g>

        {/* ========================================================= */}
        {/* GEOMETRIC DIAMOND & RHOMBUS FACETS (AS IN UPLOADED IMAGE) */}
        {/* ========================================================= */}
        {/* Big Diamond Top Right */}
        <polygon points="1200,-50 1650,200 1450,600 1000,350" fill="url(#geomGrad1)" />
        {/* Diamond Center Right */}
        <polygon points="1050,150 1350,300 1200,600 900,450" fill="url(#geomGrad2)" />
        {/* Left Dark Shade Polygon */}
        <polygon points="-50,-50 600,-50 400,600 -50,900" fill="#020812" opacity="0.75" />

        {/* Global Film Noise & Contrast Overlay */}
        <rect width="1600" height="900" fill="#000000" opacity="0.25" />
      </svg>

      {/* Top and Bottom Seamless Transition Vignettes */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black via-black/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>
  );
};
