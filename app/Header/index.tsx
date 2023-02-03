"use client"

import { useEffect, useState } from 'react';
import Sun from './_icons/Sun';
import Moon from './_icons/Moon';

export default function Header() {
  // const size = '48px';
  const [darkMode, setDarkMode] = useState<boolean | (() => boolean)>(
    () => localStorage.getItem("darkMode") === "true"
  );

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-end w-full p-4">
      <div className="transition cursor-pointer hover:text-blue-600" onClick={switchMode}>
        {!darkMode ? (
          <Moon />
        ) : (
          <Sun />
        )}
      </div>
    </header>

  )
}