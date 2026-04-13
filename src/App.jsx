import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import menuVideo from './assets/Mainn.mp4'
import main2 from './assets/main2.mp4'
import P3Menu from './P3Menu'
import ResumePage from './ResumePage'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import ExternalRedirect from './ExternalRedirect'
import SideProjectsPage from './SideProjectsPage'
import './App.css'

function MenuScreen() {
  const navigate = useNavigate()
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {
      // Browser blocked autoplay with sound — retry muted
      v.muted = true
      v.play()
    })
  }, [])

  return (
    <div id="menu-screen">
      <video ref={videoRef} src={menuVideo} preload="auto" loop playsInline />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  )
}

const PAGE_TITLES = {
  '/': 'Ibad Ahsan | Muhammad Ibadurrahman Al-ahsan — Software Engineer · Portfolio',
  '/about': 'About | Muhammad Ibadurrahman Al-ahsan (Ibad Ahsan)',
  '/resume': 'Resume Ahsan | Muhammad Ibadurrahman Al-ahsan — CV & Experience',
  '/socials': 'Socials | Ibad Ahsan — Muhammad Ibadurrahman Al-ahsan',
  '/github': 'GitHub | varseeker (Ibad Ahsan)',
  '/sideproj': 'Side Projects | Portofolio Ahsan — Muhammad Ibadurrahman Al-ahsan',
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    document.title =
      PAGE_TITLES[location.pathname] ||
      'Muhammad Ibadurrahman Al-ahsan | Ibad Ahsan — Portfolio & Resume'
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition><ResumePage src={main2} /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition variant="socials"><Socials /></PageTransition>
        } />
        <Route path="/github" element={
          <PageTransition><ExternalRedirect to="https://github.com/varseeker" /></PageTransition>
        } />
        <Route path="/sideproj" element={
          <PageTransition><SideProjectsPage src={main2} /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}
