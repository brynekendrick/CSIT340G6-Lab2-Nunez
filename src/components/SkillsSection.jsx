import "../css/SkillsSection.css";
import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

const skillGroups = [
  {
    category: "Languages",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "React",
      "Python",
      "Kotlin",
    ],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Django",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "VS Code",
      "MySQL",
      "Figma",
      "Render",
      "Supabase",
      "JetBrains",
      "Firebase",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <SectionHeading
        title="Skills"
        subtitle="What I work with."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">
              {group.category}
            </h3>

            <div className="skill-tags">
              {group.items.map((item) => (
                <SkillTag key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}