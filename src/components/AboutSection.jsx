import "../css/AboutSection.css";
import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

const facts = [
  { label: "Course", value: "BS Information Technology" },
  { label: "Year level", value: "Third year" },
  { label: "School", value: "CIT-U" },
  { label: "Based in", value: "Cordova" },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <SectionHeading title="About myself" />

      <p className="about-description">
        Hey, I'm Bryne Kendrick Nuñez. An aspiring Virtual Assistant and IT
        student passionate about helping businesses stay organized, efficient,
        and creative. I specialize in admin support, UI/UX design, and content
        creation. With a strong blend of technical skills and creativity, I
        handle the details so you can focus on growing what matters most.
      </p>

      <dl className="about-facts">
        {facts.map((fact) => (
          <Fact key={fact.label} label={fact.label} value={fact.value} />
        ))}
      </dl>
    </section>
  );
}