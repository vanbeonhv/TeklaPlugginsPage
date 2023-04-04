import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'src/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../../firebase';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter correct email format')
    .required('Please enter email'),
  password: yup
    .string()
    .required('Passowrd from 6-24 character')
    .min(6, 'Passowrd from 6-24 character')
    .max(24, 'Passowrd from 6-24 character')
});
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const auth = getAuth(app);
  let navigate = useNavigate();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        console.log(
          'errorCode: ',
          error.code,
          ' errorMessage: ',
          error.message
        );
      });
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
          type='email'
          name='email'
          className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mb-1  rounded-lg duration-150 w-full'
          placeholder='Email'
          {...register('email', { required: true })}
        />
        <p className='min-h-[1rem] text-red-500 italic pl-2'>
          {errors.email?.message}
        </p>
        <input
          type='password'
          name='password'
          className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mt-1 rounded-lg duration-150 w-full'
          placeholder='Password'
          {...register('password', { required: true })}
        />
        <p className='min-h-[1rem] text-red-500 italic pl-2'>
          {errors.password?.message}
        </p>
        <div className='flex justify-between text-xd'>
          <div className=''>
            <input
              type='checkbox'
              name='remember-password'
              id='remember-password'
              className='inline-block'
            />
            <p className='inline-block leading-5 pl-2'>remenber me</p>
          </div>
          <div className=''>Forgot password</div>
        </div>
        <div className='text-center pt-4'>
          <Button type='submit' btnType='btn-primary'>
            Login
          </Button>
          <p className='pt-12 text-md'>
            No Account? Sign up
            <Link to={'/signup'} className='pl-1 text-bright-blue-500'>
              Here.
            </Link>
          </p>
        </div>
        <ToastContainer autoClose={3000} />
      </form>
    </div>
  );
};

export default Login;
