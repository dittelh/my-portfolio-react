import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("home");
  const [themeColor, setThemeColor] = useState("rgba(231, 233, 248, 1)");
  const [backgroundClass, setBackgroundClass] = useState("");

  const changeTheme = (newTheme, newThemeColor) => {
    setTheme(newTheme);
    setThemeColor(newThemeColor);
    document.body.style = "overflow-x: hidden; background: " + newThemeColor;
    document.body.className = "";
    setBackgroundClass("");
  };

  const value = {
    theme,
    changeTheme,
  };

  return (
    <>
      <div className={backgroundClass}></div>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
};
