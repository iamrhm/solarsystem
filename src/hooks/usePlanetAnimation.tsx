import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const usePlanetAnimation = ({
  xRadius = 2.5, zRadius = 1.5,
  speed = 0.05, spin = 0.05
}) => {
  const curve = new THREE.EllipseCurve(0, 0, xRadius, zRadius);
  const clock = new THREE.Clock();
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(curve.getSpacedPoints(100));
  lineGeometry.rotateX(-Math.PI * 0.5);

  const ref = React.useRef<THREE.Group<THREE.Object3DEventMap>>(null);

  useFrame(() => {
    const v = new THREE.Vector2();
    const t = (clock.getElapsedTime() * speed) % 1
    curve.getPointAt(t, v);
    if (ref.current) {
      ref.current.position.x = v.x;
      ref.current.position.z = v.y;
      ref.current.rotateY(spin);
    }
  });

  return [ref, lineGeometry]
}

export default usePlanetAnimation;