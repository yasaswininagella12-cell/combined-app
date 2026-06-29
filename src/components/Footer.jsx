import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
        <div className="footer__links">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
