import "../css/ExperienceSection.css";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

const experience = [
  {
    period: "2021 - Present",
    title: "Photo/Video Editor",
    place: "Cordova, Cebu",
    description:
      "Edited photos and videos for creative projects, enhancing visuals, creating smooth transitions, and producing engaging content.",
  },
  {
    period: "2022 - 2023",
    title: "Senior High School, TVL-ICT Strand",
    place: "University of Cebu Lapu Lapu & Mandaue",
    description: "We learn about java introduction.",
  },
  {
    period: "2023 - Present",
    title: "BS Information Technology",
    place: "Cebu Institute of Technology - University",
    description:
      "Taking up web development, databases, and systems analysis.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and worked."
      />

      <ol className="experience-timeline">
        {experience.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </ol>
    </section>
  );
}