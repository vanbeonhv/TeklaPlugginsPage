import React, { useState } from 'react';
import axios from 'axios';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import app from '../../firebase';
import { getDatabase, push, ref } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropbox } from 'dropbox';

const Upload = () => {
  const [formData, setFormData] = useState({
    author: '',
    name: '',
    thumbnail: '',
    file: '',
    title: '',
    description: ''
  });
  const [imgURL, setImgURL] = useState(null);
  const [base64Image, setBase64Image] = useState('');
  const [file, setFile] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
    return;
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setBase64Image(reader.result);
    // };
    // reader.readAsDataURL(file);
  };

  const constraints = {};

  const db = getDatabase();
  const handleUpload = () => {
    if (file) {
      // Create an instance of the Dropbox object with your access token
      const dbx = new Dropbox({
        accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN
      });

      // Upload image file to Dropbox
      const path = '/' + file.name;
      dbx
        .filesUpload({
          path: path,
          contents: file
          // mode: { '.tag': 'add' }
        })
        .then((response) => {
          console.log(response);
          // Get shared link for uploaded file
          //   const settings = { requested_visibility: { '.tag': 'public' } };
          //   dbx
          //     .sharingCreateSharedLinkWithSettings({
          //       path: response.path_display,
          //       settings: settings
          //     })
          //     .then((linkResponse) => {
          //       // Get URL for shared link
          //       const imgURL = linkResponse.url.replace('?dl=0', '?raw=1');
          //       setImgURL(imgURL);
          //     })
          //     .catch((error) => {
          //       console.error(error);
          //     });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
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

    /*
    const uploadImage = async () => {
      // Creating an object of formData
      const imgFormData = new FormData();

      // Adding our image to formData
      imgFormData.append('key', import.meta.env.VITE_IMGBB_KEY);
      imgFormData.append('image', base64Image);
      try {
        const response = await axios({
          //this is config. I will create Axios Instance in the future
          method: 'post',
          url: 'https://api.imgbb.com/1/upload',
          headers: {
            'Content-Type': 'application/json',
            //Allow CORS work in react app. But it's useless now. I config it
            //in firebase. But will be usefull when change backend
            'Access-Control-Allow-Origin': 'http://localhost:3000'
          },
          data: formData
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    uploadImage();
    */

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
          <Button type='submit' btnType='btn-primary' onClick={handleUpload}>
            Post
          </Button>
          <ToastContainer autoClose={3000} />
        </div>
      </form>
    </div>
  );
};

export default Upload;
