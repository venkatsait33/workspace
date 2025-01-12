import React, { useState } from "react";
import cv2 from '../assets/cover-images/cv2.avif'
import cv3 from '../assets/cover-images/cv3.avif'
import cv4 from '../assets/cover-images/cv4.avif'
import { BsArrow90DegDown, BsArrow90DegUp, BsArrowDown, BsArrowUp } from "react-icons/bs";

const testimonials = [
  {
    text: "WorkSpace has been a game-changer for me. The community here is so welcoming, the amenities are good!",
    name: "Sarah Johnson",
    role: "Private Office Client (2021 - 2023)",
    image: cv2, // Replace with actual image URL
  },
  {
    text: "The flexibility and professionalism at WorkSpace are unmatched. Highly recommended!",
    name: "Michael Lee",
    role: "Freelancer (2020 - 2022)",
    image: cv3, // Replace with actual image URL
  },
  {
    text: "I found the perfect environment to grow my startup. The support here is outstanding!",
    name: "Emily Davis",
    role: "Startup Founder (2019 - 2023)",
    image: cv4, // Replace with actual image URL
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div id="outer" style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}>
        <div id="inner-container">
          <p className="absolute w-full mx-auto ml-10 text-4xl text-black -top-[200px] text-bold">{testimonials[currentIndex].text}</p>
          <div className="innertext"><span>{testimonials[currentIndex].name}</span></div>
          <div className="innertext"><span>{testimonials[currentIndex].role}</span></div>
        </div>
        <div className="flex flex-col items-end justify-between h-full p-12 border rounded-lg shadow-md ">
          <div className="flex flex-col items-end justify-between h-full p-2 border rounded-lg shadow-md ">
            <button className="text-2xl text-black arrow up" onClick={handleUpClick}>
              <BsArrowUp />
            </button>
            <button className="text-2xl text-black arrow down" onClick={handleDownClick}>
              <BsArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
