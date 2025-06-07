import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../dummyData/AuthContext';

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter correct email format')
    .required('Please enter email'),
  password: yup
    .string()
    .required('Password from 6-24 characters')
    .min(6, 'Password from 6-24 characters')
    .max(24, 'Password from 6-24 characters')
});

const SignUp = () => {
  let navigate = useNavigate();
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const handleGithubLogin = async () => {
    try {
      // For demo, we'll use a hardcoded GitHub email
      await signUp('github@example.com', 'github123');
      toast.success('Signed up with GitHub successfully!', {
        position: toast.POSITION.TOP_CENTER
      });
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign up with GitHub!', {
        position: toast.POSITION.TOP_CENTER
      });
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // For demo, we'll use a hardcoded Google email
      await signUp('google@example.com', 'google123');
      toast.success('Signed up with Google successfully!', {
        position: toast.POSITION.TOP_CENTER
      });
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign up with Google!', {
        position: toast.POSITION.TOP_CENTER
      });
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    try {
      await signUp(email, password);
      toast.success('Sign up successfully!', {
        position: toast.POSITION.TOP_CENTER
      });
      setTimeout(() => {
        navigate('/new-account');
      }, 2000);
    } catch (error) {
      toast.error('Create Failed Try Again!', {
        position: toast.POSITION.TOP_CENTER
      });
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col bg-bright-blue-100 h-[calc(100vh-112px)]'>
      <Link to='/'>
        <div className='flex items-center pb-6'>
          <RxCodesandboxLogo className='text-4xl text-bright-blue-500 m-2' />
          <span className='text-3xl font-bold text-gray-800'>
            Marc
            <span className="font-extralight text-gray-600">Pro</span>
          </span>
        </div>
      </Link>
      <form
        className='w-full max-w-xl px-14 pb-8 pt-10 bg-white rounded-xl shadow-xl max-h-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-3xl font-semibold text-center mb-10 text-slate-700 cursor-default'>
          Join us today
        </h3>

        <button
          type='button'
          className='w-full border px-5 py-3 border-bright-blue-200 rounded-lg font-semibold text-lg text-slate-600 flex items-center justify-center gap-2 mt-4 hover:shadow-md'
          onClick={handleGoogleLogin}
        >
          <FcGoogle className='text-2xl' />
          Sign in with Google
        </button>
        <button
          type='button'
          className='w-full border px-5 py-3 border-bright-blue-200 rounded-lg font-semibold text-lg text-slate-600 flex items-center justify-center gap-2 mt-4 hover:shadow-md'
          onClick={handleGithubLogin}
        >
          <BsGithub className='text-2xl' />
          Sign in with Github
        </button>
        <div className='relative my-12 border-b border-bright-blue-300'>
          <span className='absolute top-[-12px] left-[45%] bg-white px-2 inline-block font-semibold text-slate-500'>
            OR
          </span>
        </div>
        <div className=''>
          <input
            type='email'
            // name='email'
            className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mb-1  rounded-lg duration-150 w-full'
            placeholder='Your email'
            {...register('email', { required: true })}
          />
          <p className='min-h-[1rem] text-red-500 italic pl-2'>
            {errors.email?.message?.toString()}
          </p>
          <input
            type='password'
            // name='password'
            className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mt-1 rounded-lg duration-150 w-full'
            placeholder='Create a password'
            {...register('password', { required: true })}
          />
          <p className='min-h-[1rem] text-red-500 italic pl-2'>
            {errors.password?.message?.toString()}
          </p>
          <div className=' text-sm text-slate-700 py-2 px-4 cursor-default'>
            By signing up, you agree to our
            <Link to='/termofservice' className='text-slate-500 underline px-1'>
              terms of service
            </Link>
            and
            <Link to='/termofservice' className='text-slate-500 underline px-1'>
              privacy policy.
            </Link>
          </div>
        </div>
        <div className='text-center pt-4 text-lg'>
          <Button type='submit' btnType='btn-primary'>
            Sign Up
          </Button>
          <p className='pt-12 text-slate-700'>
            Already have an account?
            <Link to={'/login'} className='pl-1 text-bright-blue-700'>
              Login.
            </Link>
          </p>
        </div>
        <ToastContainer autoClose={2000} theme='colored' pauseOnHover={false} />
      </form>
      <div></div>
    </div>
  );
};

export default SignUp;
