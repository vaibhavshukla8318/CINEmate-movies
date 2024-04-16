import React from 'react'
import style from '../css/mobileView.module.css'

const MobileView = () => {
  return (
    <div className={style.mobileViewContainer}>
      <div className={style.content}>
        <div className={style.iconContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff4d4d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${style.feather} ${style.featherAlertCircle}`}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12" y2="16"></line>
          </svg>
        </div>
        <h1>Oops! Mobile View Not Supported</h1>
        <p>
          We're sorry, but our website is not optimized for mobile devices. For
          the best experience, please visit us using a desktop or tablet.
        </p>
      </div>
    </div>
  )
}

export default MobileView