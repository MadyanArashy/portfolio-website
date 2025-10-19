export default function CallToAction() {
  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Connect</h2>
        <div className="flex justify-center gap-6 mb-10">
          <a href="mailto:madyanarrashy38@gmail.com" className="hover:text-[var(--color-accent-primary)]">Email</a>
          <a href="https://www.linkedin.com/in/madyan-arashy" className="hover:text-[var(--color-accent-primary)]">LinkedIn</a>
          <a href="https://github.com/MadyanArashy" className="hover:text-[var(--color-accent-primary)]">GitHub</a>
        </div>
        <form className="grid gap-4 text-left">
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
        </form>
      </div>
    </section>
  );
}
