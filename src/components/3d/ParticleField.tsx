import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, BufferGeometry, PointsMaterial } from 'three';
import * as THREE from 'three';

export default function ParticleField() {
  const pointsRef = useRef<Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    const colors = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000; i++) {
      // Random positions in a large sphere
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Cosmic colors (cyan, purple, pink)
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0; // R
        colors[i * 3 + 1] = 1; // G (cyan)
        colors[i * 3 + 2] = 1; // B
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.6; // R (purple)
        colors[i * 3 + 1] = 0; // G
        colors[i * 3 + 2] = 1; // B
      } else {
        colors[i * 3] = 1; // R (pink)
        colors[i * 3 + 1] = 0; // G
        colors[i * 3 + 2] = 0.6; // B
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}