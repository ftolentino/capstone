import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Sphere from './components/Sphere';
import './App.css';

extend({OrbitControls});

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

// Orbit Camera Controls
const CameraControls = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};

function App() {
  return (
    <React.Fragment>
      <div className='scene-container'>
        <Canvas style={{ background: "white" }}>
          <CameraControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={<Loading />}>
            <Sphere />
          </Suspense>
        </Canvas>
      </div>
    </React.Fragment>
  );
}

export default App;