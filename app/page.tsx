import Reveal from "./components/Reveal";

/* ------------------------------------------------------------------ */
/*  Content — edit everything here. Placeholder copy for now.          */
/* ------------------------------------------------------------------ */

const EDITOR = {
  name: "Alex Mercer",
  role: "Video Editor",
  location: "Based in Los Angeles — working worldwide",
  intro:
    "I cut films, commercials and music videos that feel inevitable — every frame earns its place. Eight years turning raw footage into stories people finish.",
  email: "hello@alexmercer.com",
  showreelEmbed: "", // e.g. "https://www.youtube.com/embed/VIDEO_ID"
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const MARQUEE = [
  "Editing",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "DaVinci Resolve",
  "Premiere Pro",
  "After Effects",
  "Storytelling",
];

const WORK = [
  { title: "Nightfall", role: "Short Film · Edit & Color", year: "2026" },
  { title: "Atlas Running", role: "Brand Commercial", year: "2025" },
  { title: "Echoes", role: "Music Video", year: "2025" },
  { title: "The Long Coast", role: "Documentary", year: "2024" },
  { title: "Pulse", role: "Title Sequence · Motion", year: "2024" },
  { title: "Static Bloom", role: "Music Video", year: "2023" },
];

const SERVICES = [
  {
    no: "01",
    title: "Editing",
    desc: "Narrative and rhythm-first cutting for film, ads and social — from assembly to final.",
  },
  {
    no: "02",
    title: "Color Grading",
    desc: "Cinematic looks and shot-matching in DaVinci Resolve that hold up on any screen.",
  },
  {
    no: "03",
    title: "Motion Graphics",
    desc: "Titles, lower-thirds and animated graphics built in After Effects.",
  },
  {
    no: "04",
    title: "Sound Design",
    desc: "Clean dialogue, mix balancing and a soundscape that carries the picture.",
  },
];

const STATS = [
  { value: "8+", label: "Years editing" },
  { value: "240+", label: "Projects delivered" },
  { value: "50M+", label: "Views generated" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="font-sans">
      {/* ---------- Nav ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <a href="#top" className="font-mono text-sm tracking-widest uppercase">
            {EDITOR.name}
          </a>
          <div className="hidden gap-8 font-mono text-xs tracking-widest uppercase sm:flex">
            <a href="#work" className="transition-opacity hover:opacity-60">
              Work
            </a>
            <a href="#services" className="transition-opacity hover:opacity-60">
              Services
            </a>
            <a href="#about" className="transition-opacity hover:opacity-60">
              About
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-60">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section
        id="top"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 sm:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted uppercase">
            {EDITOR.role} — Portfolio ’26
          </p>
          <h1 className="text-[15vw] font-bold leading-[0.85] tracking-tight sm:text-[13vw]">
            VIDEO
            <br />
            <span className="text-muted">EDITOR</span>
          </h1>
          <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
            <p className="max-w-md text-lg leading-relaxed text-muted sm:text-xl">
              {EDITOR.intro}
            </p>
            <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
              <p className="font-mono text-sm text-muted">{EDITOR.location}</p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                Start a project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-6 right-6 font-mono text-xs tracking-widest text-muted uppercase sm:right-10">
          Scroll ↓
        </div>
      </section>

      {/* ---------- Showreel ---------- */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-end justify-between pb-6">
            <h2 className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
              ◖ Showreel 2026
            </h2>
            <span className="font-mono text-xs text-muted">01 / 06</span>
          </Reveal>
          <Reveal>
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-gradient-to-br from-zinc-900 to-black">
              {EDITOR.showreelEmbed ? (
                <iframe
                  className="h-full w-full"
                  src={EDITOR.showreelEmbed}
                  title="Showreel 2026"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                  aria-label="Play showreel"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-line backdrop-blur transition-transform duration-500 group-hover:scale-110">
                    <span className="ml-1 block h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-foreground" />
                  </span>
                  <span className="font-mono text-xs tracking-widest text-muted uppercase">
                    Play Showreel
                  </span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <section
        className="border-y border-line py-6"
        aria-hidden="true"
      >
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span
                key={i}
                className="mx-8 text-2xl font-medium text-muted sm:text-3xl"
              >
                {item}
                <span className="ml-16 text-foreground/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Selected Work ---------- */}
      <section id="work" className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Selected Work
            </h2>
            <p className="max-w-xs text-sm text-muted">
              A small slice of recent edits across film, brand and music.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {WORK.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 100}>
                <a
                  href="#contact"
                  className="group block overflow-hidden rounded-xl border border-line"
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
                    <span className="absolute left-4 top-4 font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <span className="text-5xl font-bold tracking-tight text-foreground/10 sm:text-7xl">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-line p-5">
                    <div>
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <p className="font-mono text-xs text-muted">
                        {project.role}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-muted transition-transform group-hover:-translate-y-0.5 group-hover:text-foreground">
                      {project.year} ↗
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-6xl">
              What I do
            </h2>
          </Reveal>
          <div className="border-t border-line">
            {SERVICES.map((s) => (
              <Reveal key={s.no}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-line py-8 transition-colors hover:bg-white/[0.02] sm:grid-cols-[6rem_1fr_2fr] sm:gap-x-10">
                  <span className="font-mono text-sm text-muted">{s.no}</span>
                  <h3 className="text-2xl font-medium tracking-tight transition-transform group-hover:translate-x-2 sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="col-span-2 mt-3 max-w-md text-muted sm:col-span-1 sm:mt-0">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section
        id="about"
        className="px-6 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About
            </h2>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-10">
            <p className="text-xl leading-relaxed sm:text-2xl">
              {EDITOR.name} is a {EDITOR.role.toLowerCase()} obsessed with pace,
              tension and the cut you don’t notice. From feature documentaries
              to 15-second spots, the goal never changes: keep people watching.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-line pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 font-mono text-xs text-muted uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact / Footer ---------- */}
      <footer id="contact" className="px-6 pt-20 pb-10 sm:px-10 sm:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
              ◖ Contact
            </p>
            <h2 className="mt-6 text-[12vw] font-bold leading-[0.9] tracking-tight sm:text-[9vw]">
              Let’s work
              <br />
              together
            </h2>
            <a
              href={`mailto:${EDITOR.email}`}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {EDITOR.email}
              <span>→</span>
            </a>
          </Reveal>

          <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} {EDITOR.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
