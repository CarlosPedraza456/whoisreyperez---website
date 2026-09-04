import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { WorkWithExpertSection } from './components/WorkWithExpertSection';
import { AboutReyVideosSection } from './components/AboutReyVideosSection';
import { WorkWithReyTiersSection } from './components/WorkWithReyTiersSection';
import { OurValuesSection } from './components/OurValuesSection';
import { MeetTheTeamSection } from './components/MeetTheTeamSection';
import { MasterBusinessEcosystemSection } from './components/MasterBusinessEcosystemSection';
import { NewsletterSection } from './components/NewsletterSection';
import { SpeakingSalesMasteryBannerSection } from './components/SpeakingSalesMasteryBannerSection';
import { BootcampBannerSection } from './components/BootcampBannerSection';
import { BooksShowcaseSection } from './components/BooksShowcaseSection';
import { PodcastInterviewsSection } from './components/PodcastInterviewsSection';
import { FullWidthGallerySection } from './components/FullWidthGallerySection';
import { InfluenceWithLoveSection } from './components/InfluenceWithLoveSection';
import { PurposeDrivenSection } from './components/PurposeDrivenSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { GHLBlueprintDrawer } from './components/GHLBlueprintDrawer';
import { VideoModal } from './components/VideoModal';
import { BookingModal } from './components/BookingModal';
import { Code2 } from 'lucide-react';

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

  const handleSelectTier = (tierTitle: string) => {
    setSelectedKeynoteName(tierTitle);
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

      {/* Main Website Flow (Dan Martell Balance & High Impact) */}
      <main className="flex-1">
        
        {/* Section 1: Hero Section */}
        <HeroSection
          onOpenBooking={() => {
            setSelectedKeynoteName('The Million Dollar Brand Blueprint Keynote');
            setIsBookingModalOpen(true);
          }}
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 2: Social Proof & Metrics */}
        <SocialProofSection
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 3: WHO IS REY PEREZ (Authority & Credibility - Clean Text Only) */}
        <WorkWithExpertSection
          onOpenBooking={() => {
            setSelectedKeynoteName('Executive Advisory & Mentorship');
            setIsBookingModalOpen(true);
          }}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 3.5: WATCH REY IN ACTION (Video Grid Section) */}
        <AboutReyVideosSection
          onOpenVideo={handleOpenVideo}
        />

        {/* Section 4: WORK WITH REY (5 Consulting Tiers) */}
        <WorkWithReyTiersSection
          onSelectTier={handleSelectTier}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 4.5: OUR CORE VALUES (Mission & Vision Statements) */}
        <OurValuesSection
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 4.55: MEET THE TEAM (Executive Specialists & Leadership) */}
        <MeetTheTeamSection />

        {/* Section 4.6: MASTER EVERY AREA OF YOUR BUSINESS (12-Pillar Ecosystem Grid) */}
        <MasterBusinessEcosystemSection />

        {/* Section 4.7: NEWSLETTER & AUTHORITY PLAYBOOK (Dan Martell Split Style) */}
        <NewsletterSection
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 5: Speaking & Sales Mastery (SSM) - Left-Oriented Crest */}
        <SpeakingSalesMasteryBannerSection
          onOpenBooking={() => {
            setSelectedKeynoteName('Speaking & Sales Mastery 3-Day LIVE Camp');
            setIsBookingModalOpen(true);
          }}
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 6: Business Growth Bootcamp (BGB) - Right-Oriented Crest */}
        <BootcampBannerSection
          onOpenBooking={() => {
            setSelectedKeynoteName('Business Growth Bootcamp (BGB) Cohort');
            setIsBookingModalOpen(true);
          }}
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 6.5: BEST-SELLING BOOKS SHOWCASE (Dan Martell 3D Book Slider) */}
        <BooksShowcaseSection
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 6.8: PODCAST INTERVIEWS (Media & Authority Appearances) */}
        <PodcastInterviewsSection />

        {/* Section 6.9: FULL-WIDTH MEDIA & STAGE GALLERY (Exclusive Archive) */}
        <FullWidthGallerySection />

        {/* Section 7: Endorsements & VIP Testimonials */}
        <TestimonialsSection
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 8: INFLUENCE WITH LOVE (Philanthropy & Giving Movement) */}
        <InfluenceWithLoveSection
          onOpenVideo={handleOpenVideo}
          showPlaceholdersOnly={showPlaceholdersOnly}
        />

        {/* Section 8.5: Work With The #1 Global Branding Expert & Specialist Team (Purpose Driven Giving) */}
        <PurposeDrivenSection />

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

      {/* Keynote / VIP Direct Booking Modal (Pop-up management) */}
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
