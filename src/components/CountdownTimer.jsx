import { useState, useEffect } from 'react'
import './CountdownTimer.css'

const TARGET = new Date('2026-12-31T23:59:59')

function calcTime() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownTimer() {
  const [time, setTime] = useState(calcTime)

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section className="countdown">
      <div className="container countdown__inner">
        <div className="countdown__header">
          <span className="countdown__badge">Launch Countdown</span>
          <h2 className="countdown__heading">Big Things Are Coming</h2>
          <p className="countdown__subtitle">
            We&apos;re launching something amazing. Stay tuned!
          </p>
        </div>
        <div className="countdown__grid">
          {units.map((u) => (
            <div key={u.label} className="countdown__block">
              <span className="countdown__value">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="countdown__label">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountdownTimer
