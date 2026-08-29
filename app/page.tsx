import Image from "next/image";

const stats = [
  { value: "10", label: "hackathons per year" },
  { value: "1", label: "meeting per week" },
  // TODO: add the ACL Hacks participant count to this label once confirmed
  // (e.g. "hackathon we ran, 300 participants"). Swap this tile for a concrete
  // membership number instead if we ever have one worth showing.
  { value: "1", label: "hackathon we ran" },
];

const pillars = [
  "Build together",
  "Learn by shipping",
  "Pitch with confidence",
  "Support every skill level",
];

const projects = [
  {
    image: "/VisionAidCongo.png",
    title: "VisionAid Congo",
    badge: "Sponsor prize — DSH Hacks,",
    badgeAccent: "1,500 participants",
    text: "Offline, multilingual AI obstacle detection for visually impaired users in the DRC. Works with no internet connection.",
  },
  {
    image: "/DissCourse.png",
    title: "DissCourse",
    badge: "ACL Hacks",
    badgeAccent: "",
    text: "A debate platform where AI clones of famous figures argue any topic. Built for classrooms and for fun.",
  },
];

const sessions = [
  {
    week: "Week 1",
    title: "What a hackathon actually is",
    text: "24–36 hours, a theme, a team, and a demo at the end. We walk through real winning high school projects and name the events we're going to this year.",
    highlight: "",
  },
  {
    week: "Week 2",
    title: "Your setup",
    text: "GitHub, VS Code, and the five Git commands that actually matter under time pressure. Everyone pushes a commit before they leave.",
    highlight: "",
  },
  {
    week: "Week 3",
    title: "Coding with AI without getting wrecked",
    text: "How to prompt with your file, your error, and what you expected. Where it confidently invents functions that don't exist. Everyone debugs a broken file live.",
    highlight: "",
  },
  {
    week: "Week 4",
    title: "Ship it",
    text: "A static site from GitHub to Vercel, start to finish, in one meeting.",
    highlight: "Everyone leaves with a live URL.",
  },
  {
    week: "Week 5",
    title: "What actually wins",
    text: "A real judging rubric, why good projects lose, and the two-minute demo structure. Everyone demos in 60 seconds.",
    highlight: "",
  },
];

// Dates carrying an asterisk are last season's — the 2026–27 dates were not
// announced when this was written. Drop the asterisk once they are confirmed.
const hackathons = [
  {
    // Confirmed on hoyahacks.georgetown.domains and the 2027 Devpost.
    // Has a separate high school registration form.
    // TODO: confirm there is no registration fee — the site does not say.
    name: "Hoya Hacks",
    date: "Jan 22–24, 2027",
    format: "In person — Georgetown, Washington DC",
    cost: "[Cost TBC]",
  },
  {
    // TODO: replace with exact 2027 dates when HackTJ 14.0 announces them.
    // HackTJ 13.0 ran March 7–8, 2026 at Cvent HQ in McLean, VA.
    name: "HackTJ",
    date: "March 2027*",
    format: "In person — McLean, VA",
    cost: "Free",
  },
  {
    // TODO: replace with exact 2027 dates when Bitcamp announces them.
    // Bitcamp 2026 ran April 10–12. High schoolers need a legal chaperone.
    name: "Bitcamp",
    date: "April 2027*",
    format: "In person — UMD College Park",
    cost: "Free",
  },
  {
    // TODO: fill in our own event — date and cost. We run this one.
    name: "ACL Hacks (Academies Hacks)",
    date: "[DATE]",
    format: "In person — Academies of Loudoun",
    cost: "[Cost TBC]",
  },
];

