import React from 'react'
import * as THREE from 'three'

import universeMesh from '../../threejs/universeMesh'
import sunMesh from '../../threejs/sunMesh'
import earthMesh from '../../threejs/earthMesh'
import moonMesh from '../../threejs/moonMesh'
import browserSize from '../../utils/browserSize'

import ThreeObject from '../ThreeObject'

const generateCamera = (radius, aspect, near, far) => {
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(radius, aspect, near, far)
  camera.position.set(10, 35, 50)
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return camera
}

// 位置を指定
universeMesh.position.set(0, 0, -300)

const meshes = [ universeMesh, sunMesh, earthMesh, moonMesh ]

// 点光源
const light = new THREE.PointLight(0xAAAAAA, 1.5, 2000)
light.add(sunMesh)
light.position.set(0, 5, 0);

const onTick = () => {
  // 地球の位置を更新
  const et = Date.now() / 2400;
  const er = 20.0;
  const ex = er * Math.cos(et);
  const ez = er * Math.sin(et);
  earthMesh.position.set(ex, 0, ez);
  earthMesh.rotation.y -= 0.04

  // 月の位置を更新
  const mt = Date.now() / 1800;
  const mr = 3.5;
  const mx = mr * Math.cos(mt);
  const mz = mr * Math.sin(mt);
  moonMesh.position.set(mx + ex, 0, mz + ez);
  moonMesh.rotation.y -= 0.03

  sunMesh.rotation.y -= 0.003
  sunMesh.rotation.x -= 0.001
}

const size = browserSize()

const SolarSystem = ({id}) => (
  <ThreeObject
    id={id}
    width={size.width}
    height={size.height}
    camera={generateCamera(45, size.width / size.height)}
    meshes={meshes}
    light={light}
    onTick={onTick}
  />
)

export default SolarSystem
