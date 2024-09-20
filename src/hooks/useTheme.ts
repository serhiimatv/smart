import { useCallback, useEffect, useMemo, useState } from "react";

type ThemeType = "dark" | "light";

const useTheme = () => {
  const getInitialTheme = (): ThemeType => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }

      localStorage.setItem("theme", "light");

      return "light";
    } catch (error) {
      console.error("Error accessing localStorage:", error);

      return "light";
    }
  };

  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

  useEffect(() => {
    try {
      if (theme === "dark") {
        window.document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        window.document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, [theme]);

  const memoizedSetTheme = useCallback(setTheme, [setTheme]);

  return useMemo(
    () => ({ theme, setTheme: memoizedSetTheme }),
    [theme, memoizedSetTheme]
  );
};

export default useTheme;
