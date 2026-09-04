import Image from "next/image";

const stats = [
  { value: "20+", label: "members" },
  { value: "2", label: "hackathon wins" },
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
    text: "GitHub, VS Code, and the five Git commands that actually matter under time pressure. By the end of the hour your first commit is pushed.",
    highlight: "",
  },
  {
    week: "Week 3",
    title: "Coding with AI without getting wrecked",
    text: "How to prompt with your file, your error, and what you expected. Where it confidently invents functions that don't exist. We break a file on purpose and fix it together, live.",
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
    text: "A real judging rubric, why good projects lose, and the two-minute demo structure. You get 60 seconds at the front of the room.",
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
      "Mondays or Tuesdays, Room 1202. Check the club chat for this week's day.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f1e8] text-[#2b2620]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(91,33,182,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(91,33,182,0.09)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4 border-b border-[#2b2620]/15 pb-5">
          {/* Make image around 200px x 200px */}
          <Image
            src="/logo.png"
            alt="Hackademies logo"
            className="h-16 w-16 rounded-full border border-[#2b2620]/15 bg-white/50 p-2 sm:h-20 sm:w-20"
            width={200}
            height={200}
          />
          <a
            href="https://forms.gle/mtzFw2yoVYfPp8aN8"
            className="rounded-[5px] bg-[#5b21b6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#521ea4]"
          >
            Join the club
          </a>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="max-w-3xl space-y-8">


            <div className="space-y-5">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-[#2b2620] sm:text-6xl lg:text-7xl">
                Hackademies
                <span className="block text-[#2b2620]/80">Build and Ship together.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#2b2620]/70 sm:text-xl">
                Hackademies is a hackathon club in the Academies of Loudoun, made
                for students who want to learn, collaborate, and ship creative
                projects together.
              </p>
            </div>



            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-[5px] bg-[#5b21b6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#521ea4]"
              >
                See what we&apos;ve built
              </a>
              <a
                href="https://forms.gle/mtzFw2yoVYfPp8aN8"
                className="rounded-[5px] bg-[#5b21b6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#521ea4]"
              >
                Join the club
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-[#5b21b6]/20 bg-[#2b2620]/[.04] p-6 text-[#2b2620]">

              <p className="mt-4 text-2xl font-medium leading-tight text-[#2b2620]">
                Built by hackathon winners, for all.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#2b2620]/70">
                Come in at any skill level. You will learn, build, and pitch alongside people
                doing the same thing, and you will leave with something you made that solves a
                real problem.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-[#2b2620]/15 bg-white/50 p-5"
                >
                  <p className="font-mono text-3xl font-semibold text-[#2b2620]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#2b2620]/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#2b2620]/15 py-12" id="projects">
          <h2 className="sr-only">Projects from our members</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[1.5rem] border border-[#2b2620]/15 bg-white/50"
              >
                {/* TODO: swap in higher-resolution project screenshots when we have them */}
                <div className="relative aspect-[16/10] w-full border-b border-[#2b2620]/15 bg-[#2b2620]/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-1 rounded-full border border-[#2b2620]/15 bg-white/50 px-3 py-1.5 text-xs font-medium text-[#2b2620]/70">
                    <span>{project.badge}</span>
                    {project.badgeAccent ? (
                      <span className="text-sm font-semibold text-[#5b21b6]">
                        {project.badgeAccent}
                      </span>
                    ) : null}
                  </p>
                  <h3 className="mt-4 text-xl font-medium text-[#2b2620]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#2b2620]/70">{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#2b2620]/15 py-8" id="what-we-do">
          <h2 className="text-3xl font-semibold text-[#2b2620]">
            First B day of the week, Room 1202
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#2b2620]/70">
            Meetings vary — some weeks are a short lesson plus work time, some are full
            build sessions before a hackathon.
          </p>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#2b2620]/70">
            To join, fill out the registration form, bring a laptop, and show up.
          </p>
          {/* TODO: confirm this is the registration form — currently the same
              Google Form the header and join section point at. */}
          <a
            href="https://forms.gle/mtzFw2yoVYfPp8aN8"
            className="mt-6 inline-flex rounded-[5px] bg-[#5b21b6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#521ea4]"
          >
            Registration form
          </a>
        </section>

        <section className="border-t border-[#2b2620]/15 py-12" id="roadmap">
          <h2 className="max-w-3xl text-3xl font-semibold text-[#2b2620]">
            From zero to your first hackathon in five lunches.
          </h2>

          <ol className="mt-8 space-y-4">
            {sessions.map((session) => (
              <li
                key={session.week}
                className="rounded-[1.5rem] border border-[#2b2620]/15 bg-white/50 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2620]/60">
                  {session.week}
                </p>
                <h3 className="mt-3 text-xl font-medium text-[#2b2620]">{session.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#2b2620]/70">
                  {session.text}
                </p>
                {session.highlight ? (
                  <p className="mt-3 text-base font-medium leading-7 text-[#5b21b6]">
                    {session.highlight}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-[#2b2620]/15 py-12" id="hackathons">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2620]/60">
            WHERE WE GO
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#2b2620]">
            10 hackathons. We go together.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#2b2620]/70">
            We attend as a club — teams form at meetings, and nobody shows up alone.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {hackathons.map((event) => (
              <li
                key={event.name}
                className="rounded-[1.5rem] border border-[#2b2620]/15 bg-white/50 p-6"
              >
                <p className="text-lg font-medium text-[#2b2620]">{event.name}</p>
                <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-7 text-[#2b2620]/70">
                  <span>{event.date}</span>
                  <span aria-hidden="true" className="text-[#2b2620]/50">·</span>
                  <span>{event.format}</span>
                  <span aria-hidden="true" className="text-[#2b2620]/50">·</span>
                  <span>{event.cost}</span>
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#2b2620]/60">
            *Dates marked with an asterisk are last season&apos;s. The 2026–27
            dates have not been announced yet and may move.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#2b2620]/70">
            Plus more announced through the year.
          </p>
        </section>

        <section className="border-t border-[#2b2620]/15 py-12" id="officers">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2620]/60">
            OFFICERS
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#2b2620]">Who runs this.</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {officers.map((officer) => (
              <article
                key={officer.name}
                className="overflow-hidden rounded-[1.5rem] border border-[#2b2620]/15 bg-white/50"
              >
                <div className="relative aspect-[4/5] w-full border-b border-[#2b2620]/15 bg-white/50">
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
                        className="font-mono text-4xl font-semibold tracking-[0.2em] text-[#2b2620]/50"
                      >
                        {officer.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#2b2620]">{officer.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2620]/60">
                    {officer.role}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#2b2620]/70">{officer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#2b2620]/15 py-12" id="faq">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2620]/60">
            QUESTIONS
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#2b2620]">Before you join.</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-[#2b2620]/15 bg-white/50 p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-[#2b2620] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="font-mono text-xl leading-none text-[#5b21b6] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#2b2620]/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="grid place-items-center gap-6 border-t border-[#2b2620]/15 py-12 lg:grid-cols-[1.05fr_0.95fr]" id="join">
          <div className="mx-auto w-full max-w-2xl rounded-[1.5rem] border border-[#2b2620]/15 bg-white/50 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2620]/60"> JOIN US </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#2b2620]"> Join Hackademies and start building today. </h2>
            <p className="mt-4 text-base leading-7 text-[#2b2620]/70"> Hackademies is open to all students in the Academies of Loudoun. Whether you are a beginner or an experienced hacker, we welcome you to join our community and start building amazing projects together. </p>
            <div className="flex items-center justify-center">
              <a href="https://forms.gle/mtzFw2yoVYfPp8aN8" className="rounded-[5px] bg-[#5b21b6] px-6 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-[#521ea4]"> Join the club </a>
            </div>
          </div>
        </section>


        <footer className="mt-10 border-t border-[#2b2620]/15 py-6 text-sm text-[#2b2620]/60 sm:flex sm:items-center sm:justify-between">
          <p>Hackademies | Academies of Loudoun; Acskhat Tiwari. All rights reserved.</p>
          <p>Contact: <a href="mailto:hackademies@gmail.com" className="text-[#2b2620]/70 hover:text-[#5b21b6]">hackademies@gmail.com</a></p>
        </footer>
      </div>
    </main>
  );
}
