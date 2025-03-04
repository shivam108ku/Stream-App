import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import instance from '../../utils/axios';
import Cards from './Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const Trending = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);  

    const GetTrending = async () => {
        try {
            let url = `/trending/${category}/${duration}?page=${page}`; // ✅ Added page to URL

            if (category === "anime") {
                url = `/discover/tv?with_genres=16&page=${page}`;
            }

            const { data } = await instance.get(url);            
            setTrending((prevstate) => [...prevstate, ...data.results]);
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
        setTrending([]);   
        setPage(1);   
        setHasMore(true);  
        GetTrending();   
    }, [category, duration]);

    return trending.length > 0 ? (
        <div className="min-h-screen w-screen bg-[#1a1a1a] text-white">
            <div className="px-[5%] w-full flex justify-between items-center">
                <h1 className="text-3xl font-black bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent">
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-wide-line cursor-pointer hover:text-purple-600"></i>
                    Trending
                </h1>
    
                <div className="flex items-center w-[80%]">
                    <Topnav />
                    <Dropdown title="Category" options={["movie", "tv", "anime"]} func={(e) => setCategory(e.target.value)} />
                    <div className="w-[3%]"></div>
                    <Dropdown title="Duration" options={["week", "day"]} func={(e) => setDuration(e.target.value)} />
                </div>
            </div>
    
             
            <InfiniteScroll
                dataLength={trending.length}
                next={GetTrending}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                className="p-5"
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
    
};

export default Trending;
