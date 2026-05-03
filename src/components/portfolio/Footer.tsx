import { Phone, Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl glass p-10 text-center shadow-card md:p-16">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">// Get in touch</span>
        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Let's build something <span className="text-gradient-bio">regenerative</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Open to research collaborations, sustainability projects, and biotech-meets-software builds.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <a href="mailto:raktimasengupta7@email.com" className="group flex items-center gap-3 rounded-2xl border border-border bg-background/40 p-4 text-left transition-all hover:border-primary hover:shadow-glow">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="text-sm">raktimasengupta7@email.com</div>
            </div>
          </a>
          <a href="tel:+919932738157" className="group flex items-center gap-3 rounded-2xl border border-border bg-background/40 p-4 text-left transition-all hover:border-primary hover:shadow-glow">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="text-sm">+91 9932738157</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/raktima-sengupta-5ab957380/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-border bg-background/40 p-4 text-left transition-all hover:border-primary hover:shadow-glow">
            <Linkedin className="h-5 w-5 text-primary" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">LinkedIn</div>
              <div className="text-sm">/in/raktima-sengupta</div>
            </div>
          </a>
          <a href="https://github.com/Raktimajinniepoint" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-border bg-background/40 p-4 text-left transition-all hover:border-primary hover:shadow-glow">
            <Github className="h-5 w-5 text-primary" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">GitHub</div>
              <div className="text-sm">@Raktimajinniepoint</div>
            </div>
          </a>
        </div>

        <div className="mt-12 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Raktima Sengupta · Designed with biology in mind.
        </div>
      </div>
    </footer>
  );
}