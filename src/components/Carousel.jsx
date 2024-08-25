import React, { useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { slides } from '../data';

const slidesCopy = slides;

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) return;
    setCurrent((current) => current - 1);
  };

  let nextSlide = () => {
    if (current === slidesCopy.length - 1) return;
    setCurrent((current) => current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div className={`flex transition ease-out duration-400`}>
        <img src={slidesCopy[current].url} alt="projectPictures" />
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-black text-3xl">
        <button onClick={previousSlide}>
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowAltCircleRight />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-black rounded-full ${
                current === i ? 'p-2' : 'bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
