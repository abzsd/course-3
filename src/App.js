import './App.css';
// import ModeToggler from './ModeToggler';
// import MealsProvider from "./providers/MealsProvider";
// import MealsList from "./components/MealsList";
// import Counter from "./components/Counter";
// import Homepage from './Homepage';
// import AboutMe from "./AboutMe";
// import { Routes, Route, Link } from 'react-router-dom';
// import ReactPlayer from "react-player";
// import React from 'react';
import DessertsList from "./DessertsList"


// const randNum = () => Math.floor(Math.random() * 100) + 1;
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  }
];

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=27twwvJaL-4"
  return (
    <div className='App'>
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;
