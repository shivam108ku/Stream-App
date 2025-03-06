import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import instance from '../../utils/axios';

const Topnav = () => {
    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState([]);  

    const GetSearches = async () => {
        if (!query.trim()) return;  

        try {
            const { data } = await instance.get(`/search/multi?query=${query}`);
            console.log(data);  
            setSearches(data.results || []);  
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    useEffect(() => {
        GetSearches();
    }, [query]);

    return (
        <div className='w-full h-[10vh] z-10  relative flex justify-start items-center'>
            <i className="text-2xl ml-5 text-zinc-400 ri-search-line"></i>
            <input 
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className='w-[50%] mx-10 p-5 text-xl rounded-xs outline-none border-none bg-transparent text-zinc-400' 
                type="text" 
                placeholder='Search here' 
            />

            {query.length > 0 && (
                <i onClick={() => setQuery("")} className="text-3xl text-zinc-400 ri-close-line cursor-pointer"></i>
            )}

            {searches.length > 0 && query.length > 0 && (
                <div className='overflow-auto rounded-xl absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%]'>
                    {searches.map((search, index) => (
                        <Link 
                        to={`/${search.media_type}/details/${search.id}`}
                            key={search.id || index} 
                            className='hover:text-black hover:bg-zinc-300 duration-300
                             text-zinc-600 font-semibold p-5
                              flex justify-start items-center
                               bg-zinc-100 w-[100%] border-b-2
                                border-white'
                        >
                            <img className='h-[10vh] rounded-full mr-4 object-center w-[10vh]'
                                src={search.poster_path || search.profile_path 
                                    ? `https://image.tmdb.org/t/p/w92${search.poster_path || search.profile_path}` 
                                    : ""}
                                alt={search.name || search.original_name} 
                            />
                            <span>{search.name || search.original_name || search.title || search.original.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Topnav;
