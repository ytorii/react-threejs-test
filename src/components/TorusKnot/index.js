import React from 'react'
import * as THREE from 'three'
import ThreeObject from '../ThreeObject'
import sunMesh from '../../threejs/sunMesh'
import earthMesh from '../../threejs/earthMesh'

const generateCamera = (radius, aspect, near, far) => {
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(radius, aspect, near, far)
  camera.position.set(20, 20, 20)
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return camera
}

// 位置を指定

const meshes = [ sunMesh, earthMesh ]

// 点光源
const light = new THREE.PointLight(0xFFFFFF, 1.5, 2000)
light.add(sunMesh)
light.position.set(0, 5, 0);

const onTick = () => {
  // 照明の位置を更新
  const t = Date.now() / 2400;
  const r = 12.0;
  const lx = r * Math.cos(t);
  const lz = r * Math.sin(t);
  earthMesh.position.set(lx, 3, lz);

  sunMesh.rotation.y += 0.005
  earthMesh.rotation.y += 0.02
}

const TorusKnot = ({id, width, height}) => (
  <ThreeObject
    id={id}
    width={width}
    height={height}
    camera={generateCamera(45, width / height)}
    meshes={meshes}
    light={light}
    onTick={onTick}
  />
)

export default TorusKnot
