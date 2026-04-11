import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PROJECTS = [
  {
    title: 'NET FASHION',
    stack: 'React - Team Up',
    detail: 'Web-based fashion marketplace system, integrated with payment gateway, and API integrations.',
  },
  {
    title: 'Mandiri Tunas Finance',
    stack: 'Angular - Team Up',
    detail:
      'Web-based Angular app for car price analysis: listing data is mined from multiple automotive sales websites so users can compare offers and see fair market price ranges.',
  },
]

export default function SideProjectsPage({ src }) {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

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
      if (e.key === 'ArrowLeft' || e.key === 'Escape' || e.key === 'Backspace') navigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <div id="menu-screen">
      <video ref={videoRef} src={src} autoPlay loop playsInline muted />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap');

        .sp-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 8vh 4vw;
        }
        .sp-panel {
          pointer-events: none;
          width: min(52vw, 720px);
          max-height: 78vh;
          overflow: hidden;
          padding: 22px 24px 26px 24px;
          background: linear-gradient(180deg, rgba(15, 28, 105, 0.94) 0%, rgba(8, 16, 68, 0.96) 100%);
          clip-path: polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%);
          box-shadow:
            inset 0 0 0 1px rgba(133, 244, 255, 0.14),
            16px 16px 0 rgba(0, 6, 30, 0.45);
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sp-panel.mounted {
          opacity: 1;
          transform: translateX(0);
        }
        .sp-head {
          font-family: 'Anton', sans-serif;
          font-size: clamp(36px, 4.2vw, 52px);
          line-height: 0.95;
          letter-spacing: 1px;
          color: #a5f6ff;
          text-shadow: 0 2px 0 rgba(0,0,0,0.2);
          margin-bottom: 18px;
        }
        .sp-sub {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          color: rgba(180, 245, 255, 0.75);
          margin-bottom: 22px;
        }
        .sp-card {
          margin-bottom: 14px;
          padding: 14px 16px 14px 18px;
          background: rgba(8, 18, 72, 0.96);
          clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%);
          box-shadow: inset 0 0 0 1px rgba(140, 239, 255, 0.1);
        }
        .sp-card-title {
          font-family: 'Anton', sans-serif;
          font-size: 22px;
          line-height: 1.15;
          color: #f2fcff;
          margin-bottom: 6px;
        }
        .sp-card-stack {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 17px;
          letter-spacing: 1.5px;
          color: #94f4ff;
          margin-bottom: 8px;
        }
        .sp-card-detail {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.5px;
          line-height: 1.35;
          color: rgba(237, 250, 255, 0.88);
        }
        .sp-footer {
          position: fixed;
          bottom: 20px;
          right: 28px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.22);
          z-index: 12;
        }
      `}</style>
      <div className="sp-overlay">
        <div className={`sp-panel${mounted ? ' mounted' : ''}`}>
          <div className="sp-head">SIDE PROJECTS</div>
          <div className="sp-sub">FEATURED WORK / FREELANCE WORK</div>
          {PROJECTS.map((p) => (
            <div className="sp-card" key={p.title}>
              <div className="sp-card-title">{p.title}</div>
              <div className="sp-card-stack">{p.stack}</div>
              <div className="sp-card-detail">{p.detail}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="sp-footer">← ESC BACK</div>
    </div>
  )
}
