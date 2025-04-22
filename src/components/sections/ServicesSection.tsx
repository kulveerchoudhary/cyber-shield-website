import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Bug, Cloud, FileSearch, Network, Zap } from 'lucide-react';

const services = [
  {
    title: 'Penetration Testing',
    description: 'We ethically hack your system to find hidden weaknesses—before real attackers can. Think of it as a safety test.',
    icon: Shield,
    color: 'text-red-500'
  },
  {
    title: 'Vulnerability Assessment',
    description: 'We scan your digital systems to detect weak spots and help you fix them before they become security problems.',
    icon: Search,
    color: 'text-blue-500'
  },
  {
    title: 'Social Engineering',
    description: 'We test how easily someone can be tricked into giving access—protecting you from human-based hacking and scams.',
    icon: Bug,
    color: 'text-green-500'
  },
  {
    title: 'Cloud Security',
    description: 'We protect your cloud data (like Google Drive, AWS, etc.) from leaks, hacks, and misuse—keeping your files safe.',
    icon: Cloud,
    color: 'text-purple-500'
  },
  {
    title: 'Malware Defense',
    description: 'We detect and remove harmful software like viruses, trojans, or spyware—restoring your systems to full health.',
    icon: FileSearch,
    color: 'text-yellow-500'
  },
  {
    title: 'Digital Forensics',
    description: 'We investigate cyber attacks, find out how they happened, and recover valuable data to prevent it from happening again.',
    icon: Network,
    color: 'text-cyan-500'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-600 via-dark-700 to-dark-800 opacity-90" />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiMyMjIiLz48L2c+PC9zdmc+')] opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-cyan-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-500/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary-500 transition-all duration-300"
              >
                <div className={`${service.color} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;