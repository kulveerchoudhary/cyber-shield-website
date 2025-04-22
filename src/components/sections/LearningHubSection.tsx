import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, FileText, Code2, FlaskConical, Award, Download } from 'lucide-react';

const ComingSoonTag = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-4 relative"
    >
      <motion.div
        animate={{
          rotateX: [0, 10, 0],
          rotateY: [0, 10, 0],
          rotateZ: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg border border-primary-500/30 backdrop-blur-sm"
      >
        <motion.span
          animate={{
            textShadow: [
              "0 0 5px rgba(0,132,255,0.5)",
              "0 0 10px rgba(0,132,255,0.8)",
              "0 0 5px rgba(0,132,255,0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-primary-300 font-mono text-lg tracking-wider"
        >
          COMING SOON
        </motion.span>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -inset-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg blur-sm"
        />
      </motion.div>
    </motion.div>
  );
};

const LearningHubSection = () => {
  const features = [
    {
      icon: <Book size={24} className="text-primary-500" />,
      title: "Hacking eBooks",
      description: "Exclusive curated and original ethical hacking content"
    },
    {
      icon: <Video size={24} className="text-primary-500" />,
      title: "Video Courses",
      description: "Pre-recorded lecture series from basics to advanced"
    },
    {
      icon: <FileText size={24} className="text-primary-500" />,
      title: "Handwritten Notes",
      description: "Easy-to-understand notes for quick revision"
    },
    {
      icon: <Code2 size={24} className="text-primary-500" />,
      title: "Practical Labs",
      description: "Downloadable tools, scripts, and practice environments"
    },
    {
      icon: <FlaskConical size={24} className="text-primary-500" />,
      title: "Live Hack Scenarios",
      description: "Learn from real-world examples (planned)"
    },
    {
      icon: <Award size={24} className="text-primary-500" />,
      title: "Certification Support",
      description: "Resources to help crack CEH, OSCP, etc."
    },
    {
      icon: <Download size={24} className="text-primary-500" />,
      title: "Downloads Section",
      description: "All materials in one organized hub"
    }
  ];

  return (
    <section id="learning-hub" className="py-20 relative overflow-hidden bg-dark-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Learning Hub
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access our comprehensive collection of cybersecurity resources, from beginner guides to advanced techniques.
          </p>
          <ComingSoonTag />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-500 p-6 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHubSection; 