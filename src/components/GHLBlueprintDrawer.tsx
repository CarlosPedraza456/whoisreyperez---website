import React, { useState } from 'react';
import { X, Code2, Layers, Copy, Check, Sparkles, Terminal, FileCode, ExternalLink, Cpu } from 'lucide-react';
import { GHL_SECTIONS_GUIDE } from '../data/siteData';

interface GHLBlueprintDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  showPlaceholdersOnly: boolean;
  setShowPlaceholdersOnly: (val: boolean) => void;
}

export const GHLBlueprintDrawer: React.FC<GHLBlueprintDrawerProps> = ({
  isOpen,
  onClose,
  showPlaceholdersOnly,
  setShowPlaceholdersOnly
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'css' | 'js' | 'palette'>('architecture');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const customCSSSnippet = `/* ===================================================
   REY PEREZ OFFICIAL BRANDING - GOHIGHLEVEL (GHL) CUSTOM CSS
   Paleta: #08162F, #000000, #ECC557, #FCE689, #EFAF50, #FFFFFF
   =================================================== */

/* 1. Global Font Styles */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap');

h1, h2, h3, .c-heading {
  font-family: 'Barlow Condensed', sans-serif !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
}

p, body, .c-paragraph {
  font-family: 'Barlow', sans-serif !important;
}

/* 2. Gold Gradients & Glows */
.ghl-gold-btn {
  background: linear-gradient(135deg, #FCE689 0%, #ECC557 50%, #EFAF50 100%) !important;
  color: #000000 !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  border: none !important;
  box-shadow: 0 0 25px rgba(236, 197, 87, 0.45) !important;
  transition: all 0.3s ease-in-out !important;
}

.ghl-gold-btn:hover {
  box-shadow: 0 0 40px rgba(236, 197, 87, 0.8) !important;
  transform: translateY(-2px) !important;
}

.ghl-pill-btn {
  border-radius: 9999px !important;
  padding: 16px 36px !important;
}

/* 3. Glassmorphic Dark Cards */
.ghl-dark-card {
  background: rgba(8, 22, 47, 0.85) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  border: 1px solid rgba(236, 197, 87, 0.3) !important;
  border-radius: 16px !important;
  transition: all 0.35s ease !important;
}

.ghl-dark-card:hover {
  border-color: #ECC557 !important;
  box-shadow: 0 10px 30px -5px rgba(236, 197, 87, 0.35) !important;
  transform: translateY(-6px) !important;
}

/* 4. Animated Background Mesh Shift */
@keyframes ghlBgShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.ghl-animated-bg {
  background: linear-gradient(125deg, #000000, #08162F, #040B18, #000000) !important;
  background-size: 250% 250% !important;
  animation: ghlBgShift 12s ease infinite !important;
}

/* 5. GHL Calendar & Form Styling Injection */
.ghl-calendar-container iframe {
  border: 1px solid rgba(236, 197, 87, 0.4) !important;
  border-radius: 16px !important;
  box-shadow: 0 0 30px rgba(8, 22, 47, 0.8) !important;
}`;

  const customJSSnippet = `<!-- ===================================================
     REY PEREZ OFFICIAL GHL CUSTOM JAVASCRIPT & FLARES INJECTION
     Colocar en: GHL Settings > Custom Code > Body Tracking Code
     =================================================== -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // 1. Inject Floating Gold Lens Flares
  const sections = document.querySelectorAll('.ghl-animated-bg, .ghl-hero-section, .ghl-bgb-section');
  sections.forEach(function(sec) {
    if (!sec.querySelector('.ghl-lens-flare')) {
      const flare = document.createElement('div');
      flare.className = 'ghl-lens-flare';
      flare.style.cssText = 'position:absolute; width:350px; height:350px; background:radial-gradient(circle, rgba(236,197,87,0.18) 0%, rgba(8,22,47,0) 70%); border-radius:50%; pointer-events:none; filter:blur(40px); z-index:1; top:10%; right:5%; animation: flarePulse 6s ease-in-out infinite;';
      sec.style.position = 'relative';
      sec.style.overflow = 'hidden';
      sec.appendChild(flare);
    }
  });

  // 2. Smooth Scroll Anchor Links in GHL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
</script>`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#000000]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl h-full bg-[#08162F] border-l border-[#ECC557]/40 shadow-2xl flex flex-col text-white">
        
        {/* Top Bar */}
        <div className="p-5 border-b border-zinc-800 bg-[#000000]/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient text-black flex items-center justify-center shadow-[0_0_20px_rgba(236,197,87,0.5)]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#FCE689] px-2 py-0.5 rounded bg-[#ECC557]/15 border border-[#ECC557]/30">
                  GHL ARCHITECTURE SUITE
                </span>
              </div>
              <h2 className="text-lg font-bold font-heading text-white">
                GoHighLevel Engineering Inspector
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#ECC557] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Placeholder Toggle Switch */}
        <div className="px-5 py-3 bg-[#08162F]/90 border-b border-zinc-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ECC557]" />
            <span className="text-zinc-300 font-medium">Visual Mode:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPlaceholdersOnly(false)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                !showPlaceholdersOnly
                  ? 'bg-gold-gradient text-black font-bold shadow'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              Rich Graphic Mode
            </button>
            <button
              onClick={() => setShowPlaceholdersOnly(true)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                showPlaceholdersOnly
                  ? 'bg-gold-gradient text-black font-bold shadow'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              [PLACEHOLDER_...] Tag Mode
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-800 px-5 pt-3 gap-2 bg-[#000000]/40">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-3 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'architecture'
                ? 'border-[#ECC557] text-[#FCE689]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            GHL Sections Map ({GHL_SECTIONS_GUIDE.length})
          </button>

          <button
            onClick={() => setActiveTab('css')}
            className={`pb-2.5 px-3 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'css'
                ? 'border-[#ECC557] text-[#FCE689]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Custom CSS
          </button>

          <button
            onClick={() => setActiveTab('js')}
            className={`pb-2.5 px-3 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'js'
                ? 'border-[#ECC557] text-[#FCE689]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Custom JS / Flares
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`pb-2.5 px-3 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'palette'
                ? 'border-[#ECC557] text-[#FCE689]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            Brand Palette
          </button>
        </div>

        {/* Drawer Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 font-sans text-sm">
          
          {/* 1. Architecture Map */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-300">
                Estructura de secciones, filas, columnas y componentes nativos de GoHighLevel mapeados para Rey Perez:
              </p>

              <div className="space-y-3">
                {GHL_SECTIONS_GUIDE.map((sec, idx) => (
                  <div
                    key={sec.sectionId}
                    className="p-4 rounded-xl bg-black/60 border border-zinc-800 hover:border-[#ECC557]/60 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#ECC557]/20 border border-[#ECC557] text-[#FCE689] text-xs font-mono font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-white font-heading text-sm">{sec.title}</h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {sec.sectionId}
                      </span>
                    </div>

                    <div className="text-xs space-y-1 pl-8">
                      <p><span className="text-[#ECC557] font-semibold">GHL Layout:</span> <span className="text-zinc-300">{sec.ghlLayout}</span></p>
                      <p><span className="text-[#ECC557] font-semibold">Background:</span> <span className="text-zinc-400">{sec.background}</span></p>
                      <div>
                        <span className="text-[#ECC557] font-semibold">Elements:</span>
                        <ul className="list-disc list-inside text-zinc-400 mt-0.5 space-y-0.5">
                          {sec.components.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Custom CSS */}
          {activeTab === 'css' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-300 font-medium">
                  GoHighLevel Page Custom CSS Code (Inject via GHL Page Settings)
                </span>
                <button
                  onClick={() => copyToClipboard(customCSSSnippet, 'css')}
                  className="px-3 py-1.5 rounded-lg bg-gold-gradient text-black font-bold text-xs flex items-center gap-1.5 shadow hover:shadow-lg transition-all"
                >
                  {copiedKey === 'css' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedKey === 'css' ? 'Copied!' : 'Copy CSS'}
                </button>
              </div>

              <div className="relative rounded-xl bg-black border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-x-auto max-h-[480px]">
                <pre>{customCSSSnippet}</pre>
              </div>
            </div>
          )}

          {/* 3. Custom JS */}
          {activeTab === 'js' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-300 font-medium">
                  GoHighLevel Body Tracking Code (Flares & Loops)
                </span>
                <button
                  onClick={() => copyToClipboard(customJSSnippet, 'js')}
                  className="px-3 py-1.5 rounded-lg bg-gold-gradient text-black font-bold text-xs flex items-center gap-1.5 shadow hover:shadow-lg transition-all"
                >
                  {copiedKey === 'js' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedKey === 'js' ? 'Copied!' : 'Copy JS Script'}
                </button>
              </div>

              <div className="relative rounded-xl bg-black border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-x-auto max-h-[480px]">
                <pre>{customJSSnippet}</pre>
              </div>
            </div>
          )}

          {/* 4. Brand Palette */}
          {activeTab === 'palette' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-3">
                <h4 className="font-bold text-white font-heading text-sm text-[#FCE689]">
                  Official Rey Perez Color Ratios (Guía Visual)
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#FFFFFF] text-black flex flex-col justify-between h-20">
                    <span className="text-xs font-bold font-heading">White Base (60%)</span>
                    <span className="font-mono text-xs">#FFFFFF</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#08162F] text-white border border-[#ECC557]/40 flex flex-col justify-between h-20">
                    <span className="text-xs font-bold font-heading">Deep Navy (Corporate)</span>
                    <span className="font-mono text-xs">#08162F</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#ECC557] text-black flex flex-col justify-between h-20">
                    <span className="text-xs font-bold font-heading">Gold Med (30% Accent)</span>
                    <span className="font-mono text-xs">#ECC557</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FCE689] text-black flex flex-col justify-between h-20">
                    <span className="text-xs font-bold font-heading">Gold Light / Glow</span>
                    <span className="font-mono text-xs">#FCE689</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#EFAF50] text-black flex flex-col justify-between h-20">
                    <span className="text-xs font-bold font-heading">Gold Dark / Shadow</span>
                    <span className="font-mono text-xs">#EFAF50</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#000000] text-white border border-zinc-700 flex flex-col justify-between h-20">
                    <span className="text-xs font-bold font-heading">Pure Black Base</span>
                    <span className="font-mono text-xs">#000000</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800 text-xs text-zinc-400 space-y-1">
                  <p><span className="text-white font-semibold">Headings Typography:</span> Airstrike / Barlow Condensed</p>
                  <p><span className="text-white font-semibold">Body Typography:</span> Barlow & Haettenschweiler</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-zinc-800 bg-[#000000]/80 text-center text-xs text-zinc-400">
          Built for Rey Perez by Helen (Google AI Studio) • Production GHL Ready
        </div>

      </div>
    </div>
  );
};
