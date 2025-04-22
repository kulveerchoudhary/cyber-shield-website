import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackgroundElements from '../components/ui/BackgroundElements';
import BasicScene from '../components/BasicScene';
import IntroExperience from '../components/sections/IntroExperience';
import ServicesSection from '../components/sections/ServicesSection';
import MethodologySection from '../components/sections/MethodologySection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import MissionSection from '../components/sections/MissionSection';
import ContactSection from '../components/sections/ContactSection';
import TeamSection from '../components/sections/TeamSection';
import LearningHubSection from '../components/sections/LearningHubSection';
import CursorEffect from '../components/effects/CursorEffect';
import HackingAnimation from '../components/effects/HackingAnimation';
import ScrollHackingEffect from '../components/effects/ScrollHackingEffect';
import Navigation from '../components/ui/Navigation';

const HomePage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-dark-500 text-white relative overflow-hidden">
        <Navigation />
        <BackgroundElements />
        <CursorEffect />
        <HackingAnimation />
        <ScrollHackingEffect />
        <BasicScene />

        {/* 1. Home */}
        <IntroExperience servicesRef={servicesRef} contactRef={contactRef} />

        {/* 2. Services */}
        <div ref={servicesRef}>
          <ServicesSection />
        </div>

        {/* 3. Methodology */}
        <MethodologySection />

        {/* 4. Case Studies */}
        <CaseStudiesSection />

        {/* 5. Mission */}
        <MissionSection />

        {/* 6. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 7. Contact */}
        <div ref={contactRef}>
          <ContactSection />
        </div>

        {/* 8. Founder */}
        <TeamSection />

        {/* 9. Learning Hub */}
        <LearningHubSection />
      </div>
    </AnimatePresence>
  );
};

export default HomePage; 