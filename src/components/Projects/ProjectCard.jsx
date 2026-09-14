import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-zinc-100 p-5 dark:bg-zinc-800 rounded-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[24px] border border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-white/[0.04]">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

        {/* Arrow */}
        <div className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:rotate-45 group-hover:opacity-100">
          <ArrowUpRight size={22} />
        </div>
      </div>

      {/* Content */}
      <div className="mt-5">
        <p className="text-sm font-medium uppercase tracking-[3px] text-[#FD853A]">
          {project.category}
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#FD853A] dark:text-white">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-white/10 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
