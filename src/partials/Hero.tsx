import Image from "next/image";
import { Quotes } from "@/data";
export default function Hero() {
  const quote = Quotes[Math.floor(Math.random()*Quotes.length)];
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-12">
      <div className="absolute inset-0 bg-linear-to-b from-secondary to-primary opacity-60" />
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12">
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-5xl lg:text-6xl font-bold mb-2">Madyan Arashy</h1>
          <h2 className="text-xl lg:text-2xl text-accent-primary font-semibold mb-6">Web Developer</h2>
          <p className="max-w-2xl mx-auto lg:mx-0 mb-8 text-text-secondary">
            Hi, I&apos;m a 17 year old Web Developer and aspiring Software Developer, turning ideas into digital solutions for real world problems.
          </p>
          <blockquote className="italic border-l-4 border-accent-primary pl-4 mb-8 leading-relaxed">
            &quot;{quote.message}&quot;
            <span className="block mt-2 text-sm not-italic font-bold">
              — {quote.author}
            </span>
          </blockquote>
          <div className="flex flex-row gap-4 w-full items-center justify-center lg:justify-start">
            <a href="#cta" className="inline-block px-6 py-3 rounded-lg bg-accent-primary hover:bg-accent-secondary transition font-semibold">
              Contact Me
            </a>
            <a href="/pdf/madyan-arashy-cv.pdf" target="_blank" download={true} className="inline-block px-6 py-3 rounded-lg border border-accent-primary text-accent-primary hover:bg-accent-primary/10 transition font-semibold">
              Download my CV
            </a>
          </div>
        </div>
        <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-border flex items-center justify-center shrink-0">
          <Image
            src={'/images/MADYAN_ARASHY.jpg'}
            alt="Madyan Arashy"
            width={256}
            height={256}
            className="w-full h-full rounded-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
