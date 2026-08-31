import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Mail, ShieldCheck, User, Phone } from 'lucide-react';
import boardroomBg from '../assets/images/rey_masterclass_boardroom_action_1788155087969.jpg';

interface NewsletterSectionProps {
  showPlaceholdersOnly?: boolean;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="sec-newsletter"
      className="relative bg-[#000000] border-b border-[rgba(236,197,87,0.2)] overflow-hidden text-white"
    >
      {/* Background Action Photo with Smooth Fade to Right and Vignette */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        
        {/* The Action Image on the left half, smoothly fading into black on the right */}
        <div className="absolute inset-0 z-0">
          <img
            src={boardroomBg}
            alt="Rey Perez Masterclass Action"
            className="w-full h-full object-cover object-left-top sm:object-left brightness-90 contrast-105"
          />

          {/* Smooth Dark Gradient Overlays for Maximum Text Contrast (Dan Martell Style) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/85 to-[#000000] lg:from-black/20 lg:via-black/80 lg:to-[#000000]" />
          
          {/* Subtle Top & Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
          
          {/* Subtle Gold/Midnight Atmosphere on Right Side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Column is Negative/Visual Space (Showing Rey In Action) */}
            <div className="hidden lg:block lg:col-span-6" />

            {/* Right Column: High-Impact Typography & Conversion Block */}
            <div className="lg:col-span-6 space-y-6 text-left max-w-xl ml-auto">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08162F] border border-[#ECC557]/40 text-[#ECC557]">
                <Sparkles className="w-4 h-4 fill-current" />
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FCE689] uppercase">
                  THE MONOPOLY METHOD NEWSLETTER
                </span>
              </div>

              {/* Punchline Headline (Bebas Neue Display Typography) */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[76px] font-normal font-bebas text-white tracking-wide uppercase leading-[0.95]">
                A 5 MINUTE EMAIL <br />
                <span className="text-zinc-200">THAT COULD SAVE YOU </span>
                <span className="text-gold-gradient">5 YEARS</span>
              </h2>

              {/* Value Proposition Subcopy */}
              <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed">
                Get the zero-paid-ads frameworks, stage closing psychology, and category monopoly playbooks to scale smarter every week. 8-figure authority brands aren't built by accident. But you <span className="text-white font-bold underline decoration-[#ECC557] decoration-2">CAN</span> get there faster.
              </p>

              {/* Subscription Form / CTA */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="flex flex-col gap-3.5">
                    
                    {/* Name Input */}
                    <div className="relative">
                      <User className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/90 border border-zinc-600 text-white placeholder-zinc-400 text-base focus:outline-none focus:border-[#ECC557] transition-all font-sans"
                      />
                    </div>

                    {/* Phone Number Input */}
                    <div className="relative">
                      <Phone className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your phone number..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/90 border border-zinc-600 text-white placeholder-zinc-400 text-base focus:outline-none focus:border-[#ECC557] transition-all font-sans"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <Mail className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your primary email address..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/90 border border-zinc-600 text-white placeholder-zinc-400 text-base focus:outline-none focus:border-[#ECC557] transition-all font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4.5 rounded-xl bg-white text-black font-black font-heading text-base uppercase tracking-wider hover:bg-[#FCE689] active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                    >
                      <span>Join The Private List</span>
                      <ArrowRight className="w-5 h-5 stroke-[3]" />
                    </button>

                  </div>

                  {/* Micro Trust Indicators */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-300 font-mono pt-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#ECC557]" />
                      Strictly zero spam
                    </span>
                    <span>•</span>
                    <span>Sent every Thursday morning</span>
                    <span>•</span>
                    <span>Unsubscribe anytime</span>
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-2xl bg-[#08162F] border-2 border-[#ECC557] flex items-center gap-4 animate-fadeIn">
                  <CheckCircle2 className="w-7 h-7 text-[#ECC557] shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-heading text-white uppercase">
                      You're on the VIP Private List!
                    </h4>
                    <p className="text-sm text-zinc-200 font-normal">
                      Check your inbox for this week's 5-minute Category Monopoly edition.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
