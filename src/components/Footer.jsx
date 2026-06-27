import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} Landing Page. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
