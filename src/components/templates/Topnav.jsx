import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {

    const [query , setQuery] = useState("");

  return (
    <div className='w-full h-[10vh] ml-[15%] relative flex justify-start items-center'>
        <i class="text-3xl text-zinc-400 ri-search-line"></i>
        <input 
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
        className='w-[50%] mx-10 p-5 text-xl rounded-xs outline-none border-none bg-transparent text-zinc-400' 
        type="text" placeholder='search here' />

        {query.length > 0 && (
            <i onClick={()=>setQuery("")} class="text-3xl text-zinc-400 ri-close-line cursor-pointer"></i>
        )}
        
        


        <div className='overflow-auto rounded-xs absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%]'>
            {/* <Link className='hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold p-10 flex justify-start items-center   bg-zinc-100 w-[100%] border-b-2 border-white'>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link> */}
        </div>

    </div>
  )
}

export default Topnav