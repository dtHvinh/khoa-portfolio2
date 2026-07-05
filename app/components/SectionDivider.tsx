import Reveal from "./Reveal";

type SectionDividerProps = {
  title: string;
  subtitle: string;
};

/** Full-width section break: big headline over the grid/glow background, used between major page sections. */
export default function SectionDivider({ title, subtitle }: SectionDividerProps) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-grid px-6 py-24 text-center sm:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <Reveal className="relative">
        <h2 className="font-extrabold text-[13vw] leading-none tracking-tight sm:text-[7vw]">
          {title}
        </h2>
        <p className="mt-3 font-mono text-sm uppercase tracking-[0.3em] text-muted">
          {subtitle}
        </p>
      </Reveal>
    </section>
  );
}
