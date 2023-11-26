
import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';

const useMouseFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const xOffset = (clientX / window.innerWidth - 0.5) * 4;
      const yOffset = (clientY / window.innerHeight - 0.5) * 4;

      setPosition((prevPosition) => ({
        x: lerp(prevPosition.x, -xOffset * 20, 0.1), // Adjust the smoothing factor
        y: lerp(prevPosition.y, -yOffset * 20, 0.1), // Adjust the smoothing factor
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

// Linear interpolation function
const lerp = (a, b, t) => (1 - t) * a + t * b;

const MovingComponent = ({ children }) => {
  const position = useMouseFollow();

  return (
    <motion.div
     
      animate={{
        x: position.x,
        y: position.y,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MovingComponent;