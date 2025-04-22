import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './navigation/Header';
import Footer from './navigation/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-500 text-gray-200 font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col flex-grow"
      >
        <Header toggleMobileMenu={toggleMobileMenu} />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;