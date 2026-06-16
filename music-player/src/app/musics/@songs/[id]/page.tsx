import React from 'react'

const Song = async ({params}: {params:{id:string}}) => {
    const {id} = await params;
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
    const song = songs.find((m)=>m.id === +id);
    if(!song){
        throw new Error("Song not found");
    }
  return (
    <div>
        {song.title}
        <div>{song.artist}</div>
        <div>{song.time}</div>    
    </div>
  )
}

export default Song