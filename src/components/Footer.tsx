import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <hr />
      <div className='h-28 bottom-0 flex justify-around items-center'>
        <div className='text-slate-600 h-14 flex'>
          <img
            src='https://www.wohhup.com/wp-content/uploads/2021/02/woh-hup.svg'
            alt='wohhup-logo'
            className='h-full w-full'
          />
          <ul className='pt-1 min-w-[10rem] leading-[4rem]'>
            <li className='inline-block mx-2 rounded-full bg-bright-blue-100 text-bright-blue-500 p-2 text-md'>
              <a href='https://www.wohhup.com/' target='_blank'>
                <BiWorld />
              </a>
            </li>
            <li className='inline-block mx-2 rounded-full bg-bright-blue-100 text-bright-blue-500 p-2 text-md'>
              <a href='https://www.facebook.com/WohHupGroup/' target='_blank'>
                <FaFacebookF />
              </a>
            </li>
            <li className='inline-block mx-2 rounded-full bg-bright-blue-100 text-bright-blue-500 p-2 text-md'>
              <a
                href='https://www.linkedin.com/company/woh-hup-pte.-ltd./mycompany/'
                target='_blank'
              >
                <AiFillLinkedin />{' '}
              </a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <div className=' text-bright-blue-500 underline font-medium'>
            <Link to='/policy'>Privacy Policy</Link>
          </div>
          <div className=' text-bright-blue-500 underline font-medium'>
            <Link to='/termofservice'>Term of service</Link>
          </div>
          <div className=' text-bright-blue-500 underline font-medium'>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
