import { FC, memo } from "react";
import useTheme from "../hooks/useTheme";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === "dark" ? true : false}
          onChange={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        />
        <div
          className="relative w-11 h-6 bg-gray-200 rounded-full peer bg-gray
                    dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border 
                    after:rounded-full after:h-5 after:w-5 after:transition-all 
                    dark:border-gray-600 peer-checked:bg-buttonViolet"
        ></div>
        <span className="ms-3 text-sm dark:text-white">Toggle me</span>
      </label>
    </>
  );
};

export default memo(ThemeSwitcher);
