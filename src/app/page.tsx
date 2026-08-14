
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioChat from "@/components/PortfolioChat";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-screen max-w-6xl items-center px-5 py-24 sm:px-6">
          <div className="grid w-full gap-12 md:gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Main content */}
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <p className="mt-6 font-mono text-sm tracking-wide text-zinc-500">
                PHUNG THANH TUNG // CYBERSECURITY
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Cybersecurity Student
                <span className="block text-zinc-500">
                  &amp; Security Researcher
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8">
                Focused on Security Operations, Blue Team, Threat Hunting,
                Detection Engineering, and practical security research.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
                >
                  Explore Projects →
                </a>

                <a
                  href="https://github.com/kaelorphung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-5 py-3 font-medium text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/thanh-tung-phung-421680429/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-800 px-5 py-3 font-medium text-zinc-400 transition hover:border-zinc-600 hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Security profile */}
            <div className="relative">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 backdrop-blur sm:p-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="font-mono text-xs text-zinc-400">
                      SECURITY PROFILE
                    </span>
                  </div>

                  <span className="font-mono text-xs text-zinc-600">
                    0x01
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="font-mono text-xs text-zinc-600">
                      PRIMARY FOCUS
                    </p>

                    <p className="mt-1 text-sm text-zinc-200">
                      Blue Team / Security Operations
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-zinc-600">
                      SPECIALIZATION
                    </p>

                    <p className="mt-1 text-sm text-zinc-200">
                      Threat Hunting / Detection Engineering
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-zinc-600">
                      ENVIRONMENT
                    </p>

                    <p className="mt-1 text-sm text-zinc-200">
                      Linux / Windows / SIEM Labs
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-zinc-600">
                      CURRENT MODE
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />

                      <span className="font-mono text-xs text-emerald-400">
                        LEARNING // BUILDING // RESEARCHING
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 right-2 hidden rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-xs text-zinc-600 sm:block lg:-right-5">
                <span className="text-emerald-400">sys:</span> online
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <PortfolioChat />
    </main>
  );
}

