import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const isQuiz = location.pathname === '/quiz'

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">Logo</Link>
        <nav className="header__nav">
          {isQuiz ? (
            <Link to="/">Home</Link>
          ) : (
            <>
              <a href="#hero">Home</a>
              <a href="#features">Features</a>
              <Link to="/quiz">Quiz</Link>
              <a href="#contact">Contact</a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
