import React from 'react';
import { Canvas } from '@react-three/fiber';

import SolarSystem from './components/SolarSystem';

const adjustPreview = () => {
  const scale = [1, 1, 1];
  const position = [0, 0, 0];
  const rotation = [-1,-1,0.5];
  return [scale, position, rotation];
};

function App() {
  const [scale, position, rotation] = adjustPreview();
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10,10, 10]} />
        <SolarSystem
          position={position}

        />
      </Canvas>
    </>
  )
}

export default App
