import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import { CardPagesContainerRouters, CategoryPagesRouters, DetailsPagesRouters, PlayPagesRouters, WatchLaterPagesRouters } from './components/routers/Routers';



function App() {
  return (
   <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        <CardPagesContainerRouters />
        <CategoryPagesRouters />
        <DetailsPagesRouters />
        <PlayPagesRouters/>
        <WatchLaterPagesRouters/>
      </div>
   </BrowserRouter>
  );
}

export default App;
