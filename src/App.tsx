import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import SolarSystem from './Models/scene/SolarSystem';
import { PointLight, SpotLight } from './Models/lights';

const adjustPreview = () => {
  const scale = [4, 4, 4];
  const position = [0, 0, 0];
  const rotation = [0 , 0, 0];
  return [scale, position, rotation];
};

function App() {
  const [scale, position, rotation] = adjustPreview();
  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows camera={{ position: [0, 0, 20], fov: 50, far: 3000 }}>
        <ambientLight intensity={1.5}/>
        <PointLight />
        <SpotLight />

        <SolarSystem
          position={position}
          scale={scale}
          rotation={rotation}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minZoom={10}
        />
      </Canvas>
    </>
  )
}

export default App
