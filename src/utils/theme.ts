export const toggleTheme = () => {
  document.documentElement.classList.toggle("light");

  // Зберігаємо вибір теми в LocalStorage
  if (document.documentElement.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
};

// Функція для ініціалізації теми при завантаженні
export const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
  }
};

export const getTheme = (): string | null => {
  return localStorage.getItem("theme");
};
