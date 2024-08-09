import React, { useMemo, Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Asset } from 'expo-asset';
import * as THREE from 'three';

function Shoe() {
  const url = Asset.fromModule(require('./assets/Airmax/shoe.obj')).uri;

  // Load the OBJ file buffer
  const buffer = useLoader(THREE.FileLoader, url);

  // Convert the buffer to a string
  const bufferToString = (buffer) => {
    if (buffer instanceof ArrayBuffer) {
      const uint8Array = new Uint8Array(buffer);
      // Convert Uint8Array to string
      return Array.from(uint8Array).map(byte => String.fromCharCode(byte)).join('');
    }
    console.error('Buffer is not an ArrayBuffer');
    return '';
  };

  // Parse the OBJ file into a Three.js object
  const obj = useMemo(() => {
    const loader = new OBJLoader();
    const objString = bufferToString(buffer);
    return loader.parse(objString);
  }, [buffer]);

  // Add materials to the object
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 'red', // Set the color of the material
        metalness: 0.5, // Metalness factor (0 to 1)
        roughness: 0.5 // Roughness factor (0 to 1)
      });
      child.castShadow = true; // Allow the object to cast shadows
      child.receiveShadow = true; // Allow the object to receive shadows
    }
  });

  // Create a ref to hold the object for animation
  const objRef = React.useRef();

  // Rotate the object every frame
  useFrame(() => {
    if (objRef.current) {
      objRef.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });

  return <primitive ref={objRef} object={obj} scale={8} />;
}

export default function App() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} shadows>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1000} castShadow />
      <Suspense fallback={<div>Loading...</div>}>
        <Shoe />
      </Suspense>
      {/* Add a ground plane to catch shadows */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
}

