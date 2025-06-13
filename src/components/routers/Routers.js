import React, {useState, useEffect} from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { MovieTeaser } from '../pages/trendingContainer/TrendingTrailer';
import {WebSeriesTeaser} from '../pages/trendingContainer/TrendingTrailerWebSeries'
import {AnimeContainer, MoviesContainer, WebSeriesContainer, YouTubeVideoContainer, YouTubeMoviesContainer, YouTubeClipContainer} from '../pages/AllFunContainer.js';
import Category from '../pages/categoryContainer/CategoryContainer';
import SeriesTeaserContainer from '../pages/categoryContainer/CategorySeriesContainer';
import  {UpcomingMovieTeaser, NowPlayingMovieTeaser, PopularMovieTeaser, TopRatedMovieTeaser}  from '../pages/categoryContainer/CategoryMovies';
import { AiringTodaySeriesTeaser, OnTheAirSeriesTeaser, PopularSeriesTeaser, TopRatedSeriesTeaser } from '../pages/categoryContainer/CategorySeries';
import {PageDetailsTeaserWebSearch ,PageDetailsTeaserSearch} from '../pages/DetailsPage';
import {PageDetailsAnimePlay, PageDetailsMoviesPlay, PageDetailsWebSeriesPlay, PlayYouTube, PlayYouTubeMovies, PlayYouTubeClip } from '../pages/Play';

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
          <Route path="/youTubeClip" element={<YouTubeClipContainer/>} />
    </Routes>
  );
};

export const DetailsPagesRouters = () => {

  return(
    <Routes>
       {/* Content Details page with Poster(Single Data)(Details Page)*/}

       <Route path="/searchWebTeaser/:itemId" element={<PageDetailsTeaserWebSearch/>} />
       <Route path="/searchTeaser/:itemId" element={<PageDetailsTeaserSearch/>} />
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
          <Route path="/videoClip/:videoID" element={<PlayYouTubeClip/>} />
    </Routes> 
  )
}