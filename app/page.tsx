import Reveal from "./components/Reveal";
import BeforeAfter from "./components/BeforeAfter";

/* ------------------------------------------------------------------ */
/*  Content — edit everything here. Placeholder copy for now.          */
/* ------------------------------------------------------------------ */

const EDITOR = {
  name: "Alex Mercer",
  role: "Video Editor",
  location: "Los Angeles, CA — working worldwide",
  intro:
    "Four years turning raw footage into content people finish. I edit, grade and animate for creators and brands who need every second to earn its place.",
  bio: "I'm Alex, a video editor with four years of professional experience. I picked up After Effects in 2019 and have moved steadily deeper into audiovisual work ever since — today I'm comfortable across the full post pipeline and have delivered projects for dozens of content creators.",
  email: "hello@alexmercer.com",
};

const SOCIALS = [
  { label: "Instagram", handle: "@alexmercer.edit", href: "https://instagram.com" },
  { label: "Twitter", handle: "@alexmercercut", href: "https://twitter.com" },
];

const SKILLS = [
  "Video Editing",
  "Motion Graphics",
  "Color Grading",
  "Compositing",
  "Sound Design",
];

const EXPERIENCE = [
  {
    role: "Freelance Video Editor",
    period: "2023 — Present",
    tasks: [
      "YouTube long-form and shorts editing",
      "Channel branding & motion graphics",
      "Client color grading passes",
    ],
  },
  {
    role: "Junior Editor",
    period: "2021 — 2023",
    company: "Northlight Media",
    tasks: [
      "Social media content edits",
      "Email marketing motion assets",
      "Corporate video editing",
    ],
  },
];

const SOFTWARE = ["Pr", "Ae", "Ps", "Ai", "DR"];

const PROJECTS = [
  { channel: "Gameplay Central", category: "Gaming Highlights" },
  { channel: "Tech Unboxed", category: "Tech Review" },
  { channel: "Nova VT", category: "VTuber Clips" },
  { channel: "Northlight Media", category: "Brand Campaign" },
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

const INITIALS = EDITOR.name
  .split(" ")
  .map((part) => part[0])
  .join("");

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="font-sans">
      {/* ---------- Nav ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <a href="#top" className="font-mono text-sm tracking-widest uppercase">
            {EDITOR.name}
          </a>
          <div className="hidden gap-8 font-mono text-xs tracking-widest uppercase sm:flex">
            <a href="#about" className="transition-colors hover:text-accent">
              About
            </a>
            <a href="#work" className="transition-colors hover:text-accent">
              Work
            </a>
            <a href="#services" className="transition-colors hover:text-accent">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section
        id="top"
        className="relative overflow-hidden bg-grid px-6 pb-20 pt-40 sm:px-10"
      >
        <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-muted uppercase">
            Portfolio ’26 — {EDITOR.role}
          </p>
          <h1 className="font-impact text-[16vw] leading-[0.82] tracking-tight sm:text-[11vw]">
            {EDITOR.name}
          </h1>
          <p className="mt-4 font-mono text-lg text-muted sm:text-xl">
            {EDITOR.role}
          </p>
          <div className="mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              {EDITOR.intro}
            </p>
            <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
              <p className="font-mono text-sm text-muted">{EDITOR.location}</p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Start a project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="border-t border-line px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
              ◖ About
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-red-950/40 via-zinc-900 to-black">
                <span className="absolute bottom-4 left-4 font-impact text-4xl text-white/10">
                  {INITIALS}
                </span>
              </div>
            </Reveal>
            <div className="grid gap-10 sm:grid-cols-2">
              <Reveal>
                <h3 className="font-impact text-2xl tracking-tight">Bio</h3>
                <p className="mt-4 leading-relaxed text-muted">{EDITOR.bio}</p>
                <h3 className="mt-10 font-impact text-2xl tracking-tight">
                  Skills
                </h3>
                <ul className="mt-4 space-y-2">
                  {SKILLS.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="font-impact text-2xl tracking-tight">
                  Experience
                </h3>
                <div className="mt-4 space-y-6">
                  {EXPERIENCE.map((exp) => (
                    <div key={exp.role}>
                      <p className="font-medium">
                        {exp.role}{" "}
                        <span className="font-normal text-muted">
                          ({exp.period})
                        </span>
                      </p>
                      {exp.company && (
                        <p className="text-xs text-muted">{exp.company}</p>
                      )}
                      <ul className="mt-2 space-y-1">
                        {exp.tasks.map((task) => (
                          <li key={task} className="text-sm text-muted">
                            · {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <h3 className="mt-10 font-impact text-2xl tracking-tight">
                  Software
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {SOFTWARE.map((tool) => (
                    <span
                      key={tool}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-line font-mono text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Work divider ---------- */}
      <section className="relative overflow-hidden border-t border-line bg-grid px-6 py-24 text-center sm:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />
        <Reveal className="relative">
          <h2 className="font-impact text-[13vw] leading-none tracking-tight sm:text-[7vw]">
            Video Editing
          </h2>
          <p className="mt-3 font-mono text-sm uppercase tracking-[0.3em] text-muted">
            Selected Work
          </p>
        </Reveal>
      </section>

      {/* ---------- Selected Work ---------- */}
      <section id="work" className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-16">
          <Reveal>
            <p className="max-w-xl text-sm text-muted">
              Disclaimer: the projects shown below were edited by me
              exclusively to demonstrate my editing skills. All original
              material belongs to its respective creators.
            </p>
          </Reveal>
          {PROJECTS.map((project, i) => (
            <Reveal key={project.channel} delay={(i % 2) * 100}>
              <BeforeAfter
                index={i + 1}
                channel={project.channel}
                category={project.category}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="border-t border-line px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 font-impact text-4xl tracking-tight sm:text-6xl">
              What I do
            </h2>
          </Reveal>
          <div className="border-t border-line">
            {SERVICES.map((s) => (
              <Reveal key={s.no}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-line py-8 transition-colors hover:bg-white/[0.02] sm:grid-cols-[6rem_1fr_2fr] sm:gap-x-10">
                  <span className="font-mono text-sm text-accent">{s.no}</span>
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

      {/* ---------- Contact / Footer ---------- */}
      <footer
        id="contact"
        className="relative overflow-hidden border-t border-line bg-grid px-6 pb-10 pt-24 sm:px-10 sm:pt-32"
      >
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
              ◖ Contact
            </p>
            <h2 className="mt-6 font-impact text-[16vw] leading-[0.85] tracking-tight sm:text-[10vw]">
              Thank You!
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${EDITOR.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {EDITOR.email}
                <span>→</span>
              </a>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-4 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  {social.label} · {social.handle}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="mt-20 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} {EDITOR.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
