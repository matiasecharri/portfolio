import React, { useState } from "react";
import "./navbar.css";
import { SiAboutdotme } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button
        className={isOpen ? "opbuton" : "opbuton2"}
        onClick={() => setIsOpen(!isOpen)}
       
      ></button>
      {isOpen && (
        <nav>
          <button>Matias </button>
          <button>Works</button>
          <button>Skills</button>
          <button>Contact</button>
        </nav>
      )}
    </div>
  );
}
