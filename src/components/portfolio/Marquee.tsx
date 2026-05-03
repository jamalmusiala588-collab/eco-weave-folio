import { motion } from "framer-motion";

const items = [
  "Biotechnology",
  "★",
  "Sustainable Engineering",
  "★",
  "Bioplastics",
  "★",
  "Applied AI",
  "★",
  "Circular Design",
  "★",
  "Django",
  "★",
  "Gemini",
  "★",
  "Modular Infrastructure",
  "★",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-background/50 py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className={`font-display text-3xl md:text-5xl ${
              it === "★" ? "text-primary" : "text-foreground/70"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {it}
          </span>
        ))}
      </motion.div>
    </div>
  );
}