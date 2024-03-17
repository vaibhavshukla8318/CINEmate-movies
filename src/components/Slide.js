import React from 'react';
import BackwardArrowImage from '../images/backword.png'; 
import ForwardArrowImage from '../images/forword.png';
import style from '../css/Slide.module.css';
import { SlideData } from './Data';
import {Link} from "react-router-dom";

export default class Slide extends React.Component {
  constructor() {
    super();
    this.state = {
      slidePosition: 0,
      slideDetails: SlideData[0],
      isPlaying: false,
    };
  }

  handleSlide = (direction) => {
    const totalImages = SlideData.length;
    const { slidePosition } = this.state;

    if (direction === 'left' && slidePosition > 0) {
      this.setState({ slidePosition: slidePosition - 1 });
    } else if (direction === 'right' && slidePosition < totalImages - 3) {
      this.setState({ slidePosition: slidePosition + 1 });
    }
  };

  clickImage = (index) => {
    this.setState({ slideDetails: SlideData[index] });
  };

  togglePlay = () => {
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
  };

  closeVideo = () => {
    this.setState({ isPlaying: false });
  };

  render() {
    const { slideDetails, slidePosition, isPlaying } = this.state;

    return (
      <>
        <div className={style.slide}>
          <div className={style.slideDetails} style={{ backgroundImage: `url(${slideDetails.poster})`}}>
            <h2>{slideDetails.title}</h2>
            <div className={style.seasonContainer}>
              <p className={style.year}>{slideDetails.year} &nbsp; &#x2022;</p>
              <p className={style.season}>{slideDetails.season} &nbsp; &#x2022;</p>
              <p className={style.language}>{slideDetails.language}</p>
            </div>
            <p className={style.plot}>{slideDetails.plot}</p>
            <ul className={style.genre}>
              <p>Genre:</p>
              {slideDetails.genre.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <div className={style.slideWatch}>
              <div className={style.watchNow}>
                <div>
                  <p className={style.watch} onClick={this.togglePlay}>
                    {isPlaying ? 'Pause' : 'Play'}
                  </p>
                  {isPlaying && (
                    <>
                    <iframe src={slideDetails.video} frameborder="0" allowfullscreen></iframe>
                    <p className={style.crossIcon} onClick={this.closeVideo}>X</p>
                    </>
                
                  )}
                </div>
                <p className={style.add}>+</p>
              </div>
              <div className={style.miniSlideContainer}>
                {/* <img
                  className={style.backwordArrow}
                  src={BackwardArrowImage}
                  onClick={() => this.handleSlide('left')}
                  alt="backwardArrow"
                /> */}
                <div className={style.miniSlide}>
                  {SlideData.map((image, index) => (
                    <>
                      <img
                        key={index}
                        src={image.poster}
                        className={style.miniSlideImage}
                        alt="img"
                        // style={{ transform: `translateX(${slidePosition * -9}vw)` }}
                        onClick={() => this.clickImage(index)}
                      />
                    </>
                  ))}
                </div>
                {/* <img
                  className={style.forwordArrow}
                  src={ForwardArrowImage}
                  onClick={() => this.handleSlide('right')}
                  alt="forwardArrow"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
