import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { RiHeartLine } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';
import { BsShare } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { getDatabase, ref, child, get } from 'firebase/database';
import app from '../../firebase';
import Button from '../components/Button';

const PluginDetail = () => {
  const handleLike = () => {
    const likeIcon = document.querySelector('.like-icon');
    likeIcon.classList.toggle('fill-red-600');
    // likeIcon.classList.toggle('text-red-600');
  };
  const { id } = useParams();

  const [pluginDetail, setPluginDetail] = useState('');
  const [pluginPost, setPluginPost] = useState({
    _id: '',
    author: '',
    avatar: '',
    time: '',
    heading: '',
    content: '',
    image: '',
    tags: ''
  });
  const dbRef = ref(getDatabase(app));
  useEffect(() => {
    get(child(dbRef, `plugin/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPluginDetail(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(id);
    get(child(dbRef, `pluginDetail/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPluginPost(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error, ' from pluginDetail');
      });
  }, []);

  const { _id, author, avatar, time, heading, content, image, tags } =
    pluginPost;
  return (
    <div className='bg-gray-100 pb-16'>
      <div className='p-4 grid grid-cols-12 container'>
        <aside className='col-span-1'>
          <div className='flex flex-col items-end justify-around pt-20 pr-2 gap-4'>
            <div className='flex flex-col  items-center gap-2'>
              <div className='relative text-slate-600'>
                <RiHeartLine
                  className='like-icon text-2xl cursor-pointer hover:text-red-600 delay-75 relative'
                  onClick={handleLike}
                />
                <FiPlus className='absolute bottom-0 right-0 rounded-full bg-white text-xs text-slate-600' />
              </div>
              <p className='text-slate-600'>0</p>
            </div>
            <div className='flex flex-col  items-center gap-2 text-slate-600 pr-1'>
              <BsShare className='text-xl cusror-pointer delay-75 hover:text-blue-600 ' />
              <p className='text-slate-600'>0</p>
            </div>
            <div className='flex flex-col  items-center gap-2 text-slate-600'>
              <Link to={pluginDetail ? pluginDetail.file : ''} target='_blank'>
                <HiOutlineDownload className='text-2xl cusror-pointer delay-75 hover:text-blue-600 ' />
              </Link>
              <p className='text-slate-600'>0</p>
            </div>
          </div>
        </aside>
        <main className='col-span-8 bg-white py-8 px-16 mx-4 rounded-md border border-slate-200'>
          <div className='flex justify-start items-center'>
            <img src={avatar} alt='avatar' className='h-10 rounded-full' />
            <div className='ml-3'>
              <h5 className='text-sm font-bold capitalize'>{author}</h5>
              <div className='flex text-gray-500 text-xs '>
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
                <ul className='pb-5'>
                  {tags
                    ? tags.map((tag) => {
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
                            className={`inline-block p-1 hover:border hover:p-[3px] ${hoverBoder}  ${hoverBg} rounded-md ml-1 delay-75 cursor-default`}
                          >
                            <span className={`${text}`}>#</span>
                            {tag}
                          </li>
                        );
                      })
                    : ''}
                </ul>
                <YoutubeEmbed embedId='CnZxamAbSnw' />
              </div>
            </header>
            <section>
              {content ? (
                content.map((text) => (
                  <p key={uuidv4()} className='py-4'>
                    {text}
                  </p>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </section>
            <div className='text-center'>
              <Button
                btnType='btn-primary'
                iconName='download'
                blank
                linkTo={pluginDetail ? pluginDetail.file : ''}
              >
                Download
              </Button>
            </div>
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
