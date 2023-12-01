import usePlanetAnimation from '../../hooks/usePlanetAnimation';
import Satellite, { ICelestialBody } from './Satellite';
import planetConfig from '../../configs';

interface IProps {
  name:  keyof typeof planetConfig,
  planetarySystem: {
    rotation: [number, number, number],
    position: [number, number, number],
    scale: number,
  }
  planet: ICelestialBody & { rotation?: [number, number, number] };
  satellites?: Array<ICelestialBody & { name:  keyof typeof planetConfig }>,
  ringModule?: {
    position: [number, number, number],
    scale: [number, number, number],
    geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    material: THREE.Material | THREE.Material[] | undefined,
    rotation?: [number, number, number],
  }
}

const Planet = (props: IProps) => {
  const {
    name, planetarySystem,
    planet, satellites, ringModule,
  } = props;
  /* const { tilt } = planetConfig[name]; */

  const [systemRef, childRef] = usePlanetAnimation({
    xRadius: Array.isArray(planetarySystem.position) ? planetarySystem?.position[0] : 0,
    zRadius: Array.isArray(planetarySystem.position) ? planetarySystem?.position[1] || planetarySystem?.position[0] : 0,
    name: name,
  });

  return (
    <>
      <group {...planetarySystem} name={name} ref={systemRef}>
        <group
          position={planet.position}
          scale={planet.scale}
          ref={childRef}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={planet.geometry}
            material={planet.material}
          />
        </group>
        {
          satellites?.map((satellite, index) => (
            <group key={index}>
              <Satellite {...satellite} />
            </group>
          ))
        }
        {
          ringModule ? (
            <group ref={childRef}>
              <mesh
                castShadow
                receiveShadow
                {...ringModule}
              />
            </group>
          ) : null
        }
      </group>
    </>
  )
}


export default Planet;