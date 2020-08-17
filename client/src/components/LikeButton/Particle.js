import React from 'react';
import { useSpring, animated } from 'react-spring';

const Particle = ({ children, angle, distance }) => {
  const angleInRads = (angle) => (angle * Math.PI) / 180;
  const x = Math.cos(angleInRads(angle)) * distance;
  const y = Math.sin(angleInRads(angle)) * distance;

  const spring = useSpring({
    zIndex: -1,
    from: {
      transform: `translate(0px, 0px)`,
    },
    to: {
      transform: `translate(${x}px, ${y}px)`,
    },
    config: {
      mass: 2,
      tension: 150,
      friction: 8.5,
    },
  });

  return (
    <animated.div style={{ ...spring, display: 'block' }}>
      {children}
    </animated.div>
  );
};

export default Particle;
