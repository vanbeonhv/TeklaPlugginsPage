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
        <aside className='col-span-1 bg-cyan-100'>aside</aside>
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
        <aside className='col-span-3 bg-cyan-100'>
          <div className='rounded border-slate-100 border'>
            <div className='bg-black min-h-[32px] w-full'></div>
            <div>
              <img src={avatar} alt='avatar' className='h-12 border-sm' />
              <h3>{author}</h3>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PluginDetail;
