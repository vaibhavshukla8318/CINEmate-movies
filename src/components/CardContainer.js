import React, { useState, useEffect } from 'react';
import style from '../css/CardContainer.module.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom';
import {Teaser, AnimeData, MoviesData, WebSeriesData } from './Data';
import BackwardArrowImage from '../images/backword.png';
import ForwardArrowImage from '../images/forword.png';
import Play from '../images/play.png';

// TeaserContainerAPI component
const TeaserContainerAPI = ({ title, linkPage, linkPlay }) => {
  const [slidePositions, setSlidePositions] = useState(0);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=fe3c2c41cac485e991fabd53535d760b`);
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

// TeaserContainer component
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
          <div
            key={movie.id}
            style={{ transform: `translateX(${slidePositions * -5.7}vw)`, zIndex: hoveredImageIndex === movie.id ? 1 : 0 }}
            onMouseEnter={() => handleImageHover(movie.id)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <img src={movie.poster} className={style.poster} alt="poster" />
            <img className={style.playButton} src={Play} alt="playButton" />
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
              <iframe src={movie.video} frameBorder="0" allow='autoplay'></iframe>
              <div>

              </div>
              </Link>
            )}
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

// CardContainer component
const CardContainer = () => {
  return (
    <>
      <TeaserContainerAPI title="Teaser" linkPage="/teaser" linkPlay="/searchTeaser" />
      {/* <TeaserContainer title="Teaser" link="/teaser" movies={Teaser} /> */}
      <TeaserContainer title="Anime" linkPage="/anime" linkPlay="/playAnime" movies={AnimeData} />
      <TeaserContainer title="Movies" linkPage="/movies" linkPlay="/playMovies" movies={MoviesData} />
      <TeaserContainer title="Web Series" linkPage="/webSeries" linkPlay="/playWebSeries" movies={WebSeriesData} />
    </>
  );
};

export default CardContainer;