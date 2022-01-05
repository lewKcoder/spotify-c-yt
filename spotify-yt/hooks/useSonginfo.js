import {useState, useEffect} from 'react'
import { useRecoilState } from "recoil"
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify"

function useSonginfo() {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchSongInfo = async() => {
      if(currentTrackId) {
        const trackInfo = await fetch(
          `https://spi.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: {
              Authorization: {
                Authorization: `Dearer ${spotifyApi.getAccessToken()}`,
              }
            }
          }
        ).then(res => res.json());

        setSongInfo(trackInfo)
      }
    }

    fetchSongInfo(trackInfo);
  }, [currentTrackId, spotifyApi])

  return songInfo;
}

export default useSonginfo
