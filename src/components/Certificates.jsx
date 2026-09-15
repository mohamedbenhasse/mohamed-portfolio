import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { CERTIFICATES } from "../data.js";
import { fadeUp, stagger } from "../lib/motion.js";

export default function Certificates({ onSelect }) {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeader kicker="Proof of Learning" title="Certificates" />

        <motion.div
          className="certificates-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {CERTIFICATES.map((certificate) => (
            <motion.button
              key={certificate.title}
              className="certificate-card"
              variants={fadeUp}
              whileHover={{ y: -7 }}
              onClick={() => onSelect(certificate)}
            >
              <span>{certificate.org}</span>
              <strong>{certificate.title}</strong>
              <small>
                Click to view certificate <ExternalLink size={13} />
              </small>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
