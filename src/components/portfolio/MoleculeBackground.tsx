import { motion } from "framer-motion";

const nodes = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (i * 73) % 100,
  y: (i * 47) % 100,
  size: 4 + (i % 3) * 3,
  delay: i * 0.3,
}));

export function MoleculeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {nodes.map((a) =>
          nodes
            .filter((b) => b.id > a.id && Math.hypot(a.x - b.x, a.y - b.y) < 30)
            .map((b) => (
              <motion.line
                key={`${a.id}-${b.id}`}
                x1={`${a.x}%`}
                y1={`${a.y}%`}
                x2={`${b.x}%`}
                y2={`${b.y}%`}
                stroke="oklch(0.86 0.22 135 / 0.25)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, delay: a.delay, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
              />
            ))
        )}
      </svg>
      {nodes.map((n) => (
        <motion.div
          key={n.id}
          className="absolute rounded-full bg-primary shadow-glow"
          style={{ left: `${n.x}%`, top: `${n.y}%`, width: n.size, height: n.size }}
          animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4 + n.id * 0.2, repeat: Infinity, delay: n.delay }}
        />
      ))}
    </div>
  );
}