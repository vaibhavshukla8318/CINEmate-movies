import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { TeaserData, AnimeData, MoviesDataTrailer, WebSeriesData } from '../dataContainer/Data';
import Navbar from '../homeContainer/Navbar';
import style from '../../css/detailsPage.module.css';

// Using Api
export const PageDetailsTeaserSearch = () => {
  const [trailerDetails, setTrailerDetails] = useState(null);
  const [videos, setVideos] = useState({});
  const [selectedVideoKey, setSelectedVideoKey] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { itemId } = useParams();
  
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'fe3c2c41cac485e991fabd53535d760b'; 


  const fetchTrailerDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/movie/${itemId}?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      // console.log(data)
      setTrailerDetails(data);
    } catch (error) {
      console.error('Error fetching trailer details:', error);
    }
  };


  const fetchVideosForMovie = async (movieId) => {
    try {
      const response = await fetch(`${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      if (data.results.length > 0) {
        setVideos((prevVideos) => ({
          ...prevVideos,
          [movieId]: data.results,
        }));
      }
    } catch (error) {
      console.error(`Error fetching videos for movie ${movieId}:`, error);
    }
  };

  useEffect(() => {
    fetchTrailerDetails();
    // fetchTrailerDetailsWeb();
    fetchVideosForMovie(itemId);
  }, [itemId]);

  const playVideo = (videoKey) => {
    setSelectedVideoKey(videoKey);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  const hideIframe2 = () => {
    const iframe2 = document.querySelector(`.${style.iframe2}`);
    if (iframe2) {
      iframe2.style.display = 'none';
    }
  };

  return (
    <div className={style.selectedItemContainer}>
      {/* <Navbar /> */}
      {trailerDetails && (
        <div className={style.selectedItem}>
          <>
            {videos[itemId]?.slice(0, 1).reverse().map((video) => (
              <>
              <iframe
                  key={video.key}
                  src={`https://www.youtube.com/embed/${video.key}?${isPlaying ? 'autoplay=1&' : ''}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  className={`${style.iframe} ${style.iframe2}`}
                ></iframe>
              </>
            ))}

            {selectedVideoKey && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoKey}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className={style.iframe}
              ></iframe>
            )}
          </>
          <div className={style.posterDetails}>
            <Link to="/home" className={style.link}>Home</Link>
            {/* <img src={`https://image.tmdb.org/t/p/w500${trailerDetails.poster_path}`} alt={trailerDetails.title} /> */}
            <div className={style.details}>
              <h2>{trailerDetails.title}</h2>
              {/* <p>{trailerDetails.overview}</p> */}
              {/* <p className={style.rating}>
                <img src={Star} />
                {trailerDetails.vote_average}
              </p> */}
              <p>{trailerDetails.release_date}</p>
              {/* <p>{trailerDetails.genres.map(genre => genre.name).join(', ')}</p> */}
            </div> 
          </div>
          <div className={style.bottomIframeContainer}>
          {videos[itemId]?.slice().reverse().map((video) => (
             <div key={video.key} onClick={() => { playVideo(video.key); hideIframe2();}}>
              <iframe
                key={video.key}
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={style.bottomIframe}
              >
              </iframe>
              <div className={style.iframeContainer} onClick={closeVideo}></div>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};





export const PageDetailsTeaserWebSearch = () => {
  const [trailerDetails, setTrailerDetails] = useState(null);
  const [videos, setVideos] = useState({});
  const [selectedVideoKey, setSelectedVideoKey] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { itemId } = useParams();
  
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'fe3c2c41cac485e991fabd53535d760b'; 

  const fetchTrailerDetailsWeb = async () => {
    try {
      const response = await fetch(`${API_URL}/tv/${itemId}?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      setTrailerDetails(data);
    } catch (error) {
      console.error('Error fetching trailer details:', error);
    }
  };

  const fetchVideosForMovie = async (movieId) => {
    try {
      const response = await fetch(`${API_URL}/tv/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      if (data.results.length > 0) {
        setVideos((prevVideos) => ({
          ...prevVideos,
          [movieId]: data.results,
        }));
      }
    } catch (error) {
      console.error(`Error fetching videos for movie ${movieId}:`, error);
    }
  };

  useEffect(() => {
    
    fetchTrailerDetailsWeb();
    fetchVideosForMovie(itemId);
  }, [itemId]);

  const playVideo = (videoKey) => {
    setSelectedVideoKey(videoKey);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  const hideIframe2 = () => {
    const iframe2 = document.querySelector(`.${style.iframe2}`);
    if (iframe2) {
      iframe2.style.display = 'none';
    }
  };

  return (
    <div className={style.selectedItemContainer}>
      {/* <Navbar /> */}
      {trailerDetails && (
        <div className={style.selectedItem}>
          {videos[itemId]?.slice(0, 1).map((video) => (
            <>
               <iframe
                  key={video.key}
                  src={`https://www.youtube.com/embed/${video.key}?${isPlaying ? 'autoplay=1&' : ''}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  className={`${style.iframe} ${style.iframe2}`}
                ></iframe>
            </>
          ))}

          {selectedVideoKey && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoKey}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className={style.iframe}
              ></iframe>
            )}

          <div className={style.posterDetails}>
            <Link to="/home" className={style.link}>Home</Link>
            {/* <img src={`https://image.tmdb.org/t/p/w500${trailerDetails.poster_path}`} alt={trailerDetails.title} /> */}
            <div className={style.details}>
              <h2>{trailerDetails.name}</h2>
              <p>{trailerDetails.first_air_date}</p>
              {/* <p>{trailerDetails.overview}</p> */}
              {/* <p className={style.rating}>
                <img src={Star} />
                {trailerDetails.vote_average}
              </p> */}
              {/* <p>{trailerDetails.genres.map(genre => genre.name).join(', ')}</p> */}
            </div>
          </div>
          <div className={style.bottomIframeContainer}>
          {videos[itemId]?.slice().reverse().map((video) => (
             <div key={video.key} onClick={() => { playVideo(video.key); hideIframe2();}}>
              <iframe
                key={video.key}
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={style.bottomIframe}
              >
              </iframe>
              <div className={style.iframeContainer} onClick={closeVideo}></div>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};




export const PageDetailsAnime = ({ addToWatchLater, watchLaterItems }) => {

  const { itemId } = useParams();
  const posterDetails = AnimeData.find(item => item.id === parseInt(itemId));

  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };

  return (
    <>
      <Navbar />
      {posterDetails && (
      <>
       <div className={style.blur} style={{background:`url(${posterDetails.poster})`}}>
        
        </div>
      <div className={style.detailsContainer}>
        {/* <img src={posterDetails.poster} alt={posterDetails.title} /> */}
        <div className={style.details}>
          <Link to="/home" className={style.link}>Home</Link>
          <Link to="/anime" className={style.link}>Back</Link>
          <h2>{posterDetails.title}</h2>
          <div className={style.watch}>
            {/* <Link to="/play" className={style.watchNow} onClick={() => togglePlay(posterDetails.video, 'anime')}>Watch now</Link> */}
            <Link to={`/playAnime/${posterDetails.id}`} className={style.watchNow}>Watch now</Link>
            <div className={style.watchLater}>
                {isItemInWatchLater(posterDetails) ? (
                    <p className={style.watchLater}>Added</p>
                  ) : (
                    <p onClick={() => addToWatchLater(posterDetails)} >Watch Later</p>
                  )}
              </div>
          </div>
          <p className={style.plot}>{posterDetails.plot}</p>
          <p className={style.year}>Release date: &nbsp; <span>{posterDetails.year}</span></p>
          <ul className={style.genre}>
            Genre:
            {posterDetails.genre && posterDetails.genre.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>

        </div>
      </div>
     
      </>
      )}
    </>
  );
}

export const PageDetailsMovies = ({ addToWatchLater, watchLaterItems }) => {


  const { itemId } = useParams();
  const posterDetails = MoviesDataTrailer.find(item => item.id === parseInt(itemId));

  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };

  return (
    <>
      <Navbar />
      {posterDetails && (
        <>
          <div className={style.blur} style={{background:`url(${posterDetails.poster})`}}>
        
          </div>
          <div className={style.detailsContainer}>
            {/* <img src={posterDetails.poster} alt={posterDetails.title} /> */}
            <div className={style.details}>
              <Link to="/home" className={style.link}>Home</Link>
              <Link to="/movies" className={style.link}>Back</Link>
              <h2>{posterDetails.title}</h2>
              <div className={style.watch}>
                {/* <Link to="/play" className={style.watchNow} onClick={() => togglePlay(posterDetails.video, 'movies')}>Watch now</Link> */}
                <Link to={`/playMovies/${posterDetails.id}`} className={style.watchNow}>Watch now</Link>
                <div className={style.watchLater}>
                    {isItemInWatchLater(posterDetails) ? (
                        <p className={style.watchLater}>Added</p>
                      ) : (
                        <p onClick={() => addToWatchLater(posterDetails)} >Watch Later</p>
                      )}
                  </div>
              </div>
              <p className={style.plot}>{posterDetails.plot}</p>
              <p className={style.year}>Release date: &nbsp; <span>{posterDetails.year}</span></p>
              <ul className={style.genre}>
                Genre:
                {posterDetails.genre && posterDetails.genre.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>

            </div>
          </div>
        </>  
      )} 
    </>
  );
}

export const PageDetailsWebSeries = ({ addToWatchLater, watchLaterItems }) => {

  const { itemId } = useParams();
  const posterDetails = WebSeriesData.find(item => item.id === parseInt(itemId));

  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };

  return (
    <>
      <Navbar />
      {posterDetails && (
        <>
          <div className={style.blur} style={{background:`url(${posterDetails.poster})`}}>
          
          </div>
          <div className={style.detailsContainer}>
            {/* <img src={posterDetails.poster} alt={posterDetails.title} /> */}
            <div className={style.details}>
              <Link to="/home" className={style.link}>Home</Link>
              <Link to="/webSeries" className={style.link}>Back</Link>
              <h2>{posterDetails.title}</h2>
              <div className={style.watch}>
                {/* <Link to="/play" className={style.watchNow} onClick={() => togglePlay(posterDetails.video, 'webSeries')}>Watch now</Link> */}
                <Link to={`/playWebSeries/${posterDetails.id}`} className={style.watchNow}>Watch now</Link>
                <div className={style.watchLater}>
                  {isItemInWatchLater(posterDetails) ? (
                      <p className={style.watchLater}>Added</p>
                    ) : (
                      <p onClick={() => addToWatchLater(posterDetails)} >Watch Later</p>
                    )}
                </div>
              </div>
              <p className={style.plot}>{posterDetails.plot}</p>
              <p className={style.year}>Release date: &nbsp; <span>{posterDetails.year}</span></p>
              <ul className={style.genre}>
                Genre:
                {posterDetails.genre && posterDetails.genre.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
