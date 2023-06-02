'use client'

import { useEffect } from 'react'

export const EffectNoise = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.onresize = resize

    function noise(ctx: CanvasRenderingContext2D) {
      var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0

      for (; i < len; ) buffer32[i++] = ((255 * Math.random()) | 0) << 24

      ctx.putImageData(idata, 0, 0)
    }

    var toggle = true

    // added toggle to get 30 FPS instead of 60 FPS
    ;(function loop() {
      toggle = !toggle
      if (toggle) {
        requestAnimationFrame(loop)
        return
      }
      noise(ctx)
      requestAnimationFrame(loop)
    })()
  }, [])

  return <canvas id="canvas" className={Canvas}></canvas>
}

const Canvas = `
  canvas
  w-full
  !h-full
  fixed
  top-0
  left-0
  pointer-events-none
  mix-blend-color-burn
  opacity-[0.1]
`
