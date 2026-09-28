import "../css/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <header id="top" className="Hero">
      <p className="Hero-label">Hi, I'm</p>

      <h1 className="Hero-title">
        Bryne Kendrick P. Nuñez
      </h1>

      <p className="Hero-description">
        A third year IT student and motivated creator with a hunger to grow.
      </p>

      <div className="Hero-buttons">
        <Link
          to="/projects"
          onClick={() => scrollToSection("projects")}
          className="projects-button"
        >
          See my projects
        </Link>

        <Link
          to="/contact"
          onClick={() => scrollToSection("contact")}
          className="contact-button"
        >
          Contact me
        </Link>
      </div>
    </header>
  );
}