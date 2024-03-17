import React from 'react';
import style from '../css/AllFunContainer.module.css';
import { Link } from 'react-router-dom';

const Play = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const videoUrl = searchParams.get('videoUrl');
  const contentType = searchParams.get('contentType');

  let redirectUrl = '/';
  if (contentType === 'teaser') {
    redirectUrl = '/teaser';
  } else if (contentType === 'anime') {
    redirectUrl = '/anime';
  } else if (contentType === 'movies') {
    redirectUrl = '/movies';
  } else if (contentType === 'webSeries') {
    redirectUrl = '/webSeries';
  }

  return (
    <div className={style.iframeContainer}>
      <iframe src={videoUrl} className={style.iframe} title="Video Player" width="560" height="315" frameBorder="0" allowFullScreen></iframe>
      <Link to={redirectUrl} className={style.crossIcon}>X</Link>
    </div>
  );
}

export default Play;












