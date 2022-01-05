import { useState, useEffect } from 'react'
import useSongInfo from "../hooks/useSonginfo"
import useSpotify from '../hooks/useSpotify'
import { useSession } from 'next-auth/react';
import { useRecoilState } from "recoil"
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";

function Player() {
  // const spotifyApi = useSpotify();
  // const { data: session, status } = useSession();
  // const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
  // const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  // const [value, setValue] = useState(50);

  // const songInfo = useSongInfo();
  // const fetchCurrentSong = () => {
  //   if(!songInfo) {
  //     spotifyApi.getMyCurrentPlayingTrack().then((data) => {
  //       console.log("New Playing:", data.body?.item);
  //       setCurrentTrackId(data.body?.item?.id);

  //       spotifyApi.getMyCurrentPlaybackState().then((data) => {
  //         setIsPlaying(data.body?.is_playing);
  //       });
  //     });
  //   }
  // } 

  // useEffect(() => {
  //   if(spotifyApi.getAccessToken() && !currentTrackIdState) {
  //     fetchCurrentSong();
  //     setValue(50);
  //   }
  // }, [currentTrackIdState, spotifyApi, session])

  return (
    <div className="h-24 bg-gradient-to-b front-black to-gray-900 text-white">
      <div>
        {/* <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0]?.url} alt="" /> */}
        <div>
          <h3>ASDFGHJKL</h3>
          <p>SDFGHJKLKJHGGHJKJHG</p>
        </div>
      </div>
    </div>
  )
}

export default Player
