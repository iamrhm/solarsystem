import usePlanetAnimation from '../../hooks/usePlanetAnimation';

import planetConfig from '../../configs';

export interface ICelestialBody {
  position?: [number, number, number],
  scale?: number,
  tilt?: number,
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
  material?: THREE.Material | THREE.Material[] | undefined,
  name: keyof typeof planetConfig,
}

const Satellite = (props: ICelestialBody) => {
  const [satelliteRef] = usePlanetAnimation({
    xRadius: Array.isArray(props.position) ? props.position[0] : 0,
    zRadius: Array.isArray(props.position) ? props.position[0] : 0,
    name: props.name,
  });

  return (
    <group  {...props}  ref={satelliteRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={props.geometry}
        material={props.material}
      />
    </group>
  )
}


export default Satellite;