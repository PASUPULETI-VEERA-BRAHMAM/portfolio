import React from "react";
import photo from "../assets/veeraimg.jpg";
export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "transparent" }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 250px",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <h2>About me</h2>
          <p style={{ color: "var(--muted)" }}>
            Motivated Computer Science student with strong skills in Python, C
            programming, and web development. Proficient in Python and C, with
            basic to intermediate knowledge of Java and C++. Experienced in
            HTML, CSS, JavaScript, and modern frameworks, with hands-on projects
            involving data structures, algorithms, and deployment. Eager to
            contribute as a Python Developer, C Developer, Java Developer, or
            Web Developer in a dynamic environment.
          </p>

          <ul style={{ color: "var(--muted)" }}>
            <li>Learning full-stack web development</li>
            <li>Favourite stack: React + Node.js</li>
            <li>Interested in building real products</li>
          </ul>
        </div>

        <div style={{ justifySelf: "center" }}>
          <img
            src={photo}
            alt="profile"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        </div>
      </div>
    </section>
  );
}
