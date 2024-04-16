import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Play from '../../../images/play.png';
import ForwardImage from '../../../images/arrowForward.png'
import BackwardImage from '../../../images/arrowBackward.png'
import style from '../../../css/AllFunContainer.module.css';
import { Loading, Error } from '../../LoadingAndError';

const TeaserContainer = ({title, trailers, link, handleNextPage, handlePrevPage, currentPage }) => {
  return (
    <>
      <div className={style.category}>
        <h1>{title}</h1>
        <div className={style.linkContainer}>
          <button onClick={handlePrevPage} disabled={currentPage === 1} style={currentPage === 1? {display:"none"}:{display:"block"}}><img src={BackwardImage} alt='arrowBackward.png'/></button>
          <div>
            <Link to="/home" className={style.link}>Home</Link>
            <Link to='/category' className={style.link}>Back</Link>
          </div>
          <button onClick={handleNextPage}><img src={ForwardImage} alt='arrowForward.png'/></button>
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
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export const UpcomingMovieTeaser = () => {
  const [trailers, setTrailers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async (pageNumber = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=fe3c2c41cac485e991fabd53535d760b&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTrailers(data.results);
      setCurrentPage(pageNumber);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleNextPage = () => {
    fetchMovies(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchMovies(currentPage - 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <TeaserContainer
      title = "Upcoming"
      trailers={trailers}
      link="/searchTeaser"
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      currentPage={currentPage}
    />
  );
};


export const NowPlayingMovieTeaser = () => {
  const [trailers, setTrailers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async (pageNumber = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fe3c2c41cac485e991fabd53535d760b&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTrailers(data.results);
      setCurrentPage(pageNumber);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleNextPage = () => {
    fetchMovies(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchMovies(currentPage - 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <TeaserContainer
      title="Now Playing"
      trailers={trailers}
      link="/searchTeaser"
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      currentPage={currentPage}
    />
  );
};


export const PopularMovieTeaser = () => {
  const [trailers, setTrailers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async (pageNumber = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fe3c2c41cac485e991fabd53535d760b&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTrailers(data.results);
      setCurrentPage(pageNumber);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleNextPage = () => {
    fetchMovies(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchMovies(currentPage - 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <TeaserContainer
      title="Popular"
      trailers={trailers}
      link="/searchTeaser"
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      currentPage={currentPage}
    />
  );
};


export const TopRatedMovieTeaser = () => {
  const [trailers, setTrailers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async (pageNumber = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=fe3c2c41cac485e991fabd53535d760b&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTrailers(data.results);
      setCurrentPage(pageNumber);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleNextPage = () => {
    fetchMovies(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchMovies(currentPage - 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <TeaserContainer
      title="Top Rated"
      trailers={trailers}
      link="/searchTeaser"
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      currentPage={currentPage}
    />
  );
};










