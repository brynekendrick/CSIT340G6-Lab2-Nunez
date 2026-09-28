import "../css/Navbar.css";
import NavLink from "./NavLink";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink href="/" label="Bryne Kendrick P. Nuñez" />

        <div className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}