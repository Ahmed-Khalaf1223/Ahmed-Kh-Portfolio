import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useNavigate } from "react-router-dom";

const leftMenu = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
];

const rightMenu = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const linkStyle = `flex h-[66px] w-[139px] items-center justify-center rounded-[60px]
        text-base font-medium transition duration-300 hover:bg-[#232323] cursor-pointer`;

const activeLinkStyle = `flex h-[66px] w-[139px] items-center justify-center rounded-[60px]
        bg-[#FD853A] text-base font-bold transition duration-300 cursor-pointer`;

const mobileLinkStyle = `flex h-[50px] items-center justify-center rounded-[25px] text-base font-medium
        transition duration-300 hover:bg-[#232323] cursor-pointer`;

const mobileActiveLinkStyle = `flex h-[50px] items-center justify-center rounded-[25px]
        bg-[#FD853A] text-base font-bold transition duration-300 cursor-pointer `;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    // If we are not on Home, go to Home first
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className="fixed z-50 mx-auto flex h-[70px] sm:h-[80px] lg:h-[86px] w-[calc(100%-32px)] max-w-[1298px]
        items-center justify-between px-10 lg:px-2.5 rounded-[35px] lg:rounded-[50px] border border-white bg-[#171717] text-white"
    >
      {/* ================= LEFT MENU ================= */}
      <div className="hidden flex-1 items-center justify-start gap-2.5 lg:flex ">
        {leftMenu.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={activeSection === item.id ? activeLinkStyle : linkStyle}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* ================= LOGO ================= */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            scrollToSection("home");

            if (location.pathname === "/") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              navigate("/");
            }
          }}
          className="flex shrink-0 cursor-pointer flex-col items-center"
        >
          <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#FD853A] sm:h-8 sm:w-8 lg:h-10 lg:w-10">
            <span className="text-xs font-bold text-white md:text-sm lg:text-lg">
              KH
            </span>
          </div>
          <span className="text-lg font-bold tracking-wide">AHMED</span>
        </button>
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>
      {/* ================= RIGHT MENU ================= */}
      <div className="hidden flex-1 items-center justify-end gap-2.5 lg:flex">
        {rightMenu.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={activeSection === item.id ? activeLinkStyle : linkStyle}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* ================= MOBILE BUTTON ================= */}
      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="
            flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FD853A] "
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 rounded-[25px] border border-white bg-[#171717] p-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {[...leftMenu, ...rightMenu].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={
                  activeSection === item.id
                    ? mobileActiveLinkStyle
                    : mobileLinkStyle
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
