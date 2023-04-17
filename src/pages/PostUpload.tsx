import React from 'react';
import Editor from '../components/Editor';

const PostUpload = () => {
  return (
    <div>
      <h1 className='text-center py-6 text-3xl font-semibold text-bright-blue-500'>
        Create a post
      </h1>
      <Editor />
    </div>
  );
};

export default PostUpload;
