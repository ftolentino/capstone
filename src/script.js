import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import './firebase';
// import * as dat from "dat.gui";

// Debug
// const gui = new dat.GUI();

// gui.add(geometry.scale, 'x', 0, 2).name('Scale X Axis');


// Texture loader
const loader = new THREE.TextureLoader();
const particleMap = loader.load("./angryCarl.png");

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.SphereGeometry(1, 150, 80);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 15000;

const positionArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  // positionArray[i] = Math.random();
  // positionArray[i] = Math.random() - 0.5
  positionArray[i] =
  (Math.random() - 0.5) * (Math.random() * 7) * (Math.random() * 1);
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positionArray, 3)
  );
  
  
  // Materials
  
  const material = new THREE.PointsMaterial({
  size: 0.008,
  color: "#00F0FF"
});

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.008,
  map: particleMap,
  transparent: true,
  color: "#ff0f00",
});

// Mesh
const sphere = new THREE.Points(geometry, material);
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(sphere, particlesMesh);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color("#8c8c8c"), 0.7);

// Mouse Movement

document.addEventListener("mousemove", animateParticles);

let mouseX = 0;
let mouseY = 0;

function animateParticles(event) {
  mouseY = event.clientY;
  mouseX = event.clientX;
}
/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.15 * elapsedTime;
  particlesMesh.rotation.x = -0.1 * elapsedTime;

  if (mouseX > 0) {
    sphere.rotation.y = mouseX * (elapsedTime * -0.00008);
    particlesMesh.rotation.y = mouseY * (elapsedTime * 0.0002);
  }
  // Update Orbital Controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
