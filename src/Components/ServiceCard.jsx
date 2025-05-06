import React from 'react';

const ServiceCard = ({ imgsrc, title, description }) => {
  return (
    <div className="service-card relative bg-transparent p-8 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mb-5 w-full">
      <div className="icon-wrapper bg-white text-pink-500 p-4 rounded-full shadow-lg mx-auto mb-4 text-4xl h-20 w-20">
        <img src={`/images/${imgsrc}.png`} alt="" />
      </div>
      <h3 className="text-xl font-semibold text-gray-200 mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
