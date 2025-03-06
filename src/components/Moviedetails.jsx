import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import Loading from '../components/templates/Loading';
 

const Moviedetails = () => {

  const  { id } = useParams();
  const navigate = useNavigate();

  const {info} = useSelector((state)=>state.movie)

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    }

  },[])

  return info ? (
    <div 
    style={{
      background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path
      })`,
      backgroundPosition: 'top center', // Adjusted for better alignment
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover', // Ensures the image maintains aspect ratio
  }}
     className='w-screen h-[100%] px-[10%]'>


      {/* Part 1 Navigation */}
      <nav className='h-[10vh]  w-full text-zinc-100 flex items-center gap-10 text-xl '>
      <Link 
         onClick={() => navigate(-1)} 
           className="ri-arrow-left-wide-line cursor-pointer hover:text-purple-600"
            ></Link>

           <a target="_blank" href={info.detail.homepage}>
            <i class="ri-external-link-fill"></i>
            </a>
            
            <a target="_blank"  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
            <i class="ri-globe-fill"></i>
            </a>
            
            <a target="_blank" 
             href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
              imdb
              </a>

      </nav>

      {/* Part 2 */}
      <div className='flex w-full'>
      <img 
            className='rounded-xl shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[25vh] h-[40vh] object-cover'
            src={`https://image.tmdb.org/t/p/original/${
                info.detail.poster_path || info.detail.backdrop_path
        }`} alt="" />
        
      </div>

{/* part 3 */}
<div className="w-[80%]   p-6 rounded-lg mt-5 shadow-lg">
  <h2 className="text-xl font-bold text-white mb-4">Where to Watch</h2>

  {/* Flatrate Providers */}
  {info.watchprovider?.flatrate?.length > 0 && (
    <div className="mb-4">
      <h3 className="text-lg text-white font-semibold mb-2">Available on Subscription:</h3>
      <div className="flex flex-wrap gap-4">
        {info.watchprovider.flatrate.map((w, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="w-[6vh] h-[6vh] rounded-md shadow-md object-cover"
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              alt={w.provider_name}
            />
            <p className="text-xs text-gray-300 text-center mt-1">{w.provider_name}</p>
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Rent Providers */}
  {info.watchprovider?.rent?.length > 0 && (
    <div className="mb-4">
      <h3 className="text-lg text-white font-semibold mb-2">Available for Rent:</h3>
      <div className="flex flex-wrap gap-4">
        {info.watchprovider.rent.map((w, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="w-[6vh] h-[6vh] rounded-md shadow-md object-cover"
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              alt={w.provider_name}
            />
            <p className="text-xs text-gray-300 text-center mt-1">{w.provider_name}</p>
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Buy Providers */}
  {info.watchprovider?.buy?.length > 0 && (
    <div>
      <h3 className="text-lg text-white font-semibold mb-2">Available for Purchase:</h3>
      <div className="flex flex-wrap gap-4">
        {info.watchprovider.buy.map((w, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="w-[6vh] h-[6vh] rounded-md shadow-md object-cover"
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              alt={w.provider_name}
            />
            <p className="text-xs text-gray-300 text-center mt-1">{w.provider_name}</p>
          </div>
        ))}
      </div>
    </div>
  )}
</div>





      
    </div>
  ): ( <Loading/>
  )
}

export default Moviedetails