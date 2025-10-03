export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-primary)] opacity-60" />
      <div className="relative z-10">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-[var(--color-border)] flex items-center justify-center">
          <span className="text-sm text-[var(--color-text-secondary)]">Picture</span>
        </div>
        <h1 className="text-5xl font-bold mb-2">Lorem Ipsum</h1>
        <h2 className="text-xl text-[var(--color-accent-primary)] mb-6">Web Developer</h2>
        <p className="max-w-2xl mx-auto mb-8 text-[var(--color-text-secondary)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae felis ac nulla vehicula viverra.
        </p>
        <a href="#cta" className="px-6 py-3 rounded-lg bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] transition">
          Lorem ipsum
        </a>
      </div>
    </section>
  );
}
