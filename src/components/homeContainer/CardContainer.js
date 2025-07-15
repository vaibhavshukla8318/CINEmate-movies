/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import style from '../../css/CardContainer.module.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom';
import { AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data';
import BackwardArrowImage from '../../images/backword.png';
import ForwardArrowImage from '../../images/forword.png';
import Play from '../../images/play.png';
import poster from '../../images/poster.jpeg';
import { useContextAPI } from '../../contextAPI/ContextApi';



// APIs and KEYs
const YouTubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;

// PlayList IDs
  const youTubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const youTubeVideosPageDetailsKey = process.env.REACT_APP_YOUTUBEVIDEOSPAGEDETAILS_API_KEY;
  const playlistIdYouTube = process.env.REACT_APP_API_PLAYLISTID_YOUTUBE;
  const playlistIdMovies = process.env.REACT_APP_API_PLAYLISTID_MOVIES;
  const playlistIdClip = process.env.REACT_APP_API_PLAYLISTID_CLIP;
  const playlistIdMrBeast = process.env.REACT_APP_API_PLAYLISTID_MRBEAST;
  const playlistIdAnimeSceneAndSong = process.env.REACT_APP_API_PLAYLISTID_ANIMESCENEANDSONG;

// TeaserContainerAPI component
const TeaserContainerAPI = ({ title, linkPage, linkPlay }) => {
  const [slidePositions, setSlidePositions] = useState(0);

  const {movies} = useContextAPI();
  

  const handleSlide = direction => {
    if (direction === 'left' && slidePositions > 0) {
      setSlidePositions(prevPosition => prevPosition - 1);
    } else if (direction === 'right' && slidePositions < movies.length - 1) {
      setSlidePositions(prevPosition => prevPosition + 1);
    }
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.topContainer}>
        <h3>{title}</h3>
        <Link to={linkPage} className={style.link}>View All</Link>
      </div>
      <div className={style.bottomContainer}>
        <img
          className={style.backwordArrow}
          src={BackwardArrowImage}
          onClick={() => handleSlide('left')}
          alt="backwardArrow"
        />
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            style={{ transform: `translateX(${slidePositions * -5.7}vw)`}}
          >
            <Link to={`${linkPlay}/${movie.id}`}> 
 
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className={style.poster}
                alt="img"
              />
              <img className={style.playButton} src={Play} alt="playButton" />
              <div className={style.mobileView}>

              </div>
            </Link>

          </div>
        ))}
        <img
          className={style.forwordArrow}
          src={ForwardArrowImage}
          onClick={() => handleSlide('right')}
          alt="forwardArrow"
        />
      </div>
    </div>
  );
};


const YouTubeContainer = ({ title, linkPage, videoPlay, playlistID, apiKey }) => {
  const [slidePositions, setSlidePositions] = useState(0);
  const [videos, setVideos] = useState([]);

  const fetchYouTubeVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`,
        {
          params: {
            part: 'snippet',
            playlistId: playlistID,
            // key: YouTubeKey,
            key: apiKey,
            maxResults: 10
          }
        }
      );
      setVideos(response.data.items);
      console.log("Videos of Youtube", response.data.items);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const handleSlide = (direction) => {
    if (direction === 'left' && slidePositions > 0) {
      setSlidePositions((prev) => prev - 1);
    } else if (direction === 'right' && slidePositions < videos.length - 1) {
      setSlidePositions((prev) => prev + 1);
    }
  };


//   if (videos.length === 0) {
//   return (
//     <div style={{
//       padding: '2rem',
//       margin: '2rem 3rem',
//       backgroundColor: '#1c1c1e',
//       color: '#fff',
//       borderRadius: '10px',
//       textAlign: 'center',
//       fontFamily: 'Arial, sans-serif',
//       border: '1px solid #333',
//       boxShadow: '0 0 12px rgba(255, 255, 255, 0.05)'
//     }}>
//       <h3 style={{ fontSize: '1.8rem', color: '#ccc' }}>{title}</h3>
//       <p style={{
//         fontSize: '1.4rem',
//         marginTop: '1rem',
//         color: '#aaa',
//         fontStyle: 'italic'
//       }}>
//         🎬 Videos Coming Soon...
//       </p>
//     </div>
//   );
// }


  return (
   videos.length > 0 ?  <div className={style.cardContainer}>
      <div className={style.topContainer}>
        <h3>{title}</h3>
        <Link to={linkPage} className={style.link}>View All</Link>
      </div>
      <div className={`${style.bottomContainer}`}>
        <img
          className={style.backwordArrow}
          src={BackwardArrowImage}
          onClick={() => handleSlide('left')}
          alt="backwardArrow"
        />
        {videos.map((movie, index) => (
          <div
            className={style.desktopView}
            key={movie.id}
            style={{ transform: `translateX(${slidePositions * -5.7}vw)` }}
          >
            
            <div className={style.poster}></div>
            <img className={style.playButton} src={Play} alt="playButton" />
            <Link to={`${videoPlay}/${movie.snippet.resourceId.videoId}`}>
              <div className={style.mobileView}></div>
            </Link>
            <Link to={`${videoPlay}/${movie.snippet.resourceId.videoId}`}>
              <div className={`${style.backgroundTransparent} ${style.youTubebackgroundTransparent}`}></div>
              <iframe
                title='YouTube video'
                className={`${style.cardIframe} ${style.youTubeIframe}`}
                src={`https://www.youtube.com/embed/${movie.snippet.resourceId.videoId}`}
                frameBorder="0"
                allow='autoplay'
                allowFullScreen
              ></iframe>
              <div></div>
            </Link>
          
          </div>
        ))}
        <img
          className={style.forwordArrow}
          src={ForwardArrowImage}
          onClick={() => handleSlide('right')}
          alt="forwardArrow"
        />
      </div>
    </div>
    : null
  );
};



