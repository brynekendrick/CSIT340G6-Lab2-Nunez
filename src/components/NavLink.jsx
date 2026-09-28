import { Link } from "react-router-dom";

export default function NavLink({ href, label }) {
  const handleClick = () => {
    if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(href.slice(1));

    setTimeout(() => {
      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <Link to={href} onClick={handleClick}>
      {label}
    </Link>
  );
}