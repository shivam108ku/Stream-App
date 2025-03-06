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
    className='w-screen h-screen px-[10%]'>

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

      

      
    </div>
  ): <Loading/>
}

export default Moviedetails