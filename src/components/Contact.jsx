import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { CV_FILE, EMAIL, GITHUB, LINKEDIN } from "../data.js";
import { fadeUp, inView } from "../lib/motion.js";

export default function Contact() {
  return (
    <section id="contact" className="section contact alt">
      <div className="container">
        <motion.div
          className="contact-card card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <p className="section-kicker">Let&apos;s build</p>
          <h2>Code. Learn. Build. Automate. Innovate.</h2>
          <p className="text">
            Feel free to contact me for opportunities, projects, collaboration,
            or AI and full-stack development work.
          </p>

          <div className="hero-actions">
            <a href={`mailto:${EMAIL}`} className="btn primary-btn">
              <Mail size={18} /> Email Me
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              <span>GH</span> GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              <span>in</span> LinkedIn
            </a>
            <a href={CV_FILE} download className="btn ghost-btn">
              <Download size={17} /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
