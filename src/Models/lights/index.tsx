import React from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

export const SpotLight = () => {
  return(
    <group>
      <spotLight intensity={10} position={[-10, 0, 0]} castShadow angle={Math.PI / 6} penumbra={1} />
    </group>
  )
}

export const PointLight = () => {
  return(
    <group>
      <pointLight args={[`white`, 10]} position={[1, 0, 0]} castShadow/>
      <pointLight args={[`white`, 10]} position={[0, 0, 0]} castShadow/>
    </group>
  )
}

export const DirectionalLight = () => {
  const light = React.useRef(null);
  useHelper(light, DirectionalLightHelper, 'white')
  return(
    <directionalLight ref={light} intensity={1} position={[-1, 0, 0]} />
  )
}
