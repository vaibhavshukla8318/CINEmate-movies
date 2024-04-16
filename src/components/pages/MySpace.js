import React from 'react';
import Play from '../../images/play.png';
import style from '../../css/AllFunContainer.module.css';
import Sidebar from '../homeContainer/Sidebar';
import { Link } from 'react-router-dom';

const WatchLaterPage = ({ watchLaterItems, removeFromWatchLater }) => {
  const handleRemove = (index) => {
    const reversedIndex = watchLaterItems.length - 1 - index; // Calculate the index in the original array
    removeFromWatchLater(reversedIndex); // Pass the original index to the function
  };

  const renderContentLink = (item, index) => { // Added index parameter
    return (
      <div className={style.posterContainer}>
        <Link to={`/details${item.type}/${item.id}`}>
          <img src={item.poster} className={style.poster} alt="img" />
          <img className={style.playButton} src={Play} alt="Play" />
          <div className={style.details}>
            <h3>{item.title}</h3>
            <p>{item.year}</p>
          </div>
        </Link>
        <button className={style.removeButton} onClick={() => handleRemove(index)}>X</button>
      </div>
    );
  };

  return (
    <>
      <Sidebar />
      <div className={`${style.cardContainer} ${style.watchLater}`}>
        <h1>Watch Later</h1>
        <div className={style.imageContainer}>
          {watchLaterItems.slice().reverse().map((item, index) => (
            <div key={index} className={style.watchLaterItem}> {/* Removed unnecessary fragment */}
              {renderContentLink(item, index)} {/* Passed index to renderContentLink */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchLaterPage;
