import { useCallback, useEffect, useState } from "react";

type theme = "dark" | "light";

const useTheme = () => {
  const usedTheme = localStorage.getItem("theme");

  if (!usedTheme) {
    localStorage.setItem("theme", "light");
  }

  const [theme, setTheme] = useState<"dark" | "light">(
    localStorage.getItem("theme") as theme
  );

  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return { theme, setTheme: useCallback(setTheme, [theme]) };
};

export default useTheme;
