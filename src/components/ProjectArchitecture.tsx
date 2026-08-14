export default function ProjectArchitecture() {
  return (
    <section className="mt-20">
      <p className="font-mono text-sm text-emerald-400">
        04 // ARCHITECTURE
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Security Lab Architecture
      </h2>

      <p className="mt-4 max-w-3xl text-zinc-400">
        A simulated security environment designed to collect,
        centralize, monitor, and analyze security events across
        multiple systems.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/30 p-8">
        <div className="min-w-[700px]">

          {/* Attacker */}
          <div className="flex justify-center">
            <div className="rounded-lg border border-red-500/40 bg-red-500/5 px-6 py-4 text-center">
              <p className="font-mono text-xs text-red-400">
                THREAT ACTOR
              </p>

              <p className="mt-1 font-semibold">
                Attacker
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="py-4 text-center text-zinc-600">
            ↓
          </div>

          {/* Hosts */}
          <div className="flex justify-center gap-4">
            <div className="rounded-lg border border-zinc-700 px-6 py-4 text-center">
              <p className="font-mono text-xs text-zinc-500">
                HOST
              </p>

              <p className="mt-1 font-medium">
                Windows
              </p>
            </div>

            <div className="rounded-lg border border-zinc-700 px-6 py-4 text-center">
              <p className="font-mono text-xs text-zinc-500">
                HOST
              </p>

              <p className="mt-1 font-medium">
                Linux
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="py-4 text-center text-zinc-600">
            ↓
          </div>

          {/* Collection */}
          <div className="flex justify-center">
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 px-8 py-4 text-center">
              <p className="font-mono text-xs text-emerald-400">
                LOG COLLECTION
              </p>

              <p className="mt-1 font-semibold">
                Wazuh
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="py-4 text-center text-zinc-600">
            ↓
          </div>

          {/* SIEM */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-zinc-700 p-5 text-center">
              <p className="font-mono text-xs text-zinc-500">
                SIEM
              </p>

              <p className="mt-1 font-medium">
                ELK Stack
              </p>
            </div>

            <div className="rounded-lg border border-zinc-700 p-5 text-center">
              <p className="font-mono text-xs text-zinc-500">
                SIEM
              </p>

              <p className="mt-1 font-medium">
                Splunk
              </p>
            </div>

            <div className="rounded-lg border border-zinc-700 p-5 text-center">
              <p className="font-mono text-xs text-zinc-500">
                ANALYSIS
              </p>

              <p className="mt-1 font-medium">
                Detection
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}