import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { IPlanet, SolarPlanets, WithTexture } from '../configs';

const usePlanetAnimation = ({
  xRadius, yRadius,
  planet,
}: {
  xRadius: number, yRadius: number,
  planet: WithTexture<IPlanet<SolarPlanets>>,
}): [
  React.Ref<THREE.Group<THREE.Object3DEventMap>>,
  React.Ref<THREE.Group<THREE.Object3DEventMap>>,
]  => {
  const curve = new THREE.EllipseCurve(0, 0, xRadius, yRadius);
  const clock = new THREE.Clock();
  const { revolution, spin, name } = planet;

  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(curve.getSpacedPoints(100)),
    new THREE.LineBasicMaterial({
      color: "yellow"
    })
  );

  line.rotation.x = -Math.PI * 0.25;
  line.rotation.z = Math.PI * 0.125;
  line.position.x = 5;
  line.position.z = -2;

  const childRef = React.useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const systemRef = React.useRef<THREE.Group<THREE.Object3DEventMap>>(null);

  useFrame(() => {
    const t = (clock.getElapsedTime() * 0.05 * (1 / revolution)) % 1;
    const v = curve.getPointAt(t);
    if (systemRef.current) {
      systemRef.current.position.x = v.x;
      systemRef.current.position.z = v.y;
    } if (childRef.current) {
      if (name === 'saturn') {
        systemRef.current?.rotateY(spin * 0.015);
      } else {
        childRef.current.rotateY(spin * 0.015);
      }
    }
  });

  return [systemRef, childRef]
}

export default usePlanetAnimation;