import React from 'react'
import NavbarStyle from '../../css/Navbar.module.css'
import SearchComponent from './Search'
import {Link} from "react-router-dom";

const Navbar = () => {


  return (
    <div className={NavbarStyle.navbar}>
        <Link to="/home" className={NavbarStyle.left}>
            <img src='https://cdn-icons-png.flaticon.com/128/96/96406.png' alt='logoImage'/>
            <span><h3>CINEmate</h3></span>
        </Link>
        <div className={NavbarStyle.center}>
          <SearchComponent/>
        </div>
        <div className={NavbarStyle.right}>
        </div>
    </div>
  )
}

export default Navbar