import React, { useState, useEffect } from 'react';
import style from '../../css/Slide.module.css';
import Star from '../../images/stars.png'

const Slide = () => {
  const [movies, setMovies] = useState([]);
  const [slidePosition, setSlidePosition] = useState(0);
  const [slideDetails, setSlideDetails] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null); 
  const [videos, setVideos] = useState({});


  const API = process.env.REACT_APP_API_KEY;
  

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API}`);
      const data = await response.json();
      setMovies(data.results);
      setSlideDetails(data.results[0]);
      data.results.forEach(movie => {
        fetchVideosForMovie(movie.id);
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchVideosForMovie = async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API}&language=en-US`);
      const data = await response.json();
      if (data.results.length > 0) {
        setVideos(prevVideos => ({
          ...prevVideos,
          [movieId]: data.results,
        }));
      }
    } catch (error) {
      console.error(`Error fetching videos for movie ${movieId}:`, error);
    }
  };

  const clickImage = (index) => {
    setSlideDetails(movies[index]);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  const handleImageHover = (index) => {
    setHoveredImageIndex(index);
  };



  return (
    <>
    
      <div className={style.slide}>

      <div className={style.slideWatch}>
          <div className={style.watchNow}> 
            <div>
              <>
                <iframe className={style.iframe} src={`https://www.youtube.com/embed/${videos[slideDetails.id]?.[0]?.key}?${isPlaying ? 'autoplay=1&' : ''}mute=1&rel=0&loop=1`} frameBorder="0" allowFullScreen title="video"></iframe>

              </>
             
            </div>
          </div>
          <div className={style.miniSlideContainer}>
            {movies.map((movie, index) => (
              <div
                key={index}
                className={style.miniSlide}
                onMouseEnter={() => handleImageHover(index)} 
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className={`${style.miniSlideImage} ${index === slidePosition ? style.selected : ''} ${index === hoveredImageIndex ? style.hovered : ''}`} 
                  alt={movie.title}
                  onClick={() => clickImage(index)}
                />
                {/* <span>{movie.title}</span> */}
              </div>
            ))}
          </div>
        </div>

        <div className={style.slideDetails}>
        <h2>{slideDetails.title}</h2>
        <div className={style.seasonContainer}>
          <p className={style.year}>{slideDetails.release_date} &nbsp; &#x2022;</p>
          <p className={style.language}>{slideDetails.original_language}</p>
        </div>
        <p className={style.plot}>{slideDetails.overview}</p>
        <div className={style.ratingContainer}>
          <span className={style.rating}> 
             <img src={Star} alt="img"/>
            {slideDetails.vote_average}
          </span>
          <span className={style.ratingCount}> Count: {slideDetails.vote_count}</span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Slide;



