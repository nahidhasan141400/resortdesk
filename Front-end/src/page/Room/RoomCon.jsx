/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import RoomCard from '../../components/RoomCard/RoomCard';
import AddRoom from '../../components/modal/Room/AddRoom/AddRoom';
const RoomCon = () => {
  const [add,setAdd] = useState(false);
  return (
    <div className='relative w-full'>
      {
        add? <AddRoom close={setAdd}/>:""
      }
        <div className='py-4 w-full p-4 relative bg-gradient-to-br from-primary/30 to-base-100/25'>
            <button onClick={()=>{setAdd(true)}} className='btn btn-primary btn-outline'>
              <span  className='text-xl'><IcBaselineAddToPhotos/></span> Add New Room
            </button>
        </div>
        <div className='w-full relative grid grid-cols-4 gap-3 p-3'>
                <RoomCard/>
        </div>
    </div>
  )
}

export default RoomCon


export function IcBaselineAddToPhotos(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></svg>
  )
}