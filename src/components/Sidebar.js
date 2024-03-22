import React from 'react'
import Home from '../images/home.png'
import Movie from '../images/movie.png'
import TV from '../images/tv.png'
import Sport from '../images/sport.png'
import Catogory from '../images/catogory.png'
import MySpace from '../images/myspace.png'
import style from '../css/Home.module.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.displayBlock}>
        <img src={Home} alt="homeImage"/>
        <img src={Movie} alt="movieImage"/>
        <img src={TV} alt="tvSeries"/>
      </div>
      <div className={style.displayNone}>
          <Link to="/home" className={style.link}>
            <div>
                <img src={Home} alt="homeImage"/>
              <span>Home</span>
            </div>
          </Link>
          <Link to="/teaser" className={style.link}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1710/1710143.png" alt="teaserImage"/>
              <span>Teaser</span>
            </div>
          </Link>
          <Link to="/anime" className={style.link}> 
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1881/1881021.png" alt="animeImage"/>
                <span>Anime</span>
            </div>
          </Link>
          <Link to="/movies" className={style.link}> 
            <div>
              <img src={Movie} alt="movieImage"/>
              <span>Movies</span>
            </div>
          </Link>  

          <Link to="/webSeries" className={style.link}>
            <div>
              <img src={TV} alt="tvSeries"/>
              <span>TV Series</span>
            </div>
          </Link>
        <Link to="/category" className={style.link}>  
          <div>
            <img src={Catogory} alt="catogoryImage"/>
            <span>Catogory</span>
          </div>
        </Link>
        <Link to="/watch-later" className={style.link}>
          <div>
          <img src={MySpace} alt="mySpace"/>
          <span>My Space</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar