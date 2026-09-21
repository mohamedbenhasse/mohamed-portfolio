import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { PROFILE_STATS } from "../data.js";
import { fadeUp, inView, stagger } from "../lib/motion.js";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeader kicker="Profile" title="About Me" />

        <div className="about-grid">
          <motion.div
            className="card about-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
          >
            <h3>AI Engineer &amp; Developer with a builder mindset.</h3>
            <p className="text">
              I work across cloud infrastructure, AI systems, automation,
              full-stack development, and system operations. My current focus is
              the company-wide digital platform I am building for iPrint
              International.
            </p>
            <p className="text">
              My hands-on background covers Azure virtual machines, secure
              networking, firewalling, load balancing, backup and restore, and
              containerized deployment, alongside AI agents and RAG workflows,
              YOLOv8 and OpenCV computer vision, deep learning, recommender
              systems, and backend work with FastAPI, Flask, Node.js and
              PostgreSQL.
            </p>
          </motion.div>

          <motion.div
            className="card profile-stats"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
          >
            {PROFILE_STATS.map(([value, label]) => (
              <motion.div key={value} variants={fadeUp}>
                <strong>{value}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
