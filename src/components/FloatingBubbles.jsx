import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = ['Strategy', 'Branding', 'Development', 'Marketing', 'Content', 'Support'];

const getRandom = (min, max) => Math.random() * (max - min) + min;

const FloatingBubbles = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden w-screen h-screen">
      {services.map((service, index) => {
        // Distribute bubbles across the entire viewport
        const positions = [
          { x: getRandom(50, dimensions.width * 0.25), y: getRandom(50, dimensions.height * 0.5) },      // Top left
          { x: getRandom(dimensions.width * 0.25, dimensions.width * 0.5), y: getRandom(50, dimensions.height * 0.3) }, // Top center
          { x: getRandom(dimensions.width * 0.5, dimensions.width * 0.75), y: getRandom(dimensions.height * 0.2, dimensions.height * 0.6) }, // Top right
          { x: getRandom(dimensions.width * 0.75, dimensions.width - 150), y: getRandom(50, dimensions.height * 0.4) }, // Far right
          { x: getRandom(50, dimensions.width * 0.3), y: getRandom(dimensions.height * 0.5, dimensions.height - 150) }, // Bottom left
          { x: getRandom(dimensions.width * 0.6, dimensions.width - 150), y: getRandom(dimensions.height * 0.6, dimensions.height - 150) } // Bottom right
        ];

        const startPos = positions[index % positions.length];

        // Create movement waypoints across the entire viewport
        const waypoints = [
          startPos,
          { x: getRandom(100, dimensions.width - 200), y: getRandom(100, dimensions.height - 200) },
          { x: getRandom(50, dimensions.width - 150), y: getRandom(50, dimensions.height - 150) },
          { x: getRandom(100, dimensions.width - 200), y: getRandom(100, dimensions.height - 200) },
          startPos
        ];

        const duration = getRandom(15, 25);
        const delay = index * 1.5;

        return (
          <motion.div
            key={index}
            initial={{
              x: waypoints[0].x,
              y: waypoints[0].y,
              opacity: 0,
              scale: 0.7
            }}
            animate={{
              x: waypoints.map(point => point.x),
              y: waypoints.map(point => point.y),
              opacity: [0, 0.6, 0.5, 0.6, 0.4, 0.6, 0.5, 0.4],
              scale: [0.7, 1, 0.9, 1.1, 0.95, 1.05, 0.9, 0.8],
              rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
            className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-sm font-bold text-white shadow-2xl"
            style={{
              background: `
                radial-gradient(circle at 30% 30%,
                  rgba(139, 92, 246, 0.6),
                  rgba(79, 70, 229, 0.5),
                  rgba(244, 63, 94, 0.4)
                )
              `,
              boxShadow: `
                0 0 100px rgba(139, 92, 246, 0.5),
                0 0 50px rgba(79, 70, 229, 0.4),
                inset 0 0 50px rgba(255, 255, 255, 0.2)
              `,
              filter: 'drop-shadow(0 12px 25px rgba(0, 0, 0, 0.4))'
            }}
          >
            <span className="text-center leading-tight tracking-wide font-bold z-10 drop-shadow-lg text-shadow-lg">
              {service}
            </span>
          </motion.div>
        );
      })}

      {/* Smaller particles distributed in a grid across viewport */}
      {Array.from({ length: 15 }).map((_, index) => {
        // Create a 5x3 grid distribution
        const gridCols = 5;
        const gridRows = 3;
        const colWidth = dimensions.width / gridCols;
        const rowHeight = dimensions.height / gridRows;

        const col = index % gridCols;
        const row = Math.floor(index / gridCols);

        const gridX = col * colWidth + getRandom(colWidth * 0.1, colWidth * 0.9);
        const gridY = row * rowHeight + getRandom(rowHeight * 0.1, rowHeight * 0.9);

        const particleWaypoints = [
          { x: gridX, y: gridY },
          { x: getRandom(50, dimensions.width - 50), y: getRandom(50, dimensions.height - 50) },
          { x: getRandom(50, dimensions.width - 50), y: getRandom(50, dimensions.height - 50) }
        ];

        const duration = getRandom(20, 35);
        const delay = getRandom(0, 15);
        const size = getRandom(16, 32);

        return (
          <motion.div
            key={`particle-${index}`}
            initial={{
              x: particleWaypoints[0].x,
              y: particleWaypoints[0].y,
              opacity: 0
            }}
            animate={{
              x: particleWaypoints.map(point => point.x),
              y: particleWaypoints.map(point => point.y),
              opacity: [0, 0.4, 0.25, 0.4, 0.2, 0.35, 0],
              scale: [0.5, 1.4, 1, 1.7, 1.1, 1.3, 0.8]
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
            className="absolute rounded-full border border-white/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `
                radial-gradient(circle,
                  rgba(99, 102, 241, 0.5),
                  rgba(168, 85, 247, 0.4),
                  transparent 70%
                )
              `,
              boxShadow: `0 0 40px rgba(99, 102, 241, 0.4)`,
              filter: 'blur(0.5px)'
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingBubbles;
