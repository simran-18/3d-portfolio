import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, MeshWobbleMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: 'skills' | 'about' | 'work' | 'experience';
  className?: string;
  id?: string;
}

function FloatingIcon({ position, color, geometry }: { 
  position: [number, number, number], 
  color: string,
  geometry: 'sphere' | 'box' | 'torus'
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {geometry === 'sphere' && <sphereGeometry args={[0.3, 16, 16]} />}
        {geometry === 'box' && <boxGeometry args={[0.4, 0.4, 0.4]} />}
        {geometry === 'torus' && <torusGeometry args={[0.3, 0.1, 8, 16]} />}
        <MeshWobbleMaterial 
          color={color} 
          factor={0.3}
          speed={1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function Scene3DVariant({ variant }: { variant: string }) {
  const getSceneElements = () => {
    switch (variant) {
      case 'skills':
        return (
          <>
            <FloatingIcon position={[-2, 1, 0]} color="#00bfff" geometry="sphere" />
            <FloatingIcon position={[2, -1, 0]} color="#ff00ff" geometry="box" />
            <FloatingIcon position={[0, 2, -1]} color="#ff69b4" geometry="torus" />
            <FloatingIcon position={[-1, -2, 1]} color="#00ffff" geometry="sphere" />
            <FloatingIcon position={[1.5, 0.5, -2]} color="#9966ff" geometry="box" />
          </>
        );
      case 'about':
        return (
          <>
            <FloatingIcon position={[-1.5, 1, 0]} color="#ff69b4" geometry="torus" />
            <FloatingIcon position={[1.5, -1, 0]} color="#00bfff" geometry="sphere" />
            <FloatingIcon position={[0, 0, -1]} color="#ff00ff" geometry="box" />
          </>
        );
      case 'work':
        return (
          <>
            <FloatingIcon position={[-2, 0, 0]} color="#00ffff" geometry="box" />
            <FloatingIcon position={[2, 1, 0]} color="#9966ff" geometry="sphere" />
            <FloatingIcon position={[0, -1, -1]} color="#ff3366" geometry="torus" />
            <FloatingIcon position={[-1, 2, 1]} color="#00bfff" geometry="sphere" />
          </>
        );
      case 'experience':
        return (
          <>
            <FloatingIcon position={[-1, 1, 0]} color="#9966ff" geometry="torus" />
            <FloatingIcon position={[1, -1, 0]} color="#ff69b4" geometry="box" />
            <FloatingIcon position={[0, 1.5, -1]} color="#00bfff" geometry="sphere" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00bfff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
          
          {getSceneElements()}
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function AnimatedSection({ 
  children, 
  variant = 'about',
  className = "",
  id
}: AnimatedSectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <Scene3DVariant variant={variant} />
      
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-aurora opacity-5 aurora-wave" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-nebula opacity-3 nebula-drift" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-gradient-cosmic rounded-full opacity-20 blur-lg"
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: [0, 360] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-plasma rounded-full opacity-25 blur-md"
        animate={{ 
          scale: [1.1, 1, 1.1], 
          rotate: [360, 0] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </section>
  );
}