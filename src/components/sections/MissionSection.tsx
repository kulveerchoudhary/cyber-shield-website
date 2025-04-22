import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const values = [
    {
      title: "Empower clients through knowledge & protection",
      description: "We believe in not just securing systems, but educating clients so they understand the 'why' behind security measures."
    },
    {
      title: "Think like a hacker. Defend like a shield",
      description: "Our offensive security mindset helps us anticipate threats before they emerge, creating truly robust defenses."
    },
    {
      title: "Security isn't a tool. It's a mindset",
      description: "We cultivate a security-first approach that becomes part of your organization's DNA, not just a temporary fix."
    }
  ];

  return (
    <section id="mission" ref={sectionRef} className="py-20 relative overflow-hidden bg-dark-500">
      {/* 3D spherical background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-50 blur-3xl"
          style={{ y }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Our Mission"
          subtitle="The principles that guide our work and define our approach to cybersecurity."
        />
        
        <div className="flex flex-col items-center">
          {/* Central mission statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16 text-center"
          >
            <blockquote className="text-2xl md:text-3xl italic font-light text-white leading-relaxed">
              <span className="text-5xl text-primary-500">"</span>
              Cyber Shield exists to create unbreakable digital armor for those who value their presence, their data, and their future.
              <span className="text-5xl text-primary-500">"</span>
            </blockquote>
          </motion.div>
          
          {/* Core values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-dark-400 border border-dark-300 rounded-lg p-6 relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-secondary-500/10 rounded-full"></div>
                
                <h3 className="text-xl font-bold mb-3 text-primary-300 relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-300 relative z-10">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;