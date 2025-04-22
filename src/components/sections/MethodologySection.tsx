import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { 
  Search, 
  Zap, 
  AlertOctagon, 
  Shield, 
  BookOpen, 
  BarChart 
} from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, step }) => {
  return (
    <motion.div 
      className="relative flex items-start group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
    >
      {/* Step number and connecting line */}
      <div className="mr-6 flex flex-col items-center">
        <motion.div 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-dark-400 border-2 border-primary-500 text-primary-500 font-bold text-lg relative z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {step}
        </motion.div>
        {step < 6 && (
          <motion.div 
            className="w-0.5 bg-primary-500/30 h-full absolute top-12 left-6 -translate-x-1/2 z-0"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: step * 0.1 }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="flex items-center mb-2">
          <div className="mr-3 text-primary-500">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const MethodologySection = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Audit & Analyze",
      description: "We begin by thoroughly analyzing your current systems, applications, and security practices to identify potential weak points."
    },
    {
      icon: <Zap size={24} />,
      title: "Simulate Threats",
      description: "Our team conducts controlled attacks against your infrastructure using the same techniques as real-world hackers."
    },
    {
      icon: <AlertOctagon size={24} />,
      title: "Expose Weak Points",
      description: "We document all discovered vulnerabilities with detailed reports showing exactly how they could be exploited."
    },
    {
      icon: <Shield size={24} />,
      title: "Build Fortified Solutions",
      description: "Based on our findings, we develop and implement robust security measures to eliminate vulnerabilities."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Guide & Educate Your Team",
      description: "We provide training and resources to help your team understand security best practices and maintain vigilance."
    },
    {
      icon: <BarChart size={24} />,
      title: "Ongoing Support & Monitoring",
      description: "We offer continuous monitoring and support to ensure your systems remain secure against evolving threats."
    }
  ];

  return (
    <section id="methodology" className="py-20 relative bg-dark-600 overflow-hidden">
      {/* Background cyber elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A84FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="How We Help You"
          subtitle="Our proven six-step methodology ensures comprehensive protection for your digital assets."
        />
        
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;