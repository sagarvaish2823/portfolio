"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// import React, { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [mode, setMode] = useState(() => {
//     const initialTheme = localStorage.getItem("theme");
//     return initialTheme ? initialTheme : "dark";
//   });

//   function getThemeFromLocalStorage() {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setMode(savedTheme);
//     }
//   }

//   const toggle = () => {
//     setMode((prevTheme) => {
//       const newTheme = prevTheme === "light" ? "dark" : "light";
//       localStorage.setItem("theme", newTheme);
//       return newTheme;
//     });
//   };

//   useEffect(() => {
//     getThemeFromLocalStorage();
//   }, [mode]);

//   return (
//     <ThemeContext.Provider value={{ toggle, mode }}>
//       <div className={`theme ${mode}`}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };
