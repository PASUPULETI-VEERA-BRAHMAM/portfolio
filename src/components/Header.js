import React from "react";

export default function Header() {
  return (
    <header
      style={{
        background: "rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 0",
        }}
      >
        <div style={{ fontWeight: 700 }}>P VEERA BRAHMAM</div>
        <nav>
          <a href="#about" style={{ margin: "0 10px" }}>
            About
          </a>
          <a href="#skills" style={{ margin: "0 10px" }}>
            Skills
          </a>
          <a href="#projects" style={{ margin: "0 10px" }}>
            Projects
          </a>
          <a href="/resume.pdf" download="My_Resume.pdf">
            Resume
          </a>
          <a href="#contact" style={{ margin: "0 10px" }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
