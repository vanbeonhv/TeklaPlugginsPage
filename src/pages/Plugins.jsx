import React, { useEffect, useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { ImUpload } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, child, get, set, push } from 'firebase/database';
import app from '../../firebase';
import LoadingIcon from '../components/LoadingIcon';
import { FirebaseError } from 'firebase/app';

const Plugins = () => {
  const [data, setData] = useState('');
  const db = getDatabase(app);
  const dbRef = ref(getDatabase(app));
  useEffect(() => {
    get(child(dbRef, `plugin`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //Upload
  const handleUpload = () => {
    const newPost = {
      name: 'numbering tool',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae velit inventore quibusdam suscipit nihil labore minus!',
      image: 'https://ttcso.com/wp-content/uploads/2020/10/revit.jpg',
      file: 'https://wohhup-my.sharepoint.com/:u:/g/personal/nguyen_huuvan_wohhup_com_vn/Eezo9i0vjNVAjQXyHzGLYCABtqP53KKtlxVdT7XW12w6Qg?e=MFormq',
      title: 'Rebar sequense number management tool',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nisi cumque debitis mollitia ullam accusantium non, odit eius obcaecati dolorum quidem consequatur hic sequi! Sit est tempora provident iure corrupti?'
      ],
      image: [''],
      tags: ['model'],
      author: 'phung duy tan'
    };
    const newUser = {
      name: 'marc nguyen',
      email: 'nguyen_huuvan@wohhup.com.vn',
      avatar: 'https://i.pravatar.cc/300?img=3',
      plugin: {
        '-NRTlczUUBMYCva_YDyT': true
      },
      createAt: Date.now()
    };
    push(ref(db, 'users'), newUser);
  };

  return (
    <div className='w-full pb-12'>
      <div className='banner-header bg-bright-blue-500 py-10 text-center overflow-hidden'>
        <div className='banner-header-left'></div>
        <div className='banner-header-right'></div>
        <div className='container cursor-default'>
          <h3 className='text-white text-4xl font-semibold capitalize'>
            Model faster. Drawing faster.
          </h3>
          <p className='text-white opacity  -80 pt-4'>
            Every Tekla project coverd - PPVC, PBU, PDD, KCD and many more ...
          </p>
        </div>
      </div>
      <div className='page-content'>
        <div className='container'>
          <div className='overview py-5'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-8 xl:gap-2 md:gap-16 relative'>
              {data ? (
                data.map((plugin) => (
                  <div
                    className='border rounded-2xl p-4 sm:m-8 md:m-8 lg:m-4 shadow-sm hover:shadow-lg h-[454px]'
                    key={uuidv4()}
                  >
                    <div className=' '>
                      <h5 className=' mb-3 text-2xl font-semibold text-center capitalize cursor-default'>
                        {plugin.name}
                      </h5>
                      <div className='card-text cursor-default min-h-[96px]'>
                        {plugin.description}
                      </div>
                      <img
                        src={plugin.image}
                        alt='plugin image'
                        className='h-52 mx-auto'
                      />

                      <div className='mt-2 flex p-2 justify-between items-center bottom-5 '>
                        <div className='text-bright-blue-500 hover:underline '>
                          <Link to={`/plugins/${plugin.id}`} key={plugin.id}>
                            <span className='font-medium text-xl'>
                              Learn more
                            </span>{' '}
                            <BsArrowRight className='m-0 inline-block' />
                          </Link>
                        </div>
                        <div>
                          <a href={plugin.file} target='_blank'>
                            <HiDownload className='text-4xl md:text-5xl border rounded-full p-2 text-bright-blue-500 bg-bright-blue-100  ' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='text-center inline-block'>
                  <LoadingIcon />
                  <p className=' block'>Loading....</p>
                </div>
              )}

              {/* <div className='text-center inline-block loading'>
                <LoadingIcon />
                <p className=' block'>loading....</p>
              </div> */}
              <div className='fixed right-8 bottom-8 text-3xl text-bright-blue-500 rounded-full bg-bright-blue-100 p-3 cursor-pointer'>
                <Link to='/upload'>
                  <ImUpload />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plugins;
