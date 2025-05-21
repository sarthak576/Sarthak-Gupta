import { useState, useEffect } from 'react'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

export default function Header({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <a href="#" className="logo">Sarthak Gupta</a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          
          <div className="social-icons">
            <a href="https://linkedin.com/in/sarthakgupta1702"><FaLinkedin /></a>
            <a href="https://github.com/sarthak576"><FaGithub /></a>
            <a href="https://www.hackerrank.com/profile/sarthakguptarjn"><SiHackerrank /></a>
          </div>
          
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  )
}