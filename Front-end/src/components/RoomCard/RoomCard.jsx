/* eslint-disable no-unused-vars */
import React from "react";

const RoomCard = () => {
  return (
    <a href="#" className="block relative rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white">
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full rounded-md object-cover"
      />
      {/* <div className="py-2 px-4 bg-green-600 absolute top-3 shadow-md font-bold text-white rounded-xl">Available</div> */}
      <div className="py-1 px-4 -left-1 bg-red-600 absolute -top-1 shadow-md font-bold text-white rounded-xl">Unavailable</div>
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">$240,000</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Parking</p>

              <p className="font-medium">2 spaces</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bathroom</p>

              <p className="font-medium">2 rooms</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bedroom</p>

              <p className="font-medium">4 rooms</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-5 gap-2">
        <button className="btn btn-primary w-full mt-2 col-span-4">Book</button>
        <button className="btn btn-info mt-2 text-3xl text-white "><MdiInformationVariantCircleOutline/></button>
      </div>
    </a>
  );
};

export default RoomCard;


export function MdiInformationVariantCircleOutline(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8Z"></path></svg>
  )
}