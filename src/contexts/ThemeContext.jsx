import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('home');
  const [themeColor, setThemeColor] = useState('rgba(231, 233, 248, 1)');
  const [backgroundClass, setBackgroundClass] = useState('');

  const changeTheme = (newTheme, newThemeColor) => {
    setTheme(newTheme);
    setThemeColor(newThemeColor);
    document.body.style = 'background: ' + newThemeColor;
    document.body.className = '';
    setBackgroundClass('');
  };

  const changeBackgroundImage = (className) => {
    setBackgroundClass(className);
  };

  const value = {
    theme,
    changeTheme,
    changeBackgroundImage,
  };

  return (
    <>
      <div className={backgroundClass}></div>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
};
