import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import { MoleculeBackground } from "./MoleculeBackground";

const contacts = [
  { icon: Phone, label: "+91 9932738157", href: "tel:+919932738157" },
  { icon: Mail, label: "raktimasengupta7@email.com", href: "mailto:raktimasengupta7@email.com" },
  { icon: Linkedin, label: "linkedin.com/in/raktima-sengupta", href: "https://www.linkedin.com/in/raktima-sengupta-5ab957380/" },
  { icon: Github, label: "github.com/Raktimajinniepoint", href: "https://github.com/Raktimajinniepoint" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <MoleculeBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
          Available for collaborations
        </motion.div>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="block text-foreground">Raktima</span>
          <span className="block text-gradient-bio">Sengupta</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          <span className="font-mono text-primary">B.Tech Biotechnology</span> · Sustainable
          Engineering & Digital Innovation. Building zero-waste systems and AI-powered tools at the
          intersection of biology, code, and climate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition-all hover:border-primary hover:shadow-glow hover:-translate-y-0.5"
            >
              <c.icon className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              <span className="font-mono text-xs text-foreground/80">{c.label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}