import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import SecureForm from '../forms/SecureForm';
import { AuthProvider } from '../../contexts/AuthContext';
import { validateEmail, validatePassword, sanitizeInput, escapeHtml, validateUrl, validatePhone } from '../../utils/security';

const SecurityPreview = () => {
  const [demoInput, setDemoInput] = useState('');
  const [sanitizedOutput, setSanitizedOutput] = useState('');
  const [validationResults, setValidationResults] = useState({
    email: false,
    password: false,
    url: false,
    phone: false
  });

  const handleDemoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setDemoInput(input);
    setSanitizedOutput(escapeHtml(input));
  };

  const runValidations = () => {
    setValidationResults({
      email: validateEmail('test@example.com'),
      password: validatePassword('Test123!@#'),
      url: validateUrl('https://example.com'),
      phone: validatePhone('+1234567890')
    });
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <SectionTitle 
          title="Security Features Preview"
          subtitle="Explore our security implementations"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="text-primary-500 mr-2" size={24} />
                <h3 className="text-xl font-bold text-white">Input Sanitization</h3>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  value={demoInput}
                  onChange={handleDemoInput}
                  className="w-full px-4 py-2 bg-dark-600 border border-dark-400 text-white rounded-md"
                  placeholder="Try some HTML/JS injection"
                />
                <div className="p-4 bg-dark-600 rounded-md">
                  <p className="text-sm text-gray-400">Sanitized Output:</p>
                  <p className="text-white mt-1">{sanitizedOutput}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="text-primary-500 mr-2" size={24} />
                <h3 className="text-xl font-bold text-white">Input Validation</h3>
              </div>
              <div className="space-y-4">
                <button
                  onClick={runValidations}
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Run Validations
                </button>
                <div className="space-y-2">
                  <div className="flex items-center">
                    {validationResults.email ? (
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <XCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <span className="text-white">Email Validation</span>
                  </div>
                  <div className="flex items-center">
                    {validationResults.password ? (
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <XCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <span className="text-white">Password Strength</span>
                  </div>
                  <div className="flex items-center">
                    {validationResults.url ? (
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <XCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <span className="text-white">URL Validation</span>
                  </div>
                  <div className="flex items-center">
                    {validationResults.phone ? (
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <XCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <span className="text-white">Phone Number Validation</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Secure Form Demo */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-primary-500 mr-2" size={24} />
                <h3 className="text-xl font-bold text-white">Secure Login Form</h3>
              </div>
              <AuthProvider>
                <SecureForm />
              </AuthProvider>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPreview; 