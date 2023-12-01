import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import planetConfig from '../configs';

const usePlanetAnimation = ({
  xRadius, zRadius,
  name,
}: {
  xRadius: number, zRadius: number,
  name: keyof typeof planetConfig,
}): [
  React.Ref<THREE.Group<THREE.Object3DEventMap>>,
  React.Ref<THREE.Group<THREE.Object3DEventMap>>,
  THREE.BufferGeometry<THREE.NormalBufferAttributes>
]  => {
  const curve = new THREE.EllipseCurve(0, 0, xRadius, zRadius - 0.05);
  const clock = new THREE.Clock();
  const { revolution, spin } = planetConfig[name];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(curve.getSpacedPoints(100));
  lineGeometry.rotateX(-Math.PI * 0.5);
  lineGeometry.rotateZ(Math.PI/8);

  const childRef = React.useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const systemRef = React.useRef<THREE.Group<THREE.Object3DEventMap>>(null);

  useFrame(() => {
    const t = (clock.getElapsedTime() * 0.05 * (1 / revolution)) % 1;
    const v = curve.getPointAt(t);
    if (systemRef.current) {
      if (name === 'mercury') {
        systemRef.current.position.x = v.x;
        systemRef.current.position.z = v.y;
      }
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

  return [systemRef, childRef, lineGeometry]
}

export default usePlanetAnimation;