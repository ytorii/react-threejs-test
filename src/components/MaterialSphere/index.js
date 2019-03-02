import React from 'react'
import * as THREE from 'three'
import ThreeObject from '../ThreeObject'

import moonmap from '../../imgs/moonmap1k.jpg'
import earthmap from '../../imgs/earthmap1k.jpg'

const generateCamera = (radius, aspect, near, far) => {
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(radius, aspect, near, far)
  camera.position.set(0, 0, +1000)

  return camera
}

// 球体
const geometry = new THREE.SphereGeometry(300, 80, 80)

// 画像を読み込む
const loader = new THREE.TextureLoader();
const material = new THREE.MeshStandardMaterial({
  map: loader.load(earthmap)
})

const mesh = new THREE.Mesh(geometry, material)

// 平行光源
const generateLight = () => {
  const light = new THREE.DirectionalLight(0xFFFFFF);
  light.position.set(1, 1, 1);
  return light
}

const onTick = () => {
  mesh.rotation.y += 0.01
  mesh.rotation.x += 0.01
}

const MaterialSphere = ({id, width, height}) => (
  <ThreeObject
    id={id}
    width={width}
    height={height}
    camera={generateCamera(45, width / height, 1, 10000)}
    mesh={mesh}
    light={generateLight()}
    onTick={onTick}
  />
)

export default MaterialSphere
