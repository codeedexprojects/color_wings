import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xfcfcfc
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  );
};

export default VantaBackground;