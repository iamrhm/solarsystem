import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import SolarSysScene from '../assets/solar_system_animation.glb';

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(SolarSysScene);
  const { actions } = useAnimations(animations, group);

  return (
<group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="solar_systemglb">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.074}
          >
            <group
              name="38ff7a53c55e4d9881cb731fb8374077fbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="sun" scale={4}>
                    <mesh
                      name="sun_sun1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.sun_sun1_0.geometry}
                      material={materials.sun1}
                    />
                    <group name="mercury" rotation={[0, -0.669, 0]}>
                      <group
                        name="mercury_1"
                        position={[1.5, 0, 0]}
                        rotation={[-Math.PI, 1.198, -Math.PI]}
                        scale={0.05}
                      >
                        <mesh
                          name="mercury_mercury1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.mercury_mercury1_0.geometry}
                          material={materials.mercury1}
                        />
                      </group>
                    </group>
                    <group name="venus" rotation={[-Math.PI, -0.148, -Math.PI]}>
                      <group
                        name="venus_1"
                        position={[2, 0, 0]}
                        rotation={[-Math.PI, -0.441, Math.PI]}
                        scale={0.125}
                      >
                        <mesh
                          name="venus_venus1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.venus_venus1_0.geometry}
                          material={materials.venus1}
                        />
                      </group>
                    </group>
                    <group name="earth" rotation={[0, 0.442, 0]}>
                      <group
                        name="earth_1"
                        position={[2.5, 0, 0]}
                        rotation={[-Math.PI, -0.425, -Math.PI]}
                        scale={0.125}
                      >
                        <mesh
                          name="earth_earth1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.earth_earth1_0.geometry}
                          material={materials.earth1}
                        />
                        <group name="moon" position={[-1.42, 0, 0]} scale={0.2}>
                          <mesh
                            name="moon_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="mars" rotation={[0, -1.459, 0]}>
                      <group
                        name="mars_1"
                        position={[3, 0, 0]}
                        rotation={[-Math.PI, -0.688, -Math.PI]}
                        scale={0.1}
                      >
                        <mesh
                          name="mars_mars1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.mars_mars1_0.geometry}
                          material={materials.mars1}
                        />
                        <group
                          name="moon6"
                          position={[-1.591, 0, 0]}
                          scale={0.25}
                        >
                          <mesh
                            name="moon6_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon6_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                        <group
                          name="moon7"
                          position={[1.552, 0, 0]}
                          scale={0.25}
                        >
                          <mesh
                            name="moon7_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon7_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="jupiter" rotation={[-Math.PI, 0.46, -Math.PI]}>
                      <group
                        name="jupiter_1"
                        position={[3.75, 0, 0]}
                        rotation={[-Math.PI, -0.676, Math.PI]}
                        scale={0.25}
                      >
                        <mesh
                          name="jupiter_jupiter1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.jupiter_jupiter1_0.geometry}
                          material={materials.jupiter1}
                        />
                        <group
                          name="moon8"
                          position={[-1.242, 0, 0]}
                          scale={0.1}
                        >
                          <mesh
                            name="moon8_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon8_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                        <group
                          name="moon9"
                          position={[1.192, 0, 0]}
                          scale={0.1}
                        >
                          <mesh
                            name="moon9_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon9_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="saturn" rotation={[-Math.PI, 1.406, -Math.PI]}>
                      <group
                        name="saturn_1"
                        position={[4.5, 0, 0]}
                        rotation={[Math.PI, -0.432, -Math.PI]}
                        scale={0.225}
                      >
                        <mesh
                          name="saturn_saturn1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.saturn_saturn1_0.geometry}
                          material={materials.saturn1}
                        />
                        <group
                          name="moon10"
                          position={[-1.711, 0, 0]}
                          scale={0.111}
                        >
                          <mesh
                            name="moon10_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon10_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                        <group
                          name="moon11"
                          position={[1.72, 0, 0]}
                          scale={0.111}
                        >
                          <mesh
                            name="moon11_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon11_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                        <group name="saturn_ring" scale={[1.111, 0.222, 1.111]}>
                          <mesh
                            name="saturn_ring_saturn1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.saturn_ring_saturn1_0.geometry}
                            material={materials.saturn1}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="uranus"
                      rotation={[-Math.PI, -1.236, -Math.PI]}
                    >
                      <group
                        name="uranus_1"
                        position={[5.25, 0, 0]}
                        rotation={[-Math.PI, -0.444, Math.PI]}
                        scale={0.175}
                      >
                        <mesh
                          name="uranus_uranus1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.uranus_uranus1_0.geometry}
                          material={materials.uranus1}
                        />
                        <group
                          name="moon12"
                          position={[-1.266, 0, 0]}
                          scale={0.143}
                        >
                          <mesh
                            name="moon12_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon12_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                        <group
                          name="moon13"
                          position={[1.24, 0, 0]}
                          scale={0.143}
                        >
                          <mesh
                            name="moon13_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon13_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="neptune"
                      rotation={[-Math.PI, -1.241, -Math.PI]}
                    >
                      <group
                        name="neptune_1"
                        position={[5.75, 0, 0]}
                        rotation={[-Math.PI, -0.429, -Math.PI]}
                        scale={0.175}
                      >
                        <mesh
                          name="neptune_neptune1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.neptune_neptune1_0.geometry}
                          material={materials.neptune1}
                        />
                        <group
                          name="moon14"
                          position={[-1.199, 0, 0]}
                          scale={0.143}
                        >
                          <mesh
                            name="moon14_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon14_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                        <group
                          name="moon15"
                          position={[1.239, 0, 0]}
                          scale={0.143}
                        >
                          <mesh
                            name="moon15_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon15_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="pluto" rotation={[0, -0.331, 0]}>
                      <group
                        name="pluto_1"
                        position={[6.25, 0, 0]}
                        rotation={[-Math.PI, -0.433, -Math.PI]}
                        scale={0.038}
                      >
                        <mesh
                          name="pluto_pluto1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pluto_pluto1_0.geometry}
                          material={materials.pluto1}
                        />
                        <group
                          name="moon16"
                          position={[-2.393, 0, 0]}
                          scale={0.667}
                        >
                          <mesh
                            name="moon16_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon16_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                        <group
                          name="moon17"
                          position={[2.259, 0, 0]}
                          scale={0.667}
                        >
                          <mesh
                            name="moon17_moon18_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.moon17_moon18_0.geometry}
                            material={materials.moon18}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/solar_system_with_animation.glb");

export default Model;
