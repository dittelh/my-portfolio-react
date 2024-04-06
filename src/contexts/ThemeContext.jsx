import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('home');
  const [themeColor, setThemeColor] = useState('rgba(231, 233, 248, 1)');

  const changeTheme = (newTheme, newThemeColor) => {
    setTheme(newTheme);
    setThemeColor(newThemeColor);
    document.body.style = 'background: ' + newThemeColor;
    console.log('theme')

  };

  const changeBackgroundImage = (className) => {
    document.body.style.background = null;
    document.body.classList.add(className);
    console.log('background')
  }

  const value = {
    theme,
    changeTheme,
    changeBackgroundImage
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
