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
    <div className="testimonial-container">
      <div className="testimonial-card">
        
        <div className="absolute ">
          <p className="overflow-auto text-2xl text-black text-bold">{testimonials[currentIndex].text}</p>
          <div className="">
            <h3 className="absolute bg-white max-md:top-[210%] lg:top-[370%] pr-3 rounded-[0_10px_0_0] left-0 z-[2] text-xl pl-2 text-[#555]">{testimonials[currentIndex].name}</h3>
            <p className="absolute text-xl pl-2 pr-3  rounded-[0_10px_0_0] bg-white max-md:top-[250%] lg:top-[450%] left-0 z-[2] text-[#555] ">{testimonials[currentIndex].role}</p>
          </div>
          
        </div>
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="testimonial-image"
        />
        <div className="">
          <div className="flex flex-col justify-between  items-end w-full h-[300px] p-2 border border-gray-300 rounded-lg shadow-md ">
            <button className="arrow up" onClick={handleUpClick}>
              <BsArrowUp />
            </button>
            <button className="arrow down" onClick={handleDownClick}>
              <BsArrowDown />
            </button>
          </div>
        </div>
        
       
      </div>

      
    </div>
  );
};

export default TestimonialCard;
