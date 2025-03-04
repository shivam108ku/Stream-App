import React from 'react'
import { Routes  , Route} from 'react-router-dom'
import Home from './components/Home';
import Trending from './components/templates/Trending';
import Popular from './components/templates/Popular'
import Movie from './components/templates/Movie';
import People from './components/templates/People';
import Tvshows from './components/templates/Tvshows';

const App = () => {
  return (
    <div 
    className='w-screen h-[100%]  bg-[#1F1E24] flex'>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/tv-shows' element={<Tvshows/>} />
        <Route path='/people' element={<People/>} />
      </Routes>

    </div>
  )
}

export default App;