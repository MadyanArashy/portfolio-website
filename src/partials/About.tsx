export default function About() {
  return (
    <section className="py-20 px-6 bg-[var(--color-secondary)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg text-[var(--color-text-secondary)]">
          I’m a high school student, web developer and aspiring software engineer passionate about building web applications,
          both on the frontend and the backend of the stack. I specialize in backend development with PHP, Express.js, and MySQL,
          while creating user-friendly UIs with Laravel Blade, Next.js, and a bit of Expo React Native.
          I’m always eager to learn and I’m always{" "}
          <a href="#cta" className="text-[var(--color-accent-primary)] underline">open to connect</a>.
        </p>
      </div>
    </section>
  );
}
