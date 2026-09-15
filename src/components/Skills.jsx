import { motion } from "framer-motion";
import { Award, Bot, Brain, Cloud, CodeXml, Server } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

const SKILL_GROUPS = [
  {
    icon: <CodeXml size={22} />,
    title: "Programming & Web",
    skills: [
      "Python",
      "C++",
      "R",
      "SQL",
      "JavaScript",
      "React",
      "Node.js",
      "HTML / CSS",
    ],
  },
  {
    icon: <Brain size={22} />,
    title: "AI / ML Fields",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Object Detection",
      "Segmentation",
      "Recommender Systems",
      "Data Science",
      "MLOps",
    ],
  },
  {
    icon: <Award size={22} />,
    title: "Libraries & Tools",
    skills: [
      "TensorFlow",
      "Scikit-Learn",
      "YOLOv8",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Roboflow",
    ],
  },
  {
    icon: <Bot size={22} />,
    title: "AI Systems & Automation",
    skills: [
      "AI Agents",
      "LLM Integration",
      "Workflow Automation",
      "Document Automation",
      "Email Classification",
      "Role-Based Access Control",
    ],
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud / Backend / DevOps",
    skills: [
      "Azure",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MLflow",
      "GitHub",
    ],
  },
  {
    icon: <Server size={22} />,
    title: "IT & Operations",
    skills: [
      "System Administration",
      "Active Directory",
      "Microsoft 365",
      "Security Improvement",
      "Automation Scripting",
      "Technical Documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <SectionHeader kicker="Toolkit" title="Skills" />

        <motion.div
          className="skills-category-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              className="card skill-category"
              variants={fadeUp}
            >
              <div className="category-head">
                <span className="icon-box">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skills-grid compact">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
