import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { asset } from "../lib/asset.js";
import { CV_FILE } from "../data.js";
import { fadeUp } from "../lib/motion.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="city-light city-light-one" />
        <div className="city-light city-light-two" />
        <div className="hero-orbit" />
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="eyebrow">
            <span />
            Welcome to my portfolio
            <i />
          </p>

          <h1>
            Mohamed
            <br />
            Ben Hassen
          </h1>

          <p className="role-line">
            AI Engineer &amp; Developer <b>|</b> Full-Stack Developer <b>|</b>{" "}
            System Administrator
          </p>

          <p className="hero-description">
            I build practical AI, automation, and full-stack systems — from
            computer vision and cloud deployment to enterprise workflow
            platforms that real departments run on.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary-btn">
              ✦ View Projects
            </a>
            <a href="#contact" className="btn secondary-btn">
              ✉ Contact Me
            </a>
            <a href={CV_FILE} download className="btn ghost-btn">
              <Download size={17} /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-person"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <motion.div
            className="portrait-frame"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <img src={asset("assets/mohamed.jpg")} alt="Mohamed Ben Hassen" />
          </motion.div>

          <motion.div
            className="availability-card"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <span className="blue-dot" />
            <div>
              <strong>
                Available for
                <br />
                opportunities
              </strong>
              <p>
                <span className="green-dot" /> Open to work
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <span />
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}
