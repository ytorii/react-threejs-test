import React, { useEffect } from 'react'
import { renderBox } from '../../threejs/sampleBox'

const ThreeCanvas = () => {

  const canvasId = "myCanvas"
  useEffect(() => { renderBox(canvasId) })

  return (
    <canvas id={canvasId}></canvas>
  )
}

export default ThreeCanvas
