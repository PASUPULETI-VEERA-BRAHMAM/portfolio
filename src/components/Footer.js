import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "var(--muted)",
        }}
      >
        <div>© {new Date().getFullYear()} P VEERA BRAHMAM</div>
        <div>
          <a
            href="https://github.com/PASUPULETI-VEERA-BRAHMAM"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: 12 }}
          >
            GitHub
          </a>
          <a
            href="http://www.linkedin.com/in/pasupuleti-veera-brahmam-a39264255"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
