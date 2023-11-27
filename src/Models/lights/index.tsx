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
      <pointLight args={[`white`, 100]} position={[1, 0, 0]} castShadow/>
      <pointLight args={[`white`, 10]} position={[0, 0, 0]} castShadow/>
    </group>
  )
}

