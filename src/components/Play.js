// import React from 'react';
// import style from '../css/AllFunContainer.module.css';
// import { Link } from 'react-router-dom';

// const Play = () => {
//   const searchParams = new URLSearchParams(window.location.search);
//   const videoUrl = searchParams.get('videoUrl');
//   const contentType = searchParams.get('contentType');

//   let redirectUrl = "/home";
//   if (contentType === 'teaser') {
//     redirectUrl = '/teaser';
//   } else if (contentType === 'anime') {
//     redirectUrl = '/anime';
//   } else if (contentType === 'movies') {
//     redirectUrl = '/movies';
//   } else if (contentType === 'webSeries') {
//     redirectUrl = '/webSeries';
//   }

//   return (
//     <div className={style.iframeContainer}>
//       <iframe src={videoUrl} className={style.iframe} title="Video Player" width="560" height="315" frameBorder="0" allowFullScreen></iframe>
//       <Link to={redirectUrl} className={style.crossIcon}>X</Link>
//     </div>
//   );
// }

// export default Play;








import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TeaserData, AnimeData, MoviesData, WebSeriesData } from './Data';
import Navbar from './Navbar';
import style from '../css/detailsPage.module.css';



export const PageDetailsAnimePlay = () => {

  const { itemId } = useParams();
  const posterDetails = AnimeData.find(item => item.id === parseInt(itemId));

   return (
    <div className={style.selectedItemContainer}>
      <Navbar />
      {posterDetails && (
        <div className={style.selectedItem}>
          <iframe src={posterDetails.video} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
          <div className={style.posterDetails}>
            <img src={posterDetails.poster} alt={posterDetails.title} />
            <div className={style.linkContainer}>
              <Link to="/home" className={style.link}>Home</Link>
              <div className={style.details}>
                <h2>{posterDetails.title}</h2>
                <p>{posterDetails.season}</p>
                <p>{posterDetails.language}</p>
                <p>{posterDetails.year}</p>
                <p>{posterDetails.genre}</p>
              </div>
            </div>
          </div>
        {/* Add more details as needed */}
      </div>
      )};
    </div>
  );

}
export const PageDetailsMoviesPlay = () => {

  const { itemId } = useParams();
  const posterDetails = MoviesData.find(item => item.id === parseInt(itemId));


   return (
    <div className={style.selectedItemContainer}>
      <Navbar />
      {posterDetails && (
        <div className={style.selectedItem}>
          <iframe src={posterDetails.video} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
          <div className={style.posterDetails}>
            <img src={posterDetails.poster} alt={posterDetails.title} />
            <div className={style.linkContainer}>
              <Link to="/home" className={style.link}>Home</Link>
              <div className={style.details}>
                <h2>{posterDetails.title}</h2>
                <p>{posterDetails.season}</p>
                <p>{posterDetails.language}</p>
                <p>{posterDetails.year}</p>
                <p>{posterDetails.genre}</p>
              </div>
            </div>
          </div>
        {/* Add more details as needed */}
      </div>
      )};
    </div>
  );

}
export const PageDetailsWebSeriesPlay = () => {


  const { itemId } = useParams();
  const posterDetails = WebSeriesData.find(item => item.id === parseInt(itemId));

   return (
    <div className={style.selectedItemContainer}>
      <Navbar />
      {posterDetails && (
        <div className={style.selectedItem}>
          <iframe src={posterDetails.video} className={style.iframe} title="Video Player" frameBorder="0" allowFullScreen></iframe>
          <div className={style.posterDetails}>
            <img src={posterDetails.poster} alt={posterDetails.title} />
            <div className={style.linkContainer}>
              <Link to="/home" className={style.link}>Home</Link>
              <div className={style.details}>
                <h2>{posterDetails.title}</h2>
                <p>{posterDetails.season}</p>
                <p>{posterDetails.language}</p>
                <p>{posterDetails.year}</p>
                <p>{posterDetails.genre}</p>
              </div>
            </div>
          </div>
        {/* Add more details as needed */}
      </div>
      )};
    </div>
  );

}



