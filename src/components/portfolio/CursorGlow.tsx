import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 rounded-full mix-blend-difference md:block"
        animate={{ x: pos.x - 12, y: pos.y - 12, scale: hover ? 2.4 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
        style={{ background: "white" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-72 w-72 rounded-full md:block"
        animate={{ x: pos.x - 144, y: pos.y - 144 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.18 320 / 0.18), oklch(0.82 0.16 195 / 0.10) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </>
  );
}