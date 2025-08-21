import React, { useState, useEffect } from 'react';

export const TextSizeChanger = () => {
  const [textSize, setTextSize] = useState(25);

  // При монтировании компонента проверяем сохранённый размер
  useEffect(() => {
    const savedSize = sessionStorage.getItem('textSize');
    if (savedSize) {
      setTextSize(Number(savedSize));
      applyTextSize(Number(savedSize));
    }
  }, []);

  // Применяем размер ко всему сайту через CSS-переменную
  const applyTextSize = (newSize) => {
  document.documentElement.style.setProperty('--text-size', `${newSize}px`);
  document.documentElement.style.setProperty('--text-size-h1', `${newSize}px`);
  document.documentElement.style.setProperty('--text-size-h2', `${newSize}px`);
};

  // Увеличиваем текст на 5px
  const increaseTextSize = () => {
    const newSize = textSize + 5;
    setTextSize(newSize);
    applyTextSize(newSize);
    sessionStorage.setItem('textSize', newSize.toString());
  };

  // Уменьшаем текст на 5px (но не меньше 10px)
  const decreaseTextSize = () => {
    const newSize = Math.max(10, textSize - 5);
    setTextSize(newSize);
    applyTextSize(newSize);
    sessionStorage.setItem('textSize', newSize.toString());
  };

  return (
    <div className="text-size-controls">
      <button className='buttons' onClick={decreaseTextSize}>A-</button>
      <button className='buttons' onClick={increaseTextSize}>A+</button>
    </div>
  );
};