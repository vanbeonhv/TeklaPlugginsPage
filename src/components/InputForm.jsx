import React from 'react';

const InputForm = ({
  type,
  name,
  placeholder,
  register,
  errorsMessage,
  onChange
}) => {
  switch (type) {
    case 'text':
      return (
        <div>
          <input
            type={type}
            name={name}
            className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 my-1  rounded-lg duration-150 w-full'
            placeholder={placeholder}
            {...register(name, {
              onChange: onChange
            })}
          />

          <p className='min-h-[1rem] text-red-500 italic pl-2'>
            {errorsMessage}
          </p>
        </div>
      );
      break;
    case 'textarea':
      return (
        <div>
          <textarea
            name={name}
            className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 my-1  rounded-lg duration-150 w-full'
            placeholder={placeholder}
            {...register(name, {
              onChange: onChange
            })}
            cols='58'
            rows='5'
          />

          <p className='min-h-[1rem] text-red-500 italic pl-2'>
            {errorsMessage}
          </p>
        </div>
      );
      break;
    case 'file':
      return (
        <div className='min-w-[400px] flex items-center pb-2'>
          <p className='inline-block pl-2 pr-2 text-slate-600 capitalize'>
            {name}:
          </p>
          <input
            type='file'
            name={name}
            className=' inline-block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 '
            onChange={onChange}
          />
        </div>
      );
      break;

    default:
      break;
  }
};

export default InputForm;
