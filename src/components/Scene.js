import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import '../../src/App.css';

const Scene = () => {
  return (
    <React.Fragment>
      <div class="scene-container">
        <Canvas>

        </Canvas>
      </div>
    </React.Fragment>
  );
}

export default Scene;