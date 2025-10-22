import Hero from "@/partials/Hero";
import About from "@/partials/About";
import HighlightedProjects from "@/partials/HighlightedProjects";
import HighlightedCerts from "@/partials/HighlightedCerts";
import CallToAction from "@/partials/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <About />
      <HighlightedProjects />
      <HighlightedCerts />
      <CallToAction />
    </main>
  );
}
