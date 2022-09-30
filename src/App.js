import React, { Suspense, useRef } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Sphere from './components/Sphere';
import './App.css';

extend({OrbitControls});

// Texture loader
const loader = new THREE.TextureLoader()
const arrow = loader.load('./arrow.png')

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
        <Canvas style={{ background: "#8c8c8c" }}>
          <CameraControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={<h1>Loading Scene...</h1>}>
            <Sphere />
          </Suspense>
        </Canvas>
      </div>
    </React.Fragment>
  );
}

export default App;