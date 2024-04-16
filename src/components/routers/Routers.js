import React, {useState, useEffect} from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { MovieTeaser } from '../pages/trendingContainer/TrendingTrailer';
import {WebSeriesTeaser} from '../pages/trendingContainer/TrendingTrailerWebSeries'
import {AnimeContainer, MoviesContainer, WebSeriesContainer, YouTubeVideoContainer, YouTubeMoviesContainer} from '../pages/AllFunContainer.js';
import Category from '../pages/categoryContainer/CategoryContainer';
import SeriesTeaserContainer from '../pages/categoryContainer/CategorySeriesContainer';
import  {UpcomingMovieTeaser, NowPlayingMovieTeaser, PopularMovieTeaser, TopRatedMovieTeaser}  from '../pages/categoryContainer/CategoryMovies';
import { AiringTodaySeriesTeaser, OnTheAirSeriesTeaser, PopularSeriesTeaser, TopRatedSeriesTeaser } from '../pages/categoryContainer/CategorySeries';
import {PageDetailsTeaserWebSearch ,PageDetailsTeaserSearch, PageDetailsTeaser ,PageDetailsAnime, PageDetailsMovies, PageDetailsWebSeries, PageDetailsYouTube} from '../pages/DetailsPage';
import {PageDetailsAnimePlay, PageDetailsMoviesPlay, PageDetailsWebSeriesPlay, PlayYouTube, PlayYouTubeMovies } from '../pages/Play';
import WatchLaterPage from '../pages/MySpace';




export const CardPagesContainerRouters = () => {

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
  
  return (
    <Routes>
       {/* Teaser Trending Page */}
          <Route path="/moviesTrailerPage" element={<MovieTeaser/>} />
          <Route path="/webSeriesTrailerPage" element={<WebSeriesTeaser/>} />
        {/* Page For AllFunContainer Container */}
          <Route path="/anime" element={<AnimeContainer addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />
          <Route path="/movies" element={<MoviesContainer addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>}/>
          <Route path="/webSeries" element={<WebSeriesContainer addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems} />} />
          <Route path="/youTubeVideo" element={<YouTubeVideoContainer/>} />
          <Route path="/youTubeMovies" element={<YouTubeMoviesContainer/>} />
    </Routes>
  );
};

export const DetailsPagesRouters = () => {

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

  return(
    <Routes>
       {/* Content Details page with Poster(Single Data)(Details Page)*/}
       <Route path="/searchWebTeaser/:itemId" element={<PageDetailsTeaserWebSearch/>} />
          <Route path="/searchTeaser/:itemId" element={<PageDetailsTeaserSearch/>} />
          {/* <Route path="/detailsTeaser/:itemId" element={<PageDetailsTeaser />} /> */}
          <Route path="/detailsAnime/:itemId" element={<PageDetailsAnime addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />
          <Route path="/detailsMovies/:itemId" element={<PageDetailsMovies addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />
          <Route path="/detailsWebSeries/:itemId" element={<PageDetailsWebSeries addToWatchLater={addToWatchLater} watchLaterItems={watchLaterItems}/>} />
          {/* <Route path="/video/:videoID" element={<PageDetailsYouTube/>} /> */}
    </Routes>
  )
}

export const CategoryPagesRouters = () =>{
  return(
    <Routes>
      {/* Category */}
      <Route path="/category" element={<Category/>} />
      <Route path="/seriesTeaserContainer" element={<SeriesTeaserContainer/>} />

     {/* CategoryContainer for movie */}
     <Route path="/upcomingMovieTeaser" element={<UpcomingMovieTeaser/>} />
     <Route path="/nowPlayingMovieTeaser" element={<NowPlayingMovieTeaser/>} />
     <Route path="/popularMovieTeaser" element={<PopularMovieTeaser/>} />
     <Route path="/topRatedMovieTeaser" element={<TopRatedMovieTeaser/>} />

      {/* CategoryContainer for series */}
      <Route path="/airingTodaySeriesTeaser" element={<AiringTodaySeriesTeaser/>} />
     <Route path="/onTheAirSeriesTeaser" element={<OnTheAirSeriesTeaser/>} />
     <Route path="/popularSeriesTeaser" element={<PopularSeriesTeaser/>} />
     <Route path="/topRatedSeriesTeaser" element={<TopRatedSeriesTeaser/>} />
    </Routes> 
  )
}

export const WatchLaterPagesRouters = () =>{

  const [watchLaterItems, setWatchLaterItems] = useState([]);

  useEffect(() => {
    const storedWatchLaterItems = JSON.parse(localStorage.getItem('watchLater'));
    if (storedWatchLaterItems) {
      setWatchLaterItems(storedWatchLaterItems);
    }
  }, []);

  const removeFromWatchLater = (index) => {
    const updatedItems = [...watchLaterItems];
    updatedItems.splice(index, 1);
    setWatchLaterItems(updatedItems);
    localStorage.setItem('watchLater', JSON.stringify(updatedItems));
  };


  return(
    <Routes>
      <Route path="/watch-later" element={<WatchLaterPage watchLaterItems={watchLaterItems} removeFromWatchLater={removeFromWatchLater} />}/>
    </Routes>
  )
}

export const PlayPagesRouters = () =>{
  return(
    <Routes>
      {/* Media PLAYER  page(Play Page) */}
          {/* <Route path="/teaser" element={<TeaserContainer/>} /> */}
          <Route path="/playAnime/:itemId" element={<PageDetailsAnimePlay/>} />
          <Route path="/playMovies/:itemId" element={<PageDetailsMoviesPlay/>} />
          <Route path="/playWebSeries/:itemId" element={<PageDetailsWebSeriesPlay/>} />
          <Route path="/video/:videoID" element={<PlayYouTube/>} />
          <Route path="/videoMovies/:videoID" element={<PlayYouTubeMovies/>} />
    </Routes> 
  )
}