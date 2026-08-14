
const contactLinks = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/kaelorphung",
    href: "https://github.com/kaelorphung",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thanh-tung-phung-421680429",
    href: "https://www.linkedin.com/in/thanh-tung-phung-421680429/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Introduction */}
          <div>
            <p className="font-mono text-sm text-emerald-400">
              05 // CONTACT
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Connect
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I&apos;m interested in cybersecurity, security research,
              technical projects, and opportunities to learn through
              real-world challenges.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
              Feel free to reach out to discuss a project, explore
              collaboration opportunities, or exchange technical ideas.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <span className="font-mono text-sm text-zinc-400">
                Open to opportunities and collaboration
              </span>
            </div>
          </div>

          {/* Contact links */}
          <div className="space-y-4">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" ? undefined : "_blank"}
                rel={
                  contact.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                    {contact.label}
                  </p>

                  <p className="mt-2 text-sm text-zinc-300 transition group-hover:text-emerald-400">
                    {contact.value}
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:text-emerald-400">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.03] p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-sm text-emerald-400">
                READY // CONNECT
              </p>

              <p className="mt-2 text-lg font-medium text-white">
                Interested in cybersecurity and security engineering?
              </p>
            </div>

            <a
              href="mailto:your-email@example.com"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
            >
              Send an Email →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

