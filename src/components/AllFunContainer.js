import React, {useState, useEffect} from 'react';
import {TeaserData, AnimeData, MoviesData, WebSeriesData } from './Data';
import Play from '../images/play.png';
import Add from '../images/add.png'
import Added from '../images/correct.png'
import style from '../css/AllFunContainer.module.css'
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom'


// export const TeaserContainer = () => { 
 
//     return (
//       <>
//         <Sidebar />
//         <div className={style.cardContainerTeaser}>
//           <h1>Trending</h1>
//           <div className={style.linkContainer}>
//             <Link to='/moviesTrailerPage' className={style.link}>Movie</Link>
//             <Link to='/webSeriesTrailerPage' className={style.link}>TV</Link>
//           </div>
//             {/* <div className={style.imageContainer}>
//                {TeaserData.slice().reverse().map((image) => (
//                  <Link to={`/detailsTeaser/${image.id}`} className={style.posterContainer} key={image.id}>
//                   <img
//                     src={image.poster}
//                     className={style.poster}
//                     alt="img"
//                   />
//                   <img className={style.playButton} src={Play} alt="Play"/>
//                   <div className={style.details}>
//                     <h3>{image.title}</h3>
//                     <p>{image.year}</p>
//                   </div>
//                 </Link>
//               ))}
            
//             </div> */}
//         </div>
//             {/* <MovieTeaser/>    */}
//       </>  
//     );
//   }





export const AnimeContainer = ({addToWatchLater, watchLaterItems}) => { 

  
  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };

    return (
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>Anime</h1>
          
            <div className={style.imageContainer}>
   
               {AnimeData.slice().reverse().map((image) => (
                <>
                  <div className={style.posterContainer} key={image.id}>
                    <Link to={`/detailsAnime/${image.id}`} >
                      <img
                        src={image.poster}
                        className={style.poster}
                        alt="img"
                      />
                  
                      <img className={style.playButton} src={Play} alt="Play"/>
                      <div className={style.details}>
                        <h3>{image.title}</h3>       
                        <p>{image.year}</p>
                      </div>
                    </Link>
                    {isItemInWatchLater(image) ? (
                    <img src={Added} className={style.addedWatchLater} />
                    ) : (
                      <img src={Add} className={style.addWatchLater} onClick={() => addToWatchLater(image)} />
                    )}
                  </div>
                 
                </>
              ))}
            
          </div>
        </div>
      </>  
    );
  }


export const MoviesContainer = ({addToWatchLater, watchLaterItems}) =>  { 

  const isItemInWatchLater = (item) => {
    return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
  };
  
    return (
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>Movies</h1>
          
            <div className={style.imageContainer}>
             
               {MoviesData.slice().reverse().map((image) => (
                <div className={style.posterContainer} key={image.id}>
                  <Link to={`/detailsMovies/${image.id}`}>
                    <img
                      src={image.poster}
                      className={style.poster}
                      alt="img"
                    />
                    <img className={style.playButton} src={Play} alt="Play"/>
                    <div className={style.details}>
                      <h3>{image.title}</h3>
                      <p>{image.year}</p>
                    </div>
                  </Link>
                  {isItemInWatchLater(image) ? (
                  <img src={Added} className={style.addedWatchLater} />
                ) : (
                  <img src={Add} className={style.addWatchLater} onClick={() => addToWatchLater(image)} />
                )}
                </div>
              ))}
            
          </div>
        </div>
      </>  
    );
  }



export const WebSeriesContainer = ({ addToWatchLater, watchLaterItems }) => { 
  
const isItemInWatchLater = (item) => {
  return watchLaterItems.some((watchLaterItem) => watchLaterItem.title === item.title);
};

  return (
  
      <>
        <Sidebar />
        <div className={style.cardContainer}>
          <h1>Web Series</h1>  
            <div className={style.imageContainer}>    
               {WebSeriesData.slice().reverse().map((image) => (
                <div className={style.posterContainer} key={image.id}>
                 <Link to={`/detailsWebSeries/${image.id}`}>
                  <img
                    src={image.poster}
                    className={style.poster}
                    alt="img"
                  />
                  <img className={style.playButton} src={Play} alt="Play"/>
                  <div className={style.details}>
                    <h3>{image.title}</h3>
                    <p>{image.year}</p>
                  </div>
                </Link>
               
                {isItemInWatchLater(image) ? (
                  <img src={Added} className={style.addedWatchLater} />
                ) : (
                  <img src={Add} className={style.addWatchLater} onClick={() => addToWatchLater(image)} />
                )}
                </div>
              ))}
            
          </div>
        </div>
      </>  
    );
  }
