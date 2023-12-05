import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import sun from './sun.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three";

interface IProps {
  name: string,
  position: [number, number, number],
  scale: number,
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
  material: THREE.Material | THREE.Material[] | undefined,
  rotation?: [number, number, number],
}

const Sun = (props: IProps) => {
  const starRef = React.useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const map = useLoader(TextureLoader, sun);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotateY(0.002);
    }
  });

  return (
    <>
      <group
        position={props.position}
        scale={props.scale}
        rotation={props.rotation || [0, 0, 0]}
        name={props.name}
        ref={starRef}
      >
        <mesh
          geometry={props.geometry}
          receiveShadow
          castShadow
        >
          <meshBasicMaterial map={map} />
        </mesh>
      </group>
    </>
  )
}


export default Sun;