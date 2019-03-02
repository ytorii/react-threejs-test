import * as THREE from 'three'
import moonmap from '../imgs/moonmap1k.jpg'

// 球体
const geometry = new THREE.SphereGeometry(0.8, 80, 80)

// 画像を読み込む
const loader = new THREE.TextureLoader();
const material = new THREE.MeshPhongMaterial({
  map: loader.load(moonmap)
})

const moonMesh = new THREE.Mesh(geometry, material)

export default moonMesh
