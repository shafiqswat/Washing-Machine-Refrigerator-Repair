/** @format */

import React from "react";

const FeatureCard = ({
  icon,
  title,
  description,
  color = "blue",
  size = "sm",
}) => {
  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
      cyan: "bg-cyan-100 text-cyan-600",
    };
    return colors[color] || colors.blue;
  };

  const getSizeClasses = (size) => {
    const sizes = {
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-lg",
      lg: "w-12 h-12 text-xl",
    };
    return sizes[size] || sizes.md;
  };

  return (
    <div className='group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden'>
      {/* Background Decorative Element */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 ${
          getColorClasses(color).split(" ")[0]
        } rounded-full opacity-20 -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-300`}></div>

      <div className='relative z-10'>
        {/* Icon */}
        <div
          className={`${getSizeClasses(size)} ${
            getColorClasses(color).split(" ")[0]
          } rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <span className={getColorClasses(color).split(" ")[1]}>{icon}</span>
        </div>

        {/* Content */}
        <h3 className='font-semibold text-gray-900 mb-2 text-sm group-hover:text-gray-700 transition-colors'>
          {title}
        </h3>
        <p className='text-gray-600 text-xs leading-relaxed'>{description}</p>
      </div>

      {/* Hover Border Effect */}
      <div className='absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-colors duration-300 pointer-events-none'></div>
    </div>
  );
};

export default FeatureCard;
