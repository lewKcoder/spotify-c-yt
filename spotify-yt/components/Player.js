import { useState, useEffect } from 'react'
import useSongInfo from "../hooks/useSonginfo"
import useSpotify from '../hooks/useSpotify'
import { useSession } from 'next-auth/react';
import { useRecoilState } from "recoil"
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import { SwitchHorizontalIcon, VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/outline';
import { RewindIcon, PauseIcon, FastForwardIcon, ReplyIcon } from '@heroicons/react/solid';

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
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      <div className="flex items-center space-x-4">
        <img className="hidden md:inline h-10 w-10" src="/trackImage.png" alt="" />
        <div>
          <h3>music title</h3>
          <p>album name</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <SwitchHorizontalIcon className="button" />
        <RewindIcon className="button"/>

        <PauseIcon className="button w-10 h-10" />
        <FastForwardIcon className="button"/>
        <ReplyIcon className="button"/>
      </div>
      <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
        <VolumeOffIcon className="button"/>
        <input type="range" value="" min={0} max={100}/>
        <VolumeUpIcon className="button"/>
      </div>
    </div>
  )
}

export default Player
