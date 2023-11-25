import React from 'react';

const Sun = ({geometry, material, name, scale}) => {
  return (
    <group name={name} scale={scale}>
      <mesh
        name={name}
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
      />
    </group>
  )
}


export default Sun