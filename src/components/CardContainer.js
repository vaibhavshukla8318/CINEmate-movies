import React from 'react';
import style from '../css/CardContainer.module.css';
import {Teaser, Anime, Movies, WebSeries } from './Data';
import BackwardArrowImage from '../images/backword.png'; 
import ForwardArrowImage from '../images/forword.png';
import Play from '../images/play.png';
import { Link } from 'react-router-dom';

class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      slidePositions: {Teaser:0, Anime: 0, Movies: 0, WebSeries:0 },
      hoveredImageIndex: null
    };
  }

handleSlide = (container, direction) => {
  const { slidePositions } = this.state;
  const totalImages = this.getTotalImages(container);

  if (direction === 'left' && slidePositions[container] > 0) {
    this.setState(prevState => ({
      slidePositions: {
        ...prevState.slidePositions,
        [container]: prevState.slidePositions[container] - 1
      }
    }));
  } else if (direction === 'right' && slidePositions[container] < totalImages - 1) {
    this.setState(prevState => ({
      slidePositions: {
        ...prevState.slidePositions,
        [container]: prevState.slidePositions[container] + 1
      }
    }));
  }
};

getTotalImages = container => {
  switch (container) {
    case 'Teaser':
      return Teaser.length;
    case 'Anime':
      return Anime.length;
    case 'Movies':
      return Movies.length;
    case 'WebSeries':
      return WebSeries.length;
    default:
      return 0;
  }
};


handleImageHover = (index) => {
  this.setState({ hoveredImageIndex: index });
};


  render() {
    const { slidePositions, hoveredImageIndex } = this.state;

    return (
      <>
        <div className={style.cardContainer}>
          <div className={style.topContainer}>
            <h3>Teaser</h3>
            <Link to="/teaser" className={style.link}>View All</Link>
          </div>
          <div className={style.bottomContainer}>
            <img
              className={style.backwordArrow}
              src={BackwardArrowImage}
              onClick={() => this.handleSlide('Teaser', 'left')}
              alt="backwardArrow"
            />
         
              {Teaser.slice().reverse().map((image) => (
                <div
                 key={image.id}
                  style={{ transform: `translateX(${slidePositions.Teaser * -5.7}vw)`, zIndex: hoveredImageIndex === image.id ? 1 : 0 }}
                  onMouseEnter={() => this.handleImageHover(image.id)}
                  onMouseLeave={() => this.handleImageHover(null)}
                >
                  <img
                    src={image.poster}
                    className={style.poster}
                    alt="img"
                  />
                    <img className={style.playButton} src={Play}/>
                  {hoveredImageIndex === image.id && (
                    <div className={style.imageHoverContainer}>
                         <iframe src={image.video} frameBorder="0" allow='autoplay' allowFullScreen title="video"></iframe>
                    </div>
                  )}
                </div>
              ))}       
           
            <img
              className={style.forwordArrow}
              src={ForwardArrowImage}
              onClick={() => this.handleSlide('Teaser', 'right')}
              alt="forwardArrow"
            />
          </div>
        </div>
        <div className={style.cardContainer}>
          <div className={style.topContainer}>
            <h3>Anime</h3>
            <Link to="/anime" className={style.link}>View All</Link>
          </div>
          <div className={style.bottomContainer}>
            <img
              className={style.backwordArrow}
              src={BackwardArrowImage}
              onClick={() => this.handleSlide('Anime', 'left')}
              alt="backwardArrow"
            />
         
              {Anime.slice().reverse().map((image) => (
                <div
                 key={image.id}
                  style={{ transform: `translateX(${slidePositions.Anime * -5.7}vw)`, zIndex: hoveredImageIndex === image.id ? 1 : 0 }}
                  onMouseEnter={() => this.handleImageHover(image.id)}
                  onMouseLeave={() => this.handleImageHover(null)}
                >
                  <img
                    src={image.poster}
                    className={style.poster}
                    alt="img"
                  />
                    <img className={style.playButton} src={Play}/>
                  {hoveredImageIndex === image.id && (
                    <div className={style.imageHoverContainer}>
                         <iframe src={image.video} frameBorder="0" allow='autoplay' allowFullScreen title="video"></iframe>
                    </div>
                  )}
                </div>
              ))}       
           
            <img
              className={style.forwordArrow}
              src={ForwardArrowImage}
              onClick={() => this.handleSlide('Anime', 'right')}
              alt="forwardArrow"
            />
          </div>
        </div>
        <div className={style.cardContainer}>
          <div className={style.topContainer}>
            <h3>Movies</h3>
            <Link to="/movies" className={style.link}>View All</Link>
          </div>
          <div className={style.bottomContainer}>
            <img
              className={style.backwordArrow}
              src={BackwardArrowImage}
              onClick={() => this.handleSlide('Movies', 'left')}
              alt="backwardArrow"
            />
              {Movies.slice().reverse().map((image) => (
                    <div
                    key={image.id}
                    style={{ transform: `translateX(${slidePositions.Movies * -8}vw)`, zIndex: hoveredImageIndex === image.id ? 1 : 0 }}
                    onMouseEnter={() => this.handleImageHover(image.id)}
                    onMouseLeave={() => this.handleImageHover(null)}
                  >
                    <img
                      src={image.poster}
                      className={style.poster}
                      alt="img"
                    />
                      <img className={style.playButton} src={Play}/>
                    {hoveredImageIndex === image.id && (
                      <div className={style.imageHoverContainer}>
                            <iframe src={image.video} frameBorder="0" allow='autoplay' allowFullScreen title="video"></iframe>
                      </div>
                    )}
              </div>
              ))}

            <img
              className={style.forwordArrow}
              src={ForwardArrowImage}
              onClick={() => this.handleSlide('Movies', 'right')}
              alt="forwardArrow"
            />
          </div>
        </div>
        <div className={style.cardContainer}>
          <div className={style.topContainer}>
            <h3>Web Series</h3>
            <Link to="/webSeries" className={style.link}>View All</Link>
          </div>
          <div className={style.bottomContainer}>
            <img
              className={style.backwordArrow}
              src={BackwardArrowImage}
              onClick={() => this.handleSlide('WebSeries', 'left')}
              alt="backwardArrow"
            />

              {WebSeries.slice().reverse().map((image) => (
                  <div
                  key={image.id}
                  style={{ transform: `translateX(${slidePositions.WebSeries * -8.1}vw)`, zIndex: hoveredImageIndex === image.id ? 1 : 0 }}
                  onMouseEnter={() => this.handleImageHover(image.id)}
                  onMouseLeave={() => this.handleImageHover(null)}
                >
                  <img
                    src={image.poster}
                    className={style.poster}
                    alt="img"
                  />
                    <img className={style.playButton} src={Play}/>
                  {hoveredImageIndex === image.id && (
                    <div className={style.imageHoverContainer}>
                           <iframe src={image.video} frameBorder="0" allow='autoplay' allowFullScreen title="video"></iframe>
                    </div>
                  )}
                </div>
              ))}

            <img
              className={style.forwordArrow}
              src={ForwardArrowImage}
              onClick={() => this.handleSlide('WebSeries', 'right')}
              alt="forwardArrow"
            />
          </div>
        </div>
      </>
    );
  }
}

export default CardContainer;
