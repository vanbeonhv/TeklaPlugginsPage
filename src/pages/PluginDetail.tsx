import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IPluginDetail, IUser } from '../types/types';
import UserCard from '../components/UserCard';
import ImageCard from '../components/ImageCard';
import LikeShareDownload from '../components/LikeShareDownload';
import Article from '../components/Article';
import moment from 'moment';
import { dummyPlugins, dummyUsers } from '../dummyData/pluginData';

const PluginDetail = () => {
  const { id } = useParams();
  // Initialize with the first dummy plugin
  const [pluginDetail, setPluginDetail] = useState<IPluginDetail>(dummyPlugins[0]);
  const [authorInfo, setAuthorInfo] = useState<IUser>(dummyUsers[0]);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      // Get plugin details
      // const pluginData = localStorage.getItem(id ?? '');
      // if (!pluginData) {
      //   console.error('Plugin not found');
      //   navigate('/plugins');
      //   return;
      // }

      // const plugin = JSON.parse(pluginData);
      // setPluginDetail(plugin);

      // Get author info
      const usersData = JSON.parse(localStorage.getItem('users') ?? '[]');
      const author = usersData.find((user: IUser) => user.name === authorInfo.name);

      if (author) {
        setAuthorInfo(author);
      }
    } catch (error) {
      console.error('Error loading plugin details:', error);
      navigate('/plugins');
    }
  }, [id, navigate]);

  const { author, createdAt } = pluginDetail;

  return (
    <div className='bg-gray-100 pb-16'>
      <div className='p-4 grid grid-cols-12 container'>
        <aside className='col-span-1'>
          <LikeShareDownload pluginDetail={pluginDetail} />
        </aside>
        <main className='col-span-8 bg-white py-8 px-16 mx-4 rounded-md border border-slate-200'>
          <section className='flex justify-start items-center'>
            <img src={authorInfo?.avatar} alt='avatar' className='h-10 rounded-full' />
            <div className='ml-3'>
              <h5 className='text-sm font-bold capitalize'>{author}</h5>
              <div className='flex text-gray-500 text-xs '>
                <p>Posted on </p>
                <p className='pl-1'>{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
          </section>
          <article>
            <Article pluginDetail={pluginDetail} />
          </article>
        </main>
        <aside className='col-span-3 '>
          <UserCard authorInfo={authorInfo} />
          <ImageCard
            title='Woh Hup Viet Name Dev Team'
            src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          />
        </aside>
      </div>
    </div>
  );
};

export default PluginDetail;
