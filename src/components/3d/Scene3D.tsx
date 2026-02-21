import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingGeometry from './FloatingGeometry';
import ParticleField from './ParticleField';

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00bfff" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#ff00ff" />
          <pointLight position={[0, -10, 10]} intensity={0.8} color="#ff69b4" />
          <spotLight position={[15, 15, 15]} intensity={1.2} color="#00ffff" angle={Math.PI / 6} />
          <spotLight position={[-15, -15, 10]} intensity={1} color="#9966ff" angle={Math.PI / 8} />
          
          {/* Enhanced 3D Objects */}
          <FloatingGeometry 
            position={[-5, 2, -2]} 
            geometry="box" 
            color="#00bfff" 
            speed={1.2}
          />
          <FloatingGeometry 
            position={[5, -1, -3]} 
            geometry="sphere" 
            color="#ff00ff" 
            speed={1.8}
          />
          <FloatingGeometry 
            position={[0, 4, -4]} 
            geometry="torus" 
            color="#ff69b4" 
            speed={0.9}
          />
          <FloatingGeometry 
            position={[-2, -3, -1]} 
            geometry="octahedron" 
            color="#00ffff" 
            speed={1.5}
          />
          <FloatingGeometry 
            position={[3, 2, -5]} 
            geometry="dodecahedron" 
            color="#9966ff" 
            speed={0.7}
          />
          <FloatingGeometry 
            position={[-4, 0, -6]} 
            geometry="icosahedron" 
            color="#ff3366" 
            speed={2.0}
          />
          
          {/* Particle Field */}
          <ParticleField />
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          {/* Environment */}
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}