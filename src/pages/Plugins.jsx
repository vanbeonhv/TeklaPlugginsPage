import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Plugins = () => {
  return (
    <div className='w-full '>
      <div className='banner-header bg-bright-blue-500 py-10 text-center'>
        <div className='banner-header-left'></div>
        <div className='banner-header-right'></div>
        <div className='container mx-auto'>
          <h3 className='text-white text-4xl font-semibold capitalize'>
            Model faster. Drawing faster.
          </h3>
          <p className='text-white opacity  -80 pt-4'>
            Every Tekla project coverd - PPVC, PBU, PDD, KCD and many more ...
          </p>
        </div>
      </div>
      <div className='page-content'>
        <div className='container mx-auto'>
          <div className='overview py-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
              <Link to='/plugins/:id'>
                <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100 hover:shadow-lg hover:bg-bright-blue-100 group'>
                  <div className=' '>
                    <div className='relative p-4 '>
                      <h5 className=' mb-3 text-2xl font-semibold text-center'>
                        Revit Import
                      </h5>
                      <div className='card-text'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Vitae velit inventore quibusdam suscipit nihil
                        labore minus!
                      </div>
                      <img
                        src='https://ttcso.com/wp-content/uploads/2020/10/revit.jpg'
                        alt='revit-model'
                        // className='w-1/4 absolute right-3 top-0'
                      />
                      <a
                        href='https://wohhup-my.sharepoint.com/:u:/g/personal/nguyen_huuvan_wohhup_com_vn/Eezo9i0vjNVAjQXyHzGLYCABtqP53KKtlxVdT7XW12w6Qg?e=MFormq'
                        target='_blank'
                      >
                        <HiDownload className='absolute top-0 right-0 text-4xl border rounded-full p-2 text-bright-blue-500 bg-bright-blue-100 group-hover:bg-white' />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100 hover:shadow-lg hover:bg-bright-blue-100 group'>
                <div className=' '>
                  <div className='relative p-4'>
                    <h5 className=' mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                    <a
                      href='https://wohhup-my.sharepoint.com/:u:/g/personal/nguyen_huuvan_wohhup_com_vn/Eezo9i0vjNVAjQXyHzGLYCABtqP53KKtlxVdT7XW12w6Qg?e=MFormq'
                      target='_blank'
                    >
                      <HiDownload className='absolute top-0 right-0 text-4xl border rounded-full p-2 text-bright-blue-500 bg-bright-blue-100 group-hover:bg-white' />
                    </a>
                    <img
                      src='https://i.ytimg.com/vi/ixja5jT_JHM/maxresdefault.jpg'
                      alt='revit-model'
                    />
                  </div>
                </div>
              </div>

              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4 border rounded-2xl p-4 shadow-sm  hover:shadow-md hover:bg-bright-blue-100'>
                {' '}
                <div className=' -sm'>
                  <div className='card-body'>
                    <h5 className='mb-3 text-2xl font-semibold'>
                      Revit Import
                    </h5>
                    <div className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae velit inventore quibusdam suscipit nihil labore
                      minus!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plugins;
