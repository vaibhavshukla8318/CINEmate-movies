/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useState, useEffect} from 'react';
import {AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data.js';
import Play from '../../images/play.png';
import Add from '../../images/add.png'
import Added from '../../images/correct.png'
import style from '../../css/AllFunContainer.module.css'
import Sidebar from '../homeContainer/Sidebar';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'


const DataContainer = ({addToWatchLater, watchLaterItems, title, Data, linkPage}) => { 

  
  // const isItemInWatchLater = (item) => {
  //   return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  // };

    return (
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>{title}</h1>
          
            <div className={style.imageContainer}>
   
               {Data.slice().reverse().map((image) => (
                <>
                  <div className={style.posterContainer} key={image.id}>
                    <Link to={`${linkPage}/${image.id}`} >
                      <img
                        src={image.poster}
                        className={style.poster}
                        alt="img"
                      />
                  
                      <img className={style.playButton} src={Play} alt="Play"/>
                      <div className={style.details}>
                        <h3>{image.title}</h3>       
                        <p>{image.year}</p>
                      </div>
                    </Link>
                    {/* {isItemInWatchLater(image) ? (
                    <img src={Added} className={style.addedWatchLater} alt='added'/>
                    ) : (
                      <img src={Add} className={style.addWatchLater} onClick={() => addToWatchLater(image)} alt='add' />
                    )} */}
                  </div>
                 
                </>
              ))}
            
          </div>
        </div>
      </>  
    );
  }

  const youTubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const youTubeVideosPageDetailsKey = process.env.REACT_APP_YOUTUBEVIDEOSPAGEDETAILS_API_KEY;
  const playlistIdYouTube = process.env.REACT_APP_API_PLAYLISTID_YOUTUBE;
  const playlistIdMovies = process.env.REACT_APP_API_PLAYLISTID_MOVIES;
  const playlistIdClip = process.env.REACT_APP_API_PLAYLISTID_CLIP;
  const playlistIdAnimeSceneAndSong = process.env.REACT_APP_API_PLAYLISTID_ANIMESCENEANDSONG

  const YouTubeContainer = ({title, video, playlistID, apiKey}) =>{

    const [videos, setVideos] = useState([]);
  
    const fetchYouTubeVideos = async () => {
      try {
        // Make a request to the YouTube Data API to fetch videos
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`, {
            params: {
              part: 'snippet',
              playlistId: playlistID,
              key: apiKey, // Replace with your YouTube Data API key
              maxResults: 10 // Adjust as needed
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };
  
    useEffect(() => {
      fetchYouTubeVideos();
    }, []); 
  
  
    return (
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>{title}</h1>
          
            <div className={style.imageContainer}>
   
               {videos.map((image) => (
                <>
                  <div className={style.posterContainer} key={image.id}>
                    <Link to={`${video}/${image.snippet.resourceId.videoId}`} >
                 
                    <div></div>
                    <iframe className={`${style.youTubeIframe}`} src={`https://www.youtube.com/embed/${image.snippet.resourceId.videoId}`} frameBorder="0" allow='autoplay'
                 allowFullScreen></iframe>
                  
                     
                    </Link>
                 
                  </div>
                 
                </>
              ))}
            
          </div>
        </div>
      </>  
    );
  }


  
  export const AnimeContainer = () => { 
  
    return (
      <>
        <DataContainer title="Anime" Data={AnimeData} linkPage="/playAnime" />
      </>  
    );
  }

export const MoviesContainer = () => { 

    return (
      <>
        <DataContainer title="Movies" Data={MoviesDataTrailer} linkPage="/playMovies" />
      </>  
    );
  }


export const WebSeriesContainer = () => { 

    return (
      <>
        <DataContainer title="Web Series" Data={WebSeriesData} linkPage="/playWebSeries" />
      </>  
    );
  }

  
  export const YouTubeVideoContainer = () => {
  
      return (
        <>
          <YouTubeContainer title="You Tube" video="/video" playlistID = {playlistIdYouTube} apiKey={youTubeKey}/>
        </>  
      );
    }
  
  export const YouTubeMoviesContainer = () => {
  
      return (
        <>
          <YouTubeContainer title="Movies" video="/video" playlistID = {playlistIdMovies} apiKey={youTubeKey}/>
        </>  
      );
    }

  export const YouTubeClipContainer = () => {
  
      return (
        <>
          <YouTubeContainer title="Clip" video="/video" playlistID = {playlistIdClip} apiKey={youTubeKey}/>
        </>  
      );
    }

  export const YouTubeVideoSongWithAnimeSceneContainer = () => {
  
      return (
        <>
          <YouTubeContainer title="Hindi Songs + Anime Scene" video="/video" playlistID = {playlistIdAnimeSceneAndSong} apiKey={youTubeVideosPageDetailsKey}/>
        </>  
      );
    }