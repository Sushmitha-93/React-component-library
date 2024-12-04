import { useState, useEffect } from "react";
import "./toc.css";

const TOC = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: "0px",
    threshold: 0.5,
  });

  // Observe each section when the component mounts
  useEffect(() => {
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    // Cleanup
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <div className="toc">
        <h4 className="toc-heading">In this page</h4>
        <nav>
          <ul>
            {sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>
                <li key={id} className={id == activeSection ? "active" : ""}>
                  {label}
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TOC;
