import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { v: 3, suffix: "", label: "Flagship projects" },
  { v: 12, suffix: " yrs", label: "Modular road lifespan" },
  { v: 20, suffix: " kg", label: "Daily waste → bioplastic" },
  { v: 30, suffix: "%", label: "Cheaper infrastructure" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.6, ease: "easeOut" });
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative bg-background p-8 transition-colors hover:bg-card"
          >
            <div className="font-display text-5xl font-medium text-gradient-bio md:text-6xl">
              <Counter to={s.v} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-bio transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}