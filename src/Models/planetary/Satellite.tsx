import useSatelliteAnimation from '../../hooks/useSatelliteAnimation';

import { SolarSystemSatellites, ISatellite, WithTexture } from '../../configs';

const Satellite = (props: WithTexture<ISatellite<SolarSystemSatellites>>) => {
  const [satelliteRef] = useSatelliteAnimation({
    xRadius: props.position[0],
    yRadius: props.position[0],
    satellite: props,
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