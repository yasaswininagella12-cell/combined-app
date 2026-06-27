import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__message">Page not found</p>
        <Link to="/" className="not-found__btn">Go Home</Link>
      </div>
    </section>
  )
}

export default NotFound
