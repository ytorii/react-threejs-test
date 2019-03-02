import * as THREE from 'three'
import sunmap from '../imgs/sunmap.jpg'

// 球体
const geometry = new THREE.SphereGeometry(2, 20, 20)

// 画像を読み込む
const loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
  map: loader.load(sunmap)
})

// 太陽を作成
const sunMesh = new THREE.Mesh(geometry, material) 

export default sunMesh
