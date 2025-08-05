import './App.css';
// import ModeToggler from './ModeToggler';
// import MealsProvider from "./providers/MealsProvider";
// import MealsList from "./components/MealsList";
// import Counter from "./components/Counter";
import Homepage from './Homepage';
import AboutMe from "./AboutMe";
import { Routes, Route, Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import React from 'react';

// const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=27twwvJaL-4"
  return (
    <div className='App'>
      {/* <nav className='nav'>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes> */}
      <h1> React Player example</h1>
      <ReactPlayer
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
    </div>
  );
}

export default App;
