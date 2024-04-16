import React from 'react';
import style from "../css/loadingPage.module.css"

const Loading = () => {
  return (
    <div className={style.loadingPage}>
       <div className={style.spin}>

       </div>
    </div>
  )
};

const Error = ({ message }) => {
  return <div>Error: {message}</div>;
};

export { Loading, Error };
