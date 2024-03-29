import React from 'react'
import { genres } from '../assets/constants';
import { Loader, SongCard, Error } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

function Discover() {
    const genre = "popkjhkj";
    let { data, isFetching, error } = useGetTopChartsQuery(); 
    console.log(data);
    if(isFetching) return <Loader title="Loading Songs..."/>;
    if(error) return <Error />
    return (
      <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='text-white font-bold text-3xl text-left'>Discover {genre}</h2>
            <select onChange={()=>{}} value="" className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
            </select>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data.tracks?.map((song, i) => <SongCard 
                key={song.key}
                song={song}
                i={i}
            />)}
        </div>
      </div>
    )
}

export default Discover
