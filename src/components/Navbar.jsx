import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <nav>
        <a href="#home" className="logo">
          Zyad Ahmed
        </a>

        <button className="menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>

        <ul className={isOpen ? "open" : ""}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
