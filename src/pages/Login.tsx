import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/Button';
import { useAuth } from '../dummyData/AuthContext';

const schema = yup.object({
  email: yup.string().email('Please enter correct email format').required('Please enter email'),
  password: yup
    .string()
    .required('Password from 6-24 characters')
    .min(6, 'Password from 6-24 characters')
    .max(24, 'Password from 6-24 characters')
});

// Test accounts for easy access
const testAccounts = [
  {
    name: 'John Smith (Senior BIM Developer)',
    email: 'john.smith@example.com',
    password: 'test123'
  }
];

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  let navigate = useNavigate();
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({ resolver: yupResolver(schema) });

  const handleTestAccountLogin = async (email: string, password: string) => {
    try {
      await signIn(email, password);
      toast.success('Logged in successfully!', {
        position: toast.POSITION.TOP_CENTER
      });
      navigate('/');
    } catch (error) {
      toast.error('Failed to login!', {
        position: toast.POSITION.TOP_CENTER
      });
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await handleTestAccountLogin(data.email, data.password);
  };

  return (
    <div className='container mx-auto h-[calc(100vh-183px)]'>
      <div className='grid grid-cols-12 gap-4 h-full'>
        <div className='col-span-12 bg-bright-blue-100 rounded-lg p-8'>
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
              <div className='flex justify-center mb-8'>
                <RxCodesandboxLogo className='text-6xl text-bright-blue-500' />
              </div>
              <h2 className='text-3xl font-bold text-center mb-8'>Welcome Back!</h2>

              {/* Test Account Section */}
              <div className='mb-8'>
                <h3 className='text-xl font-semibold mb-4 text-gray-700'>Test Accounts</h3>
                <div className='space-y-4'>
                  {testAccounts.map((account, index) => (
                    <div key={index} className='p-4 bg-gray-50 rounded-lg'>
                      <h4 className='font-medium text-gray-800'>{account.name}</h4>
                      <p className='text-sm text-gray-600'>Email: {account.email}</p>
                      <p className='text-sm text-gray-600'>Password: {account.password}</p>
                      <button
                        onClick={() => handleTestAccountLogin(account.email, account.password)}
                        className='mt-2 text-sm text-bright-blue-500 hover:text-bright-blue-700'
                      >
                        Quick Login →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                  <input
                    {...register('email')}
                    className='border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-bright-blue-500'
                  />
                  <p className='text-red-500 text-xs italic'>{errors.email?.message as string}</p>
                </div>
                <div className='mb-6'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                  <input
                    type='password'
                    {...register('password')}
                    className='border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-bright-blue-500'
                  />
                  <p className='text-red-500 text-xs italic'>{errors.password?.message as string}</p>
                </div>
                <div className='flex items-center justify-between mb-6'>
                  <button
                    type='submit'
                    className='bg-bright-blue-500 hover:bg-bright-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                  >
                    Sign In
                  </button>
                  <Link to='/signup' className='text-bright-blue-500 hover:text-bright-blue-700 text-sm'>
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
