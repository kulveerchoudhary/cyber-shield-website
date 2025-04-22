import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { Shield, Terminal } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="owner" className="py-20 relative overflow-hidden bg-dark-600">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Meet the Founder"
          subtitle="The mastermind behind Cyber Shield's innovative cybersecurity solutions."
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-3xl font-bold text-white">Kulveer Kulhari</h3>
                  <div className="ml-4 px-3 py-1 bg-primary-500/10 rounded-full">
                    <span className="text-primary-500 text-sm font-mono">👤 Founder</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Shield size={20} className="text-primary-500 mr-2" />
                    <span className="text-gray-300">Certified Ethical Hacker</span>
                  </div>
                  <div className="flex items-center">
                    <Terminal size={20} className="text-primary-500 mr-2" />
                    <span className="text-gray-300">Cybersecurity Expert</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Kulveer Kulhari is a certified ethical hacker and cybersecurity expert specializing in penetration testing, digital forensics, and threat mitigation.
                  </p>
                  <p>
                    As the founder of Cyber Shield, he leads with a sharp technical mindset and a commitment to delivering high-impact, reliable cybersecurity solutions.
                  </p>
                  <p>
                    His approach combines ethical hacking expertise with strategic defense to protect businesses in a rapidly evolving digital world.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;