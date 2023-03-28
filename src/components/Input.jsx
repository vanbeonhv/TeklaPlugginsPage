import React from 'react';

const Input = ({
  type,
  id,
  name,
  label,
  placeholder,
  error,
  isTextArea = false,
  onChange,
  ...rest
}) => {
  if (!isTextArea) {
    return (
      <div className='min-w-[400px]'>
        {/* <label htmlFor={id}>{label}</label> */}
        {/* <br /> */}
        <input
          type={type}
          id={id}
          name={name}
          className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mt-1 rounded-lg duration-150 w-full'
          placeholder={placeholder}
          onChange={onChange}
          required
        />
        <p className='min-h-[1rem] text-red-500'>{error}</p>
      </div>
    );
  } else {
    return (
      <div className='pt-1'>
        {/* <label htmlFor={id}>{label}</label>
        <br /> */}
        <textarea
          name={name}
          id={id}
          cols='58'
          rows='5'
          placeholder='Description for plugin'
          className='border border-bright-blue-200 p-2 rounded-lg focus:border-bright-blue-500 focus:shadow-lg outline-none resize-none'
        ></textarea>
        <p className='min-h-[1rem] text-red-500'>{error}</p>
      </div>
    );
  }
};

export default Input;
