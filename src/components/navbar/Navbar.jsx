import React, { useState } from "react";
import "./navbar.css";
import { SiAboutdotme, MdWorkspacesFilled } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <button data-aos="fade-down" data-aos-duration="1200">
            Me
          </button>
          <button data-aos="fade-down" data-aos-duration="1300">
            Works
          </button>
          <button data-aos="fade-down" data-aos-duration="1400">
            Skills
          </button>
          <button data-aos="fade-down" data-aos-duration="1800">
            Contact
          </button>
        </nav>
      )}
    </div>
  );
}
