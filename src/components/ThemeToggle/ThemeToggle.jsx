import { useDispatch, useSelector } from "react-redux";
import { Moon, Sun } from "lucide-react";

import { toggleTheme } from "../../redux/slices/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="flex h-10 w-10 items-center justify-center cursor-pointer text-white transition-transform duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
