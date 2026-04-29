import { type RefObject } from 'react'

type CanvasBackgroundProps = {
  canvasRef: RefObject<HTMLCanvasElement | null>
}

function CanvasBackground({ canvasRef }: CanvasBackgroundProps) {
  return (
    <canvas
      className="fixed inset-0 -z-10 pointer-events-none opacity-40"
      id="canvas"
      ref={canvasRef}
    ></canvas>
  )
}

export default CanvasBackground
