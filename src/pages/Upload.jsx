import React, { useState } from 'react';
import axios from 'axios';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import app from '../../firebase';
import { getDatabase, push, ref } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upload = () => {
  const [formData, setFormData] = useState({
    author: '',
    name: '',
    thumbnail: '',
    file: '',
    title: '',
    description: ''
  });

  const [base64Image, setBase64Image] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
    return;
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result.split(',')[1]);
    };
  };

  const constraints = {};

  const db = getDatabase();
  const hanldePost = () => {
    // setFormData((formData) => ({ ...formData, ['created']: Date.now() }));
    // push(ref(db, 'plugins'), formData)
    //   .then(() => {
    //     console.log('upload sucessfully!');
    //     toast.success('upload sucessfully!');
    //   })
    //   .catch(() => {
    //     toast.error('upload false!');
    //   });
    const uploadImage = async () => {
      const response = await axios.post('https://api.imgbb.com/1/upload', {
        params: {
          key: import.meta.env.VITE_IMGBB_API_KEY,
          image: base64Image
        },
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Connection: 'keep-alive',
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    };
    uploadImage();

    setFormData({
      author: '',
      name: '',
      thumbnail: '',
      file: '',
      title: '',
      description: ''
    });
  };

  const handleUser = () => {
    const user = {
      avatar: 'https://i.pravatar.cc/300?img=30',
      email: 'phung_duytan@wohhup.com.vn',
      name: 'phung duy tan',
      plugin: {}
    };
    push(ref(db, 'users'), { ...user, ['created']: Date.now() }).then(() => {
      console.log('uploaded');
    });
  };

  return (
    <div className='bg-bright-blue-100 h-[calc(100vh-183px)] flex justify-center items-center '>
      <form className='w-full max-w-xl px-14 pb-8 pt-10 bg-white rounded-xl shadow-xl max-h-full'>
        <h3 className='text-3xl font-semibold text-center mb-10 text-slate-700 cursor-default'>
          Post your plugin
        </h3>
        <Input
          type='text'
          id='user'
          label='User'
          name='author'
          placeholder='Author name'
          onChange={handleInput}
          required
        />

        <Input
          type='text'
          id='plugin-name'
          name='name'
          label={`Plugin's name`}
          placeholder="Plugin's name"
          onChange={handleInput}
        />
        <Input
          type='file'
          id='plugin-image'
          name='thumbnail'
          label='Plugin Image'
          onChange={handleFile}
        />
        <Input
          type='text'
          id='file-link'
          name='file'
          label="File's link"
          placeholder="File's link"
          onChange={handleInput}
        />
        <Input
          type='text'
          id='post-title'
          name='title'
          label='Post title'
          placeholder='Post title'
          onChange={handleInput}
        />

        <Input
          type='textarea'
          id='description'
          name='description'
          label='Description'
          placeholder='Description'
          onChange={handleInput}
        />
        <div className='text-center'>
          <Button type='submit' btnType='btn-primary' onClick={hanldePost}>
            Post
          </Button>
          <ToastContainer autoClose={3000} />
        </div>
      </form>
    </div>
  );
};

export default Upload;
