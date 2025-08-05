/** @format */

import React from "react";

const SelectField = ({
  options = [],
  value = "",
  onChange,
  name,
  placeholder = "Select Option",
}) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'>
        <option
          value=''
          className='text-gray-900'
          disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className='text-gray-900'>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
