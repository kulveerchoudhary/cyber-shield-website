import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { CheckCircle, User, Award, Clock, FileText, Shield } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard
        whileHover={{ scale: 1.03 }}
        className="h-full flex flex-col"
      >
        <div className="flex items-start mb-4">
          <div className="mr-4 text-primary-500 mt-1">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <User size={28} />,
      title: "Real Hackers Turned Protectors",
      description: "Our team consists of ethical hackers with real-world experience, giving us unique insight into how attackers think and operate."
    },
    {
      icon: <Award size={28} />,
      title: "Fully Certified Experts",
      description: "We hold advanced certifications including CEH, OSCP, and more, demonstrating our technical expertise and commitment to excellence."
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Support",
      description: "Security threats don't follow business hours, and neither do we. Our team is available around the clock via Telegram and WhatsApp."
    },
    {
      icon: <FileText size={28} />,
      title: "Total Transparency",
      description: "We eliminate security jargon and provide clear, actionable reports that help you understand exactly what needs to be fixed."
    },
    {
      icon: <Shield size={28} />,
      title: "Comprehensive Protection",
      description: "We don't just identify problems—we help solve them, providing end-to-end security solutions tailored to your needs."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Proven Track Record",
      description: "Our portfolio includes successful security projects for businesses of all sizes, from startups to established enterprises."
    }
  ];

  return (
    <section id="why-us" className="py-20 relative overflow-hidden">
      {/* Animated background glitch effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%230A84FF" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: '100px 100px',
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Why Choose Cyber Shield?"
          subtitle="We bring unmatched expertise and dedication to protecting your digital assets."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;