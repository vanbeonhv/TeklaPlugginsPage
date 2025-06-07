import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiDownload, HiOutlineDocumentAdd } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import InputForm from '../components/InputForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { WithContext as ReactTags } from 'react-tag-input';
import pluginTags from '../components/PluginTags';
import 'src/components/ReactTags.css';
import { IPluginDetail } from '../types/types';

interface ITag {
  id: string;
  text: string;
}

interface ISuggestion {
  text: string;
}

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
    .required('Please enter the plugin file URL')
    .min(6, 'File URL must be at least 6 characters')
    .url('Please enter a valid URL'),

  description: yup
    .string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description must be less than 1000 characters')
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
  const [formData, setFormData] = useState<IPluginDetail>({
    author: '',
    name: '',
    thumbnail: '',
    file: '',
    description: '',
    tags: []
  });

  //#region Tags logic
  const [tagList, setTagList] = useState<ITag[]>([
    {
      id: 'Tekla',
      text: 'Tekla'
    }
  ]);

  const handleDelete = (i: number) => {
    setTagList(tagList.filter((tag: ITag, index: number) => index !== i));
  };

  const handleAddition = (tag: ITag) => {
    setTagList([...tagList, tag]);
  };
  const handleDrag = (tag: ITag, currPos: number, newPos: number) => {
    const newTags = tagList.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTagList(newTags);
  };

  const renderSuggestion = ({ text }: ISuggestion) => (
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

  const [base64Image, setBase64Image] = useState<string | ArrayBuffer | null>(
    null
  );
  const [imgFile, setImgFile] = useState<File | undefined>(undefined);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImgFile(e.target.files?.[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(e.target.files?.[0] as Blob);
  };

  const onSubmit = async () => {
    try {
      if (!imgFile) {
        toast.error('Please select an image file');
        return;
      }

      // Convert tags
      const tags = tagList.map(tag => tag.text);

      // Use the base64 image data directly
      const updatedFormData = {
        ...formData,
        thumbnail: base64Image as string,  // Already converted to base64 by handleImage
        tags: tags,
        createdAt: Date.now(),
        downloads: 0,
        rating: 0,
        version: '1.0.0'
      };

      // Store in localStorage with a unique ID
      const pluginId = `plugin_${Date.now()}`;
      localStorage.setItem(pluginId, JSON.stringify(updatedFormData));

      // Update plugins index
      const pluginsIndex = JSON.parse(localStorage.getItem('plugins_index') || '[]');
      pluginsIndex.push(pluginId);
      localStorage.setItem('plugins_index', JSON.stringify(pluginsIndex));

      toast.success('Plugin uploaded successfully!');
      console.log('Plugin data:', updatedFormData);

      // Reset form
      setFormData({
        author: '',
        name: '',
        thumbnail: '',
        file: '',
        description: '',
        tags: []
      });
      setTagList([{ id: 'Tekla', text: 'Tekla' }]);
      setBase64Image(null);
      setImgFile(undefined);
    } catch (error) {
      console.error('Error uploading plugin:', error);
      toast.error('Failed to upload plugin. Please try again.');
    }
    //reset
    setFormData({
      author: '',
      name: '',
      thumbnail: '',
      file: '',
      description: '',
      tags: []
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
                  ? base64Image.toString()
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
