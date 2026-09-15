import { motion } from "framer-motion";
import { fadeUp, inView } from "../lib/motion.js";

export default function SectionHeader({ kicker, title }) {
  return (
    <motion.div
      className="section-header"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
    >
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
    </motion.div>
  );
}
