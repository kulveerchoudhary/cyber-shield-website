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
import ToolsSection from '../components/sections/ToolsSection';
import OperationalUnitsSection from '../components/sections/OperationalUnitsSection';
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

        <IntroExperience servicesRef={servicesRef} contactRef={contactRef} />
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
        <OperationalUnitsSection />
        <MethodologySection />
        <CaseStudiesSection />
        <MissionSection />
        <WhyChooseUsSection />
        <TeamSection />
        <LearningHubSection />
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default HomePage; 