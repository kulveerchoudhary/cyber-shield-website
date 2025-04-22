import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'danger' | 'none';
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'primary',
  ...motionProps 
}) => {
  const glowClasses = {
    primary: 'shadow-glow-primary',
    secondary: 'shadow-glow-secondary',
    danger: 'shadow-glow-danger',
    none: '',
  };
  
  return (
    <motion.div
      className={`bg-dark-500/80 backdrop-blur-sm border border-dark-300/30 rounded-lg p-6 ${glowClasses[glowColor]} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;