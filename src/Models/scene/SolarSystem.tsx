/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGLTF } from "@react-three/drei";

import Planet from "../planetary/Planet";
import SolarSysScene from '../../assets/solarSystemScene.glb?url';

interface IProps {
  position: [number, number, number],
  scale: [number, number, number],
  rotation: [number, number, number],
}

function Model(props: IProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(SolarSysScene) as any;

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
            <Planet
              key='mercury'
              name='mercury'
              planetarySystem={{ rotation: [0, 0.243, 0] }}
              planet={{
                rotation: [-Math.PI, -0.166, -Math.PI],
                position: [1.5, 0, 0],
                scale: 0.05,
                geometry: nodes.mercury_mercury1_0.geometry,
                material: materials.mercury1,
                name: 'mercury'
              }}
            />
            <Planet
              key='venus'
              name='venus'
              planetarySystem={{ rotation: [0, -0.07, 0] }}
              planet={{
                rotation: [-Math.PI, 0.247, -Math.PI],
                position: [2, 0, 0],
                scale: 0.125,
                geometry: nodes.venus_venus1_0.geometry,
                material: materials.venus1,
                name: 'venus'
              }}
            />
            <Planet
              key='earth'
              name='earth'
              planetarySystem={{ rotation: [0, -0.183, 0] }}
              planet={{
                rotation: [-Math.PI, 0.302, -Math.PI],
                position: [2.5, 0, 0],
                scale: 0.125,
                geometry: nodes.earth_earth1_0.geometry,
                material: materials.earth1,
                name: 'earth'
              }}
              satellites={[{
                position: [-1.42, 0, 0],
                scale: 0.2,
                geometry: nodes.moon_moon18_0.geometry,
                material: materials.moon18,
                name: 'moon'
              }]}
            />
            <Planet
              key='mars'
              name='mars'
              planetarySystem={{ rotation: [0, -0.379, 0] }}
              planet={{
                rotation: [-Math.PI, -0.636, -Math.PI],
                position: [3, 0, 0],
                scale: 0.1,
                geometry: nodes.mars_mars1_0.geometry,
                material: materials.mars1,
                name: 'mars'
              }}
              satellites={[
                {
                  position: [-1.591, 0, 0],
                  scale: 0.25,
                  geometry: nodes.moon6_moon18_0.geometry,
                  material: materials.moon18,
                  name: 'mars-moon-1'
                },
                {
                  position: [1.552, 0, 0],
                  scale: 0.25,
                  geometry: nodes.moon7_moon18_0.geometry,
                  material: materials.moon18,
                  name: 'mars-moon-2'
                },
              ]}
            />
            <Planet
              key='jupiter'
              name='jupiter'
              planetarySystem={{ rotation: [0, -0.675, 0] }}
              planet={{
                rotation: [-Math.PI, -0.595, -Math.PI],
                position: [3.75, 0, 0],
                scale: 0.25,
                geometry: nodes.jupiter_jupiter1_0.geometry,
                material: materials.jupiter1,
                name: 'jupiter'
              }}
              satellites={[
                {
                  position: [1.192, 0, 0],
                  scale: 0.1,
                  geometry: nodes.moon9_moon18_0.geometry,
                  material: materials.moon18,
                  name: 'jupiter-moon-1'
                },
              ]}
            />
            <Planet
              key='saturn'
              name='saturn'
              planetarySystem={{ rotation: [-Math.PI, 1.404, -Math.PI] }}
              planet={{
                rotation: [-Math.PI, 0.278, -Math.PI],
                position: [4.5, 0, 0],
                scale: 0.225,
                geometry: nodes.saturn_saturn1_0.geometry,
                material: materials.saturn1,
                name: 'saturn'
              }}
              ringModule={
                {
                  scale: [1.111, 0.222, 1.111],
                  geometry: nodes.saturn_ring_saturn1_0.geometry,
                  material: materials.saturn1,
                  name: 'saturn-ring'
                }
              }
            />
            <Planet
              key='uranus'
              name='uranus'
              planetarySystem={{ rotation: [0, -0.635, 0] }}
              planet={{
                rotation: [-Math.PI, 0.234, -Math.PI],
                position: [5.25, 0, 0],
                scale: 0.175,
                geometry: nodes.uranus_uranus1_0.geometry,
                material: materials.uranus1,
                name: 'uranus'
              }}
              satellites={[
                {
                  position: [1.24, 0, 0],
                  scale: 0.143,
                  geometry: nodes.moon13_moon18_0.geometry,
                  material: materials.moon18,
                  name: 'uranus-moon'
                },
              ]}
            />
            <Planet
              key='neptune'
              name='neptune'
              planetarySystem={{ rotation: [0, 0.084, 0] }}
              planet={{
                rotation: [-Math.PI, 0.291, -Math.PI],
                position: [5.75, 0, 0],
                scale: 0.175,
                geometry: nodes.neptune_neptune1_0.geometry,
                material: materials.neptune1,
                name: 'neptune'
              }}
            />
            <Planet
              key='pluto'
              name='pluto'
              planetarySystem={{ rotation: [-Math.PI, -0.908, -Math.PI] }}
              planet={{
                rotation: [-Math.PI, 0.274, -Math.PI],
                position: [6.25, 0, 0],
                scale: 0.038,
                geometry: nodes.pluto_pluto1_0.geometry,
                material: materials.pluto1,
                name: 'pluto'
              }}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default Model;
