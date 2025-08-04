import './App.css';
// import ModeToggler from './ModeToggler';
// import MealsProvider from "./providers/MealsProvider";
// import MealsList from "./components/MealsList";
// import Counter from "./components/Counter";
import Homepage from './Homepage';
import AboutMe from "./AboutMe";
import { Routes, Route, Link} from 'react-router-dom';

// const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
