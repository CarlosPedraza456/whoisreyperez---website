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
      className="relative bg-[#000000] py-20 sm:py-28 border-b border-zinc-900 overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(8,22,47,0.8), #000000 80%), url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
            <Calendar className="w-3.5 h-3.5 text-[#ECC557]" />
            <span className="text-[11px] font-mono font-medium tracking-widest text-[#FCE689] uppercase">
              DIRECT CALENDAR & VIP BOOKING DESK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal font-bebas text-white leading-none tracking-wide">
            SECURE REY PEREZ <br />
            <span className="text-gold-gradient">
              FOR YOUR NEXT EVENT
            </span>
          </h2>

          <p className="text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Choose an available slot directly on Rey Perez’s official executive calendar or submit a bespoke corporate inquiry below.
          </p>
        </div>

        {/* Dual Interaction Mode Selector */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-zinc-950 border border-zinc-900">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'calendar'
                  ? 'bg-gold-gradient text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>GHL Interactive Calendar</span>
            </button>

            <button
              onClick={() => setActiveTab('form')}
              className={`px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-gold-gradient text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Executive Inquiry Form</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Booking Window */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-zinc-950/90 border border-zinc-900 p-6 sm:p-9">
          
          {isSuccess ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#ECC557] mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-airstrike text-white">
                  VIP EXECUTIVE INQUIRY CONFIRMED
                </h3>
                <p className="text-zinc-400 text-sm max-w-lg mx-auto leading-relaxed">
                  Your event slot request has been transmitted directly into Rey Perez’s GoHighLevel CRM. Our Speaker Director will reach out promptly to confirm contract riders and logistics.
                </p>
              </div>

              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 rounded-xl bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs font-heading"
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
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                      <div>
                        <span className="text-[11px] font-mono text-[#ECC557] font-medium uppercase">
                          Step 1 of 2
                        </span>
                        <h4 className="text-base sm:text-lg font-bold font-heading text-white">
                          Select Discovery Call Date
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">
                        Timezone: America/New_York (EST)
                      </span>
                    </div>

                    {/* Date Input Simulation */}
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium">
                        Target Discovery Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white font-mono focus:outline-none focus:border-zinc-700"
                      />
                    </div>

                    {/* Available Time Slots */}
                    <div className="space-y-1.5 pt-1">
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium">
                        Available Executive Slots for {selectedDate}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                              selectedTime === time
                                ? 'bg-gold-gradient text-black shadow-md font-bold'
                                : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:border-zinc-700 hover:text-white'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selected Summary */}
                    <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 text-xs font-mono flex items-center justify-between text-zinc-400">
                      <span>Selected Slot:</span>
                      <span className="text-[#FCE689] font-medium">{selectedDate} @ {selectedTime}</span>
                    </div>

                  </div>

                  {/* Right Column: Contact Confirmation Form */}
                  <div className="lg:col-span-5 space-y-4 bg-zinc-900/40 p-5 rounded-xl border border-zinc-900">
                    <div>
                      <span className="text-[11px] font-mono text-[#ECC557] font-medium uppercase">
                        Step 2 of 2
                      </span>
                      <h4 className="text-base sm:text-lg font-bold font-heading text-white">
                        Your Contact Information
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="block uppercase font-mono text-zinc-400 font-medium mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700"
                        />
                      </div>

                      <div>
                        <label className="block uppercase font-mono text-zinc-400 font-medium mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700"
                        />
                      </div>

                      <div>
                        <label className="block uppercase font-mono text-zinc-400 font-medium mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700"
                        />
                      </div>

                      <div>
                        <label className="block uppercase font-mono text-zinc-400 font-medium mb-1">
                          Organization / Event *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Event or Enterprise Name"
                          className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl bg-gold-gradient text-black font-extrabold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-heading"
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium mb-1">
                        Executive Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Johnathan Davis"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jdavis@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium mb-1">
                        Phone / Direct Line *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 234-5678"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium mb-1">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Leadership Summit"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium mb-1">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700 text-xs"
                      >
                        <option value="Stadium / Arena Keynote">Stadium / Arena Keynote (1,000+ Attendees)</option>
                        <option value="Corporate Annual Convention">Corporate Annual Convention</option>
                        <option value="BGB Bootcamp Private Cohort">BGB Bootcamp Private Cohort</option>
                        <option value="Speaking & Sales Mastery VIP">Speaking & Sales Mastery VIP</option>
                        <option value="Private 1-on-1 Branding Advisory">Private 1-on-1 Branding Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-zinc-400 font-medium mb-1">
                        Budget Allocation
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-zinc-700 text-xs"
                      >
                        <option value="$15k - $25k">$15,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k - $100k">$50,000 - $100,000</option>
                        <option value="$100k+">$100,000+ (Mastermind / Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-zinc-400 font-medium mb-1">
                      Event Summary & Desired Outcomes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding the audience profile, stage format, and your main strategic goals..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 resize-none text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gold-gradient text-black font-black uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-heading"
                  >
                    <Send className="w-4 h-4" />
                    Submit VIP Corporate Booking Request
                  </button>
                </form>
              )}
            </div>
          )}

          {/* GHL Integration Badge */}
          <div className="mt-6 pt-5 border-t border-zinc-900 flex flex-wrap items-center justify-between text-xs text-zinc-500 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ECC557]" />
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
