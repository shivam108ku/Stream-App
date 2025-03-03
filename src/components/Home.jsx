import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import instance from '../utils/axios';
import Header from './templates/Header';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';
import Loading from './templates/Loading';

const Home = () => {

    document.title = "MyFLix | Homepage";

    const [wallpaper , setWallpaper] = useState(null);
    const [trending , setTrending] = useState(null);
    const [category , setCategory] = useState("all")

    const GetHeaderWall = async () =>{
      try {

        const { data } = await instance.get(`/trending/all/day`);
        let random = data.results[(Math.random()*data.results.length).toFixed()];
        setWallpaper(random);

      } catch (error){
        console.log("Error:", error);
      }
    } 

    const GetTrending = async () =>{
      try {
        let url = `/trending/${category}/day`;

        if (category === "anime") {
          url = "/discover/tv?with_genres=16"; // Fetching anime shows
        }

        const { data } = await instance.get(url);
        setTrending(data.results);

      } catch (error){
        console.log("Error:", error);
      }
    } 

     useEffect(() => {
      !wallpaper && GetHeaderWall();
      GetTrending();
    },[category])
    
     return wallpaper && trending ? (
    <> 

       <Sidenav/>
       <div className='w-[80%] h-full overflow-auto  overflow-x-hidden'>
        <Topnav/>
        <Header data={wallpaper}/>

        <div className=' flex justify-between p-10'>
        <h1 className='text-3xl font-bold text-zinc-400'>Trending</h1>
        
        <Dropdown title="Filter" options={['tv','movie','anime','all']} 
        func = {(e) => setCategory(e.target.value)}
         />
         </div>

        <HorizontalCards data={trending} />
       </div>
        
    </> 
  ):(
    <Loading/>
  )
   
}

export default Home