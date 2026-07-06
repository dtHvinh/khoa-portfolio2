import Reveal from "./components/Reveal";
import VideoFrame from "./components/VideoFrame";
import SectionDivider from "./components/SectionDivider";

/* ------------------------------------------------------------------ */
/*  Nội dung — chỉnh sửa toàn bộ tại đây.                              */
/* ------------------------------------------------------------------ */
const BLOB = "https://tvdzjuwoesvjjjeo.public.blob.vercel-storage.com";

const EDITOR = {
  name: "Trần Đăng Khoa",
  role: "Nhân viên Edit Video",
  location: "Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh",
  intro:
    "Video Editor dựng được cả video ngắn lẫn video dài trên nhiều nền tảng mạng xã hội. Thành thạo quy trình hậu kỳ từ cắt ghép, chỉnh màu, xử lý âm thanh đến motion graphics cơ bản.",
  bio: "Mình là Trần Đăng Khoa. Mình muốn được làm việc trong môi trường sáng tạo để phát triển kỹ năng biên tập hình ảnh, kể chuyện bằng video và tạo ra những sản phẩm có giá trị cho người xem. Hiện mình đang là editor fulltime cho kênh YouTube Thỏ Đêm.",
  email: "singed308@gmail.com",
  phone: "0355987624",
  // Ảnh đại diện: đặt file vào /public (vd "/profile.jpg") hoặc dán URL ảnh.
  // Để trống "" sẽ hiện khung chờ.
  photo: `${BLOB}/profile/79b7db5b-ad2c-4d76-95c0-eeca71c3fc9c.jpg`,
};

// Vercel Blob store — URL công khai cho toàn bộ media đã tải lên.

const SOCIALS = [
  { label: "YouTube", handle: "@bunnieo-x", href: "https://www.youtube.com/@bunnieo-x" },
  { label: "TikTok", handle: "@thodeem", href: "https://www.tiktok.com/@thodeem" },
  { label: "Facebook", handle: "khoa.chan.2024", href: "https://www.facebook.com/khoa.chan.2024" },
];

const CURRENT_JOB = {
  channel: "Kênh YouTube Thỏ Đêm",
  url: "https://www.youtube.com/@bunnieo-x",
};

const FEATURED = {
  title: "Video tâm đắc nhất",
  caption: "Kênh YouTube Thỏ Đêm · Biên tập theo phong cách kể chuyện.",
  src: `${BLOB}/video-editting/1.mp4`,
};

const STATS = [
  { value: "100K", label: "Người đăng ký kênh" },
  { value: "40+", label: "Video dài đã hoàn thành" },
  { value: "1Tr+", label: "View cho 2 video nổi bật" },
  { value: "2+", label: "Năm kinh nghiệm" },
];

const STRENGTHS = [
  "Tư duy thẩm mỹ tốt",
  "Kể chuyện bằng hình ảnh",
  "Tiếp thu góp ý nhanh",
  "Chịu được áp lực deadline",
  "Chủ động học hỏi xu hướng mới",
];

const SKILLS = [
  {
    name: "CapCut Pro",
    desc: "Thiết kế subtitle chuyên nghiệp, xử lý âm thanh, khai thác AI hỗ trợ dựng video.",
  },
  { name: "Adobe Premiere", desc: "Sử dụng cơ bản." },
  { name: "Adobe After Effects", desc: "Motion Graphics cơ bản." },
  { name: "Adobe Photoshop", desc: "Sử dụng cơ bản." },
];

const EXPERIENCE = [
  {
    role: "Editor Fulltime",
    period: "2025 — Nay",
    company: "Kênh YouTube Thỏ Đêm",
    tasks: [
      "Dựng video YouTube, short TikTok.",
      "Cắt ghép theo nhịp nội dung để tăng tỷ lệ giữ chân người xem.",
      "Thiết kế phụ đề động và hiệu ứng chuyển cảnh.",
      "Chỉnh màu và xử lý âm thanh.",
      "Phối hợp với người viết kịch bản để hoàn thiện video đúng deadline.",
    ],
  },
  {
    role: "Editor Freelance",
    period: "2022 — 2023",
    tasks: ["Tạo poster, dựng video lyrics."],
  },
];

