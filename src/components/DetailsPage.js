import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TeaserData, AnimeData, MoviesData, WebSeriesData } from './Data';
import Navbar from './Navbar';
import style from '../css/detailsPage.module.css';



const togglePlay = (videoUrl, contentType) => {
  if (contentType === 'teaser') {
    window.open(`/play?videoUrl=${encodeURIComponent(videoUrl)}&contentType=teaser`, '_self');
  }
  if (contentType === 'anime') {
    window.open(`/play?videoUrl=${encodeURIComponent(videoUrl)}&contentType=anime`, '_self');
  } else if (contentType === 'movies') {
    window.open(`/play?videoUrl=${encodeURIComponent(videoUrl)}&contentType=movies`, '_self');
  }
   else if (contentType === 'webSeries') {
    window.open(`/play?videoUrl=${encodeURIComponent(videoUrl)}&contentType=webSeries`, '_self');
  }
};

export const PageDetailsTeaser = () => {

  const { itemId } = useParams();
  const posterDetails = TeaserData.find(item => item.id === parseInt(itemId));

  return (
    <div className={style.selectedItemContainer}>
      <Navbar />
      {posterDetails && (
        <div className={style.selectedItem}>
          <iframe src={posterDetails.video} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
          <div className={style.posterDetails}>
            <img src={posterDetails.poster} alt={posterDetails.title} />
            <div className={style.details}>
              <h2>{posterDetails.title}</h2>
              <p>{posterDetails.year}</p>
              <p>{posterDetails.genre}</p>
            </div>
          </div>
        {/* Add more details as needed */}
      </div>
      )};
    </div>
  );
}


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
      <div className={style.detailsContainer}>
        <img src={posterDetails.poster} alt={posterDetails.title} />
        <div className={style.details}>
          <Link to="/" className={style.link}>Home</Link>
          <h2>{posterDetails.title}</h2>
          <div className={style.watch}>
            <Link to="/play" className={style.watchNow} onClick={() => togglePlay(posterDetails.video, 'anime')}>Watch now</Link>
            <div className={style.watchLater}>
                {isItemInWatchLater(posterDetails) ? (
                    <p className={style.watchLater}>Added</p>
                  ) : (
                    <p onClick={() => addToWatchLater(posterDetails)} >Add</p>
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
      )}
    </>
  );
}


export const PageDetailsMovies = ({ addToWatchLater, watchLaterItems }) => {


  const { itemId } = useParams();
  const posterDetails = MoviesData.find(item => item.id === parseInt(itemId));

  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };

  return (
    <>
      <Navbar />
      {posterDetails && (
      <div className={style.detailsContainer}>
        <img src={posterDetails.poster} alt={posterDetails.title} />
        <div className={style.details}>
          <Link to="/" className={style.link}>Home</Link>
          <h2>{posterDetails.title}</h2>
          <div className={style.watch}>
            <Link to="/play" className={style.watchNow} onClick={() => togglePlay(posterDetails.video, 'movies')}>Watch now</Link>
            <div className={style.watchLater}>
                {isItemInWatchLater(posterDetails) ? (
                    <p className={style.watchLater}>Added</p>
                  ) : (
                    <p onClick={() => addToWatchLater(posterDetails)} >Add</p>
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
        <div className={style.detailsContainer}>
          <img src={posterDetails.poster} alt={posterDetails.title} />
          <div className={style.details}>
            <Link to="/" className={style.link}>Home</Link>
            <h2>{posterDetails.title}</h2>
            <div className={style.watch}>
              <Link to="/play" className={style.watchNow} onClick={() => togglePlay(posterDetails.video, 'webSeries')}>Watch now</Link>
              <div className={style.watchLater}>
                {isItemInWatchLater(posterDetails) ? (
                    <p className={style.watchLater}>Added</p>
                  ) : (
                    <p onClick={() => addToWatchLater(posterDetails)} >Add</p>
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
      )}
    </>
  );
}



