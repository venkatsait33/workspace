import  { useState } from "react";
import cv2 from '../assets/cover-images/cv2.avif'
import cv3 from '../assets/cover-images/cv3.avif'
import cv4 from '../assets/cover-images/cv4.avif'
import {  BsArrowDown, BsArrowUp } from "react-icons/bs";

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
    <div className="p-10 mt-10">
      <div id="outer" style={{
        backgroundImage: `url(${testimonials[currentIndex].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div id="inner-container">
          <p className="absolute max-sm:w-[70%] text-pretty mx-auto lg:ml-10 ml-5 max-md:text-2xl max-sm:text-md md:text-4xl text-black md:-top-[250px] max-sm:-top-[310px] text-bold">{testimonials[currentIndex].text}</p>
          <div className="innertext"><span>{testimonials[currentIndex].name}</span></div>
          <div className="innertext"><span>{testimonials[currentIndex].role}</span></div>
        </div>
        <div className="flex flex-col items-end justify-between h-full max-sm:h-[80%] md:p-12 max-sm:p-2 ">
          <div className="flex flex-col items-end justify-between h-full p-2 border rounded-lg shadow-md ">
            <button className="p-1 text-black bg-white rounded-full md:text-2xl" onClick={handleUpClick}>
              <BsArrowUp />
            </button>
            <button className="p-1 text-black bg-white rounded-full md:text-2xl " onClick={handleDownClick}>
              <BsArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
