import "../css/ContactSection.css";
import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

const contacts = [
  {
    label: "Email",
    href: "mailto:brynenunez01@gmail.com",
    text: "brynenunez01@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/brynekendrick",
    text: "github.com/brynekendrick",
  },
  {
    label: "LinkedIn",
    href: "https://ph.linkedin.com/in/brynenunez",
    text: "linkedin.com/in/brynenunez",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <SectionHeading title="Contact Information" />

      <ul className="contact-list">
        {contacts.map((contact) => (
          <ContactLink key={contact.label} {...contact} />
        ))}
      </ul>
    </section>
  );
}