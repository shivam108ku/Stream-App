import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import Cards from './Cards';
import Dropdown from './Dropdown';
import Topnav from './Topnav';

const People = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const GetPeople = async () => {
        try {
            let url = `/person/${category}?page=${page}`;

            const { data } = await instance.get(url);
            setPeople((prev) => [...prev, ...data.results]);
            setPage((prev) => prev + 1);

            if (data.results.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching people:", error);
            setHasMore(false);
        }
    };

    useEffect(() => {
        setPeople([]);   
        setPage(1);   
        setHasMore(true);
        GetPeople();   
    }, [category]);

    return people.length > 0 ? (
        <div className="min-h-screen w-screen bg-[#1a1a1a] text-white">
            <div className="px-[5%] w-full flex justify-between items-center">
                <h1 className="text-3xl font-black bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text text-transparent">
                    <i 
                        onClick={() => navigate(-1)} 
                        className="ri-arrow-left-wide-line cursor-pointer hover:text-purple-600"
                    ></i>
                    People
                </h1>

                <div className="flex items-center w-[80%]">
                    <Topnav />
                </div>
            </div>

            <InfiniteScroll
                dataLength={people.length}
                next={GetPeople}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                className="p-5"
            >
                <Cards data={people} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
}

export default People;
