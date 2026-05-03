import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [0, 14]);
  const bg = useTransform(scrollY, [0, 200], ["oklch(0.16 0.02 160 / 0)", "oklch(0.16 0.02 160 / 0.7)"]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.header
      style={{ backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined, backgroundColor: bg }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="inline-block h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
          raktima<span className="text-primary">.bio</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:raktimasengupta7@email.com"
          className="rounded-full bg-gradient-bio px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Let's talk
        </a>
      </div>
      <motion.div
        style={{ scaleX: progress }}
        className="h-px origin-left bg-gradient-bio"
      />
    </motion.header>
  );
}