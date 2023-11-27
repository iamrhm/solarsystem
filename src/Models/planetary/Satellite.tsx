import usePlanetAnimation from '../../hooks/usePlanetAnimation';

export interface ICelestialBody {
  position?: [number, number, number],
  scale?: number,
  tilt?: number,
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
  material?: THREE.Material | THREE.Material[] | undefined,
  name: string,
}

const Satellite = (props: ICelestialBody) => {
  const [satelliteRef] = usePlanetAnimation({
    xRadius: Array.isArray(props.position) ? props.position[0] : 0,
    zRadius: Array.isArray(props.position) ? props.position[0] || 0 : 1,
    speed: 0.08,
    spin: 0.06,
  });

  return (
    <>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={props.geometry}
          material={props.material}
          scale={props.scale}
          position={props.position}
          ref={satelliteRef}
        />
      </group>
    </>
  )
}


export default Satellite;