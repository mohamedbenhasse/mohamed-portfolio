import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">MB</span>
          <span className="brand-name">Mohamed Ben Hassen</span>
          <span className="brand-dot" />
        </a>

        <div className="nav-links">
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          Let&apos;s Connect ↗
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="nav-mobile-inner">
              {NAV_LINKS.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
