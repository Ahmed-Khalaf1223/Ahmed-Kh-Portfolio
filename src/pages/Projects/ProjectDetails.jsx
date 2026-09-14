import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  const currentIndex = projects.findIndex((item) => item.id === id);

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Project Hero */}
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-6xl">
          {/* Back */}
          <div className="mb-10 flex items-center justify-between">
            {/* Category */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-orange-500">
              {project.category}
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition hover:gap-3"
            >
              ← Back to all Projects
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500 dark:text-gray-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm dark:border-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
            >
              Live Demo ↗
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Main Project Image */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* About & Features */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {/* About Project */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-orange-500">
              About Project
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">Project Overview</h2>

            <p className="mt-6 leading-8 text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-orange-500">
              Key Features
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">What I Built</h2>

            <div className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 dark:border-gray-800"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
                    ✓
                  </span>

                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-orange-500">
              Project Gallery
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">More Screenshots</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4 w-full max-h-fit">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={screenshot}
                className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800"
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className=" transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl border-t border-gray-200 pt-10 dark:border-gray-800">
          {/* Previous / Next */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Previous */}
            {previousProject ? (
              <Link
                to={`/projects/${previousProject.id}`}
                className="group rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ← Previous Project
                </span>

                <h3 className="mt-3 text-2xl font-bold transition group-hover:text-orange-500">
                  {previousProject.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {/* Next */}
            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group rounded-2xl border border-gray-200 p-6 text-right transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Next Project →
                </span>

                <h3 className="mt-3 text-2xl font-bold transition group-hover:text-orange-500">
                  {nextProject.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;
