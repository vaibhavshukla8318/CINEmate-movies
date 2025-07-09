import React, { useState, useEffect } from 'react';
import style from '../../../css/CardContainer.module.css';
import { Link } from 'react-router-dom';
import BackwardArrowImage from '../../../images/backword.png';
import ForwardArrowImage from '../../../images/forword.png';
import Play from '../../../images/play.png';
import axios from 'axios';

const CardContainer = ({ title, link, movies }) => {
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
          <Link to={link} className={style.link}>View All</Link>
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
              <Link to={`/searchTeaser/${movie.id}`}>
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

const api_key = process.env.REACT_APP_API_KEY;

const UpcomingMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return <CardContainer title="Upcoming Movies" link="/upcomingMovieTeaser" movies={movies} />
};


const NowPlayingMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return <CardContainer title="Now Playing" link="/nowPlayingMovieTeaser" movies={movies} />
};

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return <CardContainer title="Popular" link="/popularMovieTeaser" movies={movies} />
};


const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return <CardContainer title="Top Rated" link="/topRatedMovieTeaser" movies={movies} />
};

const Category = () => {
  return(
  <div className={style.categoryContainer}>
    <div style={{width:"100%", backgroundColor:"#0D1524", display:"flex", position:"fixed", zIndex:"20", borderBottom:"1px solid gray", gap:"20px", color:"white", padding:"50px 0px 20px 20px"}}>
       <Link to="/home" className={style.link}>Home</Link>
       <Link to="/category" className={style.link} style={{color:"red"}}>Movies</Link>
       <Link to="/seriesTeaserContainer" className={style.link}>TV</Link>
    </div>
    <div>
      <UpcomingMovie />
      <NowPlayingMovie/>
      <PopularMovie/>
      <TopRatedMovie/>
    </div>
  </div>
  )
};

export default Category;
