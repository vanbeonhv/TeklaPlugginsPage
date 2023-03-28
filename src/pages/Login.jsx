import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'src/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='flex justify-center items-center bg-bright-blue-100 h-[calc(100vh-112px)]'>
      <form
        className='w-full max-w-xl px-14 pb-8 pt-10 bg-white rounded-xl shadow-xl max-h-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-3xl font-semibold text-center mb-10 text-slate-700 cursor-default'>
          Login
        </h3>
        <input
          type='text'
          name='username'
          className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mb-4  rounded-lg duration-150 w-full'
          placeholder='User Name'
          {...register('username', { required: true })}
        />
        <input
          type='password'
          name='password'
          className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mt-1 rounded-lg duration-150 w-full'
          placeholder='Password'
          {...register('password', { required: true })}
        />

        {errors.username && <p>required</p>}

        <div className='text-center'>
          <input type='submit' />
          <Button
            type='submit'
            btnType='btn-primary'
            // onClick={onSubmit}
          >
            Post
          </Button>
          <ToastContainer autoClose={3000} />
        </div>
      </form>
    </div>
  );
};

export default Login;
