import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../../components/Projects/ProjectCard";

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-white py-24 dark:bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[4px] text-[#FD853A]">
            My Work
          </p>

          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            All Projects
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Explore some of the projects I have built using modern front-end
            technologies, focusing on clean UI, responsive design, and reusable
            components.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-[#FD853A] bg-[#FD853A] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#FD853A] hover:text-[#FD853A] dark:border-gray-800 dark:bg-transparent dark:text-gray-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Count */}
        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-[#FD853A]">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              No projects found
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Try selecting another category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default ProjectsPage;
