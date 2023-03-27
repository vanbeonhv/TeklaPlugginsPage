import React from 'react';

const Input = ({ type, id, label, placeholder, error, isTextArea = false }) => {
  if (!isTextArea) {
    return (
      <div className='min-w-[400px]'>
        {/* <label htmlFor={id}>{label}</label> */}
        {/* <br /> */}
        <input
          type={type}
          id={id}
          className='border border-slate-500 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mt-1 rounded-lg duration-150 w-full'
          placeholder={placeholder}
        />
        <p className='min-h-[1rem] text-red-500'>{error}</p>
      </div>
    );
  } else {
    return (
      <div className='pt-1'>
        <label htmlFor={id}>{label}</label>
        <br />
        <textarea
          name={id}
          id={id}
          cols='58'
          rows='5'
          placeholder='Description for plugin'
          className='border border-slate-500 p-2 rounded-lg focus:border-bright-blue-500 focus:shadow-lg outline-none'
        ></textarea>
        <p className='min-h-[1rem] text-red-500'>{error}</p>
      </div>
    );
  }
};

export default Input;
