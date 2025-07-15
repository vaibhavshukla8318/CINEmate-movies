/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import style from '../../css/Navbar.module.css';
import errorImage from '../../images/error.png';
import { AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data';
import { useContextAPI } from '../../contextAPI/ContextApi';

const SearchComponent = () => {
  const [trailer, setTrailer] = useState([]);
  const [webTrailer, setWebTrailer] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const searchRef = useRef(null);

  const {movies} = useContextAPI();


  const API = process.env.REACT_APP_API_KEY
  const fetchMovieTrailer = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${searchTerm}`);
      const data = await response.json();
      setTrailer(data.results);
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  const fetchMovieTrailerWeb = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API}&query=${searchTerm}`);
      const data = await response.json();
      console.log(data);
      setWebTrailer(data.results);
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };


  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchMovieTrailer();
      fetchMovieTrailerWeb();
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm('');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchTerm('');
  };


  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        ref={searchRef}
        disabled = {movies.length===0 ? true : false}
        style={movies.length===0 ? {"cursor":"not-allowed"}: {"cursor":"unset"}}
      />
    
      {searchTerm && (
        <ul>
          
          {AnimeData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
            <Link key={item.id} to={`/playAnime/${item.id}`} className={style.link}>
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <img src={item.poster} alt={item.title} />
                <span className={style.title}>{item.title}</span>
                <span className={style.year}>{item.year}</span>
                <span className={style.type}>Anime</span>
              </li>
            </Link>
          ))}
          {MoviesDataTrailer.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
            <Link key={item.id} to={`/playMovies/${item.id}`} className={style.link}>
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <img src={item.poster} alt={item.title} />
                <span className={style.title}>{item.title}</span>
                <span className={style.year}>{item.year}</span>
                <span className={style.type}>Movies</span>
              </li>
            </Link>
          ))}
          {WebSeriesData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
            <Link key={item.id} to={`/playWebSeries/${item.id}`} className={style.link}>
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <img src={item.poster} alt={item.title} />
                <span className={style.title}>{item.title}</span>
                <span className={style.year}>{item.year}</span>
                <span className={style.type}>Series</span>
              </li>
            </Link>
          ))}
          {/* using API */}
          {trailer.map(item => (
            <Link key={item.id} to={`/searchTeaser/${item.id}`} className={style.link}>
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  onError={(e) => { e.target.src = errorImage; }}
                  alt={item.title}
                />
                <span className={style.title}>{item.title}</span>
                <span className={style.year}>{new Date(item.release_date).getFullYear()}</span>
                <span className={style.type}>Teaser</span>
              </li>
            </Link>
          ))}
        
          {/* using API */}
          {webTrailer.map(item => (
            <Link key={item.id} to={`/searchWebTeaser/${item.id}`} className={style.link}>
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  onError={(e) => { e.target.src = errorImage; }}
                  alt={item.title}
                />
                <span className={style.title} >{item.name}</span>
                <span className={style.year}>{new Date(item.first_air_date).getFullYear()}</span>
                <span className={style.type}>Teaser</span>
              </li>
            </Link>
          ))}
        </ul>
      )}     
    </div>
  );
};


export default SearchComponent;