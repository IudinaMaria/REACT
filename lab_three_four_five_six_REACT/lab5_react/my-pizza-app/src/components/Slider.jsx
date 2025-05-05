import { useState, useEffect } from "react";

/**
 * Компонент Slider отображает слайды с актуальными акциями.
 * 
 * @component
 * @example
 */
const slides = [
  "🔥 Скидка на Пепперони!",
  "🎁 Бесплатная доставка от 400 лей!",
  "🧀 Новинка: Четыре сыра!"
];

/**
 * Компонент для отображения слайдера с акциями.
 * 
 * @returns {JSX.Element} Разметка слайдера с кнопками для переключения слайдов.
 */
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * Функция для перехода к следующему слайду.
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  /**
   * Функция для перехода к предыдущему слайду.
   */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <button onClick={prevSlide}>←</button>
      <span>{slides[currentSlide]}</span>
      <button onClick={nextSlide}>→</button>
    </div>
  );
}

export default Slider;
