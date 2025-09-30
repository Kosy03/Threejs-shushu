import * as THREE from 'three';

console.log("sphere.js loaded");

// 무대
const scene = new THREE.Scene();

// 카메라
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
); //시야각, 화면비율, 가까운 잘림면, 먼 잘림면
camera.position.z = 3;

// 렌더러
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });//캔버스에, 매끈하게 그려줘
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xeeeeee);
//그런데 resize 하지 않으면 창 크기가 변하면 그림도 변함

// 구 (지오메트리, 머티리얼, 메쉬)
const geometry = new THREE.SphereGeometry(1, 55, 55); 
// (반지름 1, 가로 분할 32, 세로 분할 32 → 매끄러운 구)
const material = new THREE.MeshNormalMaterial(); 
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// 애니메이션
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;//카메라 종횡비
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
