/* eslint-disable no-unused-vars */
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Table from '../../components/Table/Table';
import RoomCard from '../../components/RoomCard/RoomCard';
const RoomRes = (   ) => {
    const [searchParams] = useSearchParams();
    const date = searchParams.get('date');
  return (
    <div className='w-full relative'>
        <h1 className='text-center py-5 font-bold capitalize text-2xl'>search date: { new Date(date).toDateString()}</h1>
        <div className='w-full relative grid grid-cols-4 gap-2 p-3'>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        </div>

    </div>
  )
}

export default RoomRes