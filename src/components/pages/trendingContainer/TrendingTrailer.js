import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Play from '../../../images/play.png';
import ForwardImage from '../../../images/arrowForward.png'
import BackwardImage from '../../../images/arrowBackward.png'
import style from '../../../css/AllFunContainer.module.css';
import Sidebar from '../../homeContainer/Sidebar';


const TeaserContainer = ({ trailers, link, handleNextPage, handlePrevPage, currentPage }) => {

  return (
    <>
      <Sidebar />
      <div className={style.cardContainer}> 
       
          <div className={style.detailsContainer}>
            <h1>Trending</h1>
            <div className={style.linkContainer}>
                <button onClick={handlePrevPage} disabled={currentPage === 1} style={currentPage === 1? {display:"none"}:{display:"block"}}><img src={BackwardImage} alt='arrowBackward.png'/></button>
                  <div>
                    <Link to='/moviesTrailerPage' className={style.link} style={{ color: "red" }}>Movie</Link>
                    <Link to='/webSeriesTrailerPage' className={style.link}>TV</Link>
                  </div>
                <button onClick={handleNextPage}><img src={ForwardImage} alt='arrowForward.png'/></button>

                {/* <div className={style.pagination}>
                </div> */}
            </div>
         
            <div className={style.imageContainer}>
              {trailers.map((movie) => (
                <div className={style.movieContainer} key={movie.id}>
                  <Link to={`${link}/${movie.id}`} className={style.posterContainer}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className={style.poster}
                      alt="img"
                    />
                    <img className={style.playButton} src={Play} alt="Play" />
                    <div className={style.details}>
                      <h3>{movie.title || movie.name}</h3>
                      {movie.release_date ? (
                        <p>{movie.release_date}</p>
                      ) : (
                        <p>{movie.first_air_date}</p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
       
       
      </div>
    </>
  );
};



export const MovieTeaser = () => {
  const [trailers, setTrailers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
    const fetchMovies = async (pageNumber = 1) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=fe3c2c41cac485e991fabd53535d760b&page=${pageNumber}`);
        const data = await response.json();
        setTrailers(data.results);
        setCurrentPage(pageNumber);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    const handleNextPage = () => {
      fetchMovies(currentPage + 1);
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        fetchMovies(currentPage - 1);
      }
    };
    
    useEffect(() => {
    fetchMovies();
  }, []);

 

  return (
    <TeaserContainer  
    trailers={trailers} 
    link="/searchTeaser" 
    handleNextPage={handleNextPage}
    handlePrevPage={handlePrevPage}
    currentPage={currentPage}
    />
   
  );
};