// import React from 'react'
// import style from '../css/Home.module.css'
// import Navbar from './Navbar'
// import Sidebar from './Sidebar'
// import Content from './Content'


// const Home = () => {
//   return (
//     <>
//         <Navbar />
//         <div className={style.home}>
//             <Sidebar/>
//             <Content/>
//         </div>
//     </>
//   )
// }

// export default Home



import React from 'react';
import style from '../css/Home.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.home}>
        <Sidebar/>
        <Content/>
      </div>
      <div className={style.message}>
        <p>This app is not supported on screens narrower than 500px.</p>
        <p>We recommend opening it on desktop or tablet devices for the best experience.</p>
      </div>
    </>
  );
}

export default Home;
