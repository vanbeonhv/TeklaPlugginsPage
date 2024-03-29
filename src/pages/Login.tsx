import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../../firebase';
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/Button';
import { getUserData } from '../utils/UserData';
import { saveAccessTokenToCookie } from '../utils/LocalCache';
import { useUserInforStore } from '../store/userStore';

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
  let navigate = useNavigate();
  const { updateUserInfor } = useUserInforStore();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  gitHubProvider.addScope('repo');
  gitHubProvider.setCustomParameters({
    allow_signup: 'false'
  });

  const handleGithubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        document.cookie = `accessToken=${accessToken}`;
        navigate('/');
      })
      .catch((error) => {
        toast.error('Invalid username/password!', {
          position: toast.POSITION.TOP_CENTER
        });
        console.log(`error ${error.code}: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        const credential = GoogleAuthProvider.credentialFromResult(data);
        const accessToken = credential?.accessToken;
        document.cookie = `accessToken=${accessToken}`;
        navigate('/');
      })
      .catch((error) => {
        toast.error('Invalid username/password!', {
          position: toast.POSITION.TOP_CENTER
        });
        console.log(`error ${error.code}: ${error.message}`);
      });
  };

  //handleEmailLogin
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        user
          .getIdToken()
          .then((accessToken) => {
            saveAccessTokenToCookie(accessToken);
          })
          .then(async () => {
            const userData = await getUserData(uid);
            updateUserInfor(userData);
          })
          .then(() => navigate('/'))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        toast.error('Invalid username/password!', {
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
          Login
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
            //  name='email' Register already have name property. commented then need to test
            className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mb-1  rounded-lg duration-150 w-full'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          <p className='min-h-[1rem] text-red-500 italic pl-2'>
            {errors.email?.message?.toString()}
          </p>
          <input
            type='password'
            // name='password' same commet with name='email' above
            className='border border-bright-blue-200 focus:border-bright-blue-500 focus:shadow-md outline-none p-2 mt-1 rounded-lg duration-150 w-full'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          <p className='min-h-[1rem] text-red-500 italic pl-2'>
            {errors.password?.message?.toString()}
          </p>
          <div className='flex justify-between items-center text-sm text-slate-500 py-2 '>
            <div className='flex flex-row-reverse'>
              <label className=' leading-5 pl-2' htmlFor='remember-password'>
                Remenber me
              </label>
              <input
                type='checkbox'
                name='remember-password'
                id='remember-password'
                className=''
              />
            </div>
            <div className='underline cursor-pointer hover:text-slate-800 '>
              Forgot password?
            </div>
          </div>
        </div>
        <div className='text-center pt-4 text-lg'>
          <Button type='submit' btnType='btn-primary'>
            Login
          </Button>
          <p className='pt-12 text-slate-700'>
            No Account? Sign up
            <Link to={'/signup'} className='pl-1 text-bright-blue-700'>
              Here.
            </Link>
          </p>
        </div>
        <ToastContainer autoClose={3000} theme='colored' pauseOnHover={false} />
      </form>
      <div></div>
    </div>
  );
};

export default Login;
