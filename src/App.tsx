import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { EcosystemSection } from './components/EcosystemSection';
import { WorkWithExpertSection } from './components/WorkWithExpertSection';
import { KeynotesSection } from './components/KeynotesSection';
import { BGBSection } from './components/BGBSection';
import { SSMSection } from './components/SSMSection';
import { InfluenceWithLoveSection } from './components/InfluenceWithLoveSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingContactSection } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { GHLBlueprintDrawer } from './components/GHLBlueprintDrawer';
import { VideoModal } from './components/VideoModal';
import { BookingModal } from './components/BookingModal';
import { Keynote } from './types';
import { Code2, Sparkles, Layers } from 'lucide-react';

export default function App() {
  const [isGHLDrawerOpen, setIsGHLDrawerOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedKeynoteName, setSelectedKeynoteName] = useState('The Million Dollar Brand Blueprint');
  const [showPlaceholdersOnly, setShowPlaceholdersOnly] = useState(false);

  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    title: string;
    subtitle?: string;
    tag: string;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    tag: ''
  });

  const handleOpenVideo = (title: string, tag: string, subtitle?: string) => {
    setVideoModal({
      isOpen: true,
      title,
      subtitle: subtitle || 'Official Media & Masterclass Preview',
      tag
    });
  };

  const handleSelectKeynote = (keynote: Keynote) => {
    setSelectedKeynoteName(keynote.title);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col relative selection:bg-[#ECC557] selection:text-black">
      
      {/* Floating Quick Action Widget for GHL Architecture Suite */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => setIsGHLDrawerOpen(true)}
          className="group px-4 py-3 rounded-2xl bg-gradient-to-r from-[#08162F] to-[#000000] border-2 border-[#ECC557] text-[#FCE689] shadow-[0_0_30px_rgba(236,197,87,0.45)] hover:shadow-[0_0_40px_rgba(236,197,87,0.75)] hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg bg-gold-gradient text-black flex items-center justify-center font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-mono text-zinc-400 uppercase font-bold leading-none">
              Developer & GHL Kit
            </span>
            <span className="block text-xs font-heading font-extrabold text-white group-hover:text-[#FCE689] uppercase">
              Inspect Layout & CSS
            </span>
          </div>
        </button>
      </div>

      {/* Top Navbar */}
      <Navbar
        onOpenGHLDrawer={() => setIsGHLDrawerOpen(true)}
        onOpenBookingModal={() => {
          setSelectedKeynoteName('General Keynote / Executive Booking');
          setIsBookingModalOpen(true);
        }}
      />

      {/* Main Website Flow */}
      <main className="flex-1">
        
        {/* Section 1: Hero Section */}
        <HeroSection
          onOpenBooking={() => {
            setSelectedKeynoteName('The Million Dollar Brand Blueprint');
            setIsBookingModalOpen(true);
          }}
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 2: Social Proof & Metrics */}
        <SocialProofSection
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 3: WORK WITH THE #1 GLOBAL BRANDING EXPERT (STRICT STRUCTURAL REPLICA) */}
        <WorkWithExpertSection
          onOpenBooking={() => {
            setSelectedKeynoteName('Private Advisory & Partnership');
            setIsBookingModalOpen(true);
          }}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 4: The 360 Authority Ecosystem (AMP Your Brand, My360Sites, Today's Premier Experts TV) */}
        <EcosystemSection
          onOpenBooking={(brand) => {
            setSelectedKeynoteName(`${brand} Inquiry`);
            setIsBookingModalOpen(true);
          }}
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 5: Keynotes & Experiences */}
        <KeynotesSection
          onSelectKeynote={handleSelectKeynote}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 5: The Business Growth Bootcamp (BGB) - MASSIVE REDESIGN */}
        <BGBSection
          onOpenVideo={handleOpenVideo}
          onOpenBooking={() => {
            setSelectedKeynoteName('Business Growth Bootcamp (BGB) Enrollment');
            setIsBookingModalOpen(true);
          }}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 6: Speaking & Sales Mastery (SSM) - MASSIVE REDESIGN */}
        <SSMSection
          onOpenVideo={handleOpenVideo}
          onOpenBooking={() => {
            setSelectedKeynoteName('Speaking & Sales Mastery (SSM) VIP Seat');
            setIsBookingModalOpen(true);
          }}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 7: THANK YOU FOR YOUR GIVING / INFLUENCE WITH LOVE (STRICT STRUCTURAL REPLICA) */}
        <InfluenceWithLoveSection
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 8: Experiencia y Testimonios */}
        <TestimonialsSection
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 9: Contacto & GoHighLevel Interactive Booking */}
        <BookingContactSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenGHLDrawer={() => setIsGHLDrawerOpen(true)}
      />

      {/* Interactive Video Player Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ ...videoModal, isOpen: false })}
        title={videoModal.title}
        subtitle={videoModal.subtitle}
        tag={videoModal.tag}
        onBookClick={() => {
          setSelectedKeynoteName('Keynote & Masterclass Inquiry');
          setIsBookingModalOpen(true);
        }}
      />

      {/* Keynote / VIP Direct Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultKeynote={selectedKeynoteName}
      />

      {/* GoHighLevel Architecture & Custom Code Inspector Drawer */}
      <GHLBlueprintDrawer
        isOpen={isGHLDrawerOpen}
        onClose={() => setIsGHLDrawerOpen(false)}
        showPlaceholdersOnly={showPlaceholdersOnly}
        setShowPlaceholdersOnly={setShowPlaceholdersOnly}
      />

    </div>
  );
}
