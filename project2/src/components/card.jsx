import React from 'react'
import { useState } from 'react';

function Card({username,passage}) {
    let [count,setcount] = useState(0);
    // function play()
    // {
    //     setcount(count+1);
    // }
  return (
    <>
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
          <img
            src="https://images.pexels.com/photos/29452279/pexels-photo-29452279/free-photo-of-tranquil-sunset-over-the-spanish-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
              <p className="text-gray-400">
                {passage}
              </p>
            </div>
            <button
              type="button" onClick={()=> setcount(count+1)}
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
              clicked me : {count}
            </button>
          </div>
        </div>

        
    </>
  )
}

export default Card