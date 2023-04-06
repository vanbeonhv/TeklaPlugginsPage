import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <div className='container pb-10'>
      <h3 className='text-4xl text-center font-bold text-bright-blue-500 py-12'>
        Privacy Policy
      </h3>
      <p>
        We at{' '}
        <span className='font-semibold text-bright-blue-500'>MarcPro</span>{' '}
        value your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and share
        your personal information when you use our
        <span className='font-semibold text-bright-blue-500'>
          {' '}
          Plugin Store
        </span>{' '}
        app.
        <br />
        By using the app, you consent to the practices described in this policy.
      </p>
      <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
        What Information We Collect:
      </h4>
      <ul>
        <li>
          <span className='font-semibold'>Device Information:</span> We may
          collect certain information about your device, including its unique
          device identifier, operating system, and mobile network information.
        </li>
        <li>
          <span className='font-semibold'>Usage Information: </span>
          We may collect information about how you use the app, such as which
          features you use and how often you use them.
        </li>
        <li>
          <span className='font-semibold'>Personal Information: </span>
          We may collect personal information you provide to us, such as your
          name, email address, and other contact information.
        </li>
      </ul>
      <p>How We Use Your Information:</p>
      <ul>
        <li>
          <span className='font-semibold'>
            To Provide and Improve the App:{' '}
          </span>
          We use your information to provide you with the app's features and to
          improve the app's functionality and performance.
        </li>
        <li>
          <span className='font-semibold'>To Communicate with You: </span>
          We may use your information to communicate with you about updates to
          the app and to respond to your inquiries or support requests.
        </li>
        <li>
          <span className='font-semibold'>
            To Personalize Your Experience:{' '}
          </span>
          We may use your information to personalize your experience with the
          app, such as by providing personalized recommendations based on your
          usage patterns.
        </li>
        <li>
          <span className='font-semibold'>
            To Comply with Legal Requirements:{' '}
          </span>
          We may use your information to comply with legal obligations, such as
          responding to subpoenas or court orders.
        </li>
      </ul>
      <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
        How We Share Your Information:{' '}
      </h4>
      <p>
        We may share your information with third-party service providers who
        assist us in providing the app's features and functionality. We may also
        share your information with law enforcement or other governmental
        agencies if we believe it is necessary to comply with legal obligations.
        <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
          Security:{' '}
        </h4>
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, we cannot guarantee
        the security of your information, and you should take steps to protect
        your own personal information when using the app.
        <h4 className='text-lg pt-5 pb-2 text-bright-blue-500 font-semibold'>
          Changes to This Privacy Policy:{' '}
        </h4>
        We may update this Privacy Policy from time to time. If we make material
        changes to this policy, we will notify you by email or by posting a
        notice on our website or within the app.
        <div className='text-right pt-8 text-bright-blue-500 underline font-medium'>
          <Link to='/termofservice'>
            Term of service <BsArrowRight className='inline-block' />
          </Link>
        </div>
      </p>
    </div>
  );
};

export default Policy;
