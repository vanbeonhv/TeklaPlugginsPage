import React from 'react';
import { FieldValues, SubmitHandler, set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../../firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { child, getDatabase, push, ref } from 'firebase/database';

const db = getDatabase();
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
const SignUp = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const googleProvider = new GoogleAuthProvider();
  googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  const gitHubProvider = new GithubAuthProvider();
  gitHubProvider.addScope('repo');
  gitHubProvider.setCustomParameters({
    allow_signup: 'false'
  });

  const handleGithubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        toast.error('Invalid username/password!', {
          position: toast.POSITION.TOP_CENTER
        });
        console.log(`error ${error.code}: ${error.message}`);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        // The signed-in user info.
        const user = data.user;
        // IdP data available using getAdditionalUserInfo(result)
        navigate('/');
      })
      .catch((error) => {
        toast.error('Invalid username/password!', {
          position: toast.POSITION.TOP_CENTER
        });
        console.log(`error ${error.code}: ${error.message}`);
      });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        push(ref(db, `users`), {
          email: email,
          avatar: 'https://api.multiavatar.com/default.png',
          uid: userId,
          createAt: Date.now()
        }).then(() => {
          toast.success('Sign up successfully!', {
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
            navigate('/new-account');
          }, 2000);
        });
      })
      .catch((error) => {
        toast.error(`Sign up false. Error: ${error.code}`, {
          position: toast.POSITION.TOP_CENTER
        });
        console.log(`error ${error.code}: ${error.message}`);
      });
  };

  return (
    <div className='flex justify-center items-center flex-col bg-bright-blue-100 h-[calc(100vh-112px)]'>
      <Link to='/'>
        <div className='flex items-center pb-6'>
          <RxCodesandboxLogo className='text-4xl text-bright-blue-500 m-2' />
          <span className='text-3xl font-bold text-gray-800'>
            Marc
            <span className='font-extralight text-gray-600'>Pro</span>
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
