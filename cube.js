import * as THREE from 'three';

console.log("cube.js loaded!");

const scene = new THREE.Scene();

// 카메라
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

// 렌더러 
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xeeeeee);

// 큐브
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // 기본 material
);
cube.position.x = -1.8; // 화면 왼쪽에 배치
scene.add(cube);

// 구
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 32, 32),
  new THREE.MeshNormalMaterial() // 서로 다른 material 타입
);
sphere.position.x = 1.8;
scene.add(sphere);

// 애니메이션
function animate(t = 0) {
  requestAnimationFrame(animate);

  // 큐브 회전
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.03;

  // 구 좌우 왕복 이동 + 가벼운 회전
  const time = t * 0.001;
  sphere.position.x = 1.8 + Math.sin(time * 1.5) * 0.8; 
  sphere.rotation.y += 0.015;

  renderer.render(scene, camera);
}
animate();

