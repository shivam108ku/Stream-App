import React from 'react'
import { Routes  , Route} from 'react-router-dom'
import Home from './components/Home';

const App = () => {
  return (
    <div 
    className='w-screen h-[100%]  bg-[#1F1E24] flex'>

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

    </div>
  )
}

export default App;