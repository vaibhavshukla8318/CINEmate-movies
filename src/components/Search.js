import React, { useState } from 'react';
import { TeaserData, AnimeData, MoviesData, WebSeriesData } from './Data';
import style from '../css/Navbar.module.css';
import {Link} from 'react-router-dom'

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

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
          {
              TeaserData
              .filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(item => (
                <Link key={item.id} to={`/detailsTeaser/${item.id}`} className={style.link}>
                  <li key={item.id} onClick={() => handleItemClick(item)}>
                    <img src={item.poster} alt={item.title} />
                    <span className={style.title}>{item.title}</span>
                    <span className={style.year}>{item.year}</span>
                    <span className={style.type}>Teaser</span>
                  </li>
                </Link>
              ))
            }
          {AnimeData
            .filter(item =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(item => (
              <Link key={item.id} to={`/detailsAnime/${item.id}`} className={style.link}>
                <li key={item.id} onClick={() => handleItemClick(item)}>
                  <img src={item.poster} alt={item.title} />
                  <span className={style.title}>{item.title}</span>
                  <span className={style.year}>{item.year}</span>
                  <span className={style.type}>Anime</span>
                </li>
              </Link>
            ))}
          {MoviesData
            .filter(item =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(item => (
              <Link key={item.id} to={`/detailsMovies/${item.id}`} className={style.link}>
                <li key={item.id} onClick={() => handleItemClick(item)}>
                  <img src={item.poster} alt={item.title} />
                  <span className={style.title}>{item.title}</span>
                  <span className={style.year}>{item.year}</span>
                  <span className={style.type}>Movies</span>
                </li>
              </Link>
            ))}
          {WebSeriesData.filter(item =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(item => (
              <Link key={item.id} to={`/detailsWebSeries/${item.id}`} className={style.link}>
                <li key={item.id} onClick={() => handleItemClick(item)}>
                  <img src={item.poster} alt={item.title} />
                  <span className={style.title}>{item.title}</span>
                  <span className={style.year}>{item.year}</span>
                  <span className={style.type}>Series</span>
                </li>
              </Link>
            ))}
        </ul>
      )}     
    </div>
  );
};

export default SearchComponent;



