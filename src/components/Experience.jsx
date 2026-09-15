import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { EXPERIENCE } from "../data.js";
import { fadeUp, inView } from "../lib/motion.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader kicker="Journey" title="Professional Experience" />

        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              className={`timeline-item card ${item.current ? "current" : ""}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
            >
              <div className="timeline-head">
                <p className="badge">{item.period}</p>
                {item.status && (
                  <span className="status-pill">
                    <span className="green-dot" />
                    {item.status}
                  </span>
                )}
              </div>

              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>

              <ul className="bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {item.tech && (
                <div className="tech-list">
                  {item.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
