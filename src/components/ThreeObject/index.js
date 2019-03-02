import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three-orbitcontrols-ts'

const generateRenderer = (canvasId, width, height) => {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(`#${canvasId}`)
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  return renderer
}

const ThreeObject = props => {
  const {
    id,
    width,
    height,
    camera,
    mesh,
    light,
    onTick,
  } = props

  useEffect(() => {

    // レンダラーを作成
    const renderer = generateRenderer(id, width, height)

    // シーンを作成
    const scene = new THREE.Scene()

    scene.add(mesh)

    light && scene.add(light)

    // カメラコントローラーを作成
    const controls = new OrbitControls(camera, renderer.domElement)

    // 毎フレーム時に実行されるループイベントです
    const tick = () => {
      window.requestAnimationFrame(tick)

      // 与えられたアニメーション処理を実行
      onTick()

      // レンダリング
      renderer.render(scene, camera)
    }

    tick()
  })

  return (
    <canvas id={id}></canvas>
  )
}

export default ThreeObject
