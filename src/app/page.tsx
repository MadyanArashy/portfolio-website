import Navbar from "@/components/Navbar";
import Hero from "@/partials/Hero";
import About from "@/partials/About";
import HighlightedProjects from "@/partials/HighlightedProjects";
import HighlightedCerts from "@/partials/HighlightedCerts";
import CallToAction from "@/partials/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[var(--color-primary)] text-[var(--color-text-primary)]">
      <Navbar />
      <Hero />
      <About />
      <HighlightedProjects />
      <HighlightedCerts />
      <CallToAction />
    </main>
  );
}
