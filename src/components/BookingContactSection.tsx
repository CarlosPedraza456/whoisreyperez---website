import React, { useState } from 'react';
import { Calendar, Clock, Send, CheckCircle2, Sparkles, MapPin, Mail, Phone, ShieldCheck, Globe } from 'lucide-react';

export const BookingContactSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedTime, setSelectedTime] = useState('02:00 PM EST');
  const [activeTab, setActiveTab] = useState<'calendar' | 'form'>('calendar');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    eventType: 'Stadium / Arena Keynote',
    budget: '$25k - $50k',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const availableTimes = [
    '10:00 AM EST',
    '11:30 AM EST',
    '02:00 PM EST',
    '03:30 PM EST',
    '05:00 PM EST'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <section
      id="sec-booking"
      className="relative bg-[#000000] py-24 sm:py-32 border-b border-[rgba(236,197,87,0.2)] overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(8,22,47,0.95), #000000 80%), url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ECC557]/10 rounded-full blur-3xl pointer-events-none animate-flare-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#08162F] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#ECC557]/40 shadow-[0_0_20px_rgba(236,197,87,0.25)]">
            <Calendar className="w-4 h-4 text-[#ECC557]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FCE689] uppercase">
              DIRECT CALENDAR & VIP BOOKING DESK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            SECURE REY PEREZ <br />
            <span className="text-gold-gradient drop-shadow-[0_0_30px_rgba(236,197,87,0.4)]">
              FOR YOUR NEXT EVENT
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Choose an available slot directly on Rey Perez’s official executive calendar or submit a bespoke corporate inquiry below.
          </p>
        </div>

        {/* Dual Interaction Mode Selector */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-black/80 border border-[#ECC557]/40 shadow-xl">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-6 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'calendar'
                  ? 'bg-gold-gradient text-black shadow-[0_0_20px_rgba(236,197,87,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>GHL Interactive Calendar</span>
            </button>

            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-gold-gradient text-black shadow-[0_0_20px_rgba(236,197,87,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Executive Inquiry Form</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Booking Window */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#08162F] via-[#000000] to-[#08162F] border-2 border-[#ECC557]/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(236,197,87,0.25)]">
          
          {isSuccess ? (
            <div className="py-16 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#ECC557]/20 border-2 border-[#ECC557] flex items-center justify-center text-[#ECC557] mx-auto shadow-[0_0_35px_rgba(236,197,87,0.5)]">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-bold font-airstrike text-white">
                  VIP EXECUTIVE INQUIRY CONFIRMED
                </h3>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Your event slot request has been transmitted directly into Rey Perez’s GoHighLevel CRM. Our Speaker Director will reach out promptly to confirm contract riders and logistics.
                </p>
              </div>

              <button
                onClick={() => setIsSuccess(false)}
                className="px-8 py-3.5 rounded-xl bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs font-heading"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div>
              {activeTab === 'calendar' ? (
                /* GHL Interactive Calendar View */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Calendar Date & Time Slot Picker */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div>
                        <span className="text-xs font-mono text-[#ECC557] font-bold uppercase">
                          Step 1 of 2
                        </span>
                        <h4 className="text-lg font-bold font-heading text-white">
                          Select Discovery Call Date
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-400">
                        Timezone: America/New_York (EST)
                      </span>
                    </div>

                    {/* Date Input Simulation */}
                    <div className="space-y-2">
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold">
                        Target Discovery Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[#ECC557]/40 text-white font-mono focus:outline-none focus:border-[#ECC557] focus:ring-1 focus:ring-[#ECC557]"
                      />
                    </div>

                    {/* Available Time Slots */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold">
                        Available Executive Slots for {selectedDate}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                              selectedTime === time
                                ? 'bg-gold-gradient text-black shadow-[0_0_20px_rgba(236,197,87,0.4)] scale-105'
                                : 'bg-black/60 text-zinc-300 border border-zinc-800 hover:border-[#ECC557]/50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selected Summary */}
                    <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 text-xs font-mono flex items-center justify-between text-zinc-300">
                      <span>Selected Slot:</span>
                      <span className="text-[#FCE689] font-bold">{selectedDate} @ {selectedTime}</span>
                    </div>

                  </div>

                  {/* Right Column: Contact Confirmation Form */}
                  <div className="lg:col-span-5 space-y-4 bg-black/50 p-6 rounded-2xl border border-zinc-800">
                    <div>
                      <span className="text-xs font-mono text-[#ECC557] font-bold uppercase">
                        Step 2 of 2
                      </span>
                      <h4 className="text-lg font-bold font-heading text-white">
                        Your Contact Information
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="block uppercase font-mono text-zinc-300 font-semibold mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                        />
                      </div>

                      <div>
                        <label className="block uppercase font-mono text-zinc-300 font-semibold mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                        />
                      </div>

                      <div>
                        <label className="block uppercase font-mono text-zinc-300 font-semibold mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                        />
                      </div>

                      <div>
                        <label className="block uppercase font-mono text-zinc-300 font-semibold mb-1">
                          Organization / Event *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Event or Enterprise Name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-gold-gradient text-black font-extrabold uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(236,197,87,0.4)] hover:shadow-[0_0_35px_rgba(236,197,87,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer font-heading"
                        >
                          <Calendar className="w-4 h-4" />
                          Confirm Calendar Appointment
                        </button>
                      </div>
                    </form>
                  </div>

                </div>
              ) : (
                /* Detailed Executive Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold mb-1">
                        Executive Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Johnathan Davis"
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jdavis@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold mb-1">
                        Phone / Direct Line *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 234-5678"
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold mb-1">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Leadership Summit"
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold mb-1">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                      >
                        <option value="Stadium / Arena Keynote">Stadium / Arena Keynote (1,000+ Attendees)</option>
                        <option value="Corporate Annual Convention">Corporate Annual Convention</option>
                        <option value="BGB Bootcamp Private Cohort">BGB Bootcamp Private Cohort</option>
                        <option value="Speaking & Sales Mastery VIP">Speaking & Sales Mastery VIP</option>
                        <option value="Private 1-on-1 Branding Advisory">Private 1-on-1 Branding Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold mb-1">
                        Budget Allocation
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-zinc-700 text-white focus:outline-none focus:border-[#ECC557]"
                      >
                        <option value="$15k - $25k">$15,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k - $100k">$50,000 - $100,000</option>
                        <option value="$100k+">$100,000+ (Mastermind / Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-zinc-300 font-semibold mb-1">
                      Event Summary & Desired Outcomes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding the audience profile, stage format, and your main strategic goals..."
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ECC557] resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gold-gradient text-black font-black uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(236,197,87,0.5)] hover:shadow-[0_0_45px_rgba(236,197,87,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer font-heading"
                  >
                    <Send className="w-4 h-4" />
                    Submit VIP Corporate Booking Request
                  </button>
                </form>
              )}
            </div>
          )}

          {/* GHL Integration Badge */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ECC557]" />
              <span>GoHighLevel Native API & Webhook Synced</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span className="text-[#FCE689]">Direct Office: +1 (800) REY-PEREZ</span>
              <span>Miami, FL & Global Offices</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
