import { useState, useLayoutEffect } from "react";
import { getTheme, initTheme, toggleTheme } from "../utils/theme";

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>("");

  useLayoutEffect(() => {
    initTheme();
    const data = getTheme();
    if (data) setTheme(data);
  }, []);

  const changeTheme = () => {
    toggleTheme();
    const newTheme = getTheme(); // Отримуємо оновлену тему
    setTheme(newTheme);
  };

  return [theme, changeTheme] as const;
};

export default useTheme;
