import * as THREE from 'three'
import universeMap from '../imgs/universe.jpg'


const geometry = new THREE.BoxGeometry(2000, 2000, 1)

// 画像を読み込む
const loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
  map: loader.load(universeMap)
})

const universeMesh = new THREE.Mesh(geometry, material)

export default universeMesh
