import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import Planet from "../planetary/Planet";
import SolarSysScene from '../../assets/solarSystemScene.glb?url';

interface IProps {
  position: [number, number, number],
  scale: [number, number, number],
  rotation: [number, number, number],
}

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

function SolarSystemScene(props: IProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(SolarSysScene) as GLTFResult;

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="solarSystem" scale={6}>
        <mesh
          name="sun"
          castShadow
          receiveShadow
          geometry={nodes.node_id30_Material_51_0.geometry}
          material={materials.Material_51}
          position={[0, 0, 0]}
          scale={0.02}
        />
        <Planet
          key='mercury'
          name='mercury'
          planetarySystem={{ rotation: [0, 0, 0], position: [0.35, 0, 0], scale: 0.0015 }}
          planet={{
            geometry: nodes.node_id36_Material_58_0.geometry,
            material: materials.Material_58,
            name: 'mercury'
          }}
        />
        <Planet
          key='venus'
          name='venus'
          planetarySystem={{ rotation: [0, 0, 0], position: [0.45, 0, 0], scale: 0.002 }}
          planet={{
            geometry: nodes.node_id42_Material_66_0.geometry,
            material: materials.Material_66,
            name: 'venus'
          }}
        />
        <Planet
          key='earth'
          name='earth'
          planetarySystem={{ rotation: [0, 0, 0], position: [0.6, 0, 0], scale: 0.0025 }}
          planet={{
            geometry: nodes.node_id49_Material_73_0.geometry,
            material: materials.Material_73,
            name: 'earth'
          }}
          satellites={[{
            position: [20, 3, 0],
            scale: 0.3,
            geometry: nodes.node_id55_Material_81_0.geometry,
            material: materials.Material_81,
            name: 'moon'
          }]}
        />
        <Planet
          key='mars'
          name='mars'
          planetarySystem={{ rotation: [0, 0, 0], position: [0.75, 0, 0], scale: 0.0019 }}
          planet={{
            geometry: nodes.node_id49_Material_73_0.geometry,
            material: materials.Material_89,
            name: 'mars'
          }}
          satellites={[
            {
              position: [20, 3, 0],
              scale: 0.2,
              geometry: nodes.node_id61_Material_89_0.geometry,
              material: materials.Material_81,
              name: 'phobos'
            },
            {
              position: [22, 0, 0],
              scale: 0.1,
              geometry: nodes.node_id55_Material_81_0.geometry,
              material: materials.Material_81,
              name: 'deimos'
            },
          ]}
        />
        <Planet
          key='jupiter'
          name='jupiter'
          planetarySystem={{ rotation: [0, 0, 0], position: [0.95, 0, 0], scale: 0.005 }}
          planet={{
            geometry: nodes.node_id67_Material_96_0.geometry,
            material: materials.Material_96,
            name: 'jupiter'
          }}
          satellites={[
            {
              position: [18, 0, 0],
              scale: 0.2,
              geometry: nodes.node_id61_Material_89_0.geometry,
              material: materials.Material_81,
              name: 'europa'
            },
          ]}
        />
        <Planet
          key='saturn'
          name='saturn'
          planetarySystem={{ rotation: [0, 0, 0], position: [1.23, 0, 0], scale: 0.00035 }}
          planet={{
            geometry: nodes.node_id73_Material_104_0.geometry,
            material: materials.Material_104,
            position: [0, 0, 0],
            scale: 9.559,
            name: 'saturn'
          }}
          ringModule={{
            geometry: nodes.node_id75_Material_105_0.geometry,
            material: materials.Material_105,
            position: [625.269, 0, 0],
            scale: [98.217, 98.217, 392.868],
          }}
        />
        <Planet
          key='uranus'
          name='uranus'
          planetarySystem={{ rotation: [0, 0, 0], position: [1.45, 0, 0], scale: 0.00021 }}
          planet={{
            geometry: nodes.node_id82_Material_116_0.geometry,
            material: materials.Material_116,
            position: [0, 0, 0],
            scale: 12.53,
            name: 'uranus'
          }}
          satellites={[
            {
              position: [20, 0, 0],
              scale: 0.2,
              geometry: nodes.node_id61_Material_89_0.geometry,
              material: materials.Material_81,
              name: 'titania'
            },
          ]}
        />
        <Planet
          key='neptune'
          name='neptune'
          planetarySystem={{ rotation: [0, 0, 0], position: [1.6, 0, 0], scale: 0.0018 }}
          planet={{
            geometry: nodes.node_id91_Material_126_0.geometry,
            material: materials.Material_126,
            name: 'neptune'
          }}
        />
        <Planet
          key='pluto'
          name='pluto'
          planetarySystem={{ rotation: [0, 0, 0], position: [1.7, 0, 0], scale: 0.0008 }}
          planet={{
            geometry: nodes.node_id36_Material_58_0.geometry,
            material: materials.Material_58,
            name: 'pluto'
          }}
        />
      </group>
    </group>
  );
}

export default SolarSystemScene;
