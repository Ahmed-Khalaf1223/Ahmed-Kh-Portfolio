const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "JavaScript",
  "jQuery",
  "React",
  "Redux Toolkit",
  "React Router",
  "Axios",
  "REST API",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section className="w-full overflow-hidden py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#FD853A]">
          My Skills
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
          Technologies I Work With
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="overflow-hidden border-y border-gray-200 py-3  dark:border-white/10 bg-white mt-11 rotate-[-1.9deg]">
          <div className="flex w-max animate-marquee cursor-pointer">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex items-center gap-8 px-4 whitespace-nowrap"
              >
                <span className="font-medium text-gray-800 dark:text-gray-200 lg:text-4xl sm:text-2xl">
                  {skill}s
                </span>

                <span className="text-[#FD853A]">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
