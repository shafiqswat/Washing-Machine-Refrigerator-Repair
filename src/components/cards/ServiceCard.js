/** @format */

import React from "react";
import Image from "next/image";
import {
  WashingMachineIcon,
  RefrigeratorIcon,
  RepairIcon,
} from "../../assets/Svg";

const ServiceCard = ({ service }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "washing-machine":
        return <WashingMachineIcon className='w-6 h-6' />;
      case "refrigerator":
        return <RefrigeratorIcon className='w-6 h-6' />;
      default:
        return <RepairIcon className='w-6 h-6' />;
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500 text-white",
      cyan: "bg-cyan-500 text-white",
      green: "bg-green-500 text-white",
      orange: "bg-orange-500 text-white",
      red: "bg-red-500 text-white",
      purple: "bg-purple-500 text-white",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className='group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative'>
      {/* Image Section */}
      <div className='relative h-48 overflow-hidden'>
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={300}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>

        {/* Icon Badge */}
        <div
          className={`absolute top-4 left-4 ${getColorClasses(
            service.color
          )} p-3 rounded-full shadow-lg`}>
          {getIcon(service.icon)}
        </div>

        {/* Price Badge */}
        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800'>
          From $89
        </div>
      </div>

      {/* Content Section */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
          {service.title}
        </h3>

        <p className='text-gray-600 mb-4 leading-relaxed'>
          {service.description}
        </p>

        {/* Features */}
        <div className='space-y-2 mb-6'>
          {service.features.map((feature, index) => (
            <div
              key={index}
              className='flex items-center text-sm text-gray-600'>
              <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0'></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
          <div className='flex items-center space-x-2'>
            <div className='flex text-yellow-400'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className='w-4 h-4 fill-current'
                  viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <span className='text-sm text-gray-500'>4.9/5</span>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className='absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors duration-300 pointer-events-none'></div>
    </div>
  );
};

export default ServiceCard;
