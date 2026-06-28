import './Team.css'

const members = [
  { name: 'Alice Chen', role: 'Frontend Developer', bio: 'Loves crafting pixel-perfect UIs with React.' },
  { name: 'Bob Martinez', role: 'Backend Engineer', bio: 'Designs scalable APIs and microservices.' },
  { name: 'Carol Smith', role: 'UX Designer', bio: 'Obsessed with intuitive user experiences.' },
  { name: 'David Kim', role: 'DevOps Lead', bio: 'Keeps the infrastructure running smoothly.' },
]

function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="team__heading">Meet the Team</h2>
        <p className="team__subtitle">The people behind the product.</p>

        <div className="team__grid">
          {members.map((m) => (
            <div key={m.name} className="team__card">
              <div className="team__avatar">{m.name.charAt(0)}{m.name.split(' ')[1].charAt(0)}</div>
              <h3 className="team__name">{m.name}</h3>
              <p className="team__role">{m.role}</p>
              <p className="team__bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
