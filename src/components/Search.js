import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../css/Navbar.module.css';
import errorImage from '../images/error.png';
import { TeaserData, AnimeData, MoviesData, WebSeriesData } from './Data';

const SearchComponent = () => {
  const [trailer, setTrailer] = useState([]);
  const [webTrailer, setWebTrailer] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchMovieTrailer = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fe3c2c41cac485e991fabd53535d760b&query=${searchTerm}`);
      const data = await response.json();
      setTrailer(data.results);
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  const fetchMovieTrailerWeb = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=fe3c2c41cac485e991fabd53535d760b&query=${searchTerm}`);
      const data = await response.json();
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
      />
    
      {searchTerm && (
        <ul>
          {TeaserData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
            <Link key={item.id} to={`/detailsTeaser/${item.id}`} className={style.link}>
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <img src={item.poster} alt={item.title} />
                <span className={style.title}>{item.title}</span>
                <span className={style.year}>{item.year}</span>
                <span className={style.type}>Teaser</span>
              </li>
            </Link>
          ))}
          {AnimeData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
            <Link key={item.id} to={`/detailsAnime/${item.id}`} className={style.link}>
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <img src={item.poster} alt={item.title} />
                <span className={style.title}>{item.title}</span>
                <span className={style.year}>{item.year}</span>
                <span className={style.type}>Anime</span>
              </li>
            </Link>
          ))}
          {MoviesData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
            <Link key={item.id} to={`/detailsMovies/${item.id}`} className={style.link}>
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <img src={item.poster} alt={item.title} />
                <span className={style.title}>{item.title}</span>
                <span className={style.year}>{item.year}</span>
                <span className={style.type}>Movies</span>
              </li>
            </Link>
          ))}
          {WebSeriesData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
            <Link key={item.id} to={`/detailsWebSeries/${item.id}`} className={style.link}>
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
                <span className={style.title} style={{ marginLeft: "-70px" }}>{item.title}</span>
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
                <span className={style.title} style={{ marginLeft: "-70px" }}>{item.title}</span>
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
