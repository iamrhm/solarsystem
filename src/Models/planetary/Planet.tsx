import usePlanetAnimation from '../../hooks/usePlanetAnimation';
import Satellite from './Satellite';

import {
  IPlanet, SolarPlanets, WithTexture,
  ISatellite, SolarSystemSatellites
} from '../../configs';

interface IProps {
  name:  SolarPlanets;
  planetarySystem: {
    rotation: [number, number, number],
    position: [number, number, number],
    scale: number,
  };
  planet: WithTexture<IPlanet<SolarPlanets>>;
  satellites?: Array<WithTexture<ISatellite<SolarSystemSatellites>>>;
  ringModule?: {
    position: [number, number, number],
    scale: [number, number, number],
    geometry?: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    material?: THREE.Material | THREE.Material[] | undefined,
  };
}

const Planet = (props: IProps) => {
  const {
    name, planetarySystem,
    planet, satellites, ringModule,
  } = props;


  const [systemRef, childRef] = usePlanetAnimation({
    xRadius: planetarySystem.position[0],
    yRadius: planetarySystem.position[0] ,
    planet: planet,
  });

  return (
    <>
      <group position={planetarySystem.position} scale={planetarySystem.scale} name={name} ref={systemRef}>
        <group
          scale={planet.scale}
          rotation={planet.rotation}
          ref={childRef}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={planet.geometry}
            material={planet.material}
          />
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
        {
          satellites?.map((satellite, index) => (
            <group key={index}>
              <Satellite {...satellite} />
            </group>
          ))
        }
      </group>
    </>
  )
}


export default Planet;