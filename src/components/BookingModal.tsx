import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultKeynote?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultKeynote = 'The Million Dollar Brand Blueprint'
}) => {
  const [keynoteType, setKeynoteType] = useState(defaultKeynote);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    eventDate: '',
    estimatedAttendees: '250 - 500',
    eventType: 'In-Person Keynote',
    budgetRange: '$25,000 - $50,000',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 rounded-2xl border border-[#ECC557]/40 bg-gradient-to-b from-[#08162F] to-[#000000] p-6 sm:p-8 shadow-[0_0_50px_rgba(236,197,87,0.25)] text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#ECC557] flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#ECC557]/20 border-2 border-[#ECC557] flex items-center justify-center text-[#ECC557] mb-4 shadow-[0_0_30px_rgba(236,197,87,0.4)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2">
              Booking Request Received
            </h3>
            <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="text-[#ECC557] font-semibold">{formData.fullName || 'Executive'}</span>. Rey Perez’s VIP Management Team will review your event date and reach out within 24 business hours to lock in scheduling.
            </p>
            <div className="p-4 rounded-xl bg-[#08162F] border border-[#ECC557]/30 text-xs font-mono text-left w-full max-w-md mb-6 space-y-1">
              <p><span className="text-zinc-400">Keynote:</span> <span className="text-[#FCE689]">{keynoteType}</span></p>
              <p><span className="text-zinc-400">Event Format:</span> <span className="text-white">{formData.eventType}</span></p>
              <p><span className="text-zinc-400">Estimated Attendees:</span> <span className="text-white">{formData.estimatedAttendees}</span></p>
              <p><span className="text-zinc-400">Target Date:</span> <span className="text-white">{formData.eventDate || 'Flexible'}</span></p>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-lg bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-[0_0_20px_rgba(236,197,87,0.4)] transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECC557]/15 border border-[#ECC557]/40 text-[#FCE689] text-xs font-mono font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#ECC557]" />
                VIP SPEAKER & KEYNOTE INQUIRY
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Book Rey Perez For Your Next Event
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Direct booking coordination for global corporate keynotes, stadium summits, and private mastermind intensives.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Robert Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="robert@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or Event Name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Select Keynote Topic
                  </label>
                  <select
                    value={keynoteType}
                    onChange={(e) => setKeynoteType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  >
                    <option value="The Million Dollar Brand Blueprint">The Million Dollar Brand Blueprint</option>
                    <option value="Unstoppable Stage & Sales Psychology">Unstoppable Stage & Sales Psychology</option>
                    <option value="Scale & Dominate Without Paid Ads">Scale & Dominate Without Paid Ads</option>
                    <option value="Custom Executive Advisory">Custom Executive Advisory / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Audience Size
                  </label>
                  <select
                    value={formData.estimatedAttendees}
                    onChange={(e) => setFormData({ ...formData, estimatedAttendees: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  >
                    <option value="50 - 150 VIPs">50 - 150 VIPs</option>
                    <option value="150 - 500 Attendees">150 - 500 Attendees</option>
                    <option value="500 - 2,500 Attendees">500 - 2,500 Attendees</option>
                    <option value="2,500+ Arena/Summit">2,500+ Arena/Summit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                    Keynote Budget Tier
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all"
                  >
                    <option value="$15,000 - $25,000">$15,000 - $25,000 (Virtual / Half-Day)</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000 (Standard In-Person)</option>
                    <option value="$50,000+">$50,000+ (Full Day Mastermind / VIP)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                  Event Objectives & Details
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about the venue, audience profile, and desired transformation..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(236,197,87,0.4)] hover:shadow-[0_0_35px_rgba(236,197,87,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer font-heading"
                >
                  <Send className="w-4 h-4" />
                  Submit Executive Keynote Inquiry
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ECC557]" />
                <span>Strict Confidentiality Assured • Direct GHL CRM Sync</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
