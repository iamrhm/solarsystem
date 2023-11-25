import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import Earth from "../planetary/Earth";

import SolarSysScene from '../../assets/solarSystemScene.glb';

function Model(props) {
  const groupRef = useRef();
  const { nodes, materials, animations } = useGLTF(SolarSysScene);
  const { actions, names } = useAnimations(animations);

  React.useEffect(() => {
    console.log(actions, names, animations, nodes);
    actions[names[0]]?.play();
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.074}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={4}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sun_sun1_0.geometry}
              material={materials.sun1}
            />
            <group rotation={[0, 0.243, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.mercury_mercury1_0.geometry}
                material={materials.mercury1}
                position={[1.5, 0, 0]}
                rotation={[-Math.PI, -0.166, -Math.PI]}
                scale={0.05}
              />
            </group>
            <group rotation={[0, -0.07, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.venus_venus1_0.geometry}
                material={materials.venus1}
                position={[2, 0, 0]}
                rotation={[-Math.PI, 0.247, -Math.PI]}
                scale={0.125}
              />
            </group>
            <Earth nodes={nodes} materials={materials} />
            {/*
              <group rotation={[0, -0.183, 0]}>
                <group
                  position={[2.5, 0, 0]}
                  rotation={[-Math.PI, 0.302, -Math.PI]}
                  scale={0.125}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.earth_earth1_0.geometry}
                    material={materials.earth1}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.moon_moon18_0.geometry}
                    material={materials.moon18}
                    position={[-1.42, 0, 0]}
                    scale={0.2}
                  />
                </group>
              </group>
            */}
            <group rotation={[0, -0.379, 0]}>
              <group
                position={[3, 0, 0]}
                rotation={[-Math.PI, -0.636, -Math.PI]}
                scale={0.1}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mars_mars1_0.geometry}
                  material={materials.mars1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.moon6_moon18_0.geometry}
                  material={materials.moon18}
                  position={[-1.591, 0, 0]}
                  scale={0.25}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.moon7_moon18_0.geometry}
                  material={materials.moon18}
                  position={[1.552, 0, 0]}
                  scale={0.25}
                />
              </group>
            </group>
            <group rotation={[0, -0.675, 0]}>
              <group
                position={[3.75, 0, 0]}
                rotation={[-Math.PI, -0.595, -Math.PI]}
                scale={0.25}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.jupiter_jupiter1_0.geometry}
                  material={materials.jupiter1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.moon9_moon18_0.geometry}
                  material={materials.moon18}
                  position={[1.192, 0, 0]}
                  scale={0.1}
                />
              </group>
            </group>
            <group rotation={[-Math.PI, 1.404, -Math.PI]}>
              <group
                position={[4.5, 0, 0]}
                rotation={[-Math.PI, 0.278, -Math.PI]}
                scale={0.225}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.saturn_saturn1_0.geometry}
                  material={materials.saturn1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.saturn_ring_saturn1_0.geometry}
                  material={materials.saturn1}
                  scale={[1.111, 0.222, 1.111]}
                />
              </group>
            </group>
            <group rotation={[0, -0.635, 0]}>
              <group
                position={[5.25, 0, 0]}
                rotation={[-Math.PI, 0.234, -Math.PI]}
                scale={0.175}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.uranus_uranus1_0.geometry}
                  material={materials.uranus1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.moon13_moon18_0.geometry}
                  material={materials.moon18}
                  position={[1.24, 0, 0]}
                  scale={0.143}
                />
              </group>
            </group>
            <group rotation={[0, 0.084, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.neptune_neptune1_0.geometry}
                material={materials.neptune1}
                position={[5.75, 0, 0]}
                rotation={[-Math.PI, 0.291, -Math.PI]}
                scale={0.175}
              />
            </group>
            <group rotation={[-Math.PI, -0.908, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pluto_pluto1_0.geometry}
                material={materials.pluto1}
                position={[6.25, 0, 0]}
                rotation={[-Math.PI, 0.274, -Math.PI]}
                scale={0.038}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Model;
