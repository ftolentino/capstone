import React from 'react';

const Sphere = () => {
  return (
    <React.Fragment>
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <sphereGeometry attach="geometry" args={[1, 150, 80]} />
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