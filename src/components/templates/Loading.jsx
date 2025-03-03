import React from 'react'
import loadaer from '/loader.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img className=' object-cover h-50' src={loadaer} alt="" />
    </div>
  )
}

export default Loading