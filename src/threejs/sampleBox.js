import * as THREE from 'three'

// サイズを指定
const width = 960
const height = 540

// シーンを作成
const scene = new THREE.Scene()

// レンダラーを作成
const generateRenderer = canvasId => (
  new THREE.WebGLRenderer({
    canvas: document.querySelector(`#${canvasId}`)
  })
)

export const renderBox = canvasId => {
  const renderer = generateRenderer(canvasId)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height)

  // 箱を作成
  const geometry = new THREE.BoxGeometry(400, 400, 400)
  const material = new THREE.MeshNormalMaterial()
  const box = new THREE.Mesh(geometry, material)

  scene.add(box)
  camera.position.set(0, 0, +1000)

  // 毎フレーム時に実行されるループイベントです
  const tick = () => {
    window.requestAnimationFrame(tick)
    box.rotation.y += 0.01
    box.rotation.x += 0.01

    // レンダリング
    renderer.render(scene, camera)
  }

  tick();
}
