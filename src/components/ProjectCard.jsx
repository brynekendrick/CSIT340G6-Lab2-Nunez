export default function ProjectCard({
  year,
  title,
  description,
  tech,
  link,
}) {
  return (
    <article className="project-card">
      <p className="project-year">{year}</p>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <p className="project-tech">{tech}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on GitHub
      </a>
    </article>
  );
}