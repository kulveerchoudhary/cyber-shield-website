import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { Shield, Code, Network, Lock, Search, Bug, Zap, Fingerprint } from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    {
      icon: <Network size={24} className="text-primary-500" />,
      title: "Network Scanning",
      description: "Like a digital map maker, we scan networks to find all connected devices and potential entry points, helping us understand where security needs to be strengthened."
    },
    {
      icon: <Search size={24} className="text-primary-500" />,
      title: "Vulnerability Assessment",
      description: "Think of this as a digital health check-up. We systematically check for weaknesses in your systems, just like a doctor checks for potential health issues."
    },
    {
      icon: <Bug size={24} className="text-primary-500" />,
      title: "Penetration Testing",
      description: "This is like hiring a friendly hacker to try breaking into your systems. They use the same methods as real attackers but with permission, helping us find and fix security gaps before the bad guys do."
    },
    {
      icon: <Lock size={24} className="text-primary-500" />,
      title: "Password Cracking",
      description: "We test how strong your passwords are by trying different methods to crack them. This helps us ensure your digital locks are strong enough to keep intruders out."
    },
    {
      icon: <Fingerprint size={24} className="text-primary-500" />,
      title: "Social Engineering Testing",
      description: "This tests how well your team can spot and avoid tricks that hackers use to get sensitive information, like pretending to be someone they're not."
    },
    {
      icon: <Zap size={24} className="text-primary-500" />,
      title: "Wireless Security Testing",
      description: "We check your Wi-Fi networks for weaknesses, ensuring that your wireless connections are as secure as your wired ones."
    }
  ];

  return (
    <section id="tools" className="py-20 relative overflow-hidden bg-dark-500">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-600 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Our Security Tools & Techniques"
          subtitle="Understanding how we protect your digital assets"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-500/10 rounded-lg mr-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                </div>
                <p className="text-gray-300">{tool.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="max-w-3xl mx-auto p-8">
              <div className="flex items-center justify-center mb-4">
                <Shield size={32} className="text-primary-500 mr-4" />
                <h3 className="text-2xl font-bold text-white">Why These Tools Matter</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Just like a doctor uses different tools to check your health, we use these specialized tools to check your digital security. Each tool helps us find and fix different types of security issues, making sure your business stays safe from cyber threats.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection; 