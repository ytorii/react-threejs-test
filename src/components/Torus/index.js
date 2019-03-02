import React from 'react'
import * as THREE from 'three'
import ThreeObject from '../ThreeObject'

const generateCamera = (radius, aspect, near, far) => {
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(radius, aspect, near, far)
  camera.position.set(0, 0, +1000)

  return camera
}

// ドーナツを作成
const geometry = new THREE.TorusGeometry(200, 80, 64, 100)
const material = new THREE.MeshStandardMaterial({color: 0x6699FF, roughness: 0.5})

const mesh = new THREE.Mesh(geometry, material)
const meshes = [ mesh ]

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

const Torus = ({id, width, height}) => (
  <ThreeObject
    id={id}
    width={width}
    height={height}
    camera={generateCamera(45, width / height)}
    meshes={meshes}
    light={generateLight()}
    onTick={onTick}
  />
)

export default Torus
