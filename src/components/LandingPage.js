import React, { useState } from 'react';
import style from '../css/LandingPage.module.css';
import hoverSound1 from '../audio/audio2.mp3';
import unBlurSound from '../audio/welcome.mp3';
import {Link} from 'react-router-dom';
import PopupImage from '../images/popupImage.png';
import Lock from '../images/lock.png';
import Unlock from '../images/unlock.png';


const LandingPage = () => {
  // State to store audio elements
  const [audio1] = useState(new Audio(hoverSound1));
  const [audio2] = useState(new Audio(hoverSound1));
  const [audio3] = useState(new Audio(hoverSound1));
  const [audio4] = useState(new Audio(hoverSound1));
  const [audio5] = useState(new Audio(unBlurSound));

  // Function to handle hover events
  const handleHover = (audio) => {
    audio.currentTime = 0; // Rewind audio to start
    audio.play(); // Play the audio
  };

  const handleRemove = () => {
    document.querySelector(`.${style.greetingContainer}`).style.display = 'none';
    console.log("hi")
  };

  const handleClick = () => {
    setTimeout(() => {
      // document.querySelector(`.${style.click}`).style.display = 'none';
      document.querySelector(`.${style.lock}`).style.display = 'none';
      document.querySelector(`.${style.unlock}`).style.display = 'block';
    }, 200);
    setTimeout(() => {
      document.querySelector(`.${style.click}`).style.display = 'none';
      // document.querySelector(`.${style.lock}`).style.display = 'none';
      // document.querySelector(`.${style.unlock}`).style.display = 'block';
    }, 1500);

    setTimeout(() => {
      document.querySelector(`.${style.hover1}`).style.width = '0';
      handleHover(audio1);
    }, 1500);

    setTimeout(() => {
      document.querySelector(`.${style.hover3}`).style.width = '0';
      handleHover(audio2);

    }, 2500);
    setTimeout(() => {
      document.querySelector(`.${style.hover2}`).style.width = '0';
      handleHover(audio3);

    }, 3500);
    setTimeout(() => {
      document.querySelector(`.${style.hover4}`).style.width = '0';
      handleHover(audio4);

    }, 4500);
   
    setTimeout(() => {
      document.querySelector(`.${style.parentContainer}`).style.filter = 'unset';
      document.querySelector(`.${style.parentContainer}`).style.transition = 'all 0.5s ease-in-out';
      document.querySelector(`.${style.greeting}`).style.width = '500px';

      handleHover(audio5);
    }, 5500);
    setTimeout(()=>{
      document.querySelector(`.${style.displayNone}`).style.display = 'block';
    }, 5500)
    setTimeout(()=>{
      document.querySelector(`.${style.displayNone}`).style.opacity = '1';
    }, 6000)
    setTimeout(() => {
      document.querySelector(`.${style.hover}`).style.display = 'none';
    }, 6000);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.parentContainer}>
        {/* Everything under this container you have to write */}
        <div className={style.contentContainer}>
           <div className={style.container}>
              <h1>Welcome to CINEmate</h1>
              <p className={style.paragraph}>
                Your premier destination for captivating movie and series teasers! Step into a realm where every glimpse hints at thrilling adventures, heartwarming stories, and epic sagas waiting to be unraveled.
              </p>
              <p className={style.paragraph}>
                At CINEmate, we understand the power of anticipation. That's why we've curated a collection of the most tantalizing teasers from upcoming movies and series, each one offering a tantalizing taste of the cinematic wonders to come. From pulse-pounding action sequences to poignant moments of emotion, our teasers are meticulously selected to ignite your curiosity and leave you eagerly counting down the days until release.
              </p>
                <Link to="/home" className={style.link}>
                  <div className={style.linkContainer}>
                        Home
                  </div>
                </Link>
              <p className={style.paragraph}>
                Join us on a journey through the world of cinematic teasers, where every click unveils a new universe of possibilities. Whether you're a fan of edge-of-your-seat thrillers, heartwarming romances, or fantastical adventures, our teasers promise to transport you to realms beyond imagination.
              </p>
             
              <p className={style.paragraph}>
                But the excitement doesn't end there. CINEmate is your ultimate resource for staying ahead of the curve in the world of entertainment. With our regularly updated collection of teasers, you'll always be in the know about the latest and greatest in movies and series. Whether you're seeking sneak peeks at highly anticipated blockbusters or discovering hidden gems waiting to be uncovered, our teasers are your ticket to the forefront of cinematic excellence.
              </p>
              <p className={style.paragraph}>
                Join our community of passionate movie buffs and series aficionados as we come together to celebrate the art of the teaser. Share your thoughts, theories, and speculations with fellow fans, and immerse yourself in the excitement of anticipation as we eagerly await the release of these cinematic marvels.
              </p>
              <p className={style.paragraph}>
                So, what are you waiting for? Dive into the world of CINEmate and let your imagination run wild. With our curated collection of teasers, every click is a journey into the heart of cinematic magic. Welcome to CINEmate, where the adventure begins with just a teaser.
              </p>
           </div>

        </div>


        {/* dont go below */}
        <div className={style.greetingContainer}>
          <div className={style.greeting}>
            <div className={style.displayNone}>
              <span className={style.greetingDisplayNone} onClick={handleRemove}>X</span>
              <img src={PopupImage}/>
            </div>
          </div>
        </div>
      </div>
      <div className={style.hover}>
        <div className={style.hover1Container}>
          {/* Add hover event handlers */}
          <div className={style.hover1} ></div>
          <div className={style.hover2} ></div>
        </div>
        <div className={style.hover3Container}>
          <div className={style.hover3} id="hover3" ></div>
          <div className={style.hover4} id="hover4" ></div>
        </div>
      </div>
      <div className={style.click}>
        <div className={style.click1} onClick={handleClick}>
           <img className={style.lock} src={Lock} />
           <img className={style.unlock} src={Unlock} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
