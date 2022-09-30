import React from 'react';
import { MathUtils } from 'three';
import { Points, PointMaterial } from '@react-three/drei';

const positions = Array.from({ length: 500 }, (i) => [
  MathUtils.randFloatSpread(10),
  MathUtils.randFloatSpread(10),
  MathUtils.randFloatSpread(10),
])



const Sphere = () => {
  return (
    <React.Fragment>
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <sphereGeometry attach="geometry" args={[1, 150, 80]} />
          <Points limit={positions.length} >
            <PointMaterial transparent vertexColors size={15} sizeAttenuation={false} depthWrite={false} />
          </Points>
          <meshStandardMaterial
            attach="material"
            color="white"
            transparent
            opacity={0.6}
            roughness={1}
            metalness={0}
          />
        </mesh>
    </React.Fragment>
  );
}

export default Sphere;