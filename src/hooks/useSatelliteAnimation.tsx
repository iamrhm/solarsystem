import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { ISatellite, SolarSystemSatellites, WithTexture } from '../configs';

const useSatelliteAnimation = ({
  xRadius, yRadius, satellite,
}: {
  xRadius: number, yRadius: number,
  satellite: WithTexture<ISatellite<SolarSystemSatellites>>,
}): [
  React.Ref<THREE.Group<THREE.Object3DEventMap>>,
  THREE.BufferGeometry<THREE.NormalBufferAttributes>
]  => {
  const curve = new THREE.EllipseCurve(0, 0, xRadius, yRadius);
  const clock = new THREE.Clock();
  const { revolution, spin } = satellite;

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(curve.getSpacedPoints(100));
  lineGeometry.rotateX(-Math.PI * 0.5);
  lineGeometry.rotateZ(Math.PI/8);

  const systemRef = React.useRef<THREE.Group<THREE.Object3DEventMap>>(null);

  useFrame(() => {
    const t = (clock.getElapsedTime() * 0.05 * (1 / revolution)) % 1;
    const v = curve.getPointAt(t);
    if (systemRef.current) {
      systemRef.current.position.x = v.x;
      systemRef.current.position.z = v.y;
      systemRef.current.rotateY(spin * 0.015);
    }
  });

  return [systemRef, lineGeometry]
}

export default useSatelliteAnimation;