import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Code, Server, Key } from 'lucide-react';
import Button from '../ui/Button';

interface IntroExperienceProps {
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const IntroExperience: React.FC<IntroExperienceProps> = ({ servicesRef, contactRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-dark-500 opacity-70">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(10, 132, 255, 0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(0, 232, 143, 0.15) 2px, transparent 0)',
          backgroundSize: '100px 100px',
        }}></div>
      </div>
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-px w-full bg-primary-500/50 absolute top-0 left-0 animate-scanline"></div>
        <div className="h-full w-px bg-primary-500/50 absolute top-0 left-1/4 animate-scanline"></div>
        <div className="h-full w-px bg-primary-500/50 absolute top-0 left-2/4 animate-scanline"></div>
        <div className="h-full w-px bg-primary-500/50 absolute top-0 left-3/4 animate-scanline"></div>
      </div>

      <div 
        ref={containerRef}
        className="container mx-auto px-4 z-10 py-16 lg:py-24"
      >
        <div className="flex flex-col lg:flex-row items-center">
          {/* 3D Shield Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mb-12 lg:mb-0 relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity
              }}
              className="relative mx-auto w-64 h-64 flex items-center justify-center"
            >
              <Shield 
                size={180} 
                className="text-primary-500 z-10" 
                strokeWidth={1}
              />
              
              {/* Orbiting cyber elements */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <motion.div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                >
                  <Lock size={24} className="text-secondary-500" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                >
                  <Code size={24} className="text-secondary-500" />
                </motion.div>
                <motion.div 
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                >
                  <Server size={24} className="text-secondary-500" />
                </motion.div>
                <motion.div 
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                >
                  <Key size={24} className="text-secondary-500" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-300"
            >
              CYBER SHIELD
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6 text-primary-300 font-mono"
            >
              Digital armor for a dangerous world
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 mb-8 max-w-xl"
            >
              Expert cybersecurity services delivered by ethical hackers. 
              We identify threats, exploit vulnerabilities, and build impenetrable systems 
              to protect your digital assets.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => scrollToSection(servicesRef)}
              >
                Our Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroExperience;