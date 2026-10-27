import { projects } from "../data";

function ProjectCard({ title, image, link }) {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={image} alt={`${title} screenshot`} />
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <p className="par">
          Here are some of my recent projects. Each one includes a screenshot and a live demo link.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
