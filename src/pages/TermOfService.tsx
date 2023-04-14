import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const TermOfService = () => {
  return (
    <div className='container pb-10'>
      <h3 className='text-4xl text-center font-bold text-bright-blue-500 py-12'>
        Terms of Service
      </h3>
      <p className='pb-3'>
        Welcome to
        <span className='font-semibold text-bright-blue-500'>
          {' '}
          Plugin Store
        </span>
        , an app provided by{' '}
        <span className='font-semibold text-bright-blue-500'>MarcPro</span>
      </p>
      <p>
        By using the app, you agree to the following{' '}
        <span className='font-semibold text-bright-blue-500'>
          Terms of Service:
        </span>{' '}
      </p>
      <br />
      <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
        Use of the App:{' '}
      </h4>
      <p>
        You may use the app only for lawful purposes and in accordance with
        these Terms of Service. You are responsible for ensuring that your use
        of the app does not violate any applicable laws, regulations, or
        third-party rights.
      </p>
      <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
        Intellectual Property:{' '}
      </h4>
      <p>
        The app and its entire contents, features, and functionality (including
        but not limited to all information, software, text, displays, images,
        video, and audio) are owned by{' '}
        <span className='font-semibold text-bright-blue-500'>MarcPro</span>, its
        licensors, or other providers of such material and are protected by
        United States and international copyright, trademark, patent, trade
        secret, and other intellectual property or proprietary rights laws.
        <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
          User Content:{' '}
        </h4>
        The app may allow you to submit or upload content, such as reviews or
        ratings. By submitting or uploading content, you grant{' '}
        <span>MarcPro</span> a non-exclusive, royalty-free, perpetual,
        irrevocable, and fully sublicensable right to use, reproduce, modify,
        adapt, publish, translate, create derivative works from, distribute, and
        display such content throughout the world in any media.
        <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
          Limitations of Liability:{' '}
        </h4>
        The app and its content are provided on an "as is" basis without
        warranties of any kind, either express or implied. <span>MarcPro</span>{' '}
        shall not be liable for any damages arising out of or related to your
        use of the app, including but not limited to direct, indirect,
        incidental, consequential, or punitive damages. Indemnification: You
        agree to indemnify, defend, and hold harmless <span>MarcPro</span> and
        its officers, directors, employees, agents, and affiliates.
      </p>

      <div className='text-right pt-8 text-bright-blue-500 underline font-medium'>
        <Link to='/policy'>
          Policy <BsArrowRight className='inline-block' />
        </Link>
      </div>
    </div>
  );
};

export default TermOfService;
