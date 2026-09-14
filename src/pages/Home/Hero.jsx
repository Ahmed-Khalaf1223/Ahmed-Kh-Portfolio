import { ArrowUpRight } from "lucide-react";
import portfolioImage from "../../assets/images/ahmed.png";
import groundInimation from "../../assets/images/Frame 68.svg";

function Hero() {
  return (
    <section className="group relative flex min-h-[700px] w-full items-center justify-center overflow-hidden px-4 py-1 md-py-3">
      {/* Left Quote */}
      <div className="absolute left-[4%] top-[50%] hidden w-[300px] flex-col items-start transition-all duration-500 ease-in-out group-hover:-translate-y-[250px] lg:flex">
        <span className="text-4xl leading-none text-gray-400 dark:text-gray-500">
          "
        </span>
        <p className="text-base font-medium leading-relaxed text-[#344054] dark:text-gray-300">
          Ahmed's exceptional frontend development helped bring modern and
          interactive digital experiences to life.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex max-w-[1000px] flex-col items-center justify-center pt-20">
        {/* Hello + Heading */}
        <div className="flex flex-col items-center transition-all duration-500 ease-in-out group-hover:-translate-y-[-280px] group-hover:opacity-0">
          {/* Hello */}
          <button className="rounded-full border border-[#171717] bg-white px-7 py-3 text-sm font-medium text-[#171717] transition-all duration-300 hover:scale-105 dark:border-white dark:bg-[#111111] dark:text-white">
            Hello!
          </button>

          {/* Heading */}
          <div className="flex flex-col items-center text-center translate-y-[30%]">
            <h1 className="text-5xl font-semibold leading-none text-[#171717] sm:text-6xl md:text-7xl lg:text-[88px] dark:text-white">
              I'm <span className="text-[#FD853A]">Ahmed</span>,
            </h1>

            <h2 className="mt-4 text-5xl  font-semibold leading-none text-[#171717] sm:text-6xl md:text-7xl lg:text-[88px] dark:text-white">
              Front-End Developer
            </h2>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative flex aspect-[3/2]  items-end justify-center">
          {/* Orange Background */}
          <div className="absolute  h-[60%] w-[130%] rounded-t-full bg-[#FEB273] transition-all duration-500 ease-in-out group-hover:bg-[#FD853A]"></div>
          {/* Stars / Decoration */}
          <img
            src={groundInimation}
            alt="Decoration"
            className="pointer-events-none absolute bottom-0 z-10 max-w-[1500px] scale-90  opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100"
          />

          {/* Image - ثابتة */}
          <div className="relative z-20 flex h-full w-[100%] items-end justify-center">
            <img
              src={portfolioImage}
              alt="Ahmed - Front End Developer"
              className="h-full max-h-[660px] w-auto object-contain"
            />
          </div>

          {/* Buttons */}
          <div className="absolute bottom-[3%] z-30 hidden lg:flex md:flex h-[82px] items-center gap-2.5 rounded-full border-b-2 border-white bg-white/10 p-2.5 backdrop-blur-[5px]">
            <button className="flex h-[62px] w-[190px] items-center justify-center gap-2 rounded-[60px] bg-[#FD853A] text-xl font-medium text-white shadow-md transition-all duration-300 hover:scale-105">
              Portfolio
              <ArrowUpRight size={18} />
            </button>

            <button className="flex h-[54px] w-[125px] items-center justify-center gap-2 rounded-[60px] text-lg font-light text-[#171717] transition-all duration-300 hover:bg-white/20 dark:text-white">
              Hire me
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="absolute right-[4%] top-[50%] hidden flex-col items-end transition-all duration-500 ease-in-out group-hover:-translate-y-[250px] lg:flex">
        <div className="mb-2 flex gap-1">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-3xl text-[#FD853A]">
              ★
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-[#171717] dark:text-white">
          3+ Years
        </h3>

        <p className="text-sm text-[#667085] dark:text-gray-400">Experience</p>
      </div>
    </section>
  );
}

export default Hero;
