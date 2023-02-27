import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDark";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="flex items-center pl-4 md:ml-0 ml-auto">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={16}
          moonColor="#FFD700"
        />
      </div>
    </>
  );
}
