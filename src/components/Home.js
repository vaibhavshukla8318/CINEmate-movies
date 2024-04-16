import React from 'react';
import style from '../css/Home.module.css';
import Navbar from './homeContainer/Navbar';
import Sidebar from './homeContainer/Sidebar';
import Content from './homeContainer/Content';


const Home = () => {
  return (
    <>
      <div className={style.desktopNavbar}>
        <Navbar />
      </div>
      <div className={style.home}>
        <Sidebar/>
        <Content/>
      </div>
    </>
  );
}

export default Home;

