import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import TornDivider from './components/TornDivider';
import WhatIEdit from './components/WhatIEdit';
import ReelShowcase from './components/ReelShowcase';
import SkillsToolkit from './components/SkillsToolkit';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import UploadModal from './components/UploadModal';
import { getStoredReels, deleteCustomReel } from './utils/storage';

export default function App() {
  const [reels, setReels] = useState([]);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  useEffect(() => {
    // Load ONLY user's posted reels from storage (zero dummy screens)
    const loaded = getStoredReels();
    setReels(loaded);
  }, []);

  // Keyboard shortcut for Owner to open upload modal: Ctrl + U or Shift + U
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'u') || (e.shiftKey && e.key.toLowerCase() === 'u')) {
        e.preventDefault();
        setIsUploadOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth scroll handler for all internal anchor navigation
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleReelAdded = (newReel) => {
    setReels(prev => [newReel, ...prev]);
  };

  const handleDeleteReel = (reelId) => {
    const updated = deleteCustomReel(reelId);
    setReels(updated);
  };

  return (
    <div className="portfolio-app-root">
      {/* Top Fixed Header with SMPTE Timecode & Nav */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dual Moving Text Kinetic Marquees */}
        <MarqueeTicker />

        {/* About Section: Resume bio, Studio Experience, Education, CapCut overview */}
        <About />

        {/* Torn Ripped Paper Edge Transition into Dark Grid */}
        <TornDivider light={false} inverted={false} />

        {/* What I Edit: 5 Core Categories from Resume */}
        <WhatIEdit />

        {/* Torn Ripped Paper Edge Transition into Light Graph Paper */}
        <TornDivider light={true} inverted={true} />

        {/* Work Showcase: ONLY user's posted reels (no un-uploaded empty screens) */}
        <ReelShowcase 
          reels={reels} 
          onOpenUpload={() => setIsUploadOpen(true)}
          onDeleteReel={handleDeleteReel}
        />

        {/* Torn Ripped Paper Edge Transition into Dark Grid */}
        <TornDivider light={false} inverted={false} />

        {/* Skills & Toolkit: CapCut Mastery, Sound Edits */}
        <SkillsToolkit />

        {/* Torn Ripped Paper Edge Transition into Light Graph Paper */}
        <TornDivider light={true} inverted={true} />

        {/* Contact Form: Connected to Formspree https://formspree.io/f/mbgdgnbr */}
        <ContactForm />
      </main>

      {/* Brutalist Dark Footer with discreet Owner Upload button */}
      <Footer onOpenUpload={() => setIsUploadOpen(true)} />

      {/* Video Upload Modal: Drag & Drop from PC + Cloudinary Direct Upload */}
      <UploadModal 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onReelAdded={handleReelAdded}
      />
    </div>
  );
}
