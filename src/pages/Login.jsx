import React from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';

const Login = () => {
  return (
    <div className='bg-bright-blue-100 h-[calc(100vh-112px)]'>
      <div className='flex justify-center items-center'>
        <div className='w-1/2'>
          <div className='site-logo flex items-center'>
            <RxCodesandboxLogo className='text-4xl text-bright-blue-500 m-2' />

            <span className='text-2xl font-bold text-gray-800'>
              Marc
              <span className='font-extralight text-gray-600'>Pro</span>
            </span>
          </div>
          <div>
            <form>
              <div>
                <h3>Join the community today</h3>
              </div>
              <input type='text' />
              <input type='password' />
            </form>
          </div>
        </div>
        <div className='w-1/2'>
          <img
            src='https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='login-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
