import React from 'react';

const Tag = ({ tag }: { tag: string }) => {
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
      className={`inline-block p-1 hover:border hover:p-[3px] ${hoverBoder}  ${hoverBg} rounded-md ml-1 delay-75 cursor-default`}
    >
      <span className={`${text}`}>#</span>
      {tag}
    </li>
  );
};

export default Tag;
