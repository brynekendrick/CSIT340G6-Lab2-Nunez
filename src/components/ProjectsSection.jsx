import "../css/ProjectsSection.css";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    year: "2025",
    title: "Barangay System - LabangOnline",
    description:
      "The primary purpose of Labang Online is to digitize barangay level services in Barangay Labangon, Cebu City. This project targets long queues and paper-based processes by enabling online access to services like certificate requests, complaints, and inquiries.",
    tech: "HTML · CSS · JavaScript · Django · Supabase",
    link: "https://github.com/lemoninnit/CSIT327-G7-Labang-Online",
  },
  {
    year: "2025",
    title: "BitQuest - Games",
    description:
      "MMORPG game inspired by Filipino mythology, featuring creatures such as aswang, manananggal, and tiyanak.",
    tech: "Java",
    link: "https://github.com/brynekendrick/BitQuest-Games.git",
  },
  {
    year: "2026",
    title: "Soundboard Objects",
    description:
      "My first Kotlin project. Soundboard Objects is similar to a music application, but focuses on sounds from birds, nature, and other sources.",
    tech: "Kotlin · Firebase · PowerShell",
    link: "https://github.com/brynekendrick/SoundboardObjects",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <SectionHeading
        title="Projects"
        subtitle="Things I have built."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}