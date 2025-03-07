import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Trailer = () => {
    const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  
  // Extract videos properly
  const videos = useSelector((state) => state[category]?.info?.videos);
  
  // Get first trailer (if available)
  const trailer = videos.find(video => video.type === "Trailer") || videos[0];

  return (
    <div className='bg-black fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center'>
       <Link
          onClick={() => navigate(-1)}
          className="absolute ri-arrow-left-wide-line text-white text-3xl right-[5%] top-[5%] cursor-pointer hover:text-purple-600 transition-colors duration-200"
        ></Link>
      {trailer ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer.key}`} 
          controls 
          playing 
          width="80%" 
          height="80%" 
        />
      ) : (
        <h2 className="text-white text-2xl">No trailer available</h2>
      )}
    </div>
  );
};

export default Trailer;
