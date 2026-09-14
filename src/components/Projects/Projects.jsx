import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-6">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[4px] text-orange-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">Featured Projects</h2>

          <p className="mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
            Here are some of the projects I have built using modern front-end
            technologies.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {featuredProjects.map((project) => (
            <SwiperSlide className="mb-15" key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All */}
        <div className="mt-7 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[#FD853A] px-6 py-3 text-white transition hover:bg-orange-600"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
