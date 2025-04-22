import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Bug, Cloud, FileSearch, Network, Zap } from 'lucide-react';

const units = [
  {
    title: 'Red Team Unit',
    description: 'Simulates real-world cyberattacks to uncover system weaknesses before real hackers can exploit them.',
    icon: Shield,
    color: 'text-red-500'
  },
  {
    title: 'Digital Forensics Cell',
    description: 'Tracks intrusions, analyzes breach points, and recovers data trails to ensure complete digital evidence clarity.',
    icon: Search,
    color: 'text-blue-500'
  },
  {
    title: 'Malware Response Ops',
    description: 'Detects, disarms, and eliminates malware threats while restoring system integrity with rapid response protocols.',
    icon: Bug,
    color: 'text-green-500'
  },
  {
    title: 'Cloud Security Division',
    description: 'Secures cloud-based infrastructure against intrusion, data leaks, and misconfigurations with advanced cloud protection layers.',
    icon: Cloud,
    color: 'text-purple-500'
  },
  {
    title: 'Vulnerability Audit Cell',
    description: 'Performs in-depth system audits to identify and patch security loopholes before attackers find them.',
    icon: FileSearch,
    color: 'text-yellow-500'
  },
  {
    title: 'Network Surveillance Hub',
    description: 'Monitors live network activity to detect unusual behavior, block threats, and maintain 24/7 digital perimeter security.',
    icon: Network,
    color: 'text-cyan-500'
  },
  {
    title: 'Zero-Day Research Unit',
    description: 'Identifies unknown vulnerabilities proactively and builds custom defenses before threats emerge in the wild.',
    icon: Zap,
    color: 'text-orange-500'
  }
];

const OperationalUnitsSection = () => {
  return (
    <section id="units" className="py-20 relative overflow-hidden">
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
            Operational Units
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our specialized units work together to provide comprehensive security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-500/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary-500 transition-all duration-300"
              >
                <div className={`${unit.color} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{unit.title}</h3>
                <p className="text-gray-400">{unit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OperationalUnitsSection; 