import React from 'react';

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className='overflow-hidden pb-[56.25%] relative h-0'>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${embedId}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
        className='absolute w-full h-full left-0 top-0'
      />
    </div>
  );
};

export default YoutubeEmbed;
