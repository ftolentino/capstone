import React from "react";
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from "@react-three/drei";
import { angleToRadius } from '../utils/angle';

const testScene = () => {
  return (
    <React.Fragment>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 10]} />
        <mesh>
          <boxGeometry args={[4, 4, 4]}/>
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh rotation={[-(angleToRadius(90)), 0, 0 ]}>
          <planeGeometry args={[7,7]} />
          <meshStandardMaterial color="#1ECBE1" />
        </mesh>
        {/* <directionalLight color="red" position={[1, 2, 5]} /> */}
        <ambientLight args={["#ffffff", 1]} />
      </Canvas>
    </React.Fragment>
  );
}

export default testScene;