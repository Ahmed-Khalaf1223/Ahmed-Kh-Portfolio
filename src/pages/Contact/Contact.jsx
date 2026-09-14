import { Send, ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer
      className="w-full min-h-[650px] px-4 sm:px-6 lg:px-[71px] py-[30px] sm:py-[35px] lg:py-[30px]
       flex flex-col sm:gap-5 bg-[#272727] rounded-t-2xl sm:rounded-t-3xl text-white justify-between"
    >
      {/* Top CTA */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:py-[30px]">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Let's connect there
        </h2>

        <button
          className="group flex items-center justify-center gap-2 w-full sm:w-[180px] lg:w-[202px] h-[50px] sm:h-[56px] lg:h-[62px]
           px-4 sm:px-5 py-2 sm:py-2.5 text-white text-base sm:text-lg font-semibold rounded-full bg-[#FD853A]
            cursor-pointer hover:bg-[#e46e24] transition-colors"
        >
          Hire Me
          <ArrowUpRight
            size={20}
            className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:rotate-45"
          />
        </button>
      </div>

      <div className="border border-[#475467] w-full mt-6 md:mt-0"></div>

      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1298px] h-auto lg:h-[239px] gap-8 mt-8 md:mt-0 lg:py-[30px]">
        {/* Brand */}
        <div className="w-full lg:w-[635px] h-full flex flex-col items-start justify-start gap-6 lg:gap-10">
          <div className="flex gap-3 items-center cursor-pointer">
            <h3 className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1 font-bold">
              kh
            </h3>
            <p className="font-bold text-base sm:text-lg tracking-wide uppercase cursor-pointer">
              ahmed
            </p>
          </div>

          <p className="w-full h-auto lg:h-[61px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#FCFCFD]">
            Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed lobortis orci elementum egestas
            lobortis.
          </p>

          {/* Social Media */}
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/ahmed.zizoo.739"
              target="_blank"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#FD853A] rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://www.youtube.com/@ahmedkhalaf18"
              target="_blank"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#FD853A] rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href="https://wa.me/01154480841"
              target="_blank"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#FD853A] rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://www.instagram.com/zizoo201263/"
              target="_blank"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#FD853A] rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://x.com/@Ahmedkh21758227"
              target="_blank"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#FD853A] rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-6 text-[#FD853A] text-lg font-semibold">
            Navigation
          </h4>

          <ul className="space-y-4 text-gray-400">
            <li>
              <a
                href="#home"
                className="transition hover:text-[#FD853A] text-[#FCFCFD]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-[#FD853A] text-[#FCFCFD]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#service"
                className="transition hover:text-[#FD853A] text-[#FCFCFD]"
              >
                Service
              </a>
            </li>

            <li>
              <a
                href="#resume"
                className="transition hover:text-[#FD853A] text-[#FCFCFD]"
              >
                Resume
              </a>
            </li>

            <li>
              <a
                href="#project"
                className="transition hover:text-[#FD853A] text-[#FCFCFD]"
              >
                Project
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition hover:text-[#FD853A] text-[#FCFCFD]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-6 text-[#FD853A] text-lg font-semibold">Contact</h4>

          <div className="space-y-4 text-gray-400">
            <a
              href="tel:+201154480841"
              className="block transition hover:text-[#FD853A] text-[#FCFCFD]"
            >
              +201154480841
            </a>

            <a
              href="mailto:ahmedkhalaf1223@gmail.com"
              className="block transition hover:text-[#FD853A] text-[#FCFCFD]"
            >
              ahmedkhalaf1223@gmail.com
            </a>

            <a
              href="#"
              className="block transition hover:text-[#FD853A] text-[#FCFCFD]"
            >
              hello.com
            </a>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex w-full flex-col items-start gap-5 lg:w-[304px] lg:gap-7">
          <div className="text-[18px] font-semibold leading-tight text-[#FD853A] sm:text-[19px] lg:text-[20px]">
            Get the latest information
          </div>

          <div className="relative h-[45px] w-full sm:h-[48px] lg:h-[51px]">
            <input
              type="email"
              placeholder="Email Address"
              className="h-full w-full rounded-[8px] border-none bg-white px-3 py-2 pr-12 text-[14px] text-black placeholder:text-gray-400 outline-none sm:rounded-[10px] sm:px-4 sm:py-3 sm:text-[15px] lg:text-[16px]"
            />

            <button
              type="submit"
              className="absolute top-0 right-0 h-full w-[45px] sm:w-[48px] lg:w-[51px] bg-[#FD853A] rounded-r-[8px] sm:rounded-r-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e46e24] transition-colors"
            >
              <Send size={24} className="text-white rotate-[45deg]" />
            </button>
          </div>
        </div>
      </div>

      <div className="border border-[#475467] w-full mt-8 lg:mt-16"></div>

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row w-full max-w-[1298px] lg:items-start justify-between gap-4 sm:gap-0 mt-0 sm:items-center">
        <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-white text-center sm:text-left">
          Copyright © 2026 Ahmed kh. All Rights Reserved.
        </p>

        <a
          href="#"
          className="text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center sm:text-right hover:text-[#FD853A] transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
