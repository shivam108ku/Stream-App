import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  return (
    <div  
    style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: 'top center', // Adjusted for better alignment
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover', // Ensures the image maintains aspect ratio
    }}
    
    className='w-full h-[55vh]  flex flex-col items-start justify-end p-[5%]  rounded-xs object-cover'>
        
    <h1 className='w-[70%] text-5xl font-black text-white '>
         {data.name || 
         data.original_name || 
         data.title || 
         data.original.name}
    </h1>
         <p 
         className ='w-[70%] text-white'>
            {data.overview.slice(0,200)}...<Link 
            className='text-purple-600'>more</Link>
        </p>

        <p className='text-white'>
             <i className="text-purple-600 mr-1 ri-megaphone-fill"></i> 
             {data.release_date || "Not Confirmed"}
             <i className=" text-purple-600 ml-2 mr-1 ri-album-fill"></i> 
             {data.media_type.toUpperCase()}
        </p>

        <Link className='p-3 text-white font-semibold mt-2 rounded-2xl bg-linear-to-r from-purple-400 to-purple-800'>Watch Trailer</Link>

    </div>
  )
}

export default Header