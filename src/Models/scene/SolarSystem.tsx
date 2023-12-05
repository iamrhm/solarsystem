import React from 'react';

import Planet from '../planetary/Planet';
import Star from '../stars/Sun';
import useLoadSolarSystem from '../../hooks/useLoadSolarSystem';

import {
  IPlanet, SolarPlanets, WithTexture,
  ISatellite, SolarSystemSatellites
} from '../../configs';

interface IProps {
  position: [number, number, number],
  scale: [number, number, number],
  rotation: [number, number, number],
}

const renderPlanets = (
  planet: WithTexture<IPlanet<SolarPlanets>>,
  allSatellites: Array<WithTexture<ISatellite<SolarSystemSatellites>>>
) => {
  return (
    <Planet
      key={planet.name}
      name={planet.name}
      planetarySystem={{
        rotation: planet.rotation,
        position: planet.position,
        scale: planet.scale
      }}
      planet={{...planet}}
      satellites={[
        ...allSatellites.filter((satellite) => planet?.satellites?.includes(satellite.name)) || []
      ]}
      ringModule={planet.ringModule}
    />
  )
}

function SolarSystemScene(props: IProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  const { allPlanets, allSatellites, sun } = useLoadSolarSystem() as ReturnType<typeof useLoadSolarSystem>;

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name='solarSystem' scale={6}>
        <Star {...sun} />
        {
          allPlanets.map((planet) => (
            <React.Fragment key={planet.name}>
              {renderPlanets(planet, allSatellites)}
            </React.Fragment>
          ))
        }
      </group>
    </group>
  );
}

export default SolarSystemScene;
