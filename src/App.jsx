import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import VideoBanner from './components/VideoBanner';
import Services from './components/Services';
import BarSetup from './components/BarSetup';
import SignatureCocktails from './components/SignatureCocktails';
import LiveMixology from './components/LiveMixology';
import Experiences from './components/Experiences';
import DestinationEvents from './components/DestinationEvents';
import EventTypes from './components/EventTypes';
import Process from './components/Process';
import Gallery from './components/Gallery';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';

function App() {
  const handleScrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#f5f5f8] relative selection:bg-[#d4af37]/30 selection:text-[#fae29c]">
      {/* Sticky Luxury Navbar */}
      <Navbar onOpenEnquiry={handleScrollToEnquiry} />

      {/* 1. ARRIVE: Dramatic Editorial Hero (Uncropped 3:4 Photo) */}
      <Hero />

      {/* 2. DISCOVER: Editorial Brand Introduction (Uncropped 4:3 Photo) */}
      <Intro />

      {/* 3. FLUIDITY: Ambient Looping Background Video Banner (Reel 1) with Text on top */}
      <VideoBanner />

      {/* 4. EXPERIENCE: The Art of the Bar (Services) */}
      <Services />

      {/* 5. TASTE: Signature Cocktails Showcase (Uncropped 3:4 Photos) */}
      <SignatureCocktails />

      {/* 6. ARCHITECTURE: Physical Event Bar Setup (Uncropped 3:4 Photo) */}
      <BarSetup />

      {/* 7. WATCH: Live Mixology Theatrical Showreel (Reel 2 with Live Audio) */}
      <LiveMixology />

      {/* 8. SENSORY: Spiked Caviars & Jello Creations (Uncropped 4:3 Photos) */}
      <Experiences />

      {/* 9. DESTINATION: Outdoor Beach & Global Celebrations (Uncropped Photos) */}
      <DestinationEvents />

      {/* 10. OCCASIONS: Curated Event Types */}
      <EventTypes />

      {/* 11. HOW IT WORKS: 3-Step Journey */}
      <Process />

      {/* 12. VISUALS: Asymmetrical Editorial Gallery (All Photos 100% Visible) */}
      <Gallery />

      {/* 13. ENQUIRE: Compulsory 8-Field Booking Form */}
      <EnquiryForm />

      {/* 14. Minimal Luxury Footer */}
      <Footer />

      {/* Subtle Floating WhatsApp Contact Button */}
      <WhatsAppCTA />
    </div>
  );
}

export default App;
