const skillGroups = [
  {
    title: "Security Operations",
    label: "01",
    description:
      "Core defensive security skills focused on monitoring, triage, investigation, and incident response.",
    skills: [
      "SOC Operations",
      "SIEM",
      "Log Analysis",
      "Incident Detection",
      "Threat Hunting",
      "Alert Triage",
    ],
  },
  {
    title: "SIEM & Monitoring",
    label: "02",
    description:
      "Hands-on experience with security monitoring platforms and centralized telemetry analysis.",
    skills: [
      "Wazuh",
      "ELK Stack",
      "Splunk",
      "Sysmon",
      "Security Monitoring",
      "Log Correlation",
    ],
  },
  {
    title: "Systems & Security",
    label: "03",
    description:
      "Working knowledge of operating systems and environments commonly used in security labs.",
    skills: [
      "Linux",
      "Kali Linux",
      "Ubuntu",
      "Windows",
      "Windows Security",
      "Network Security",
    ],
  },
  {
    title: "Programming & Development",
    label: "04",
    description:
      "Programming and web development skills used to build security tools, labs, and technical projects.",
    skills: [
      "Python",
      "C",
      "C++",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-sm text-emerald-400">
            02 // SKILLS
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Technical Skills
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            A practical foundation across defensive security, SIEM,
            systems, and software development, built through hands-on
            labs and technical projects.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-sm text-emerald-400">
                    {group.label}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <span className="text-xl text-zinc-700 transition group-hover:text-emerald-400">
                  ↗
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Learning statement */}
        <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.03] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <span className="font-mono text-sm text-emerald-400">
              NOTE
            </span>

            <p className="max-w-4xl text-sm leading-7 text-zinc-400">
              These skills represent tools and technologies I have
              practiced through coursework, security labs, and personal
              projects. I am continuously expanding this stack through
              hands-on experimentation and research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}