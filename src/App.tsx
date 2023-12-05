import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import SolarSystem from './Models/scene/SolarSystem';
import { PointLight } from './Models/lights';

const adjustPreview = () => {
  const scale: [number, number, number] = [1, 1, 1];
  const position: [number, number, number] = [0, 0, 0];
  const rotation: [number, number, number] = [0, -Math.PI/2, 0];
  return [scale, position, rotation];
};

function App() {
  const [scale, position, rotation] = adjustPreview();
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [0, 10, 20], fov: 80 }}
    >
      <ambientLight intensity={0.5} color={'white'} />
      <PointLight />
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
      {/* <gridHelper args={[80, 80, 80]} /> */}
    </Canvas>
  )
}

export default App
