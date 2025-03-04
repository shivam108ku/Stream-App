import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import Cards from './Cards';
import Dropdown from './Dropdown';
import Topnav from './Topnav';

const Tvshows = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [tvShows, setTvShows] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const GetTvShows = async () => {
        try {
            let url = `/tv/${category}?page=${page}`;

            if (category === "anime") {
                url = `/discover/tv?with_genres=16&page=${page}`;
            } else if (category === "hindi") {
                url = `/discover/tv?with_original_language=hi&page=${page}`;
            }

            const { data } = await instance.get(url);
            setTvShows((prev) => [...prev, ...data.results]);
            setPage((prev) => prev + 1);

            if (data.results.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching TV shows:", error);
            setHasMore(false);
        }
    };

    useEffect(() => {
        setTvShows([]);   
        setPage(1);   
        setHasMore(true);
        GetTvShows();   
    }, [category]);

    return tvShows.length > 0 ? (
        <div className="min-h-screen w-screen bg-[#1a1a1a] text-white">
            <div className="px-[5%] w-full flex justify-between items-center">
                <h1 className="text-3xl font-black bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent">
                    <i 
                        onClick={() => navigate(-1)} 
                        className="ri-arrow-left-wide-line cursor-pointer hover:text-purple-600"
                    ></i>
                    TV Shows
                </h1>

                <div className="flex items-center w-[80%]">
                    <Topnav />
                    <Dropdown 
                        title="Category" 
                        options={["popular", "top_rated", "on_the_air", "airing_today", "anime", "hindi"]} 
                        func={(e) => setCategory(e.target.value)} 
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={tvShows.length}
                next={GetTvShows}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                className="p-5"
            >
                <Cards data={tvShows} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
}

export default Tvshows;
