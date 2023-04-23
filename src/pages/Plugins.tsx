import React, { useEffect, useState } from 'react';
import { ImUpload } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import { IPlugin } from '../types/types';
import PluginItem from '../components/PluginItem';
import Loading from '../components/Loading';

const Plugins = () => {
  const [data, setData] = useState<IPlugin>({});

  const db = getDatabase();
  const dbRef = ref(db);
  useEffect(() => {
    get(child(dbRef, 'plugins'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                Object.keys(data).map((index) => (
                  <PluginItem data={data} index={index} key={index} />
                ))
              ) : (
                <Loading />
              )}

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
