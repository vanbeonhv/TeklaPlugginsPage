import React, { useState } from 'react';
import axios from 'axios';
import Button from 'src/components/Button';
import app from '../../firebase';
import { getDatabase, push, ref } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiDownload, HiOutlineDocumentAdd } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import InputForm from 'src/components/InputForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { WithContext as ReactTags } from 'react-tag-input';
import pluginTags from 'src/components/PluginTags';
import 'src/components/ReactTags.css';
const schema = yup.object({
  author: yup
    .string()
    .required('Author name from 6-24 character')
    .min(6, 'Author name from 6-24 character')
    .max(24, 'Author name from 6-24 character'),

  name: yup
    .string()
    .required('Plugin name from 6-24 character')
    .min(6, 'Plugin name from 6-24 character')
    .max(24, 'Plugin name from 6-24 character'),

  file: yup
    .string()
    .required('File link from 6-24 character')
    .min(6, 'File link from 6-24 character'),

  description: yup
    .string()
    .required('Description from 6-24 character')
    .min(6, 'Description from 6-24 character')
});

const suggestions = pluginTags.map((tag) => {
  return { id: tag, text: tag };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9
};

const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];
const Upload = () => {
  const [formData, setFormData] = useState({
    author: '',
    name: '',
    thumbnail: '',
    file: '',
    description: '',
    tags: ''
  });

  //#region Tags logic
  const [tagList, setTagList] = useState([
    {
      id: 'Tekla',
      text: 'Tekla'
    }
  ]);

  const handleDelete = (i) => {
    setTagList(tagList.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTagList([...tagList, tag]);
  };
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tagList.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTagList(newTags);
  };

  const renderSuggestion = ({ text }) => (
    <div className='text-bright-blue-500 font-semibold italic'>{text}</div>
  );
  //#endregion Tags logic

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [base64Image, setBase64Image] = useState('');
  const [imgFile, setImgFile] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleImage = (e) => {
    setImgFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      setBase64Image(base64String);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const db = getDatabase();
  const handleImageUpload = () => {
    const imgFormData = new FormData();
    imgFormData.append('file', imgFile);
    imgFormData.append('upload_preset', 'zlqfvhpn');
    const uploadImage = async () => {
      // const response = await axios({
      //   method: 'post',
      //   url: 'https://api.cloudinary.com/v1_1/dff6kiqfh/image/upload',
      //   data: imgFormData
      // });

      setFormData((formData) => ({
        ...formData,
        thumbnail: 'api.test.com/v1_1'
        // thumbnail: response.data.url
      }));
    };
    uploadImage();
  };

  const onSubmit = async () => {
    const imgFormData = new FormData();
    imgFormData.append('file', imgFile);
    imgFormData.append('upload_preset', 'zlqfvhpn');
    const response = await axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/dff6kiqfh/image/upload',
      data: imgFormData
    });
    const tags = [];
    for (let tag of tagList) {
      tags.push(tag.text);
    }

    setFormData({
      ...formData,
      // thumbnail: 'api.test.com/v1_1',
      thumbnail: response.data.url,
      ['tags']: tags,
      ['created']: Date.now()
    });

    await push(ref(db, 'plugins'), formData)
      .then(() => {
        toast.success('upload sucessfully!');
      })
      .catch(() => {
        toast.error('upload false!');
      });
    console.log(formData);
    //reset
    setFormData({
      author: '',
      name: '',
      thumbnail: '',
      file: '',
      description: '',
      tags: ''
    });
  };

  return (
    <div className='bg-bright-blue-100 h-[calc(100vh-183px)] flex justify-center items-center gap-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-xl px-14 pb-8 pt-10 bg-white rounded-xl shadow-xl max-h-full'
      >
        <h3 className='text-3xl font-semibold text-center mb-10 text-slate-700 cursor-default'>
          Post your plugin
        </h3>
        <InputForm
          type='text'
          name='author'
          placeholder='Author name'
          register={register}
          errorsMessage={errors.author?.message}
          onChange={handleInput}
        />
        <InputForm
          type='text'
          name='name'
          placeholder='Plugin name'
          register={register}
          errorsMessage={errors.name?.message}
          onChange={handleInput}
        />

        <ReactTags
          tags={tagList}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          inputFieldPosition='bottom'
          placeholder='Add new tag: Tekla, PPVC, Model,...'
          renderSuggestion={renderSuggestion}
          autocomplete
        />

        <InputForm
          type='file'
          name='thumbnail'
          register={register}
          errorsMessage={errors.thumbnail?.message}
          onChange={handleImage}
        />
        <InputForm
          type='text'
          name='file'
          placeholder="File's link"
          register={register}
          errorsMessage={errors.file?.message}
          onChange={handleInput}
        />
        <InputForm
          type='textarea'
          name='description'
          placeholder='Description'
          register={register}
          errorsMessage={errors.description?.message}
          onChange={handleInput}
        />

        <div className='text-center'>
          <Button type='submit' btnType='btn-primary'>
            Post
          </Button>
          <ToastContainer autoClose={3000} />
        </div>
      </form>
      <div className='w-full max-w-lg px-14 pb-8 pt-10 bg-white rounded-xl shadow-xl max-h-full'>
        <h3 className='text-3xl font-semibold text-center mb-7 text-slate-700 cursor-default'>
          Preview
        </h3>
        <div className='border rounded-2xl p-4 sm:m-8 md:m-8 lg:m-4 shadow-sm hover:shadow-lg h-[454px]'>
          <div className=' '>
            <h5 className=' mb-3 text-2xl font-semibold text-center capitalize cursor-default'>
              {formData.name ? formData.name : 'Plugin Name'}
            </h5>
            <div className='card-text cursor-default min-h-[96px]'>
              {formData.description
                ? formData.description
                : 'Description .....'}
            </div>
            <img
              src={
                base64Image
                  ? base64Image
                  : 'https://i3.cpcache.com/merchandise/632_550x550_Front_Color-White.jpg?Size=Small-3x3&AttributeValue=NA&region=%7B%22name%22:%22FrontCenter%22,%22width%22:3.25,%22height%22:3.25,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:200,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:600,%22crop_w%22:600,%22scale%22:0,%22template%22:%7B%22id%22:102380449,%22params%22:%7B%7D%7D%7D'
              }
              alt='plugin image'
              className='h-52 mx-auto border'
            />
          </div>

          <div className='mt-2 flex p-2 justify-between items-center bottom-5 '>
            <div className='text-bright-blue-500 hover:underline '>
              <span className='font-medium text-xl cursor-pointer'>
                Learn more
              </span>
              <BsArrowRight className='m-0 inline-block' />
            </div>
            <div>
              <HiDownload className='text-4xl md:text-5xl border rounded-full p-2 text-bright-blue-500 bg-bright-blue-100  ' />
            </div>
          </div>
        </div>
      </div>
      <div className='fixed right-8 bottom-[120px] text-3xl text-bright-blue-500 rounded-full bg-white p-3 cursor-pointer hover:shadow-lg'>
        <Link to='/post-upload'>
          <HiOutlineDocumentAdd />
        </Link>
      </div>
    </div>
  );
};

export default Upload;
