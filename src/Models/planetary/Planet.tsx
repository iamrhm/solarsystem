import usePlanetAnimation from '../../hooks/usePlanetAnimation';
import Satellite, { ICelestialBody } from './Satellite';

interface IProps {
  name: string,
  planetarySystem: {
    rotation?: [number, number, number],
    position?: [number, number, number],
  }
  planet: ICelestialBody & { rotation: [number, number, number] };
  satellites?: Array<ICelestialBody & { name: string }>,
  ringModule?: {
    scale: [number, number, number],
    geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    material?: THREE.Material | THREE.Material[] | undefined,
    name: string
  }
}

const Planet = (props: IProps) => {
  const {
    name, planetarySystem,
    planet, satellites, ringModule,
  } = props;

  const [planetRef] = usePlanetAnimation({
    xRadius: Array.isArray(planet.position) ? planet?.position[0] : 0,
    zRadius: Array.isArray(planet.position) ? planet?.position[0] + 1.5 : 1,
    speed: 0.05, spin: 0.05
  });

  return (
    <>
      <group rotation={planetarySystem.rotation} name={name}>
        <group
          position={planet.position}
          rotation={planet.rotation}
          scale={planet.scale}
          ref={planetRef}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={planet.geometry}
            material={planet.material}
          />
          {
            ringModule ? (
              <mesh
                castShadow
                receiveShadow
                geometry={ringModule.geometry}
                material={ringModule.material}
                scale={ringModule.scale}
              />
            ) : null
          }
          {
            satellites?.map((satellite, index) => (
              <group key={index}>
                <Satellite {...satellite} />
              </group>
            ))
          }
        </group>
      </group>
    </>
  )
}


export default Planet;