/* eslint-disable no-unused-vars */
import React from 'react';
import Nav from './Nav';
import Top from './Top';

const Layout = ({Element}) => {
  return (
    <div className='w-full flex relative top-0 h-screen'>
        <Nav/>
        <div className='w-full bg-slate-300 h-screen overflow-auto'>
          <div className='w-full bg-gray-100/70 backdrop-blur-md sticky top-0 z-10 p-2'>
            <Top/>
          </div>
          <div className='h-full w-full'>
            <Element/>
          </div>
        </div>
        </div>
  )
}

export default Layout