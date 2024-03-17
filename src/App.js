import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Home from './components/Home';
import {Login, Register, DeleteAccountPage} from './components/Login&Register';
import {TeaserContainer ,AnimeContainer, MoviesContainer, WebSeriesContainer} from './components/AllFunContainer';
import Play from './components/Play';
import {PageDetailsTeaser ,PageDetailsAnime, PageDetailsMovies, PageDetailsWebSeries} from './components/DetailsPage';
import WatchLaterPage from './components/MySpace';

function App() {


  const [watchLaterItems, setWatchLaterItems] = useState([]);

  useEffect(() => {
    const storedWatchLaterItems = JSON.parse(localStorage.getItem('watchLater'));
    if (storedWatchLaterItems) {
      setWatchLaterItems(storedWatchLaterItems);
    }
  }, []);


   
  const addToWatchLater = (item) => {
    // Check if the item is already in the watchLaterItems array
    const isItemInList = watchLaterItems.some((existingItem) => existingItem.title === item.title);
  
    if (!isItemInList) {
      // Item does not exist in the list, add it
      const updatedItems = [...watchLaterItems, item];
      setWatchLaterItems(updatedItems);
      localStorage.setItem('watchLater', JSON.stringify(updatedItems));
    }
  };
  

  const removeFromWatchLater = (index) => {
    const updatedItems = [...watchLaterItems];
    updatedItems.splice(index, 1);
    setWatchLaterItems(updatedItems);
    localStorage.setItem('watchLater', JSON.stringify(updatedItems));
  };

  

  return (
    <>
      <BrowserRouter basename="/CINEmate-movies">
        <Routes>
          <Route  path="/"  element={<Home/>} />
          {/* <Route path="/" element={<Register/>} /> */}
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/deleteAccount" element={<DeleteAccountPage/>} /> */}

          <Route path="/teaser" element={<TeaserContainer/>} />
          <Route path="/play" element={<Play/>} />
          
          <Route path="/detailsTeaser/:itemId" element={<PageDetailsTeaser />} />
          <Route path="/detailsAnime/:itemId" element={<PageDetailsAnime addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />
          <Route path="/detailsMovies/:itemId" element={<PageDetailsMovies addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />
          <Route path="/detailsWebSeries/:itemId" element={<PageDetailsWebSeries addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />

          <Route path="/anime" element={<AnimeContainer addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />
          <Route path="/movies" element={<MoviesContainer addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>}/>
          {/* <Route path="/webSeries" element={<WebSeriesContainer addToWatchLater={addToWatchLater}/>}/> */}
          <Route path="/webSeries" element={<WebSeriesContainer addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems} />} />


          <Route
              path="/watch-later"
              element={<WatchLaterPage watchLaterItems={watchLaterItems} removeFromWatchLater={removeFromWatchLater} />}
            />

        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;







