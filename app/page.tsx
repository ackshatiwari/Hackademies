import Image from "next/image";

const stats = [
  { value: "12", label: "workshops per term" },
  { value: "24", label: "hours of building" },
  { value: "1", label: "shared hackathon club" },
];

const pillars = [
  "Build together",
  "Learn by shipping",
  "Pitch with confidence",
  "Support every skill level",
];

const roadmap = [
  {
    title: "Kickoff",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Sprint sessions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Demo day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

const tracks = [
  "Product design",
  "Web apps",
  "Hardware ideas",
  "Creative pitching",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] text-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_65%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src="/logo.png"
                alt="Hackademies logo"
                fill
                priority
                className="object-contain p-1.5"
              />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                Hackademies
              </p>
              <p className="text-sm text-slate-300">Hackathon club template</p>
            </div>
          </div>
          <a
            href="#join"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
          >
            Join the club
          </a>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              High school hackathon club
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build ideas.
                <span className="block text-slate-400">Ship together.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Hackademies is a hackathon club for students who want to learn,
                collaborate, and ship creative projects together.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {pillar}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4" id="join">
              <a
                href="#roadmap"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
              >
                See the roadmap
              </a>
              <a
                href="#tracks"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
              >
                Explore tracks
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0c1018] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Featured club note
              </p>
              <p className="mt-4 text-2xl font-medium leading-tight text-slate-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-mono text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-12 lg:grid-cols-[0.95fr_1.05fr]" id="roadmap">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Lorem ipsum and hackathon club energy.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {roadmap.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="rounded-[1.5rem] border border-white/10 bg-[#0b0f16] px-7 py-8 text-white"
          id="tracks"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Tracks
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Hackademies keeps the focus on real building.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[28rem]">
              {tracks.map((track) => (
                <div
                  key={track}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
                >
                  {track}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>Hackademies | High school hackathon club</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </footer>
      </div>
    </main>
  );
}
