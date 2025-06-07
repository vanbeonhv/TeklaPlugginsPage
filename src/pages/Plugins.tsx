import React, { useEffect, useState } from 'react';
import { ImUpload } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { IPluginDetail } from '../types/types';
import PluginItem from '../components/PluginItem';
import Loading from '../components/Loading';
import { dummyPlugins, dummyUsers } from '../dummyData/pluginData';

const Plugins = () => {
  const [data, setData] = useState<Record<string, IPluginDetail>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Get the plugins index from localStorage
      let pluginsIndex = JSON.parse(localStorage.getItem('plugins_index') ?? '[]');
      
      // If no plugins exist, initialize with dummy data
      if (pluginsIndex.length === 0) {
        pluginsIndex = dummyPlugins.map((plugin, index) => {
          const pluginId = `plugin_${Date.now() - index * 1000}`;
          localStorage.setItem(pluginId, JSON.stringify(plugin));
          return pluginId;
        });
        localStorage.setItem('plugins_index', JSON.stringify(pluginsIndex));

        // Also store dummy users data
        localStorage.setItem('users', JSON.stringify(dummyUsers));
      }
      
      // Get each plugin's data
      const pluginsData: Record<string, IPluginDetail> = {};
      pluginsIndex.forEach((pluginId: string) => {
        const pluginData = localStorage.getItem(pluginId);
        if (pluginData) {
          pluginsData[pluginId] = JSON.parse(pluginData);
        }
      });
      
      setData(pluginsData);
    } catch (error) {
      console.error('Error loading plugins:', error);
    } finally {
      setLoading(false);
    }
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
            Every Tekla project covered - PPVC, PBU, PDD, KCD and many more ...
          </p>
        </div>
      </div>
      <div className='page-content'>
        <div className='container'>
          <div className='overview py-5'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-8 xl:gap-2 md:gap-16 relative'>
              {loading ? (
                <Loading />
              ) : Object.keys(data).length > 0 ? (
                Object.keys(data).map((index) => (
                  <PluginItem data={data} index={index} key={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  <p>No plugins available. Be the first to upload one!</p>
                </div>
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
