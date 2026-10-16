import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <div className="projects-page">
      <header>
        <h1>ULTIMATE Projects</h1>
      </header>
      <div className="projects-grid">
        <ProjectCard
          title="Health Calculator Server"
          repoURL="https://github.com/The-Ultimate-Null-Pointers/health-risk-calculator-unp-node"
          hostingURL="https://health-risk-calculator-unp-node-f5hygtdhemhxc6ef.centralus-01.azurewebsites.net/"
          description="Calculates how fat you are on the cloud"
        />
        <ProjectCard
          title="Health Calculator Client"
          repoURL="https://github.com/The-Ultimate-Null-Pointers/health-risk-calculator-static"
          hostingURL="https://victorious-wave-01c3ffd10.4.azurestaticapps.net/"
          description="Tells you you’re fat with a nice background"
        />
      </div>
    </div>
  )
}

export default Projects