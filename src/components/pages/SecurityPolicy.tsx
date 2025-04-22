import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';

const SecurityPolicy = () => {
  const policies = [
    {
      icon: <Shield size={24} className="text-primary-500" />,
      title: "Data Protection",
      description: "We implement industry-standard encryption and security measures to protect all data."
    },
    {
      icon: <Lock size={24} className="text-primary-500" />,
      title: "Access Control",
      description: "Strict access controls and authentication mechanisms are in place to prevent unauthorized access."
    },
    {
      icon: <AlertTriangle size={24} className="text-primary-500" />,
      title: "Vulnerability Management",
      description: "Regular security assessments and updates to address potential vulnerabilities."
    },
    {
      icon: <Clock size={24} className="text-primary-500" />,
      title: "Incident Response",
      description: "24/7 monitoring and rapid response to security incidents."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-dark-500">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Security Policy"
          subtitle="Our commitment to protecting your data and privacy"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-500/10 rounded-lg mr-4">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{policy.title}</h3>
                </div>
                <p className="text-gray-300">{policy.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Reporting Security Issues</h3>
            <p className="text-gray-300 mb-4">
              If you believe you've found a security vulnerability, please report it to our security team at security@cybershield.com.
            </p>
            <p className="text-gray-300">
              We appreciate your help in keeping our services secure for everyone.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityPolicy; 