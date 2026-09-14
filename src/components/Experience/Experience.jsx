import journey from "./journey";

function Experience() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-[71px]">
      {/* Header */}
      <div className="mx-auto mb-20 max-w-[1298px] text-center">
        <p className="mb-3 text-sm uppercase tracking-[4px] text-[#FD853A]">
          My Experience
        </p>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          My Journey as Front-End Developer
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
          A journey of continuous learning, building, and improving my frontend
          development skills through real projects and modern technologies.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-[1000px]">
        {/* Timeline Line */}
        <div className="absolute bottom-8 left-5 top-0 w-[2px] bg-gray-200 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        {/* Journey Items */}
        <div className="space-y-10 md:space-y-10">
          {journey.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id || index}
                className={`experience-item relative flex items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number */}
                <div className="experience-number absolute left-5 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#FD853A] bg-white text-sm font-bold text-[#FD853A] dark:bg-[#111111] md:left-1/2">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Connector */}
                <div
                  className={`absolute top-1/2 hidden h-[2px] w-22 -translate-y-1/2 bg-[#FD853A] md:block ${
                    isEven ? "left-[calc(47%-80px)]" : "right-[calc(47%-80px)]"
                  }`}
                />

                {/* Card */}
                <div
                  className={` experience-card ml-14 w-[calc(100%-3.5rem)] md:ml-0 md:w-[42%] ${
                    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div
                    className="group rounded-[24px] border border-gray-200 bg-white px-6 py-6
                      transition-all duration-500 hover:-translate-y-1 hover:border-[#FD853A] hover:shadow-lg
                      hover:shadow-orange-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]
                      sm:px-7 sm:py-7"
                  >
                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                      {item.description}
                    </p>

                    {/* Skills */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="
                              rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10
                              dark:bg-white/5 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