// YouTube Movies
const YouTubeMrBeast = ({ title, linkPage, linkPlay, movies }) => {
  const [slidePositions, setSlidePositions] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [videos, setVideos] = useState([]);

  const fetchYouTubeVideos = async () => {
    try {
      // Make a request to the YouTube Data API to fetch videos
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: 'snippet',
            playlistId: playlistIdMrBeast, // Replace with your YouTube playlist ID
            key: YouTubeKey, // Replace with your YouTube Data API key
            maxResults: 10 // Adjust as needed
          }
        }
      );
      if(!response.ok){
        return console.error('Error fetching YouTube videos:', response.statusText);
      }
      setVideos(response.data.items);
    } catch (error) {                                                          
      console.error('Error fetching YouTube videos:', error);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []); 


  const handleSlide = direction => {
    if (direction === 'left' && slidePositions > 0) {
      setSlidePositions(prevPosition => prevPosition - 1);
    } else if (direction === 'right' && slidePositions < videos.length - 1) {
      setSlidePositions(prevPosition => prevPosition + 1);
    }
  };

  const handleImageHover = index => {
    setHoveredImageIndex(index);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.topContainer}>
        <h3>{title}</h3>
        {/* <Link to={linkPage} className={style.link}>View All</Link> */}
      </div>
      <div className={`${style.bottomContainer} ${style.mrBeastBottomContainer}`}>
        <img
          className={style.backwordArrow}
          src={BackwardArrowImage}
          onClick={() => handleSlide('left')}
          alt="backwardArrow"
        />
        {videos.map((movie, index) => (
          <>
            <div
            className={style.desktopView}
            key={movie.id}
            style={{ transform: `translateX(${slidePositions * -5.7}vw)`, zIndex: hoveredImageIndex === movie.id ? 1 : 0 }}
            onMouseEnter={() => handleImageHover(movie.id)}
            onMouseLeave={() => handleImageHover(null)}
            >
            {/* <img src={movie.snippet.thumbnails.default.url} className={style.poster} alt="poster" /> */}
            <img src={movie.snippet.thumbnails?.default?.url} className={`${style.mrBeastPoster}`} alt="poster" />
            <img className={style.playButton} src={Play} alt="playButton" />
              <Link to={`/videoMovies/${movie.snippet.resourceId.videoId}`}>
                <div className={style.mobileView}>

                </div>
              </Link>
            {hoveredImageIndex === movie.id && (
              <Link to={`/videoMovies/${movie.snippet.resourceId.videoId}`}>
                  <div className={style.backgroundTransparent}>
                    
                  </div>
                
                  {/* <div className={style.textContainer}>
                    <h3 className={style.title}>{movie.snippet.title}</h3>
                    <p className={style.date}>{movie.year}</p>
                  </div> */}
                  {/* <div className={style.minimalOpacity}>
                  
                  </div> */}
                  <iframe title='teaser' className={`${style.cardIframe} ${style.mrBeastCardIframe}`} src={`https://www.youtube.com/embed/${movie.snippet.resourceId.videoId}`} frameBorder="0" allow='autoplay'
                  allowFullScreen></iframe>
                  <div>

                  </div>
              </Link>
            )}
            </div>
          </>
        ))}
        <img
          className={style.forwordArrow}
          src={ForwardArrowImage}
          onClick={() => handleSlide('right')}
          alt="forwardArrow"
        />
      </div>
    </div>
  );
};



