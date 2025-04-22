import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, MessageSquare, Map, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-600 pt-12 pb-6 relative overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-500/20"></div>
        <div className="h-px w-full bg-primary-500/50 absolute animate-scanline"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="text-primary-500 mr-2" size={24} />
              <span className="font-bold text-xl text-white">CYBER SHIELD</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Digital armor for a dangerous world. We provide top-tier cybersecurity services to protect your business.
            </motion.p>
          </div>
          
          <div>
            <motion.h3 
              className="text-white font-semibold mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {['Services', 'Methodology', 'Why Us', 'Case Studies', 'Team', 'Mission', 'Contact'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-white font-semibold mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <li className="flex items-center">
                <Phone size={16} className="text-primary-500 mr-2" />
                <a href="tel:7340576177" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +91 7340576177
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare size={16} className="text-primary-500 mr-2" />
                <a href="https://wa.me/8058616564" className="text-gray-400 hover:text-primary-500 transition-colors">
                  WhatsApp: +91 8058616564
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-primary-500 mr-2" />
                <a href="mailto:info@cybershield.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                  info@cybershield.com
                </a>
              </li>
              <li className="flex items-start">
                <Map size={16} className="text-primary-500 mr-2 mt-1" />
                <span className="text-gray-400">Jaipur, India</span>
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-white font-semibold mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Connect With Us
            </motion.h3>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-dark-400 mt-8 pt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Cyber Shield. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;