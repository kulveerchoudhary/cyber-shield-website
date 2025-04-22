import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    const handleLinkHover = () => setCursorVariant('hover');
    const handleLinkLeave = () => setCursorVariant('default');

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div>
      <motion.div
        className="cursor-arrow fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="relative">
          {/* Main arrow */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cursorVariant === 'hover' ? 'text-cyan-400' : 'text-gray-400'}
            style={{
              filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))',
            }}
          >
            <path
              d="M3.5 3.5L20.5 20.5M3.5 3.5L10 20.5M3.5 3.5L20.5 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          
          {/* 3D effect shadow */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0.5 left-0.5 opacity-30"
            style={{
              transform: 'translateZ(-1px)',
            }}
          >
            <path
              d="M3.5 3.5L20.5 20.5M3.5 3.5L10 20.5M3.5 3.5L20.5 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
      <style>
        {`
          body {
            cursor: none;
          }
          @media (pointer: coarse) {
            body {
              cursor: auto;
            }
          }
          .cursor-arrow {
            transform-style: preserve-3d;
            perspective: 1000px;
          }
        `}
      </style>
    </div>
  );
};

export default CursorEffect;