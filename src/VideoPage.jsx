import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VideoPage({ src }) {
  const navigate = useNavigate()
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {
      v.muted = true
      v.play()
    })
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <div id="menu-screen">
      <video ref={videoRef} src={src} preload="auto" loop playsInline />
    </div>
  )
}
