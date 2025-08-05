/** @format */

import React from "react";
import Image from "next/image";
import { StarIcon } from "../../assets/Svg";

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <StarIcon
        key={i}
        className='w-4 h-4 text-yellow-400'
      />
    ));
  };

  return (
    <div className='bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group'>
      {/* Background Decorative Elements */}
      <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-60 -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-300'></div>
      <div className='absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-60 translate-y-6 -translate-x-6 group-hover:scale-110 transition-transform duration-300'></div>

      <div className='relative z-10'>
        {/* Header with Avatar */}
        <div className='flex items-start justify-between mb-4'>
          <div className='flex items-center'>
            <div className='relative mr-4 w-12 h-12 flex-shrink-0'>
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className='rounded-full object-cover border-2 border-white shadow-md'
              />
              <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white'></div>
            </div>
            <div>
              <h4 className='font-bold text-gray-900'>{testimonial.name}</h4>
              <p className='text-sm text-gray-600'>{testimonial.location}</p>
            </div>
          </div>
          <div className='text-right'>
            <div className='flex mb-1'>{renderStars(testimonial.rating)}</div>
            <div className='text-xs text-gray-500'>{testimonial.date}</div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className='text-gray-700 mb-4 italic leading-relaxed relative'>
          <span className='absolute -top-2 -left-2 text-4xl text-gray-200'>
            &quot;
          </span>
          <span className='relative z-10'>{testimonial.text}</span>
        </blockquote>

        {/* Bottom Section */}
        <div className='flex items-center justify-between pt-3 border-t border-gray-100'>
          <span className='inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium'>
            🔧 {testimonial.appliance}
          </span>
          <span className='text-green-600 text-sm font-medium flex items-center'>
            <svg
              className='w-4 h-4 mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
            Verified
          </span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className='absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-colors duration-300 pointer-events-none'></div>
    </div>
  );
};

export default TestimonialCard;
