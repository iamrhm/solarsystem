import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import SolarSysScene from '../assets/solarSystemScene.glb?url';

import {
  stars, planets, satellites,
  WithTexture, IPlanet, ISatellite, ICelestialBody,
} from '../configs';

type GLTFResult = GLTF & {
  nodes: {
    node_id36_Material_58_0: THREE.Mesh;
    node_id42_Material_66_0: THREE.Mesh;
    node_id30_Material_51_0: THREE.Mesh;
    node_id61_Material_89_0: THREE.Mesh;
    node_id67_Material_96_0: THREE.Mesh;
    node_id49_Material_73_0: THREE.Mesh;
    node_id55_Material_81_0: THREE.Mesh;
    node_id73_Material_104_0: THREE.Mesh;
    node_id75_Material_105_0: THREE.Mesh;
    node_id82_Material_116_0: THREE.Mesh;
    node_id84_Material_117_0: THREE.Mesh;
    node_id91_Material_126_0: THREE.Mesh;
  };
  materials: {
    Material_58: THREE.MeshStandardMaterial;
    Material_66: THREE.MeshStandardMaterial;
    Material_51: THREE.MeshStandardMaterial;
    Material_89: THREE.MeshStandardMaterial;
    Material_96: THREE.MeshStandardMaterial;
    Material_73: THREE.MeshStandardMaterial;
    Material_81: THREE.MeshStandardMaterial;
    Material_104: THREE.MeshStandardMaterial;
    Material_105: THREE.MeshStandardMaterial;
    Material_116: THREE.MeshStandardMaterial;
    Material_117: THREE.MeshStandardMaterial;
    Material_126: THREE.MeshStandardMaterial;
  };
};

const useLoadSolarSystem = ()  => {
  const { nodes, materials } = useGLTF(SolarSysScene) as GLTFResult;

  const allPlanets = Object.keys(planets)?.map((pname) => {
    const planetName = pname as keyof typeof planets;
    switch(planetName) {
      case 'mercury':
        return {
          ...planets['mercury'],
          geometry: nodes.node_id36_Material_58_0.geometry,
          material: materials.Material_58,
        } as WithTexture<IPlanet<'mercury'>>;
      case 'venus':
        return {
          ...planets['venus'],
          geometry: nodes.node_id42_Material_66_0.geometry,
          material: materials.Material_66,
        } as WithTexture<IPlanet<'venus'>>;
      case 'earth':
        return {
          ...planets['earth'],
          geometry: nodes.node_id49_Material_73_0.geometry,
          material: materials.Material_73,
        } as WithTexture<IPlanet<'earth'>>;
      case 'mars':
        return {
          ...planets['mars'],
          geometry: nodes.node_id49_Material_73_0.geometry,
          material: materials.Material_89,
        } as WithTexture<IPlanet<'mars'>>;
      case 'jupiter':
        return {
          ...planets['jupiter'],
          geometry: nodes.node_id67_Material_96_0.geometry,
          material: materials.Material_96,
        } as WithTexture<IPlanet<'jupiter'>>;
      case 'saturn':
        return {
          ...planets['saturn'],
          geometry: nodes.node_id73_Material_104_0.geometry,
          material: materials.Material_104,
          ringModule: {
            ...planets['saturn'].ringModule,
            geometry: nodes.node_id75_Material_105_0.geometry,
            material: materials.Material_105
          }  as WithTexture<{
            position: [number, number, number],
            scale: [number, number, number]
          }>
        } as WithTexture<IPlanet<'saturn'>>;
      case 'uranus':
        return {
          ...planets['uranus'],
          geometry: nodes.node_id82_Material_116_0.geometry,
          material: materials.Material_116,
        } as WithTexture<IPlanet<'uranus'>>;
      case 'neptune':
        return {
          ...planets['neptune'],
          geometry: nodes.node_id91_Material_126_0.geometry,
          material: materials.Material_126,
        } as WithTexture<IPlanet<'neptune'>>;
      case 'pluto':
        return {
          ...planets['pluto'],
          geometry: nodes.node_id36_Material_58_0.geometry,
          material: materials.Material_58,
        } as WithTexture<IPlanet<'pluto'>>;
    }
  });

  const allSatellites = Object.keys(satellites)?.map((sname) => {
    const satelliteName = sname as keyof typeof satellites;
    switch(satelliteName) {
      case 'moon':
        return {
          ...satellites['moon'],
          geometry: nodes.node_id55_Material_81_0.geometry,
          material: materials.Material_81,
        } as WithTexture<ISatellite<'moon'>>;
      case 'phobos':
        return {
          ...satellites['phobos'],
            geometry: nodes.node_id61_Material_89_0.geometry,
            material: materials.Material_81,
        } as WithTexture<ISatellite<'phobos'>>;
      case 'deimos':
        return {
          ...satellites['deimos'],
            geometry: nodes.node_id55_Material_81_0.geometry,
            material: materials.Material_81,
        } as WithTexture<ISatellite<'deimos'>>;
      case 'europa':
        return {
          ...satellites['europa'],
            geometry: nodes.node_id61_Material_89_0.geometry,
            material: materials.Material_81,
        } as WithTexture<ISatellite<'europa'>>;
      case 'titania':
        return {
          ...satellites['titania'],
            geometry: nodes.node_id61_Material_89_0.geometry,
            material: materials.Material_81,
        } as WithTexture<ISatellite<'titania'>>;
    }
  });

  const sun = {
    ...stars['sun'],
    geometry: nodes.node_id30_Material_51_0.geometry,
    material: materials.Material_51,
  } as WithTexture<ICelestialBody<'sun'>>

  return { allPlanets, allSatellites, sun };
}

export default useLoadSolarSystem;