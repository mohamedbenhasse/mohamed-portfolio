import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { EDUCATION } from "../data.js";
import { fadeUp, inView, stagger } from "../lib/motion.js";

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <SectionHeader kicker="Education" title="Education" />

        <motion.div
          className="education-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {EDUCATION.map((entry) => (
            <motion.div
              key={entry.kicker}
              className="card education-card"
              variants={fadeUp}
            >
              <p className="degree-kicker">{entry.kicker}</p>
              <h3>{entry.degree}</h3>
              <p className="company">{entry.school}</p>
              <p className="text" style={{ marginTop: 14 }}>
                {entry.note}
              </p>
              {entry.gpa && (
                <span className="gpa-pill">
                  <GraduationCap size={16} /> {entry.gpa}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