const officers = [
  {
    name: "Ackshat Tiwari",
    role: "Co-founder",
    text: "DSH Hacks winner. Nearly 15 hackathons attended.",
    image: "/Ackshat.png",
    initials: "AT",
  },
  {
    name: "Aaron Ning",
    role: "Co-founder",
    text: "Tilly Hacks winner.",
    image: "/Aaron.png",
    initials: "AN",
  },
  {
    // TODO: no photo for Dr. Shapiro yet — the initials tile stands in.
    // Drop a file in /public and set `image` to its path to replace it.
    name: "Dr. Shapiro",
    role: "Faculty sponsor",
    text: "CS teacher at the Academies of Loudoun.",
    image: "",
    initials: "DS",
  },
];

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Week 1 assumes nothing. By Week 4 you will have deployed a live site.",
  },
  {
    question: "Do I need a team?",
    answer:
      "No. Teams form at meetings. If you come with friends, team up with them. If you come alone, we pair you up.",
  },
  {
    // TODO: add a line here about event fees and travel once the hackathon
    // list above is filled in with real costs.
    question: "Does it cost anything?",
    answer: "Club membership is free.",
  },
  {
    question: "How much time is this?",
    answer:
      "One lunch meeting a week. Hackathons are optional — go to one or go to all ten.",
  },
  {
    question: "What if I've never been to a hackathon?",
    answer:
      "That is who the five-week roadmap is for. Most of our members started with zero.",
  },
  {
    // TODO: replace [ROOM] with the actual meeting room number.
    question: "When and where do you meet?",
    answer:
      "Mondays or Tuesdays, [ROOM]. Check the club chat for this week's day.",
  },
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



            <div className="flex flex-wrap gap-4">
              <a
                href="#roadmap"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
              >
                See the roadmap
              </a>
              <a
                href="#hackathons"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
              >
                Where we go
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

        <section className="border-t border-white/10 py-12" id="projects">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            WHAT WE&apos;VE BUILT
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Projects from our members.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]"
              >
                {/* TODO: swap in higher-resolution project screenshots when we have them */}
                <div className="relative aspect-[16/10] w-full border-b border-white/10 bg-black/40">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400">
                    <span>{project.badge}</span>
                    {project.badgeAccent ? (
                      <span className="text-sm font-semibold text-sky-400">
                        {project.badgeAccent}
                      </span>
                    ) : null}
                  </p>
                  <h3 className="mt-4 text-xl font-medium text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-12" id="what-we-do">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              WHAT WE DO
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Connect coders and creators to build together.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
              Hackademies is not just an ACL club—it is a community of
              students who like to collaborate, stay up at night, and
              <span className="font-semibold text-slate-100"> win</span>.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-12" id="roadmap">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            THE ROADMAP
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white">
            From zero to your first hackathon in five lunches.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Five meetings. No experience needed. You leave the fifth one having
            demoed something live.
          </p>

          <ol className="mt-8 space-y-4">
            {sessions.map((session, index) => (
              <li
                key={session.week}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:flex sm:gap-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-sky-400 sm:w-12 sm:shrink-0 sm:pt-1">
                  0{index + 1}
                </p>
                <div className="mt-4 sm:mt-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {session.week}
                  </p>
                  <h3 className="mt-3 text-xl font-medium text-white">{session.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                    {session.text}
                  </p>
                  {session.highlight ? (
                    <p className="mt-3 text-base font-medium leading-7 text-sky-400">
                      {session.highlight}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-white/10 py-12" id="hackathons">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            WHERE WE GO
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            10 hackathons. We go together.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            We attend as a club — teams form at meetings, and nobody shows up alone.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {hackathons.map((event) => (
              <li
                key={event.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-lg font-medium text-white">{event.name}</p>
                <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-7 text-slate-400">
                  <span>{event.date}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{event.format}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{event.cost}</span>
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
            *Dates marked with an asterisk are last season&apos;s. The 2026–27
            dates have not been announced yet and may move.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Plus more announced through the year.
          </p>
        </section>

        <section className="border-t border-white/10 py-12" id="officers">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            OFFICERS
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Who runs this.</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {officers.map((officer) => (
              <article
                key={officer.name}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/5] w-full border-b border-white/10 bg-white/5">
                  {officer.image ? (
                    <Image
                      src={officer.image}
                      alt={officer.name}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="font-mono text-4xl font-semibold tracking-[0.2em] text-slate-600"
                      >
                        {officer.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white">{officer.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {officer.role}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{officer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-12" id="faq">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            QUESTIONS
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Before you join.</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="font-mono text-xl leading-none text-sky-400 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{faq.answer}</p>
              </details>
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
