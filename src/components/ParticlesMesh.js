import React from 'react';
import THREE, { SphereGeometry } from 'three'

export default function ParticlesMesh() {
  // const geometry = new THREE.SphereGeometry( 1, 150, 80 );

  // const particlesGeometry = new THREE.BufferGeometry;
  // const particlesCount = 15000;
  return (
    <React.Fragment>
      <SphereGeometry args={[1, 150, 80]} />
    </React.Fragment>
  );
}