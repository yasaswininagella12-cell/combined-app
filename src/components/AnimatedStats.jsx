import { useState, useEffect, useRef } from 'react'
import './AnimatedStats.css'

const stats = [
  { label: 'Active Users', value: 12400, suffix: '+' },
  { label: 'Projects Deployed', value: 3520, suffix: '+' },
  { label: 'Uptime', value: 99.9, suffix: '%', decimals: 1 },
  { label: 'Countries Reached', value: 85, suffix: '+' },
]

function CountUp({ target, suffix, decimals = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          intervalRef.current = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(intervalRef.current)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}

function AnimatedStats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__header">
          <span className="stats__badge">Our Impact</span>
          <h2 className="stats__heading">By the Numbers</h2>
          <p className="stats__subtitle">We&apos;re proud of what we&apos;ve achieved together.</p>
        </div>
        <div className="stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stats__card">
              <span className="stats__value">
                <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
