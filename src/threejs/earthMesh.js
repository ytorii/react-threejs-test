import * as THREE from 'three'
import earthmap from '../imgs/earthmap1k.jpg'

// 球体
const geometry = new THREE.SphereGeometry(2, 80, 80)

// 画像を読み込む
const loader = new THREE.TextureLoader();
const material = new THREE.MeshPhongMaterial({
  map: loader.load(earthmap)
})

const earthMesh = new THREE.Mesh(geometry, material)

export default earthMesh
