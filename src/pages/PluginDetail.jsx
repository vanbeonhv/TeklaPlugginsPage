import React from 'react';
import { useParams } from 'react-router-dom';

const PluginDetail = () => {
  const { id } = useParams();
  console.log(id);
  return <div>PluginDetail</div>;
};

export default PluginDetail;
