import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowDown, Mail, X } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import AiWorkspace from "./components/AiWorkspace.jsx";
import Certificates from "./components/Certificates.jsx";
import Education from "./components/Education.jsx";
import Chatbot from "./components/Chatbot.jsx";
import Contact from "./components/Contact.jsx";
import { EMAIL, GITHUB, LINKEDIN } from "./data.js";

const INTRO_MESSAGE = {
  sender: "bot",
  text: "Hi, I am Mohamed's portfolio assistant. The AI chatbot backend is coming soon. For now, you can explore his projects, certificates, GitHub, LinkedIn, and contact details.",
};

export default function App() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [chatMessages, setChatMessages] = useState([INTRO_MESSAGE]);
  const [chatInput, setChatInput] = useState("");

  // reading progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  function sendQuestion(question) {
    const text = question || chatInput.trim();
    if (!text) return;

    setChatMessages((messages) => [
      ...messages,
      { sender: "user", text },
      {
        sender: "bot",
        text: "The AI chatbot is coming soon. For now, please contact Mohamed through email, LinkedIn, or GitHub.",
      },
    ]);
    setChatInput("");
  }

  return (
    <div className="app">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="site-glow" />

      <Navbar />

      <aside className="social-rail">
        <div className="rail-line" />
        <a href={GITHUB} target="_blank" rel="noreferrer" title="GitHub">
          GH
        </a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" title="LinkedIn">
          in
        </a>
        <a href={`mailto:${EMAIL}`} title="Email">
          <Mail size={18} />
        </a>
        <a href="#contact" title="Contact">
          <ArrowDown size={18} />
        </a>
      </aside>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AiWorkspace />
      <Certificates onSelect={setActiveCertificate} />
      <Education />
      <Chatbot
        chatMessages={chatMessages}
        chatInput={chatInput}
        setChatInput={setChatInput}
        sendQuestion={sendQuestion}
      />
      <Contact />

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <button
              className="modal-close"
              onClick={() => setActiveCertificate(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              src={activeCertificate.image}
              alt={activeCertificate.title}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
