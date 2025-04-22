import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { Phone, Mail, Map, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const handleCall = () => {
    window.location.href = 'tel:+917340576177';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918058616564', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@cybershield.com';
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-10">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="#0A84FF"
            strokeWidth="0.2"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="#00E88F"
            strokeWidth="0.2"
            strokeDasharray="5 5"
            vectorEffect="non-scaling-stroke"
          />
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="#0A84FF"
              strokeWidth="0.1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="#0A84FF"
              strokeWidth="0.1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Get in Touch"
          subtitle="Ready to secure your digital assets? Connect with us through any of these channels."
        />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <GlassCard className="flex flex-col items-center text-center p-8 cursor-pointer hover:bg-primary-500/10 transition-colors" onClick={handleCall}>
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-primary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <div className="text-gray-300 hover:text-primary-500 transition-colors flex items-center text-lg font-mono">
                  +91 7340576177
                  <ExternalLink size={18} className="ml-2" />
                </div>
              </GlassCard>

              <GlassCard className="flex flex-col items-center text-center p-8 cursor-pointer hover:bg-primary-500/10 transition-colors" onClick={handleWhatsApp}>
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <div className="text-gray-300 hover:text-primary-500 transition-colors flex items-center text-lg font-mono">
                  +91 8058616564
                  <ExternalLink size={18} className="ml-2" />
                </div>
              </GlassCard>

              <GlassCard className="flex flex-col items-center text-center p-8 cursor-pointer hover:bg-primary-500/10 transition-colors" onClick={handleEmail}>
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-primary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <div className="text-gray-300 hover:text-primary-500 transition-colors flex items-center text-lg font-mono">
                  info@cybershield.com
                  <ExternalLink size={18} className="ml-2" />
                </div>
              </GlassCard>

              <GlassCard className="flex flex-col items-center text-center p-8">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                  <Map className="text-primary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300 text-lg mb-1">Jaipur, India</p>
                <p className="text-gray-400 text-base">Working globally</p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;