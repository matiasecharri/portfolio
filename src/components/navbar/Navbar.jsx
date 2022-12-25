import React, { useState } from "react";
import "./navbar.css";
import { SiAboutdotme, MdWorkspacesFilled } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={isOpen ? "opbuton" : "opbuton2"}
        onClick={() => setIsOpen(!isOpen) }
      ></button>
      {isOpen && (
        <nav>
          <button> Me</button>
          <button>Works</button>
          <button>Skills</button>
          <button>Contact</button>
        </nav>
      )}
    </div>
  );
}
