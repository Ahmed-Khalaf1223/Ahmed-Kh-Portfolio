import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full bg-white text-black transition-colors duration-300 dark:bg-[#111111] dark:text-white">
        <div className="relative flex w-full flex-col items-center justify-start py-5">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
