import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPluginDetail, IUser } from '../types/types';
import { getDatabase, ref, child, get } from 'firebase/database';
import UserCard from '../components/UserCard';
import ImageCard from '../components/ImageCard';
import LikeShareDownload from '../components/LikeShareDownload';
import Article from '../components/Article';
import moment from 'moment';

const PluginDetail = () => {
  const { id } = useParams();
  const [pluginDetail, setPluginDetail] = useState<IPluginDetail>({
    author: '',
    heading: '',
    description: '',
    name: '',
    thumbnail: '',
    title: '',
    file: '',
    content: [],
    image: [],
    tags: [],
    youtubeId: ''
  });

  const [authorInfo, setAuthorInfo] = useState<IUser>({
    avatar: '',
    bio: '',
    createAt: 0,
    email: '',
    name: '',
    position: '',
    uid: '',
    plugin: {}
  });

  const db = getDatabase();
  const dbRef = ref(db);

  useEffect(() => {
    get(child(dbRef, `plugins/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPluginDetail(snapshot.val());
        }
        const pluginAuthor = snapshot.val().author;

        get(child(dbRef, 'users')).then((snapshot) => {
          const users = snapshot.val();
          for (let user in users) {
            if (users[user].name === pluginAuthor) {
              setAuthorInfo(users[user]);
              break;
            }
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { author, createdAt } = pluginDetail;

  return (
    <div className='bg-gray-100 pb-16'>
      <div className='p-4 grid grid-cols-12 container'>
        <aside className='col-span-1'>
          <LikeShareDownload pluginDetail={pluginDetail} />
        </aside>
        <main className='col-span-8 bg-white py-8 px-16 mx-4 rounded-md border border-slate-200'>
          <section className='flex justify-start items-center'>
            <img
              src={authorInfo?.avatar}
              alt='avatar'
              className='h-10 rounded-full'
            />
            <div className='ml-3'>
              <h5 className='text-sm font-bold capitalize'>{author}</h5>
              <div className='flex text-gray-500 text-xs '>
                <p>Posted on </p>
                <p className='pl-1'>
                  {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </p>
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
            src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            title='Wohhup Vietnam Dev Team'
          />
        </aside>
      </div>
    </div>
  );
};

export default PluginDetail;
