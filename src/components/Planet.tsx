import React from 'react'

const Planet = ({nodes, materials, name}) => {
  return (
    <group name={name} scale={5.997}>
      <mesh
        name="Object_56"
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials.material}
      />
    </group>
  )
}


export default Sun