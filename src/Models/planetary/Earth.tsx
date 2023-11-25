import React from 'react';

import usePlanetAnimation from '../../hooks/usePlanetAnimation';
import useSatelliteAnimation from '../../hooks/useSatelliteAnimation';

const Earth = ({ nodes, materials }) => {
  const [ref, lineGeometry] = usePlanetAnimation({
    xRadius: 2.5, zRadius: 3.5, speed: 0.05, spin: 0.05
  });

  const [sRef, sLineGeometry] = useSatelliteAnimation({
    xRadius: 1.42,
    zRadius: 1.42,
    speed: 0.08,
    spin: 0.06,
  });

  return (
    <>
      <group rotation={[0, -0.183, 0]}>
        <group
          position={[2.5, 0, 0]}
          rotation={[-Math.PI, 0.302, -Math.PI]}
          scale={0.125}
          ref={ref}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.earth_earth1_0.geometry}
            material={materials.earth1}
          />
          <group >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.moon_moon18_0.geometry}
              material={materials.moon18}
              scale={0.2}
              position={[-1.42, 0, 0]}
              ref={sRef}
            />
          </group>
          <line geometry={sLineGeometry}>
            <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
          </line>
        </group>
        <line geometry={lineGeometry}>
          <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
        </line>
      </group>
    </>
  )
}


export default Earth;