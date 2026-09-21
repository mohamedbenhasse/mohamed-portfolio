import { motion } from "framer-motion";
import { Bot, Brain, Cloud, CodeXml, Database, Workflow } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { fadeUp, stagger } from "../lib/motion.js";

const SKILL_GROUPS = [
  {
    icon: <CodeXml size={22} />,
    title: "Programming & Web",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "React",
      "Next.js",
      "Node.js",
      "HTML / CSS",
    ],
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud & Infrastructure",
    skills: [
      "Microsoft Azure",
      "Azure VMs",
      "VNets / Subnets / NSGs",
      "Azure Firewall",
      "Bastion",
      "Load Balancer",
      "AKS",
      "Microsoft Entra ID",
    ],
  },
  {
    icon: <Bot size={22} />,
    title: "Generative AI & Agents",
    skills: [
      "AI Agents",
      "RAG",
      "LangChain",
      "LangGraph",
      "MCP",
      "LLM Workflows",
      "Prompt Engineering",
      "Structured Extraction",
    ],
  },
  {
    icon: <Workflow size={22} />,
    title: "Automation & Integration",
    skills: [
      "n8n",
      "Power Automate",
      "Microsoft Graph API",
      "REST APIs",
      "Webhooks",
      "Workflow Automation",
    ],
  },
  {
    icon: <Brain size={22} />,
    title: "AI / ML",
    skills: [
      "TensorFlow",
      "Scikit-Learn",
      "CNNs",
      "YOLOv8",
      "OpenCV",
      "OpenPose",
      "Recommender Systems",
      "Pandas / NumPy",
    ],
  },
  {
    icon: <Database size={22} />,
    title: "Data & DevOps",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Cosmos DB",
      "Docker",
      "Kubernetes",
      "MLflow",
      "Airflow",
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
