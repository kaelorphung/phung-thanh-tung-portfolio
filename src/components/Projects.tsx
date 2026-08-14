
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-sm text-emerald-400">
            03 // PROJECTS
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Selected security labs and software projects focused on
            practical problem-solving, detection, and technical development.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="relative"
            >
              <span className="absolute -left-1 top-8 hidden font-mono text-xs text-zinc-700 xl:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <a
            href="https://github.com/kaelorphung"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-zinc-500 transition hover:text-emerald-400"
          >
            View more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

