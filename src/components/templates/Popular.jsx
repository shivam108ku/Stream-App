import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import Cards from './Cards';
import Dropdown from './Dropdown';
import Topnav from './Topnav';


const Popular = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);  


  
  const GetPopular = async () => {
    try {
        let url = `${category}/popular?page=${page}`; 

        if (category === "anime") {
            url = `/discover/tv?with_genres=16&page=${page}`;
        }

        const { data } = await instance.get(url);            
        setPopular((prevstate) => [...prevstate, ...data.results]);
        setPage(prev => prev + 1);


        if (data.results.length === 0) {
            setHasMore(false);
        }

    } catch (error) {
        console.log("Error:", error);
        setHasMore(false);  
    }
};


useEffect(() => {
    setPopular([]);   
    setPage(1);   
    setHasMore(true);  
    GetPopular();   
}, [category]);


return popular.length > 0 ? (
  <div className="min-h-screen w-screen bg-[#1a1a1a] text-white">
      <div className="px-[5%] w-full flex justify-between items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent">
              <i onClick={() => navigate(-1)} className="ri-arrow-left-wide-line cursor-pointer hover:text-purple-600"></i>
              Popular
          </h1>

          <div className="flex items-center w-[80%]">
              <Topnav />
              <Dropdown title="Category" options={["movie", "tv", "anime"]} func={(e) => setCategory(e.target.value)} />
          </div>
      </div>

       
      <InfiniteScroll
          dataLength={popular.length}
          next={GetPopular}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          className="p-5"
      >
          <Cards data={popular} title={category} />
      </InfiniteScroll>
  </div>
) : (
  <Loading />
);
}

export default Popular;
