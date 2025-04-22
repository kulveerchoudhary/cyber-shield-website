import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  Bug, 
  Network, 
  Server, 
  Database, 
  Fingerprint,
  Cpu,
  Wifi,
  Binary
} from 'lucide-react';

const BackgroundElements = () => {
  const controls = useAnimationControls();

  const elements = [
    { icon: Terminal, color: 'text-green-400', size: 36, initialX: 300, initialY: -150 },
    { icon: Code2, color: 'text-purple-400', size: 32, initialX: -200, initialY: 100 },
    { icon: Bug, color: 'text-red-400', size: 38, initialX: 250, initialY: 150 },
    { icon: Network, color: 'text-cyan-400', size: 42, initialX: 0, initialY: -250 },
    { icon: Server, color: 'text-yellow-400', size: 34, initialX: -350, initialY: 200 },
    { icon: Database, color: 'text-pink-400', size: 36, initialX: 200, initialY: -200 },
    { icon: Fingerprint, color: 'text-orange-400', size: 38, initialX: -250, initialY: -150 },
    { icon: Cpu, color: 'text-indigo-400', size: 40, initialX: 150, initialY: 100 },
    { icon: Wifi, color: 'text-teal-400', size: 34, initialX: -150, initialY: 250 },
    { icon: Binary, color: 'text-blue-400', size: 36, initialX: 300, initialY: 200 }
  ];

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      {/* Background cyber grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(10, 132, 255, 0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(0, 232, 143, 0.15) 2px, transparent 0)',
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      {/* Moving Elements */}
      {elements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={`bg-element-${index}`}
            className="absolute"
            initial={{ x: element.initialX, y: element.initialY }}
            animate={controls}
            variants={{
              animate: {
                x: [element.initialX, element.initialX + 150, element.initialX - 100, element.initialX],
                y: [element.initialY, element.initialY - 100, element.initialY + 150, element.initialY],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.1, 0.9, 1],
                transition: {
                  duration: 25 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop"
                }
              }
            }}
          >
            <Icon size={element.size} className={`${element.color} drop-shadow-lg`} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default React.memo(BackgroundElements); 