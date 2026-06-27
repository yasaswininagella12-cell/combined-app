import { useState, useEffect } from 'react'
import './Features.css'

const API = 'https://jsonplaceholder.typicode.com/users'

function Features() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="features__heading">Team Members</h2>
        <p className="features__subtitle">
          Data fetched via <code>fetch</code> + <code>async / await</code> (Promise-based)
        </p>

        {loading && (
          <div className="features__status">
            <div className="spinner" />
            <p>Loading team data...</p>
          </div>
        )}

        {error && (
          <div className="features__status features__status--error">
            <p>Failed to load: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="features__grid">
            {users.map((user) => (
              <div key={user.id} className="feature-card">
                <h3 className="feature-card__title">{user.name}</h3>
                <p className="feature-card__detail">{user.email}</p>
                <p className="feature-card__detail">{user.company.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Features
