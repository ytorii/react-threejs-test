import React from 'react'
import * as THREE from 'three'
import ThreeObject from '../ThreeObject'

const generateCamera = (radius, aspect, near, far) => {
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, aspect, near, far)
  camera.position.set(0, 0, +1000)

  return camera
}

// 直方体
const geometry = new THREE.BoxGeometry(400, 400, 400)
const material = new THREE.MeshNormalMaterial()

const mesh = new THREE.Mesh(geometry, material)
const meshes = [ mesh ]

const onTick = () => {
  mesh.rotation.y += 0.01
  mesh.rotation.x += 0.01
}

const MaterialBox = ({id, width, height}) => (
  <ThreeObject
    id={id}
    width={width}
    height={height}
    camera={generateCamera(45, width / height)}
    meshes={meshes}
    matial={material}
    onTick={onTick}
  />
)

export default MaterialBox
