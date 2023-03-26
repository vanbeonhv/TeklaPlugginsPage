import React from 'react';

const Upload = () => {
  const authorName = document.querySelector('.author-name');
  console.log(authorName);
  return (
    <div className='bg-bright-blue-100 h-[calc(100vh-183px)] flex justify-center items-center '>
      <form className=' '>
        <label htmlFor='user'>User</label>
        <input type='text' className='author-name' id='user' />
        <label htmlFor='name'>Name</label>
        <input type='text' className='author-name' id='name' />
        <label htmlFor='thumbnail'>Thumbnail</label>
        <input type='text' className='author-name' id='thumbnail' />
        <label htmlFor='file'>File</label>
        <input type='text' className='author-name' id='file' />
        <label htmlFor='title'>Title</label>
        <input type='text' className='author-name' id='title' />
        <label htmlFor='description'>Description</label>
        <input type='text' className='author-name' id='description' />
      </form>
    </div>
  );
};

export default Upload;
