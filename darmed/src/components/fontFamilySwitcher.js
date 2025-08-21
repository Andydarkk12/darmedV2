import React, { useState, useEffect } from 'react';

export const FontFamilySwitcher = () => {
  // Доступные шрифты
  const fontOptions = {
    serif: {
      '--main-font': "'Times New Roman', Times, serif",
      name: 'С засечками'
    },
    sansSerif: {
      '--main-font': "Arial, sans-serif",
      name: 'Без засечек'
    }
  };

  const [currentFont, setCurrentFont] = useState('sansSerif');

  // Применяем выбранный шрифт
  const applyFont = (fontKey) => {
    const font = fontOptions[fontKey];
    const root = document.documentElement;
    
    root.style.setProperty('--main-font', font['--main-font']);
    setCurrentFont(fontKey);
    sessionStorage.setItem('selectedFont', fontKey);
  };

  // Загружаем сохранённый шрифт при монтировании
  useEffect(() => {
    const savedFont = sessionStorage.getItem('selectedFont');
    if (savedFont && fontOptions[savedFont]) {
      applyFont(savedFont);
    }
  }, []);

  return (
    <div className="font-switcher" style={{ fontFamily: 'var(--main-font)' }}>
      {Object.entries(fontOptions).map(([key, font]) => (
        <button
          key={key}
          onClick={() => applyFont(key)}
          style={{
            fontFamily: font['--main-font'],
            margin: '5px',
            padding: '8px 12px',
            backgroundColor: currentFont === key ? '#e0e0e0' : '#f5f5f5',
            border: `1px solid ${currentFont === key ? '#333' : '#ccc'}`,
            cursor: 'pointer'
          }}
        >
          {font.name} ({key === 'serif' ? 'Times New Roman' : 'Arial'})
        </button>
      ))}
    </div>
  );
};

