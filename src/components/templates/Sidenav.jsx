import React from 'react'
import  { Link } from 'react-router-dom'


const Sidenav = () => {
    
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-600 p-10'>
        <h1 className='text-2xl text-white font-bold'> 
            <i class=" text-[#6556CD] ri-tv-fill text-2xl mr-2"></i>
            <span className='text-2xl'>MyFLix</span>
        </h1>

        <nav className='flex flex-col text-zinc-400 text-xl gap-1'>
            <h1 className='text-white font-semibold text-xl ml-3 mt-10 mb-5'>
                New Feeds
            </h1>

            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="ri-fire-fill"></i> Trending
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="ri-bard-fill"></i> Popular
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="ri-movie-line"></i> Movies
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="ri-tv-line"></i> Tv Shows
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="ri-user-3-line"></i> People
            </Link>
        </nav>

        <hr className='border-none mt-2.5 h-[1px] bg-zinc-400' />

        <nav className='flex flex-col text-zinc-400 text-xl gap-1'>
            <h1 className='text-white font-semibold text-xl ml-3 mt-10 mb-5'>
                Website Information
            </h1>

            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="ri-information-fill"></i> About MyFlix
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
            <i class="ri-phone-fill"></i> Contact
            </Link>
           
        </nav>
        
    </div>
  )
}

export default Sidenav