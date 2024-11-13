/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useState, useEffect} from 'react';
import {AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data.js';
import Play from '../../images/play.png';
import Add from '../../images/add.png'
import Added from '../../images/correct.png'
import style from '../../css/AllFunContainer.module.css'
import Sidebar from '../homeContainer/Sidebar';
import {Link} from 'react-router-dom'
import axios from 'axios'


export const AnimeContainer = ({addToWatchLater, watchLaterItems}) => { 

  
  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };

    return (
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>Anime</h1>
          
            <div className={style.imageContainer}>
   
               {AnimeData.slice().reverse().map((image) => (
                <>
                  <div className={style.posterContainer} key={image.id}>
                    <Link to={`/detailsAnime/${image.id}`} >
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
                    {isItemInWatchLater(image) ? (
                    <img src={Added} className={style.addedWatchLater} alt='added'/>
                    ) : (
                      <img src={Add} className={style.addWatchLater} onClick={() => addToWatchLater(image)} alt='add' />
                    )}
                  </div>
                 
                </>
              ))}
            
          </div>
        </div>
      </>  
    );
  }


export const MoviesContainer = ({addToWatchLater, watchLaterItems}) =>  { 

  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };
  
    return (
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>Movies</h1>
          
            <div className={style.imageContainer}>
             
               {MoviesDataTrailer.slice().reverse().map((image) => (
                <div className={style.posterContainer} key={image.id}>
                  <Link to={`/detailsMovies/${image.id}`}>
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
                  {isItemInWatchLater(image) ? (
                  <img src={Added} className={style.addedWatchLater} />
                ) : (
                  <img src={Add} className={style.addWatchLater} onClick={() => addToWatchLater(image)} />
                )}
                </div>
              ))}
            
          </div>
        </div>
      </>  
    );
  }


export const WebSeriesContainer = ({ addToWatchLater, watchLaterItems }) => { 
  
const isItemInWatchLater = (item) => {
  return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
};

  return (
  
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>Web Series</h1>  
            <div className={style.imageContainer}>    
               {WebSeriesData.slice().reverse().map((image) => (
                <div className={style.posterContainer} key={image.id}>
                 <Link to={`/detailsWebSeries/${image.id}`}>
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
               
                {isItemInWatchLater(image) ? (
                  <img src={Added} className={style.addedWatchLater} />
                ) : (
                  <img src={Add} className={style.addWatchLater} onClick={() => addToWatchLater(image)} />
                )}
                </div>
              ))}
            
          </div>
        </div>
      </>  
    );
  }




  export const YouTubeVideoContainer = () => { 

    const [videos, setVideos] = useState([]);
  
    const fetchYouTubeVideos = async () => {
      try {
        // Make a request to the YouTube Data API to fetch videos
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`, {
            params: {
              part: 'snippet',
              playlistId: 'PLv1XPZCxNOvX8hG0tEjAEERdo5kt9Q8E_',
              // playlistId: 'PLv1XPZCxNOvUzuaGJt1tKLtXUbmXC1vhY',
              key: 'AIzaSyDsKb2w7pPipyiONQA3SgwaZ1siwwhfTHk', // Replace with your YouTube Data API key
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
            <h1>You Tube</h1>
            
              <div className={style.imageContainer}>
     
                 {videos.map((image) => (
                  <>
                    <div className={style.posterContainer} key={image.id}>
                      <Link to={`/video/${image.snippet.resourceId.videoId}`} >
                      {/* <img src={image.snippet.thumbnails.default.url} className={style.poster} alt="poster" /> */}
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

  export const YouTubeMoviesContainer = () => { 

    const [videos, setVideos] = useState([]);
  
    const fetchYouTubeVideos = async () => {
      try {
        // Make a request to the YouTube Data API to fetch videos
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`, {
            params: {
              part: 'snippet',
              playlistId: 'PLv1XPZCxNOvUzuaGJt1tKLtXUbmXC1vhY',
              // playlistId: 'PLv1XPZCxNOvUzuaGJt1tKLtXUbmXC1vhY',
              key: 'AIzaSyDsKb2w7pPipyiONQA3SgwaZ1siwwhfTHk', // Replace with your YouTube Data API key
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
            <h1>Movies</h1>
            
              <div className={style.imageContainer}>
     
                 {videos.map((image) => (
                  <>
                    <div className={style.posterContainer} key={image.id}>
                      <Link to={`/video/${image.snippet.resourceId.videoId}`} >
                   
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