import * as THREE from 'three'
import universeMap from '../imgs/universe.jpg'


const geometry = new THREE.BoxGeometry(1500, 1500, 1)

// 画像を読み込む
const loader = new THREE.TextureLoader();
const material = new THREE.MeshToonMaterial({
  map: loader.load(universeMap)
})

const universeMesh = new THREE.Mesh(geometry, material)

export default universeMesh
