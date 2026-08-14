
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectArchitecture from "@/components/ProjectArchitecture";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const objectives = project.objectives ?? [];
  const features = project.features ?? [];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Back */}
        <Link
          href="/#projects"
          className="font-mono text-sm text-zinc-500 transition hover:text-emerald-400"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-12">
          <p className="font-mono text-sm text-emerald-400">
            PROJECT // {project.slug}
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            {project.title}
          </h1>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-zinc-900 px-3 py-1.5 font-mono text-sm text-emerald-400"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium transition hover:border-emerald-400 hover:text-emerald-400"
            >
              GitHub ↗
            </a>

            <Link
              href="/#projects"
              className="rounded-lg border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              Back
            </Link>
          </div>
        </div>

        {/* Architecture */}
        {project.slug === "attack-defense-lab" && (
          <ProjectArchitecture />
        )}

        {/* Overview */}
        <section className="mt-20 border-t border-zinc-800 pt-12">
          <p className="font-mono text-sm text-emerald-400">
            OVERVIEW
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Project Overview
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            {project.overview}
          </p>
        </section>

        {/* Objectives */}
        {objectives.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-sm text-emerald-400">
              OBJECTIVES
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What I Wanted to Practice
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {objectives.map((objective, index) => (
                <div
                  key={objective}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-emerald-400/40"
                >
                  <div className="flex gap-3">
                    <span className="font-mono text-emerald-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="leading-7 text-zinc-400">
                      {objective}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {features.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-sm text-emerald-400">
              FEATURES
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Key Features
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-emerald-400/40"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-400">
                      ▹
                    </span>

                    <p className="leading-7 text-zinc-400">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom navigation */}
        <div className="mt-20 border-t border-zinc-800 pt-8">
          <Link
            href="/#projects"
            className="font-mono text-sm text-zinc-500 transition hover:text-emerald-400"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}

