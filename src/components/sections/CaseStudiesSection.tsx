import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { ArrowRight, CheckCircle2, ShoppingCart, Smartphone, Database, Globe } from 'lucide-react';

interface CaseStudyCardProps {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  result: string;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  icon, 
  title, 
  problem, 
  solution, 
  result, 
  index 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-80"
    >
      <div 
        className="h-full relative cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <GlassCard className="flex flex-col h-full">
                <div className="mb-4 text-primary-500">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{problem}</p>
                <div className="text-primary-300 flex items-center text-sm font-mono mt-auto">
                  <span>VIEW DETAILS</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </GlassCard>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col justify-between" glowColor="secondary">
                <div>
                  <h4 className="font-semibold mb-2 text-secondary-500">Solution:</h4>
                  <p className="text-gray-300 mb-4 text-sm">{solution}</p>
                  
                  <h4 className="font-semibold mb-2 text-primary-500">Result:</h4>
                  <p className="text-gray-300 text-sm mb-3">{result}</p>
                </div>
                
                <div className="text-primary-300 flex items-center text-sm font-mono mt-2">
                  <span>GO BACK</span>
                  <ArrowRight size={16} className="ml-2 rotate-180" />
                </div>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: <ShoppingCart size={32} />,
      title: "E-Commerce Security Overhaul",
      problem: "An online retailer experienced repeated bot attacks attempting to scrape pricing data and customer information.",
      solution: "We implemented advanced bot detection, API rate limiting, and added server-side request verification.",
      result: "Stopped 5 distinct botnet attacks in 3 weeks. Reduced server load by 40% and prevented data leakage."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Vulnerability Fix",
      problem: "A startup's mobile banking app had critical API security flaws exposing user financial data.",
      solution: "We conducted a full API security audit and implemented proper authentication, encryption, and token validation.",
      result: "Closed 11 high-risk vulnerabilities in the mobile API. Prevented potential fraud and data exposure incidents."
    },
    {
      icon: <Database size={32} />,
      title: "Cloud Database Protection",
      problem: "A SaaS company's AWS database was misconfigured, leaving customer records accessible to unauthorized users.",
      solution: "We rebuilt their database security with proper IAM policies, encryption, and implemented real-time monitoring.",
      result: "Secured over 1.5 million customer records. Implemented automated compliance checks preventing future misconfigurations."
    },
    {
      icon: <Globe size={32} />,
      title: "Enterprise Network Defense",
      problem: "A mid-sized company discovered their network had been penetrated by an APT for over 6 months.",
      solution: "We performed incident response, removed malicious implants, and rebuilt their network security architecture.",
      result: "Eliminated the threat actor, restored security, and implemented advanced threat detection that identified 3 subsequent attempts."
    }
  ];

  return (
    <section id="case-studies" className="py-20 relative bg-dark-600">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTg0RkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Our Work"
          subtitle="Real results from real clients. Here's how we've helped organizations overcome security challenges."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              icon={study.icon}
              title={study.title}
              problem={study.problem}
              solution={study.solution}
              result={study.result}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="inline-flex items-center px-4 py-2 rounded-full bg-dark-500/50 border border-primary-500/30 text-primary-300">
            <CheckCircle2 size={16} className="mr-2" />
            <span>All case studies have been anonymized to protect client privacy</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;