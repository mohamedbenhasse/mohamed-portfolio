import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { GITHUB, KAGGLE_PROJECTS, LINKEDIN, PROJECTS } from "../data.js";
import { fadeUp, inView, stagger } from "../lib/motion.js";

export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <SectionHeader kicker="Selected Work" title="Featured Projects" />

        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              className={`card project-card ${project.featured ? "featured" : ""} ${
                project.enterprise ? "enterprise" : ""
              }`}
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >
              {project.featured && <div className="project-visual" />}
              {project.status && (
                <span className="project-status">
                  <span className="blue-dot" style={{ marginTop: 0 }} />
                  {project.status}
                </span>
              )}
              <h3>{project.title}</h3>
              <p className="text">{project.description}</p>

              {project.link && (
                <a
                  className="repo-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel || "View project"}{" "}
                  <ExternalLink size={14} />
                </a>
              )}

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="subsection-head">
          <h3>Selected Kaggle Projects</h3>
          <span className="hairline" />
        </div>

        <motion.div
          className="kaggle-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {KAGGLE_PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              className="card kaggle-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <h4>{project.title}</h4>
              <p className="kaggle-stack">{project.stack}</p>
              <ul className="bullets">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  className="repo-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel} <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="project-links-card card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <h3>Explore More</h3>
          <p className="text">
            You can check my GitHub and LinkedIn for projects, updates, and
            professional details.
          </p>
          <div className="hero-actions">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              <span>GH</span> View GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              <span>in</span> View LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
