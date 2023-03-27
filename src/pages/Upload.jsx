import React from 'react';
import Input from 'src/components/Input';
import Button from 'src/components/Button';

const Upload = () => {
  const authorName = document.querySelector('.author-name');
  console.log(authorName);
  return (
    <div className='bg-bright-blue-100 h-[calc(100vh-183px)] flex justify-center items-center '>
      <form className='w-full max-w-xl p-14 bg-white rounded-xl shadow-xl'>
        <h3 className='text-3xl font-bold text-center mb-12 text-slate-700 cursor-default'>
          Post your plugin
        </h3>
        <Input type='text' id='user' label='User' placeholder='Author name' />
        <Input
          type='text'
          id='plugin-name'
          label={`Plugin's name`}
          placeholder="Plugin's name"
        />
        <Input
          type='text'
          id='plugin-image'
          label='Plugin Image'
          placeholder="Image's link"
        />
        <Input
          type='text'
          id='file-link'
          label="File's link"
          placeholder='Link'
        />
        <Input
          type='text'
          id='post-title'
          label='Post title'
          placeholder='Post title'
        />

        <Input
          type='text'
          id='description'
          label='Description'
          placeholder='Description'
          isTextArea
        />
        <div className='text-center'>
          <Button btnType='btn-primary'>Post</Button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
