import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isQuiz = location.pathname === '/quiz'

  const close = () => setMenuOpen(false)

  const nav = isQuiz ? (
    <Link to="/" onClick={close}>Home</Link>
  ) : (
    <>
      <a href="#hero" onClick={close}>Home</a>
      <a href="#features" onClick={close}>Features</a>
      <a href="#testimonials" onClick={close}>Testimonials</a>
      <a href="#team" onClick={close}>Team</a>
      <a href="#pricing" onClick={close}>Pricing</a>
      <a href="#faq" onClick={close}>FAQ</a>
      <a href="#contact" onClick={close}>Contact</a>
      <Link to="/quiz" onClick={close}>Quiz</Link>
    </>
  )

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">Brand</Link>
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
