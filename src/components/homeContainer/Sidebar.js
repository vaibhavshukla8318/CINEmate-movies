import Home from '../../images/home.png'
import Movie from '../../images/movie.png'
import TV from '../../images/tv.png'
import Catogory from '../../images/catogory.png'
import Search from '../../images/search.png'
import style from '../../css/Home.module.css'
import { useContextAPI } from '../../contextAPI/ContextApi'
import { Link } from 'react-router-dom';

import Navbar from './Navbar'

const Sidebar = () => {

  const {movies} = useContextAPI();

  return (
    <>
      <div className={style.sidebar}>
      {/* <div className={style.hoverEffect}></div> */}

        <div className={style.displayBlock}>
          <img src={Home} alt="homeImage"/>
          <img src={Movie} alt="movieImage"/>
          <img src={TV} alt="tvSeries"/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", padding:"0 10px"}}>
         <div className={style.mobileSearchContainer}>
              <img className={style.mobileSearch} src={Search} alt="homeImage"/>
              <div className={style.mobileNavbar}>
                <Navbar/>
              </div>
          </div>
          <div className={style.displayNone}>
              <Link to="/home" className={style.link}>
                <div>
                  <img src={Home} alt="homeImage"/>
                  <span>Home</span>
                </div>
              </Link>
              <Link style={movies.length === 0 ? {"cursor":"not-allowed", "pointerEvents":"none"} : {"cursor":"unset", "pointerEvents":"unset"}} to="/moviesTrailerPage" className={`${style.link} ${style.teaserLink}`} >
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/1710/1710143.png" alt="teaserImage"/>
                  <span>Teaser</span>
                </div>
              </Link>
              <Link to="/anime" className={`${style.link} ${style.animeLink}`} style={movies.length === 0 ? {"cursor":"not-allowed", "pointerEvents":"none"} : {"cursor":"unset", "pointerEvents":"unset"}}> 
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/1881/1881021.png" alt="animeImage"/>
                    <span>Anime</span>
                </div>
              </Link>
              <Link to="/movies" className={`${style.link} ${style.moviesLink}`} style={movies.length === 0 ? {"cursor":"not-allowed", "pointerEvents":"none"} : {"cursor":"unset", "pointerEvents":"unset"}}> 
                <div>
                  <img src={Movie} alt="movieImage"/>
                  <span>Movies</span>
                </div>
              </Link>  

              <Link to="/webSeries" className={`${style.link} ${style.seriesLink}`} style={movies.length === 0 ? {"cursor":"not-allowed", "pointerEvents":"none"} : {"cursor":"unset", "pointerEvents":"unset"}}>
                <div>
                  <img src={TV} alt="tvSeries"/>
                  <span>TV Series</span>
                </div>
              </Link>
            <Link to="/category" className={style.link} style={movies.length === 0 ? {"cursor":"not-allowed", "pointerEvents":"none"} : {"cursor":"unset", "pointerEvents":"unset"}}>  
              <div>
                <img src={Catogory} alt="catogoryImage"/>
                <span>Catogory</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar