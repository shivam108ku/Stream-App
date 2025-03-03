import React from 'react';

const HorizontalCards = ({data}) => {
  return ( 

      <div className='w-full ml-2 h-[45vh] overflow-y-auto flex'>
        {data.map((d,i) => (
          <div 
            key={i} 
            className='min-w-[19%] bg-zinc-900 rounded-sm mb-5 mr-2'
          >
            <img 
              className='w-full h-[45%] object-cover' 
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`} 
              alt={d.title || d.name || 'Media poster'} 
            />
            
            <div className='text-white p-3'>
              <h1 className='w-[70%] ml-2 text-xl font-black'>
                {d.title || 
                 d.name || 
                 d.original_name || 
                 d.original_title}
              </h1>

              <p className='w-[80%] ml-2 text-white'>
                {d.overview.slice(0,60)}...
                <span className='text-purple-600'>more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
     
  )
}

export default HorizontalCards;