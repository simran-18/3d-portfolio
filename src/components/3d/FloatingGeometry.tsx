import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'torus' | 'octahedron' | 'dodecahedron' | 'icosahedron';
  color: string;
  speed?: number;
}

export default function FloatingGeometry({ 
  position, 
  geometry, 
  color, 
  speed = 1 
}: FloatingGeometryProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced 3D animations
      meshRef.current.rotation.x += 0.015 * speed;
      meshRef.current.rotation.y += 0.02 * speed;
      meshRef.current.rotation.z += 0.01 * speed;
      
      // Complex floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.8;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.4;
      
      // Pulsing scale effect
      const pulseFactor = 1 + Math.sin(state.clock.elapsedTime * speed * 2) * 0.1;
      meshRef.current.scale.setScalar(pulseFactor);
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.7, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.8, 0.3, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.8]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.6]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[0.7]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.9}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}