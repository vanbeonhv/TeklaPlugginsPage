import React, { useState } from 'react';
import Button from 'src/components/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegGrinStars } from 'react-icons/fa';
import InputForm from 'src/components/InputForm';

const schema = yup.object({
  displayName: yup
    .string()
    .required('Display name from 6-24 character')
    .min(6, 'Display name from 6-24 character')
    .max(24, 'Display name from 6-24 character'),

  avatar: yup
    .string()
    .required('Avatar from 6-24 character')
    .min(6, 'Avatar from 6-24 character')
    .max(24, 'Avatar from 6-24 character'),

  position: yup
    .string()
    .required('Position from 6-24 character')
    .min(6, 'Position from 6-24 character')
    .max(24, 'Position from 6-24 character')
});

const NewAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const [imgFile, setImgFile] = useState();
  const [base64Image, setBase64Image] = useState('');

  const handleImage = (e) => {
    setImgFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex justify-center items-center flex-col bg-bright-blue-100 h-[calc(100vh-112px)]'>
      <form
        className='w-full max-w-xl px-14 pb-8 pt-10 bg-white rounded-xl shadow-xl max-h-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-3xl font-semibold text-center mb-10 text-slate-700 cursor-default'>
          Just few information{' '}
          <FaRegGrinStars className='inline-block text-bright-blue-500' />
        </h3>
        <img
          src={
            base64Image
              ? base64Image
              : 'https://api.multiavatar.com/default.png'
          }
          alt='avatar'
          className='h-28 mx-auto border rounded-full border-bright-blue-200 mb-2'
        />

        <InputForm
          type='text'
          name='displayName'
          placeholder='Display Name'
          register={register}
          errorsMessage={errors.displayName?.message}
        />
        <InputForm
          type='file'
          name='avatar'
          placeholder='Avatar image'
          register={register}
          errorsMessage={errors.avatar?.message}
          onChange={handleImage}
        />
        <InputForm
          type='text'
          name='position'
          placeholder='Position'
          register={register}
          errorsMessage={errors.position?.message}
        />
        <InputForm
          type='textarea'
          name='bio'
          placeholder='Bio'
          register={register}
        />
        <div className='text-center pt-4 text-lg'>
          <Button type='submit' btnType='btn-primary'>
            finish
          </Button>
        </div>
        <ToastContainer autoClose={3000} theme='colored' pauseOnHover='false' />
      </form>
    </div>
  );
};

export default NewAccount;
