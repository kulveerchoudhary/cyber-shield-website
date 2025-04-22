import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Code, Bug, Shield } from 'lucide-react';

const ScrollHackingEffect = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const iconRef = useRef<HTMLDivElement>(null);
  
  // Transform scroll progress to y position
  const scrollY = useTransform(scrollYProgress, [0, 1], [-100, window.innerHeight + 100]);
  
  // Icons to cycle through
  const icons = [
    { component: Terminal, color: 'text-primary-500' },
    { component: Code, color: 'text-secondary-500' },
    { component: Bug, color: 'text-red-500' },
    { component: Shield, color: 'text-cyan-500' }
  ];

  // Cycle through icons every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!iconRef.current) return;
    
    const rect = iconRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const distance = 80; // Reduced distance for smoother movement
    
    setPosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    });
  };

  const Icon = icons[currentIcon].component;

  return (
    <motion.div
      style={{ y: scrollY }}
      className="fixed left-8 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={iconRef}
        animate={{
          rotate: [0, 5, 0, -5, 0],
          x: position.x,
          y: position.y
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          x: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.5, ease: "easeOut" }
        }}
        className="cursor-pointer"
      >
        <Icon 
          size={32} 
          className={`${icons[currentIcon].color} drop-shadow-lg`}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollHackingEffect; 