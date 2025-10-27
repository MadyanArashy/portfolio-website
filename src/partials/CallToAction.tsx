import { Email, Linkedin, Github } from "@deemlol/next-icons";
export default function CallToAction() {
  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Connect</h2>
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex flex-row space-x-1.5 justify-center items-center">
            <Email color="red" size={16}/>
            <a href="mailto:madyanarrashy38@gmail.com" className="hover:text-accent-primary">Email</a>
          </div>
          <div className="flex flex-row space-x-1.5 justify-center items-center">
            <Linkedin color="aquamarine" size={16}/>
            <a href="https://www.linkedin.com/in/madyan-arashy" className="hover:text-accent-primary">LinkedIn</a>
          </div>
          <div className="flex flex-row space-x-1.5 justify-center items-center">
            <Github color="white" size={16}/>
            <a href="https://github.com/MadyanArashy" className="hover:text-accent-primary">GitHub</a>
          </div>
        </div>
        {/* <form className="grid gap-4 text-left">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 rounded-md bg-[var(--color-primary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
          />
          <textarea
            rows={5}
            placeholder="Your message"
            className="px-4 py-3 rounded-md bg-[var(--color-primary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
          />
          <button type="submit" className="px-6 py-3 rounded-lg bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] transition">
            Send
          </button>
        </form> */}
      </div>
    </section>
  );
}
