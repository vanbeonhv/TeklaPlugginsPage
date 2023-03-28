import React, { useState } from 'react';
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
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
    return;
  };

  const constraints = {};

  const db = getDatabase(app);
  const hanldePost = () => {
    push(ref(db, 'plugins'), formData)
      .then(() => {
        console.log('upload sucessfully!');
        toast.success('upload sucessfully!');
      })
      .catch(() => {
        toast.error('upload false!');
      });
    return;
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
          type='text'
          id='plugin-image'
          name='thumbnail'
          label='Plugin Image'
          placeholder="Image's link"
        />
        <Input
          type='text'
          id='file-link'
          name='file'
          label="File's link"
          placeholder="File's link"
        />
        <Input
          type='text'
          id='post-title'
          name='title'
          label='Post title'
          placeholder='Post title'
        />

        <Input
          type='text'
          id='description'
          name='description'
          label='Description'
          placeholder='Description'
          isTextArea
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
