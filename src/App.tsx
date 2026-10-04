import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import Home from './pages/Home'
import Studio from './pages/Studio'
import About from './pages/About'
import Journal from './pages/Journal'
import ReachUs from './pages/ReachUs'

const videoSource =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Studio', path: '/studio' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
  { name: 'Reach Us', path: '/reach-us' },
]

function App() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="mx-auto flex w-full max-w-7xl flex-col md:flex-row items-center justify-between px-6 py-6 md:px-8">
          
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex w-full md:w-1/3 justify-between items-center z-50">
            <Link
              to="/"
              className="font-display text-3xl tracking-tight text-foreground transition-opacity duration-300 hover:opacity-80"
              style={{ fontFamily: "'Instrument Serif', serif" }}
              aria-label="Alief home"
            >
              Alief.<sup className="ml-0.5 text-xs align-super">®</sup>
            </Link>

            <button 
              className="md:hidden text-foreground p-2 -mr-2 transition-transform hover:scale-110 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navigation Links (Centered perfectly on Desktop, Dropdown on Mobile) */}
          <nav 
            className={`
              absolute md:relative top-[80px] md:top-0 left-0 w-full md:w-1/3 
              flex-col md:flex-row items-center justify-center gap-6 md:gap-8 
              bg-background/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
              py-10 md:py-0 border-b border-foreground/10 md:border-none
              transition-all duration-300 ease-in-out z-40
              ${isMobileMenuOpen ? 'flex animate-in slide-in-from-top-2 fade-in' : 'hidden md:flex'}
            `} 
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body text-lg md:text-sm font-medium transition-colors duration-300 hover:text-foreground ${
                  location.pathname === item.path ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Download CV button shown only inside mobile menu */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden mt-4 inline-flex items-center justify-center rounded-full bg-foreground/10 border border-foreground/20 px-8 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Download CV
            </a>
          </nav>

          {/* Download CV Button (Right-aligned on Desktop) */}
          <div className="hidden md:flex w-1/3 justify-end">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground/10 border border-foreground/20 px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors backdrop-blur-md"
              title="Download my Curriculum Vitae"
            >
              Download CV
            </a>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/reach-us" element={<ReachUs />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
