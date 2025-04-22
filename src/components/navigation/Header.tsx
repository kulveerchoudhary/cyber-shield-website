import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu } from 'lucide-react';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-500/80 backdrop-blur-md py-2 shadow-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="flex items-center text-white hover:text-primary-500 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Shield className="text-primary-500 mr-2" size={24} />
          <span className="font-bold text-xl">CYBER SHIELD</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {['Services', 'Units', 'Methodology', 'Case Studies', 'Mission', 'Why Us', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-primary-500 transition-colors relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Trigger */}
        <motion.button
          className="lg:hidden text-white hover:text-primary-500 transition-colors"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;