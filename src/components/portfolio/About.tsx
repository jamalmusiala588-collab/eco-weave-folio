import { motion } from "framer-motion";
import { Microscope, Code2, Leaf, Brain } from "lucide-react";

const pillars = [
  { icon: Microscope, title: "Biotechnology", desc: "Enzymatic processes, biomaterials, sustainable bioprocessing." },
  { icon: Code2, title: "Digital Innovation", desc: "Full-stack platforms with Django, Python and modern frontend." },
  { icon: Brain, title: "Applied AI", desc: "LLM-driven recommendation systems for real-world social impact." },
  { icon: Leaf, title: "Circular Design", desc: "Zero-waste systems, modular engineering, climate-positive materials." },
];

export function About() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// 01 — Profile</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Bridging the <span className="text-gradient-bio">lab</span> and the{" "}
            <span className="text-gradient-bio">code editor</span>.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm a biotechnology engineer who treats sustainability as a design constraint and code as a
            laboratory. My work spans enzyme-driven bioplastic conversion, modular infrastructure for
            high-rainfall geographies, and AI-enabled platforms that put farmers in direct contact with
            their markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl glass p-6 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-gradient-bio group-hover:text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}