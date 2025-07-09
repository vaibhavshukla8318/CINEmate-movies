import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { TeaserData, AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data';
import style from '../../css/detailsPage.module.css';
import axios from 'axios'

const PageDetails = ({playListID}) => {
  
  const [selectedVideoKey, setSelectedVideoKey] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Set initial value to false
  const { itemId } = useParams();
  
  const [videos, setVideos] = useState([]);

  const posterDetails = AnimeData.find(item => item.id === parseInt(itemId));

  const fetchYouTubeVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: 'snippet',
            playlistId: playListID,
            key: process.env.REACT_APP_YOUTUBEVIDEOSPAGEDETAILS_API_KEY,
            maxResults: 10 
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

  const playVideo = (videoKey) => {
    setSelectedVideoKey(videoKey);
    setIsPlaying(true); // Set isPlaying to true when video is played
  };

  const closeVideo = () => {
    setSelectedVideoKey(null); // Clear selected video key when closing
    setIsPlaying(false); // Set isPlaying to false when closing
  };

  const hideIframe2 = () => {
    const iframe2 = document.querySelector(`.${style.iframe2}`);
    if (iframe2) {
      iframe2.style.display = 'none';
    }
  };
  return (
    <div className={style.selectedItemContainer}>
      {posterDetails && (
        <div className={style.selectedItem}>
          <div>
          <>
              <iframe
                 
                  src={`${posterDetails.video}?${isPlaying ? 'autoplay=1&' : ''}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  className={`${style.iframe} ${style.iframe2}`}
                ></iframe>
              </>
            {selectedVideoKey && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoKey}?autoplay=${isPlaying ? 1 : 0}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className={`${style.iframe} ${style.iframe2}`}
              ></iframe>
            )}
          </div>
          <div className={style.posterDetails}>
            <Link to="/home" className={style.link}>Home</Link>
            <div className={style.details}>
              <h2>{posterDetails.title}</h2>
              <p>{posterDetails.release_date}</p>
            </div> 
          </div>
          <div className={style.bottomIframeContainer}>
            {videos.map((video) => (
              <div key={video.id} onClick={() => {playVideo(video.snippet.resourceId.videoId); hideIframe2();}}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={style.bottomIframe}
                >
                </iframe>
                <div className={style.iframeContainer} onClick={closeVideo}></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PageDetailsDataContainer = ({ Data }) => {

  const { itemId } = useParams();
  const posterDetails = Data.find(item => item.id === parseInt(itemId));


   return (
    <div className={style.selectedItemContainer}>
      {/* <Navbar /> */}
      {posterDetails && (
        <div className={`${style.selectedItem} ${style.moviesSelectedItem}`}>
          <iframe src={posterDetails.video} className={style.iframe} title="Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  frameBorder="0"  referrerpolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
        
          
          <div className={style.posterDetails}>
            <Link to="/home" className={style.link}>Home</Link>
          
            <div className={style.linkContainer}>
            
              <div className={style.details}>
                <h2>{posterDetails.title}</h2>
               
                <p>{posterDetails.year}</p>
               
              </div>
            </div>
          </div>
        {/* Add more details as needed */}
      </div>
      )}
    </div>
  )

}

const youTubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const playlistIdAnimeSceneAndSong = process.env.REACT_APP_YOUTUBEVIDEOSPAGEDETAILS_API_KEY;

export const YouTubeVideo = ({apiKey}) => {
  const [video, setVideo] = useState(null);
  const { videoID } = useParams();

  const fetchYouTubeVideo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: 'snippet',
            id: videoID,
            key: apiKey,
          }
        }
      );
      setVideo(response.data.items[0]);
    } catch (error) {
      console.error('Error fetching YouTube video:', error);
    }
  };

  useEffect(() => {
    if (videoID) {
      fetchYouTubeVideo();
    }
  }, [videoID]);

  return (
    <div className={style.selectedItemContainer}>   
    
      <div className={`${style.selectedItem} ${style.seriesSelectedItem}`}>
        {video && (
          <>
          
            <iframe src={`https://www.youtube.com/embed/${video.id}`} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
        
            <div className={style.posterDetails}>
              <Link to="/home" className={style.link}>Home</Link>
              <div className={style.linkContainer}>
                <div className={style.details}>
                  <h2 className={style.title}>{video.snippet.title}</h2>
                  {/* Add more details here if needed */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export const PageDetailsAnimePlay = () => (
  <>
  <PageDetails playListID={process.env.REACT_APP_API_PLAYLISTID_YOUTUBEVIDEOSPAGEDETAILS}/>
  </>
)

export const PageDetailsMoviesPlay = () => {

  return (
   <>
   <PageDetailsDataContainer Data={MoviesDataTrailer} />
   </>
 )

}

export const PageDetailsWebSeriesPlay = () => {

  return (
   <>
    <PageDetailsDataContainer Data={WebSeriesData} />
   </>
 )

}

export const PlayYouTube = () => {

  return (
   <>
    <YouTubeVideo apiKey={youTubeKey} />
   </>
  );
};

export const PlayYouTubeMovies = () => {

  return (
   <>
    <YouTubeVideo apiKey={youTubeKey} />
   </>
  );
};

export const PlayYouTubeClip = () => {

  return (
   <>
    <YouTubeVideo apiKey={youTubeKey} />
   </>
  );
};

export const PlayYouTubeSongWithAnimeScene = () => {

  return (
   <>
    <YouTubeVideo apiKey={playlistIdAnimeSceneAndSong} />
   </>
  );
};