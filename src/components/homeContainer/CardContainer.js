/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import style from '../../css/CardContainer.module.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom';
import { AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data';
import BackwardArrowImage from '../../images/backword.png';
import ForwardArrowImage from '../../images/forword.png';
import Play from '../../images/play.png';


// APIs and KEYs
const YouTubeKey = "AIzaSyDsKb2w7pPipyiONQA3SgwaZ1siwwhfTHk"
const API = "fe3c2c41cac485e991fabd53535d760b"



// TeaserContainerAPI component
const TeaserContainerAPI = ({ title, linkPage, linkPlay }) => {
  const [slidePositions, setSlidePositions] = useState(0);
  const [movies, setMovies] = useState([]);
  
  // fetching API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`);
        setMovies(response.data.results);
       
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);


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



// YouTube Fetching
const YouTubeContainer = ({ title, linkPage, videoPlay, playlistID }) =>{

  const [slidePositions, setSlidePositions] = useState(0);
  const [videos, setVideos] = useState([]);

  const fetchYouTubeVideos = async () => {
    try {
      // Make a request to the YouTube Data API to fetch videos
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: 'snippet',
            playlistId: playlistID,
            key: YouTubeKey, // Replace with your YouTube Data API key
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


  const handleSlide = direction => {
    if (direction === 'left' && slidePositions > 0) {
      setSlidePositions(prevPosition => prevPosition - 1);
    } else if (direction === 'right' && slidePositions < videos.length - 1) {
      setSlidePositions(prevPosition => prevPosition + 1);
    }
  };



  return (
    <div className={style.cardContainer}>
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
          <>
            <div
            className={style.desktopView}
            key={movie.id}
            style={{ transform: `translateX(${slidePositions * -5.7}vw)`}}
            
            >
            
            <div className={style.poster} ></div>
            <img className={style.playButton} src={Play} alt="playButton" />
            
              <Link to={`${videoPlay}/${movie.snippet.resourceId.videoId}`}>
                <div className={style.mobileView}>

                </div>
              </Link>
            
              <Link to={`${videoPlay}/${movie.snippet.resourceId.videoId}`}>
                  <div className={`${style.backgroundTransparent} ${style.youTubebackgroundTransparent}`}>
                    
                  </div>
                
                  {/* <div className={style.textContainer}>
                    <h3 className={style.title}>{movie.snippet.title}</h3>
                    <p className={style.date}>{movie.year}</p>
                  </div> */}
                  {/* <div className={style.minimalOpacity}>
                  
                  </div> */}
                  <iframe title='teaser' className={`${style.cardIframe} ${style.youTubeIframe}`} src={`https://www.youtube.com/embed/${movie.snippet.resourceId.videoId}`} frameBorder="0" allow='autoplay'
                  allowFullScreen></iframe>
                 
                  <div>

                  </div>
              </Link>
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

}


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
            playlistId: 'PLv1XPZCxNOvUwiPIwSkUn86q8GdEVHV8h',
            key: YouTubeKey, // Replace with your YouTube Data API key
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
            <img src={movie.poster} className={style.poster} alt="poster" />
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
      <TeaserContainerAPI title="Teaser" linkPage="/moviesTrailerPage" linkPlay="/searchTeaser"/>

      <YouTubeContainer title="YouTube" linkPage="/youTubeVideo" linkPlay="/youTubeLink" videoPlay = "/video" playlistID = "PLv1XPZCxNOvX8hG0tEjAEERdo5kt9Q8E_"/>

      
      <YouTubeContainer title="Movies" linkPage="/youTubeMovies" linkPlay="/youTubeLink" videoPlay = "/videoMovies" playlistID = "PLv1XPZCxNOvUzuaGJt1tKLtXUbmXC1vhY"/>

      
      <YouTubeMrBeast title="Mr. Beast" linkPage="/youTubeMovies" linkPlay="/youTubeLink" />
      
      {/* <TeaserContainer title="Anime" linkPage="/anime" linkPlay="/detailsAnime" movies={AnimeData} /> */}

      <TeaserContainer title="Anime Trailer" linkPage="/anime" linkPlay="/playAnime" movies={AnimeData} />
    
      <TeaserContainer title="Movies Trailer" linkPage="/movies" linkPlay="/playMovies" movies={MoviesDataTrailer} />
      
      <TeaserContainer title="TV Trailer" linkPage="/webSeries" linkPlay="/playWebSeries" movies={WebSeriesData} />
    </div>
  );
};

export default CardContainer;