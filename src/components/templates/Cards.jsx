import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data , title}) => {
  return (
    <div className='flex flex-wrap ml-[5%] w-full h-full px-[5%]'>
        {data.map((c,i)=> (
        <Link 
        className='w-[25vh] relative mr-[5%] mb-[5%] '
         key={i}>
            <img 
            className='rounded-xl shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[25vh] h-[40vh] object-cover'
            src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
        }`} alt="" />

        <h1 className='text-2xl text-zinc-200 mt-3 font-bold'>
        {c.name || 
         c.original_name || 
         c.title || 
         c.original.name}
        </h1>

        {c.vote_average && (
          <div 
          className= 'bottom-[30%] rounded-full text-xs absolute right-[-10%] bg-yellow-600 text-white w-[4vh] h-[4vh] flex justify-center items-center'>
            {(c.vote_average *10).toFixed()} <sup>%</sup> </div>
        )}

        
      
        </Link>
        ))}
    </div>
  )
}

export default Cards