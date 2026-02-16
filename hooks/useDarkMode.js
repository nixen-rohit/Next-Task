"use client";

import { useEffect, useLayoutEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load from localStorage AFTER mount (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("dark");
    if (saved !== null) {
      setIsDarkMode(saved === "true");
    }
  }, []);

  // Apply class before paint (prevents flicker)
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
