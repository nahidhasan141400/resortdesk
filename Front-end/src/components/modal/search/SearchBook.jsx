/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchBook = ({close}) => {
  const [date,setDate] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-full fixed top-0 left-0 z-20 bg-base/20 backdrop-blur-sm h-screen overflow-auto flex justify-center animate-fade-down">
      <div className="w-full max-w-[400px] relative mt-20">
        <div className="w-full bg-slate-300 p-2 text-center capitalize rounded-md font-bold">
          pick the booking date
        </div>
        <div className="w-full p-2 bg-slate-200/50 glass shadow-md rounded-md">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Book Date</span>
            </label>
            <input
            onChange={(e)=>{
              setDate(e.target.value)
            }}
            value={date}
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          
          <div className="w-full p-2">
          
            <button onClick={() => {navigate(`/roomsearch?date=${date}`); close(false)}} className="btn btn-outline btn-primary shadow-lg"> <span><SubwaySearch/></span>Search</button>
           
            <button className="btn btn-link text-red-600 float-right" onClick={()=>{close()}}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;


// icone  

export function SubwaySearch(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M325.8 0C223 0 139.6 83.4 139.6 186.2c0 33.5 9 64.8 24.4 92L0 442.2l23.3 46.5L69.8 512l164-164c27.1 15.5 58.5 24.4 92 24.4C428.6 372.4 512 289 512 186.2S428.6 0 325.8 0zm0 314.2c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128z"></path></svg>
    )
  }