import { motion } from "framer-motion";
import { Award, Calendar, MapPin } from "lucide-react";

export function Conferences() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // 03 — Community
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Conferences & <span className="text-gradient-bio">certifications</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl glass p-8 shadow-card transition-all hover:border-primary/40 hover:shadow-glow md:p-12"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-gradient-bio opacity-10 blur-3xl transition-opacity group-hover:opacity-25" />
          <div className="relative grid gap-8 md:grid-cols-[auto_1fr]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-bio shadow-glow">
              <Award className="h-10 w-10 text-primary-foreground" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-xs text-primary">
                <span className="rounded-full border border-primary/40 bg-primary/5 px-3 py-1">
                  PARTICIPANT
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="h-3 w-3" /> Oct 30–31, 2025
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-3 w-3" /> LPU, India
                </span>
              </div>
              <h3 className="text-2xl font-bold md:text-3xl">BIOINNOVATE 2025</h3>
              <p className="mt-3 text-base text-foreground/80">
                International conference on{" "}
                <span className="text-primary">
                  "Bridging Science and Society for Sustainable Development Goals"
                </span>
                , hosted by the School of Bioengineering and Biosciences at Lovely Professional
                University.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}