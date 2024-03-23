import React from 'react';
import style from '../css/Home.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';
import MobileView from './MobileView';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.home}>
        <Sidebar/>
        <Content/>
      </div>
    </>
  );
}

export default Home;

