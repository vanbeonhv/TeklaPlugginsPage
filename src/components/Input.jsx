import React from 'react';

const Input = ({
  type,
  id,
  name,
  label,
  placeholder,
  error,
  onChange,
  ...rest
}) => {
  switch (type) {
    case 'text':
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
    case 'file':
      return (
        <div className='min-w-[400px] flex items-center pb-2'>
          <p className='inline-block w-1/3 text-slate-600'>{label}:</p>
          <input
            type='file'
            onChange={onChange}
            className=' inline-block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100 '
          />
        </div>
      );
    case 'textarea':
      return (
        <div className='pt-1'>
          <textarea
            name={name}
            id={id}
            cols='58'
            rows='5'
            onChange={onChange}
            placeholder={placeholder}
            className='border border-bright-blue-200 p-2 rounded-lg focus:border-bright-blue-500 focus:shadow-lg outline-none resize-none'
          ></textarea>
          <p className='min-h-[1rem] text-red-500'>{error}</p>
        </div>
      );

    default:
      break;
  }
};
export default Input;