const CERTIFICATE = {
  title: "Khóa học kỹ năng sử dụng After Effects",
  org: "Công ty Truyền thông và Sự kiện Kỉ Nguyên Vàng",
  period: "2022",
  note: "Hoàn thành tốt các bài tập được giao.",
};

const SOFTWARE = ["CapCut", "Pr", "Ae", "Ps"];

const VIDEO_PROJECTS = [
  { title: "Video 01", caption: "Dựng Video · Kênh Thỏ Đêm", src: `${BLOB}/video-editting/1.mp4` },
  { title: "Video 02", caption: "Dựng Video · Short / TikTok", src: `${BLOB}/video-editting/2.mp4` },
  { title: "Video 03", caption: "Dựng Video · Kênh Thỏ Đêm", src: `${BLOB}/video-editting/3.mp4` },
  { title: "Video 04", caption: "Dựng Video · Kênh Thỏ Đêm", src: `${BLOB}/video-editting/4.mp4` },
];

const MOTION_PROJECTS = [
  { title: "Motion 01", caption: "Motion Graphics · Hiệu ứng", src: `${BLOB}/motion-graphic/1.mp4` },
  { title: "Spot 16s", caption: "Motion Graphics · Cơ bản", src: `${BLOB}/motion-graphic/16s.mp4` },
  { title: "Home", caption: "Motion Graphics · Intro", src: `${BLOB}/motion-graphic/home.mp4` },
  { title: "Moca", caption: "Motion Graphics · Thương hiệu", src: `${BLOB}/motion-graphic/moca.mp4` },
  { title: "Ship 01", caption: "Motion Graphics · Sản phẩm", src: `${BLOB}/motion-graphic/ship1.mp4` },
  { title: "Ship 02", caption: "Motion Graphics · Sản phẩm", src: `${BLOB}/motion-graphic/ship2.mp4` },
];

const SERVICES = [
  {
    no: "01",
    title: "Dựng phim",
    desc: "Cắt ghép theo nhịp nội dung cho video dài và short, tăng tỷ lệ giữ chân người xem.",
  },
  {
    no: "02",
    title: "Chỉnh màu",
    desc: "Chỉnh màu cho từng khung hình, tạo tông màu nhất quán và cuốn hút.",
  },
  {
    no: "03",
    title: "Motion Graphics",
    desc: "Thiết kế phụ đề động và hiệu ứng chuyển cảnh bằng After Effects.",
  },
  {
    no: "04",
    title: "Xử lý âm thanh",
    desc: "Cân chỉnh âm lượng, làm sạch lời thoại và ghép nhạc nền hợp nhịp.",
  },
];

