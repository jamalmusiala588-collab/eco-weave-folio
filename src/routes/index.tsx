import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Conferences } from "@/components/portfolio/Conferences";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Marquee } from "@/components/portfolio/Marquee";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <Nav />
      <Hero />
      <Marquee />
      <div id="about"><About /></div>
      <Projects />
      <div id="community"><Conferences /></div>
      <Footer />
    </div>
  );
}
