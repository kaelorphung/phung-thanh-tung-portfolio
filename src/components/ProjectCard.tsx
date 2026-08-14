
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
      {/* Accent line */}
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-emerald-400 transition duration-300 group-hover:scale-x-100" />

      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            Security Project
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
        </div>

        <span className="shrink-0 text-zinc-700 transition duration-300 group-hover:text-emerald-400">
          ↗
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-600">
          Stack
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          prefetch={false}
          className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          View Case Study →
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}