const TeaserContainer = ({ title, linkPage, linkPlay, movies }) => {
  const [slidePositions, setSlidePositions] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const handleSlide = direction => {
    if (direction === 'left' && slidePositions > 0) {
      setSlidePositions(prevPosition => prevPosition - 1);
    } else if (direction === 'right' && slidePositions < movies.length - 1) {
      setSlidePositions(prevPosition => prevPosition + 1);
    }
  };

  const handleImageHover = index => {
    setHoveredImageIndex(index);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.topContainer}>
        <h3>{title}</h3>
        <Link to={linkPage} className={style.link}>View All</Link>
      </div>
      <div className={style.bottomContainer}>
        <img
          className={style.backwordArrow}
          src={BackwardArrowImage}
          onClick={() => handleSlide('left')}
          alt="backwardArrow"
        />
        {movies.map((movie, index) => (
          <>
            <div
            className={style.desktopView}
            key={movie.id}
            style={{ transform: `translateX(${slidePositions * -5.7}vw)`, zIndex: hoveredImageIndex === movie.id ? 1 : 0 }}
            onMouseEnter={() => handleImageHover(movie.id)}
            onMouseLeave={() => handleImageHover(null)}
            >
            <img 
            src={movie.poster} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = poster;
            }}
            className={style.poster} 
            alt="poster" />
            <img className={style.playButton} src={Play} alt="playButton" />
              <Link to={`${linkPlay}/${movie.id}`}>
                <div className={style.mobileView}>

                </div>
              </Link>
            {hoveredImageIndex === movie.id && (
              <Link to={`${linkPlay}/${movie.id}`}>
                  <div className={style.backgroundTransparent}>
                    
                  </div>
                
                  <div className={style.textContainer}>
                    <h3 className={style.title}>{movie.title}</h3>
                    <p className={style.date}>{movie.year}</p>
                  </div>
                  <div className={style.minimalOpacity}>
                  
                  </div>
              
                  <iframe title='teaser' className={style.cardIframe} src={movie.video} frameBorder="0" allow='autoplay'></iframe>
                  <div>

                  </div>
              </Link>
            )}
            </div>
          </>
        ))}
      
        <img
          className={style.forwordArrow}
          src={ForwardArrowImage}
          onClick={() => handleSlide('right')}
          alt="forwardArrow"
        />
      </div>
    </div>
  );
};

const CardContainer = () => {

  
  return (
    <div className={style.collectionOfCardContainer}>
      <TeaserContainerAPI title="Teaser" linkPage="/moviesTrailerPage" linkPlay="/searchTeaser" />

      <YouTubeContainer title="YouTube" linkPage="/youTubeVideo" linkPlay="/youTubeLink" videoPlay = "/video" playlistID = {playlistIdYouTube} apiKey={youTubeKey}/>

      
      <YouTubeContainer title="Movies" linkPage="/youTubeMovies" linkPlay="/youTubeLink" videoPlay = "/videoMovies" playlistID = {playlistIdMovies} apiKey={youTubeKey}/>

      <YouTubeContainer title="Anime" linkPage="/youTubeAnime" linkPlay="/youTubeLink" videoPlay="" playlistID=""  />

      <YouTubeContainer title="Hindi Songs + Anime Scene" linkPage="/youTubeVideoSongWithAnimeScene" linkPlay="/youTubeLink" videoPlay="/videoSongWithAnimeScene" playlistID={playlistIdAnimeSceneAndSong} apiKey={youTubeVideosPageDetailsKey}/>

      
      {/* This Playlist is not available for youtube */}
      {/* <YouTubeMrBeast title="Mr. Beast" linkPage="/youTubeMovies" linkPlay="/youTubeLink" />  */}

      <YouTubeContainer title="Clip" linkPage="/youTubeClip" linkPlay="/youTubeLink" videoPlay = "/videoClip" playlistID = {playlistIdClip} apiKey={youTubeKey}/>
      
      {/* <TeaserContainer title="Anime" linkPage="/anime" linkPlay="/detailsAnime" movies={AnimeData} /> */}

      <TeaserContainer title="Anime Trailer" linkPage="/anime" linkPlay="/playAnime" movies={AnimeData} />
    
      <TeaserContainer title="Movies Trailer" linkPage="/movies" linkPlay="/playMovies" movies={MoviesDataTrailer} />
      
      <TeaserContainer title="TV Trailer" linkPage="/webSeries" linkPlay="/playWebSeries" movies={WebSeriesData} />

    </div>
    
  );
};

export default CardContainer;