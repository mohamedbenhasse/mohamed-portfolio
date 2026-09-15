import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { QUICK_QUESTIONS } from "../data.js";
import { fadeUp, inView } from "../lib/motion.js";

export default function Chatbot({
  chatMessages,
  chatInput,
  setChatInput,
  sendQuestion,
}) {
  return (
    <section id="chatbot" className="section">
      <div className="container">
        <SectionHeader kicker="AI Assistant" title="Ask Mohamed Ben Hassen AI" />

        <motion.div
          className="card chat-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <div className="chat-status">
            <div>
              <span className="icon-box">
                <Bot size={22} />
              </span>
              <strong>Portfolio Chatbot</strong>
            </div>
            <p>
              <span className="green-dot" /> Coming soon
            </p>
          </div>

          <p className="text">
            Ask questions about my CV, experience, projects, skills, education,
            and technical background.
          </p>

          <div className="chat-window">
            <div className="chat-messages">
              {chatMessages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`message ${
                    message.sender === "user" ? "user-message" : "bot-message"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="chat-input-row">
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") sendQuestion();
                }}
                type="text"
                placeholder="Ask about Mohamed's CV..."
              />
              <button onClick={() => sendQuestion()}>Send</button>
            </div>
          </div>

          <div className="question-grid">
            {QUICK_QUESTIONS.map((question) => (
              <button
                key={question}
                className="question quick-question"
                onClick={() => sendQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
