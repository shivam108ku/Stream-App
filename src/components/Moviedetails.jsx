import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/templates/Loading';
import HorizontalCards from './templates/HorizontalCards';

const Moviedetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id, dispatch]);

  return info ? (
    <div
      className="relative w-screen min-h-screen px-[5%] md:px-[10%] bg-cover bg-no-repeat bg-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.9)), url("https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || '/fallback-image.jpg'}")`,
      }}
    >
      {/* Part 1: Navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-6 md:gap-10 text-lg md:text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-wide-line cursor-pointer hover:text-purple-600 transition-colors duration-200"
        ></Link>
        <a target="_blank" href={info.detail.homepage} rel="noopener noreferrer" className="hover:text-purple-600 transition-colors duration-200">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition-colors duration-200"
        >
          <i className="ri-globe-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition-colors duration-200"
        >
          imdb
        </a>
      </nav>

      {/* Part 2: Movie Poster and Content */}
      <div className="flex flex-col md:flex-row w-full gap-8 py-8">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[40vh] md:w-[30vh] h-[50vh] md:h-[45vh] object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/original/${
            info?.detail?.poster_path || info?.detail?.backdrop_path || '/fallback-poster.jpg'
          }`}
          alt="Movie Poster"
        />

        {/* Content */}
        <div className="content flex-1 text-white">
          <h1 className="text-4xl md:text-6xl font-black flex items-center flex-wrap gap-2">
            {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
            <small className="text-xl md:text-2xl font-bold text-zinc-300">
              ({info.detail.release_date?.split("-")[0] || 'N/A'})
            </small>
          </h1>

          <div className="mt-2 space-y-1">
            <h1 className="text-sm md:text-md font-bold">{info.detail.release_date || 'N/A'}</h1>
            <h1 className="text-sm md:text-md font-bold">
              {info.detail.genres?.map((g) => g.name).join(", ") || 'N/A'}
            </h1>
            <h1 className="text-sm md:text-md font-bold">Runtime: {info.detail.runtime || 'N/A'} mins</h1>
          </div>

          <h1 className="text-xl md:text-2xl font-bold italic text-zinc-200 mt-4">
            {info.detail.tagline || ''}
          </h1>

          <p className="text-sm md:text-md mt-4 text-zinc-200 max-w-2xl">
            {info.detail.overview || 'No overview available.'}
          </p>

          <div className="mt-6">
            <Link
              className="inline-block px-6 py-3 text-white font-semibold rounded-2xl bg-gradient-to-r from-purple-400 to-purple-800 hover:from-purple-500 hover:to-purple-900 transition-all duration-300"
              to={`${pathname}/trailer`}
            >
              Play Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendation section */}


      <div className="mt-10 pb-10 w-full">
  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
    Recommendations
  </h2>
  <div className="w-full max-w-6xl mx-auto overflow-x-hidden">
    <HorizontalCards
      className="w-full flex flex-nowrap gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-zinc-800"
      data={info.recommendations?.length > 0 ? info.recommendations : info.similar}
    />
  </div>
</div>


       
        <Outlet />
     
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;