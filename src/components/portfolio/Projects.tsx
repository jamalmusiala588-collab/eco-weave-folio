import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Sprout, Sun, Route as RouteIcon, ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    icon: Sprout,
    title: "Integrated Digital Ecosystem for Horticulture",
    tag: "Agrithon 2.0",
    problem:
      "Horticulture farmers face poor data analysis, weak financial planning, and market inefficiencies that erode income.",
    solution:
      "A centralized web platform that digitizes the entire agricultural lifecycle — log land size, inputs, and expenses for automated profit/loss calculations.",
    features: [
      "Buyers Portal for direct farmer-to-buyer market linkage, removing exploitative middlemen",
      "AI-driven module that recommends eligible government schemes based on land + crop data",
      "Automated P&L tracking with input/expense ledger",
    ],
    stack: ["Python 3.13", "Django", "Gemini 1.5 Flash", "Tailwind CSS", "MySQL"],
  },
  {
    n: "02",
    icon: Sun,
    title: "Solar-Powered Bioplastic Conversion",
    tag: "Zero-waste R&D",
    problem:
      "The dual crisis of non-biodegradable plastic pollution and accumulating starch-rich kitchen waste.",
    solution:
      "A solar-powered process that converts everyday kitchen waste — potato peels, rice water — into flexible, translucent bioplastic sheets.",
    features: [
      "α-amylase enzymatic pretreatment to reduce starch molecular weight",
      "Solar reactor heating slurry at 70–90 °C with glycerol for elasticity",
      "Community-scale capacity: 20 kg waste → 2 kg bioplastic film daily",
    ],
    stack: ["α-Amylase", "Glycerol", "Solar Reactor", "Starch Hydrolysis"],
  },
  {
    n: "03",
    icon: RouteIcon,
    title: "Bamboo-Plastic Modular Roads",
    tag: "Northeast India",
    problem:
      "Conventional bitumen roads fail rapidly in hilly, high-rainfall terrain, while urban plastic waste keeps rising.",
    solution:
      "Prefabricated, interlocking road panels with a three-layer system: waterproof recycled-plastic surface, tension-absorbing bamboo lattice core, and a stabilizing base of shredded non-recyclable plastic + filler.",
    features: [
      "Engineered lifespan of 10–12 years in high-rainfall terrain",
      "20–30% cheaper than traditional bitumen construction",
      "Lightweight modular design enables rapid deployment & swap-out repair",
    ],
    stack: ["Recycled HDPE", "Bamboo Lattice", "Modular CAD", "Composite Engineering"],
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-start gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// 02 — Field work</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Core <span className="text-gradient-bio">projects</span>
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Three deep-dives where biotechnology meets engineering, AI, and circular design.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.n} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ rotateY: tilt.x, rotateX: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-3xl glass p-8 shadow-card transition-all hover:border-primary/40 hover:shadow-glow md:p-12"
      >
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-bio opacity-10 blur-3xl transition-opacity group-hover:opacity-30" />

        <div className="relative grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-primary">{p.n}</span>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {p.tag}
              </span>
            </div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-bio shadow-glow">
              <p.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold leading-tight md:text-3xl">{p.title}</h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[11px] text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Block label="The Problem" body={p.problem} />
            <Block label="The Solution" body={p.solution} />
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-primary">
                Key Features
              </div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/85">
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">{label}</div>
      <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{body}</p>
    </div>
  );
}