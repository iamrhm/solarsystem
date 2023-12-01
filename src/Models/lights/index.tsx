export const SpotLight = () => {
  return(
    <>
      <spotLight intensity={1000} position={[-10, 10, 10]} angle={Math.PI / 8} color={'white'} castShadow />
      <spotLight intensity={1000} position={[10, 10, 10]} angle={Math.PI / 4} color={'white'} castShadow />
    </>
  )
}

export const PointLight = () => {
  return(
    <group>
      <pointLight args={[`white`, 10]} position={[0, 0, -3]} castShadow />
    </group>
  )
}

