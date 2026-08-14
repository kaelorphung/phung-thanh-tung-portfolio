
export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="font-mono text-sm text-emerald-400">
            01 // ABOUT
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Main introduction */}
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              I&apos;m a cybersecurity student with a strong interest in
              Security Operations, Blue Team, Threat Hunting, and Security
              Research.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              I enjoy building practical security labs to understand how
              attacks happen, what telemetry they generate, and how defenders
              can detect and investigate suspicious activity.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              My current focus is developing hands-on experience with
              security monitoring, SIEM platforms, endpoint telemetry,
              detection engineering, and Linux/Windows security environments.
            </p>
          </div>

          {/* Quick facts */}
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="font-mono text-xs text-zinc-500">
                FOCUS
              </p>

              <p className="mt-2 font-medium text-white">
                Blue Team & Security Operations
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="font-mono text-xs text-zinc-500">
                INTERESTS
              </p>

              <p className="mt-2 font-medium text-white">
                Threat Hunting & Detection Engineering
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="font-mono text-xs text-zinc-500">
                APPROACH
              </p>

              <p className="mt-2 font-medium text-white">
                Learn → Build → Investigate → Improve
              </p>
            </div>
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <p className="font-mono text-2xl text-emerald-400">
              01
            </p>

            <h3 className="mt-4 font-semibold text-white">
              Hands-on Labs
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Building security environments to practice real-world
              investigation workflows.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <p className="font-mono text-2xl text-emerald-400">
              02
            </p>

            <h3 className="mt-4 font-semibold text-white">
              Detection
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Turning endpoint and network telemetry into useful security
              detections.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <p className="font-mono text-2xl text-emerald-400">
              03
            </p>

            <h3 className="mt-4 font-semibold text-white">
              Continuous Learning
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Constantly improving through labs, research, experimentation,
              and security projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

