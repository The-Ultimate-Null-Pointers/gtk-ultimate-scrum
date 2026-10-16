function ProjectCard({title, repoURL, hostingURL, description}) {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <a href={repoURL} target="_blank">GitHub</a>
            <a href={hostingURL} target="_blank">Website</a>
            <hr></hr>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard