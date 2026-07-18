import Image from "next/image";

const stats = [
  { value: "10", label: "hackathons per year" },
  { value: "1", label: "meeting per week" },
  { value: "20+", label: "like-minded people" },
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
    text: "The first few weeks involve introducing ourselves, discussing hackathons, and forming teams. ",
  },
  {
    title: "Sprint sessions",
    text: "Every week, hackers will learn new skills, and note down ideas in Google Sheets",
  },
  {
    title: "Hackathon days",
    text: "Across the year, we will attend 10 hackathons together, providing numerous opporunities to learn, build, and win.",
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
          {/* Make image around 200px x 200px */}
          <Image
            src="/logo.png"
            alt="Hackademies logo"
            className="h-16 w-16 rounded-full border border-white/10 bg-white/5 p-2 sm:h-20 sm:w-20"
            width={200}
            height={200}
          />
          <a
            href="https://forms.gle/mtzFw2yoVYfPp8aN8"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
          >
            Join the club
          </a>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="max-w-3xl space-y-8">


            <div className="space-y-5">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hackademies
                <span className="block text-slate-400">Build and Ship together.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Hackademies is a hackathon club in the Academies of Loudoun, made
                for students who want to learn, collaborate, and ship creative
                projects together.
              </p>
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

              <p className="mt-4 text-2xl font-medium leading-tight text-slate-100">
                Built by hackathon winners, for hackathon winners.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Hackademies guarantees a safe and supportive environment for students of all skill
                levels to learn, build, and pitch their ideas. Our club is designed to help students
                use code to solve real-world problems.
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
              WHAT WE DO
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Connect coders and creators to build together.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Hackademies is not just an ACL club—it is a community of
              students who like to collaborate, stay up at night, and
              <span className="font-semibold text-slate-100"> win</span>.
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

        <section className="grid place-items-center gap-6 border-t border-white/10 py-12 lg:grid-cols-[1.05fr_0.95fr]" id="join">
          <div className="mx-auto w-full max-w-2xl rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"> JOIN US </p>
            <h2 className="mt-4 text-3xl font-semibold text-white"> Join Hackademies and start building today. </h2>
            <p className="mt-4 text-base leading-7 text-slate-400"> Hackademies is open to all students in the Academies of Loudoun. Whether you are a beginner or an experienced hacker, we welcome you to join our community and start building amazing projects together. </p>
            <div className="flex items-center justify-center">
              <a href="https://forms.gle/mtzFw2yoVYfPp8aN8" className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-center text-lg font-semibold text-slate-100 transition-colors hover:bg-white/10"> Join the club </a>
            </div>
          </div>
        </section>


        <footer className="mt-10 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>Hackademies | Academies of Loudoun; Acskhat Tiwari. All rights reserved.</p>
          <p>Contact: <a href="mailto:hackademies@gmail.com" className="text-slate-400 hover:text-slate-300">hackademies@gmail.com</a></p>
        </footer>
      </div>
    </main>
  );
}
