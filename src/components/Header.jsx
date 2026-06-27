import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isQuiz = location.pathname === '/quiz'

  const nav = isQuiz ? (
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  ) : (
    <>
      <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
      <Link to="/quiz" onClick={() => setMenuOpen(false)}>Quiz</Link>
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
    </>
  )

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">Logo</Link>
        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {nav}
        </nav>
      </div>
    </header>
  )
}

export default Header
