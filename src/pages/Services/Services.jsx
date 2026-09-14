import {
  Code2,
  MonitorSmartphone,
  Atom,
  Plug,
  Palette,
  MousePointerClick,
  ArrowUpRight,
} from "lucide-react";

import servicesBg from "../../assets/images/services-bg.svg";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building modern and clean web interfaces using HTML, CSS, JavaScript, and React.",
    icon: Code2,
  },
  {
    title: "Responsive Web Design",
    description:
      "Creating responsive websites that work smoothly across mobile, tablet, and desktop.",
    icon: MonitorSmartphone,
  },
  {
    title: "React Development",
    description:
      "Developing reusable React components, routing, state management, and interactive interfaces.",
    icon: Atom,
  },
  {
    title: "API Integration",
    description:
      "Connecting web applications with REST APIs and handling data efficiently using Axios.",
    icon: Plug,
  },
  {
    title: "Figma to React",
    description:
      "Turning Figma designs into responsive and reusable React interfaces.",
    icon: Palette,
  },
  {
    title: "Interactive Web Apps",
    description:
      "Building dynamic and interactive web applications with modern frontend technologies.",
    icon: MousePointerClick,
  },
];
function Services() {
  return (
    <section className=" relative w-full overflow-hidden rounded-[30px] bg-gray-100 px-4 py-12 dark:bg-[#171717] sm:px-6 lg:rounded-[50px] ">
      {/* Background Image */}
      <div
        className=" absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none "
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className=" mx-auto mb-12 flex w-full max-w-[1298px] flex-col gap-6 lg:mb-20 lg:flex-row lg:items-center lg:justify-between ">
          <h2 className=" text-4xl font-semibold text-gray-300 dark:text-white sm:text-5xl lg:text-6xl ">
            My <span className="text-[#FD853A]">Services</span>
          </h2>
          <p className=" max-w-[580px] text-base leading-relaxed text-gray-300 dark:text-gray-300 sm:text-lg lg:text-xl ">
            I build modern, responsive, and interactive web experiences that
            combine clean code with a great user experience.
          </p>
        </div>
        {/* Services Cards */}
        <div className=" mx-auto grid w-full max-w-[1298px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className=" group relative min-h-[300px] overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#FD853A] dark:border-white/10 dark:bg-white/[0.06] sm:p-8 "
              >
                {/* Icon */}
                <div className=" mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FD853A] text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#FD853A] ">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                {/* Content */}
                <div>
                  <h3 className=" mb-4 text-2xl font-semibold text-gray-900 transition-colors duration-300 dark:text-white ">
                    {service.title}
                  </h3>
                  <p className=" text-base leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-white/90 ">
                    {service.description}
                  </p>
                </div>
                {/* Arrow */}
                <div className=" absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-all duration-500 dark:border-white/10 dark:text-white group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FD853A] ">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Services;
