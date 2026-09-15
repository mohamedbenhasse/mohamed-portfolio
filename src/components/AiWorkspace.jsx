import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { asset } from "../lib/asset.js";

export default function AiWorkspace() {
  const videoRef = useRef(null);

  // The video is filtered in CSS, so decoding + filtering it while it is off
  // screen costs frames everywhere else on the page. Only play it when visible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ai-workspace" className="section ai-video-section">
      <div className="container">
        <SectionHeader kicker="AI Workspace" title="Building with AI" />

        <motion.div
          className="ai-video-card card"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="video-glow"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />

          <video
            ref={videoRef}
            className="ai-workspace-video"
            src={asset("assets/ai-workspace.mp4")}
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
          />

          <motion.div
            className="video-caption"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="section-kicker">Vision</p>
            <h3>
              AI-powered development, automation, and intelligent systems.
            </h3>
            <p className="text">
              A cinematic representation of my direction: combining AI,
              computer vision, cloud, automation, and full-stack development to
              build modern digital products.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
