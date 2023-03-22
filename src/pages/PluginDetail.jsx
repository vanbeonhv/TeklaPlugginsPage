import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/Data/Data';
import { v4 as uuidv4 } from 'uuid';

const PluginDetail = () => {
  const { id } = useParams();
  const detail = data.pluginDetail.find((detail) => detail.id == id);
  const { _id, author, avatar, time, heading, content, image, tags } = detail;
  return (
    <div className='bg-gray-100'>
      <div className='p-4 grid grid-cols-12 container'>
        <aside className='col-span-1'>aside</aside>
        <main className='col-span-8 bg-white pt-8 px-16 mx-4 rounded-md border border-slate-200'>
          <div className='flex justify-start items-center'>
            <img src={avatar} alt='avatar' className='h-10 rounded-full' />
            <div className='ml-3'>
              <h5 className='text-sm font-bold capitalize'>{author}</h5>
              <div className='flex text-gray-500 text-xs'>
                <p>Posted on </p>
                <p className='pl-1'>{time}</p>
              </div>
            </div>
          </div>
          <article>
            <header className='title'>
              <h1 className='font-extrabold text-5xl mt-8 leading-[3.5rem]'>
                {heading}
              </h1>
              <div className='mb-5 mt-2 min-h-[42px] text-sm'>
                <ul className=''>
                  {tags.map((tag) => {
                    let hoverBoder;
                    let hoverBg;
                    let text;
                    switch (tag) {
                      case 'PPVC':
                        hoverBoder = `hover:border-red-200`;
                        hoverBg = 'hover:bg-red-100';
                        text = 'text-red-500';
                        break;
                      case 'modeling':
                        hoverBoder = `hover:border-emerald-200`;
                        hoverBg = 'hover:bg-emerald-100';
                        text = 'text-emerald-500';
                        break;

                      case 'drawing':
                        hoverBoder = `hover:border-violet-200`;
                        hoverBg = 'hover:bg-violet-100';
                        text = 'text-violet-500';
                        break;
                      case 'plugin':
                        hoverBoder = `hover:border-amber-200`;
                        hoverBg = 'hover:bg-amber-100';
                        text = 'text-amber-500';
                        break;
                      case 'application':
                        hoverBoder = `hover:border-sky-200`;
                        hoverBg = 'hover:bg-sky-100';
                        text = 'text-sky-500';
                        break;
                      default:
                        break;
                    }

                    return (
                      <li
                        key={uuidv4()}
                        className={`inline-block p-1 hover:border ${hoverBoder}  ${hoverBg} rounded-md ml-1 delay-75 cursor-default`}
                      >
                        <span className={`${text}`}>#</span>
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </header>
            <section>
              {content.map((text) => (
                <p key={uuidv4()} className='py-4'>
                  {text}
                </p>
              ))}
            </section>
          </article>
        </main>
        <aside className='col-span-3 '>
          <div className='rounded-lg border-slate-100 border bg-white mb-4'>
            <div className='bg-black min-h-[32px] w-full rounded-t-lg '></div>
            <div className='flex justify-start items-center px-4 gap-2 relative'>
              <img
                src={avatar}
                alt='avatar'
                className='h-12 border-sm rounded-md relative top-[-15px]'
              />
              <h3 className='inline-block text-xl font-bold  capitalize text-gray-700 cursor-pointer hover:text-bright-blue-500 delay-75 ease-in-out'>
                {author}
              </h3>
            </div>
            <div className='mx-4'>
              <button
                type='button'
                className='bg-bright-blue-500 hover:bg-bright-blue-700 capitalize rounded-md text-white  py-2 w-full  font-semibold'
              >
                follow
              </button>
            </div>
            <div className='mx-4 mt-2'>
              <p className='text-sm text-slate-700 pb-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='pb-4 text-sm text-slate-700'>
                <h3 className='uppercase text-sm font-semibold '>work</h3>
                <p className='pt-1'>Bim Designer</p>
              </div>
              <div className='pb-4 text-sm text-slate-700'>
                <h3 className='uppercase text-sm font-semibold '>contact</h3>
                <a
                  className='pt-1 hover:text-bright-blue-700'
                  href='mailto:nguyen_huuvan@wohhup.com.vn'
                >
                  {' '}
                  Nguyen_huuvan@wohhup.com.vn
                </a>
              </div>
            </div>
          </div>
          <div className='rounded-lg border-neutral-100 border bg-white mb-4 p-4 overflow-hidden sticky top-17'>
            <p className='text-slate-500 text-sm font-semibold leading-5 pb-2 '>
              Wohhup VN Dev Team
            </p>
            <img
              src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
              alt='side part'
              className='rounded-md'
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PluginDetail;
