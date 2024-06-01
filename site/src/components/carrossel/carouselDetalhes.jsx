import React, { useState, useEffect } from 'react';
import img from "../../utils/assets/ombro-comprimido.jpg";
import img2 from "../../utils/assets/tatuador-carrossel.jpg"; 
import img3 from "../../utils/assets/tatuador-grid.png" 
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const ManualCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img, img2, img3];
  const imageHeight = 350; // Definir a altura desejada das imagens
  const intervalTime = 3000; // Definir o intervalo de tempo em milissegundos

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex]); // Reagir apenas quando currentIndex mudar

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <FaRegArrowAltCircleLeft 
        onClick={prevSlide} 
        className="absolute top-44 -left-6 transform -translate-y-1/2 -translate-x-1/2 text-slate-800 hover:text-purple-950 size-16 py-1 px-3 cursor-pointer"
      />
      <img 
        src={images[currentIndex]} 
        alt={`Imagem ${currentIndex + 1}`} 
        className="w-full h-auto max-h-90 object-cover rounded-lg shadow-2xl shadow-slate-900 border border-slate-500" 
        style={{ height: imageHeight }}
      />
      <FaRegArrowAltCircleRight 
        onClick={nextSlide} 
        className="absolute top-44 -right-6 transform -translate-y-1/2 translate-x-1/2 text-slate-800 hover:text-purple-950 rounded size-16 py-1 px-3 cursor-pointer"
      />
    </div>
  );
};

export default ManualCarousel;
