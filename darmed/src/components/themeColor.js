import React, { useState, useEffect } from 'react';

export const ThemeSwitcher = () => {
  // Доступные темы
  const themes = {
    default: {
      '--bg-color': '#ffffff',
      '--text-color': '#000000',
      name: 'Светлая'
    },
    dark: {
      '--bg-color': '#000000',
      '--text-color': '#ffffff',
      name: 'Тёмная'
    },
    blue: {
      '--bg-color': '#e6f7ff',
      '--text-color': '#003366',
      name: 'Голубая'
    },
    beige: {
      '--bg-color': '#f5f5dc',
      '--text-color': '#654321',
      name: 'Бежевая'
    },
    brown: {
      '--bg-color': '#5c4033',
      '--text-color': '#90ee90',
      name: 'Коричневая'
    }
  };

  const [currentTheme, setCurrentTheme] = useState('default');

  // Применяем тему
  const applyTheme = (themeKey) => {
    const theme = themes[themeKey];
    const root = document.documentElement;
    
    // Применяем все CSS-переменные темы
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'name') {
        root.style.setProperty(key, value);
      }
    });

    setCurrentTheme(themeKey);
    sessionStorage.setItem('selectedTheme', themeKey);
  };

  // Загружаем сохранённую тему при монтировании
  useEffect(() => {
    const savedTheme = sessionStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
      applyTheme(savedTheme);
    }
  }, []);

  return (
    <div className="theme-switcher">
      {Object.entries(themes).map(([key, theme]) => (
        <button
          key={key}
          onClick={() => applyTheme(key)}
          style={{
            backgroundColor: theme['--bg-color'],
            color: theme['--text-color'],
            margin: '5px',
            padding: '8px',
            border: `2px solid ${currentTheme === key ? '#ff5722' : 'transparent'}`
          }}
          title={theme.name}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};

