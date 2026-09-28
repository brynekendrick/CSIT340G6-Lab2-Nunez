export default function ContactLink({ label, href, text }) {
  return (
    <li className="contact-item">
      <span className="contact-label">{label}</span>

      <a href={href} className="contact-link">
        {text}
      </a>
    </li>
  );
}