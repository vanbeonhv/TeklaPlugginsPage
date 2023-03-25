import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='container h-28 bottom-0'>
      <hr />
      <div className='text-center text-slate-600 h-28 pt-8'>
        <p className='block'>
          Woh hup <span>{year}</span>
        </p>
        <ul className='pt-1'>
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
    </div>
  );
};

export default Footer;
