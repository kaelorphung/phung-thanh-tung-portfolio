
const experiences = [
  {
    role: "Cybersecurity Student",
    organization:
      "Posts and Telecommunications Institute of Technology",
    period: "2023 — Present",
    type: "Education / Technical Development",
    description:
      "Building a strong foundation in cybersecurity through coursework, practical labs, security research, and independent technical projects.",
    highlights: [
      "Security Operations",
      "Blue Team",
      "Threat Hunting",
      "Security Research",
    ],
  },
  {
    role: "Security Lab Researcher",
    organization: "Personal Security Labs",
    period: "2024 — Present",
    type: "Independent Practice",
    description:
      "Developing hands-on security environments to study telemetry, monitoring, detection engineering, and incident investigation.",
    highlights: [
      "SIEM & Log Analysis",
      "Detection Engineering",
      "Sysmon & Endpoint Telemetry",
      "Incident Investigation",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-sm text-emerald-400">
            04 // EXPERIENCE
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Experience
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Practical cybersecurity experience developed through academic
            study, independent research, and hands-on security labs.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-zinc-800 md:block" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.organization}`}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-2 border-emerald-400 bg-zinc-950 md:block" />

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                        {experience.type}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-base text-zinc-300">
                        {experience.organization}
                      </p>
                    </div>

                    <span className="font-mono text-sm text-zinc-500">
                      {experience.period}
                    </span>
                  </div>

                  <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Learning statement */}
        <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.03] p-6">
          <p className="font-mono text-sm leading-7 text-zinc-400">
            <span className="text-emerald-400">STATUS //</span>{" "}
            Continuously building practical experience through security labs,
            technical projects, research, and independent learning.
          </p>
        </div>
      </div>
    </section>
  );
}

