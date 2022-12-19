import React from 'react';

const Button = (props) => {
  const { color = 'bg-bright-blue-500 hover:bg-bright-blue-700', className } =
    props;

  return (
    <button
      className={`${color} ${className} px-5 py-2  text-white rounded-lg font-medium capitalize`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
