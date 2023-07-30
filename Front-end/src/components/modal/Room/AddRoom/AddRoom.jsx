/* eslint-disable no-unused-vars */
import React from "react";
import upimg from "./upload.png";

const AddRoom = ({close}) => {
  return (
    <div className="w-full fixed top-0 left-0 z-20 bg-base/20 backdrop-blur-sm h-screen overflow-auto flex justify-center animate-fade-down">
      <div className="w-full mx-2 md:w-7/12 mt-10 bg-base-100/60 rounded-md overflow-hidden">
        <div className="w-full relative bg-primary/60 p-1"></div>
        {/* header  */}
        <div className="w-full relative p-2 flex items-center text-2xl capitalize border-b-[0.5px] border-secondary">
          <span className="pr-2 text-3xl text-primary">
            <IcBaselineAddToPhotos />
          </span>{" "}
          Add new room
          <button onClick={()=>close(false)} className="absolute btn btn-error btn-outline btn-sm right-[20px]">close</button>
        </div>
        {/* form */}
        <div className="w-full relative grid grid-cols-2">
          {/* image upload  */}
          <div className="relative w-full p-3 pt-10">
            <img
              src={upimg}
              className="w-11/12  h-52  bg-base-100 rounded-md overflow-hidden object-contain shadow-sm"
            />
            <label className="label">
              <p className="label-text">Chouse a Photo</p>
            </label>
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              className=" mt-3 file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>
          <div className="w-full relative p-3">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Room Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Room Number</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Room Price For One Day</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Maximum Discount</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
        </div>
        {/* selected value  */}
        <div className="w-full relative flex p-3 gap-2 flex-wrap">
          {/* checkbox  */}
          <div className="form-control bg-base-100 p-2 rounded-md shadow-lg">
            <label className="label cursor-pointer">
              <span className="label-text flex text-xl items-center pr-3">
                {" "}
                <span>
                  {" "}
                  <MaterialSymbolsAcUnit />
                </span>
                AC Room
              </span>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
          </div>
          {/* checkbox  */}
          <div className="form-control bg-base-100 p-2 rounded-md shadow-lg">
            <label className="label cursor-pointer">
              <span className="label-text flex text-xl items-center pr-3">
                {" "}
                <span>
                  {" "}
                  <IconoirBalcony />
                </span>
                Balcony
              </span>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
          </div>

          {/* select room type  */}
          <div className="form-control bg-base-100 p-2 rounded-md shadow-lg flex items-center flex-row flex-nowrap">
           <div className="text-2xl pr-2">
            <MaterialSymbolsBedroomChildOutline/>
           </div>
            <select className="select select-bordered select-primary ">
              <option disabled selected>
                Room Type
              </option>
              <option>Couple</option>
              <option>Double</option>
            </select>
          </div>
          {/* select room type  */}
          <div className="form-control bg-base-100 p-2 rounded-md shadow-lg flex items-center flex-row flex-nowrap">
           <div className="text-2xl pr-2">
            <StreamlineTravelPlacesBeachIslandWavesOutdoorRecreationTreeBeachPalmWaveWater/>
           </div>
            <select className="select select-bordered select-primary ">
              <option disabled selected>
                Room View Point
              </option>
              <option>See Beach</option>
              <option>Indoor</option>
            </select>
          </div>
          {/* select room capacyty  */}
          <div className="form-control bg-base-100 p-2 rounded-md shadow-lg flex items-center flex-row flex-nowrap">
           <div className="text-2xl pr-2">
            <MaterialSymbolsFamilyRestroom/>
           </div>
            <input type="number" className="input input-primary input-bordered" placeholder="Capacity" />
          </div>
          <div className="form-control bg-base-100 p-2 rounded-md shadow-lg flex items-center flex-row flex-nowrap">
           <div className="text-2xl pr-2">
            <MdiToilet/>
           </div>
            <select className="select select-bordered select-primary ">
              <option disabled selected>
                Toilet Type
              </option>
              <option>High commode</option> 
              <option>Low commode</option>
            </select>
          </div>
        </div>
        {/* button  */}
        <div className="w-full relative p-3">
            <button className="btn btn-primary">Save Room</button>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
export function IcBaselineAddToPhotos(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsAcUnit(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 22v-4.15l-3.25 3.2l-1.4-1.4L11 15v-2H9l-4.65 4.65l-1.4-1.4L6.15 13H2v-2h4.15l-3.2-3.25l1.4-1.4L9 11h2V9L6.35 4.35l1.4-1.4L11 6.15V2h2v4.15l3.25-3.2l1.4 1.4L13 9v2h2l4.65-4.65l1.4 1.4l-3.2 3.25H22v2h-4.15l3.2 3.25l-1.4 1.4L15 13h-2v2l4.65 4.65l-1.4 1.4l-3.25-3.2V22h-2Z"
      ></path>
    </svg>
  );
}

export function IconoirBalcony(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 13v8m4-8v8m8-8v8m-4-8v8m8-8v8M2 21h20M2 13h20m-4-3V3.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V10"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsBedroomChildOutline(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 17h1.5v-1.5h9V17H18v-4.15q0-.75-.413-1.337T16.5 10.65V9q0-.825-.588-1.413T14.5 7h-5q-.825 0-1.413.588T7.5 9v1.65q-.675.275-1.088.863T6 12.85V17Zm1.5-3v-1.15q0-.35.25-.6t.6-.25h7.3q.35 0 .6.25t.25.6V14h-9ZM9 10.5v-2h6v2H9ZM4 22q-.825 0-1.413-.588T2 20V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.588 1.413T20 22H4Zm0-2h16V4H4v16Zm0 0V4v16Z"></path></svg>
    )
  }
  
export function MaterialSymbolsFamilyRestroom(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 6q-.825 0-1.413-.588T16 4q0-.825.588-1.413T18 2q.825 0 1.413.588T20 4q0 .825-.588 1.413T18 6Zm-1 16v-8q0-1-.513-1.8t-1.312-1.25l.875-2.575q.2-.625.738-1T18 7q.675 0 1.213.375t.737 1L22.5 16H20v6h-3Zm-4.5-10.5q-.625 0-1.063-.438T11 10q0-.625.438-1.063T12.5 8.5q.625 0 1.063.438T14 10q0 .625-.438 1.063T12.5 11.5ZM5.5 6q-.825 0-1.413-.588T3.5 4q0-.825.588-1.413T5.5 2q.825 0 1.413.588T7.5 4q0 .825-.588 1.413T5.5 6Zm-2 16v-7H2V9q0-.825.588-1.413T4 7h3q.825 0 1.413.588T9 9v6H7.5v7h-4Zm7.5 0v-4h-1v-4q0-.625.438-1.063T11.5 12.5h2q.625 0 1.063.438T15 14v4h-1v4h-3Z"></path></svg>
    )
  }
  
export function MdiToilet(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9 22h8v-2.5c2.41-1.63 4-4.38 4-7.5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H3c0 3.09 2 6 6 7.5V22m-3.71-8h13.42A7.017 7.017 0 0 1 15 18.33V20h-4v-1.67C9 18 5.86 15.91 5.29 14M15 4h4v8h-4V4m1 1v3h2V5h-2Z"></path></svg>
    )
  }
  
export function StreamlineTravelPlacesBeachIslandWavesOutdoorRecreationTreeBeachPalmWaveWater(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 13.48H13a2 2 0 0 1-2-2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-2 2H.5m9.5-4a5.49 5.49 0 0 0-8.48 0"></path><path d="M6.5 7.53c.06-2.26.75-4.32 2.25-5.06M5.76.57a2.58 2.58 0 0 1 3 1.9"></path><path d="M12.41 2.84a2.78 2.78 0 0 0-3.66-.37"></path><path d="M5.08 3.54a3 3 0 0 1 3.67-1.07a2.55 2.55 0 0 1 1.89 3"></path></g></svg>
    )
  }