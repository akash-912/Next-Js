import { Clock, Heart} from 'lucide-react';
import { resolve } from 'path';
import React from 'react'
import Link from 'next/link';

const SongsList = async () => {
    await new Promise((resolve)=>setTimeout(() => {
        resolve("Loading...")
    }, 2200));
    const songs = [
        {
            id: 1,
            artist: "Dopesmoke",
            title: "(67) Dopesmoke - Smoking Kills", 
            time: "2:19",
        },
        {
            id: 2,
            artist: "Neon Syndicate",
            title: "Night Drive (Instrumental)", 
            time: "3:45",
        },
        {
            id: 3,
            artist: "Lunar Echoes",
            title: "Space Odyssey (Remastered)", 
            time: "4:12",
        },
        {
            id: 4,
            artist: "Rusted Strings",
            title: "Desert Dust", 
            time: "5:01",
        },
        {
            id: 5,
            artist: "Synthwave Rider",
            title: "Digital Sunset", 
            time: "3:33",
        },
        {
            id: 6,
            artist: "The Velvet Fuzz",
            title: "Electric Reverie", 
            time: "4:20",
        },
        {
            id: 7,
            artist: "Abyssal Depth",
            title: "Currents", 
            time: "6:15",
        },
        {
            id: 8,
            artist: "Lo-Fi Cafe",
            title: "Rainy Afternoon Study Beats", 
            time: "2:45",
        },
        {
            id: 9,
            artist: "Karan Aujla, Ikky",
            title: "Softly", 
            time: "2:35",
        },
        {
            id: 10,
            artist: "Diljit Dosanjh",
            title: "Kinni Kinni", 
            time: "3:01",
        },
        {
            id: 11,
            artist: "Shubh",
            title: "Cheques", 
            time: "3:03",
        },
        {
            id: 12,
            artist: "AP Dhillon, Gurinder Gill",
            title: "Excuses", 
            time: "2:56",
        },
        {
            id: 13,
            artist: "Sidhu Moose Wala",
            title: "295", 
            time: "4:30",
        },
        {
            id: 14,
            artist: "Harrdy Sandhu",
            title: "Bijlee Bijlee", 
            time: "2:48",
        },
        {
            id: 15,
            artist: "Arjan Dhillon",
            title: "Mandeer", 
            time: "2:20",
        }
    ];
  return (
    <div className='w-[96%] mx-auto px-4'>
        <h2 className='text-3xl text-white mt-8 font-bold mb-6'>Songs Collection</h2>

        <ul className='space-y-4'>
            {songs.map((song)=>(
                <Link href={`/musics/${song.id}`} key={song.id}>
                <li key={song.id}
                    className='flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105'>
                    <div className='flex items-center gap-5'>
                        <img src="https://images.unsplash.com/photo-1739279479894-71d500e7886d? q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-16 w-16 bg-gray-700 rounded-md flex-shrink-0' />
                        <div>
                            <p className='text-white font-medium'> {song.artist}</p>
                            <p className='text-sm text-gray-400'>{song.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-gray-400">
                        <div className='flex items-center gap-1'>
                            <Clock size={16}/>
                            <span>{song.time}</span>
                        </div>
                        <Heart size={16} className='cursor-pointer hover:text-red-500'/>
                        <button className='text-lg font-bold'>:</button>
                    </div>
                </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default SongsList