/* ------------------------------------------------------------------ */
/*  Trang                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="font-sans">
      {/* ---------- Thanh điều hướng ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <a href="#top" className="font-mono text-sm tracking-widest uppercase">
            {EDITOR.name}
          </a>
          <div className="hidden gap-8 font-mono text-xs tracking-widest uppercase sm:flex">
            <a href="#noi-bat" className="transition-colors hover:text-accent">
              Nổi bật
            </a>
            <a href="#gioi-thieu" className="transition-colors hover:text-accent">
              Giới thiệu
            </a>
            <a href="#video" className="transition-colors hover:text-accent">
              Video
            </a>
            <a href="#motion" className="transition-colors hover:text-accent">
              Motion
            </a>
            <a href="#dich-vu" className="transition-colors hover:text-accent">
              Dịch vụ
            </a>
            <a href="#lien-he" className="transition-colors hover:text-accent">
              Liên hệ
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
          <h1 className="font-extrabold text-[13vw] leading-[0.9] tracking-tight sm:text-[9vw]">
            {EDITOR.name}
          </h1>
          <p className="mt-4 font-mono text-lg text-muted sm:text-xl">
            {EDITOR.role}
          </p>
          <a
            href={CURRENT_JOB.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Đang dựng video cho {CURRENT_JOB.channel}
          </a>
          <div className="mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              {EDITOR.intro}
            </p>
            <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
              <p className="font-mono text-sm text-muted">{EDITOR.location}</p>
              <a
                href="#lien-he"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Bắt đầu dự án
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Dự án nổi bật ---------- */}
      <section id="noi-bat" className="border-t border-line px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 pb-10">
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
              ◖ Dự án nổi bật
            </p>
            <p className="max-w-xs text-sm text-muted">{FEATURED.caption}</p>
          </Reveal>
          <Reveal>
            <VideoFrame title={FEATURED.title} src={FEATURED.src} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Kết quả nổi bật ---------- */}
      <section className="relative overflow-hidden border-t border-line bg-grid px-6 py-16 sm:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-10 font-mono text-xs tracking-[0.3em] text-accent uppercase">
              ◖ Kết quả nổi bật
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <p className="font-extrabold text-4xl tracking-tight sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Giới thiệu ---------- */}
      <section id="gioi-thieu" className="border-t border-line px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
              ◖ Giới thiệu
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[440px_1fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-blue-950/40 via-zinc-900 to-black">
                {EDITOR.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={EDITOR.photo}
                    alt={EDITOR.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      Thêm ảnh vào EDITOR.photo
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
            <div className="flex flex-col gap-10">
              <Reveal>
                <p className="text-lg leading-relaxed text-muted">{EDITOR.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {STRENGTHS.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>

              <div className="grid gap-10 sm:grid-cols-2">
                <Reveal>
                  <h3 className="font-extrabold text-2xl tracking-tight">
                    Kỹ năng
                  </h3>
                  <div className="mt-4 space-y-4">
                    {SKILLS.map((skill) => (
                      <div key={skill.name}>
                        <p className="flex items-center gap-2 text-sm font-medium">
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {skill.name}
                        </p>
                        <p className="ml-3 text-sm text-muted">{skill.desc}</p>
                      </div>
                    ))}
                  </div>
                  <h3 className="mt-10 font-extrabold text-2xl tracking-tight">
                    Phần mềm
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {SOFTWARE.map((tool) => (
                      <span
                        key={tool}
                        className="flex h-11 min-w-11 items-center justify-center rounded-lg border border-line px-3 font-mono text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <h3 className="font-extrabold text-2xl tracking-tight">
                    Kinh nghiệm
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
                          <p className="text-xs text-accent">{exp.company}</p>
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
                  <h3 className="mt-10 font-extrabold text-2xl tracking-tight">
                    Chứng chỉ
                  </h3>
                  <div className="mt-4">
                    <p className="font-medium">{CERTIFICATE.title}</p>
                    <p className="text-xs text-muted">
                      {CERTIFICATE.org} · {CERTIFICATE.period}
                    </p>
                    <p className="mt-1 text-sm text-muted">{CERTIFICATE.note}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Dựng Video ---------- */}
      <SectionDivider title="Dựng Video" subtitle="Sản phẩm tiêu biểu" />

      <section id="video" className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-12 max-w-xl text-sm text-muted">
              Lưu ý: các video bên dưới do mình biên tập nhằm thể hiện kỹ năng
              dựng phim. Bản quyền nội dung gốc thuộc về các tác giả tương ứng.
            </p>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {VIDEO_PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 100}>
                <VideoFrame title={project.title} src={project.src} />
                <p className="mt-4 font-mono text-xs tracking-[0.15em] text-muted uppercase">
                  {project.caption}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Motion Graphics ---------- */}
      <SectionDivider title="Motion Graphics" subtitle="Sản phẩm tiêu biểu" />

      <section id="motion" className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2">
            {MOTION_PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 100}>
                <VideoFrame title={project.title} src={project.src} />
                <p className="mt-4 font-mono text-xs tracking-[0.15em] text-muted uppercase">
                  {project.caption}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Dịch vụ ---------- */}
      <section id="dich-vu" className="border-t border-line px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 font-extrabold text-4xl tracking-tight sm:text-6xl">
              Mình làm gì
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

      {/* ---------- Liên hệ ---------- */}
      <footer
        id="lien-he"
        className="relative overflow-hidden border-t border-line bg-grid px-6 pb-10 pt-24 sm:px-10 sm:pt-32"
      >
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
              ◖ Liên hệ
            </p>
            <h2 className="mt-6 font-extrabold text-[14vw] leading-[0.9] tracking-tight sm:text-[9vw]">
              Cảm ơn bạn!
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${EDITOR.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {EDITOR.email}
                <span>→</span>
              </a>
              <a
                href={`tel:${EDITOR.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-4 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {EDITOR.phone}
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
              © {new Date().getFullYear()} {EDITOR.name}. Đã đăng ký bản quyền.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
