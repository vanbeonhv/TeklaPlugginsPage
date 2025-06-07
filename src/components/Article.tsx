import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import Button from './Button';
import { IPluginDetail } from '../types/types';
import Tag from './Tag';
import { v4 as uuidv4 } from 'uuid';
import Loading from './Loading';

const Article = ({ pluginDetail }: { pluginDetail: IPluginDetail }) => {
  const { heading, content, image, tags, youtubeId } = pluginDetail;
  console.log("🚀 ~ Article ~ pluginDetail:", pluginDetail)
  return (
    <>
      <header className='title'>
        <h1 className='font-extrabold text-5xl mt-8 leading-[3.5rem]'>
          {heading}
        </h1>
        <div className='mb-5 mt-2 min-h-[42px] text-sm'>
          <ul className='pb-5'>
            {tags && tags.map((tag) => <Tag tag={tag} key={uuidv4()} />)}
          </ul>
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
          <Loading />
        )}
      </section>
      <section>
        {image &&
          image.map((img) => (
            <div className='overflow-hidden' key={uuidv4()}>
              <img src={img} alt='plugin-guide' className='scale-110' />
            </div>
          ))}
        <YoutubeEmbed embedId={youtubeId as string} />
      </section>

      <div className='text-center'>
        <Button
          type='button'
          btnType='btn-primary'
          iconName='download'
          blank
          linkTo={pluginDetail ? pluginDetail.file : ''}
        >
          Download
        </Button>
      </div>
    </>
  );
};

export default Article;
