import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle intersection observer changes
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  // UseEffect to set up the Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe each section
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []); // Run once on component mount

  return (
    <div className="navbar">
      <div className="navbar-brand">Optifit</div>
      <button className="navbar-toggler" onClick={toggleNavbar}>
        {isOpen ? "✕" : "☰"}
      </button>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            setActiveSection("home");
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </a>
        <a
          href="#classes"
          className={activeSection === "classes" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            setActiveSection("classes");
            document
              .getElementById("classes")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Classes
        </a>
        <a
          href="#schedule"
          className={activeSection === "schedule" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            setActiveSection("schedule");
            document
              .getElementById("schedule")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Schedule
        </a>
        <a
          href="#trainer"
          className={activeSection === "trainer" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            setActiveSection("trainer");
            document
              .getElementById("trainer")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Trainer
        </a>
        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            setActiveSection("services");
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Services
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            setActiveSection("contact");
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </a>
        <button className="btn-primary" style={{marginRight: '10px'}}>
            <span>Sign Up</span>
          {/* <Link to="/signup">
          </Link> */}
        </button>
        <button className="btn-secondary">
            <span>Sign In</span>
          {/* <Link to="/signin">
          </Link> */}
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
