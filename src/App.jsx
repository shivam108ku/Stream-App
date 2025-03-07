import React from 'react'
import { Routes  , Route} from 'react-router-dom'
import Home from './components/Home';
import Trending from './components/templates/Trending';
import Popular from './components/templates/Popular'
import Movie from './components/templates/Movie';
import People from './components/templates/People';
import Tvshows from './components/templates/Tvshows';
import Moviedetails from './components/Moviedetails';
import TvDetails from './components/TvDetails';
import PersonDetails from './components/PersonDetails'
import Trailer from './components/templates/Trailer';

const App = () => {
  return (
    <div 
    className='w-screen h-[100%]  bg-[#1F1E24] flex'>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movie/>}/>
        <Route path="/movie/details/:id" element={<Moviedetails/>}>
        <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
        </Route>       
        <Route path='/tv-shows' element={<Tvshows/>} />
        <Route path="/tv/details/:id" element={<TvDetails/>}>
        <Route path="/tv/details/:id/trailer" element={<Trailer/>} />
        </Route> 
        <Route path='/people' element={<People/>} />
        <Route path="/person/details/:id" element={<PersonDetails/>}/>
        
      
      </Routes>

    </div>
  )
}

export default App;