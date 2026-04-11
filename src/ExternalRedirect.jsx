import { useEffect } from 'react'

export default function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0f3a',
        color: '#8ef5ff',
        fontFamily: 'Bebas Neue, sans-serif',
        letterSpacing: '0.2em',
        fontSize: 18,
      }}
    >
      REDIRECTING…
    </div>
  )
}
