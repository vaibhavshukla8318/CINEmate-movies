import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Play from '../images/play.png';
import style from '../css/AllFunContainer.module.css';
import Sidebar from './Sidebar';

const TeaserContainer = ({  trailers, link }) => { 

  return (
    <>
      <Sidebar />
      <div className={style.cardContainer}>
        <h1>Trending</h1>
        <div className={style.linkContainer}>
          <Link to='/moviesTrailerPage' className={style.link}>Movie</Link>
          <Link to='/webSeriesTrailerPage' className={style.link}>TV</Link>
        </div>
        <div className={style.imageContainer}>
          {trailers.map((movie) => ( 
            <Link to={`${link}/${movie.id}`} className={style.posterContainer} key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className={style.poster}
                alt="img"
              />
              <img className={style.playButton} src={Play} alt="Play"/>
              <div className={style.details}>
                <h3>{movie.title || movie.name}</h3>
                {movie.release_date ? (
                  <p>{movie.release_date}</p>
                ) : (
                  <p>{movie.first_air_date}</p>
                )}
              </div>

            </Link>
          ))}
        </div>
      </div>  
    </>  
  );
};

export const MovieTeaser = () => {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=fe3c2c41cac485e991fabd53535d760b');
        const data = await response.json();
   
        setTrailers(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <TeaserContainer  trailers={trailers} link="/searchTeaser" />
   
  );
};


export const WebSeriesTeaser = () => {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=fe3c2c41cac485e991fabd53535d760b');
        const data = await response.json();
        console.log(data)
        setTrailers(data.results);
      } catch (error) {
        console.error('Error fetching TV series:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <TeaserContainer trailers={trailers} link="/searchWebTeaser"/>
  );
};



