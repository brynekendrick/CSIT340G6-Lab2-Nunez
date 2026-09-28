export default function TimelineItem({
  period,
  title,
  place,
  description,
}) {
  return (
    <li>
      <p className="experience-period">{period}</p>

      <h3 className="experience-title">
        {title}
      </h3>

      <p className="experience-place">
        {place}
      </p>

      <p className="experience-description">
        {description}
      </p>
    </li>
  );
}