import { useState, useEffect } from 'react'
import './CookieConsent.css'

function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent">
      <p className="cookie-consent__text">
        We use cookies to improve your experience. By using this site you agree
        to our <a href="#privacy">Privacy Policy</a>.
      </p>
      <button className="cookie-consent__btn" onClick={accept}>
        Got it!
      </button>
    </div>
  )
}

export default CookieConsent
