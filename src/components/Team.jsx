import './Team.css'

const members = [
  { name: 'Alice Chen', role: 'Frontend Developer', bio: 'Crafts pixel-perfect UIs with React and TypeScript.', color: '#6366f1' },
  { name: 'Bob Martinez', role: 'Backend Engineer', bio: 'Designs scalable APIs and microservice architectures.', color: '#8b5cf6' },
  { name: 'Carol Smith', role: 'UX Designer', bio: 'Obsessed with intuitive and accessible user experiences.', color: '#a78bfa' },
  { name: 'David Kim', role: 'DevOps Lead', bio: 'Keeps the infrastructure running smoothly 24/7.', color: '#ec4899' },
]

function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team__header">
          <span className="team__badge">Our Team</span>
          <h2 className="team__heading">Meet the People Behind It</h2>
          <p className="team__subtitle">A passionate team dedicated to building great products.</p>
        </div>

        <div className="team__grid">
          {members.map((m) => (
            <div key={m.name} className="team__card">
              <div className="team__avatar" style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}dd)` }}>
                {m.name.charAt(0)}{m.name.split(' ')[1].charAt(0)}
              </div>
              <h3 className="team__name">{m.name}</h3>
              <p className="team__role">{m.role}</p>
              <p className="team__bio">{m.bio}</p>
              <div className="team__social">
                <span className="team__social-icon">in</span>
                <span className="team__social-icon">gh</span>
                <span className="team__social-icon"> tw</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
