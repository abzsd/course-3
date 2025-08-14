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
// import DessertsList from "./DessertsList"
// import { UserProvider, useUser } from './UserContext';
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";



// const randNum = () => Math.floor(Math.random() * 100) + 1;
// const desserts = [
//   {
//     name: "Chocolate Cake",
//     calories: 400,
//     createdAt: "2022-09-01",
//   },
//   {
//     name: "Ice Cream",
//     calories: 200,
//     createdAt: "2022-01-02",
//   },
//   {
//     name: "Tiramisu",
//     calories: 300,
//     createdAt: "2021-10-03",
//   },
//   {
//     name: "Cheesecake",
//     calories: 600,
//     createdAt: "2022-01-04",
//   }
// ];

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  )
}

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

// const LoggedInUser = () => {
//   const { user } = useUser();
//   return (
//     <p>
//       Hello <span className='Username'>{user.name}</span>
//     </p>
//   );
// };

const Content = () => {
  // const user = useUser();
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      {/* <p>Written By {user.name} [{user.email}]
      </p>
      <p>
        Age: {new Date().getFullYear() - parseInt(user.dob.substr(6, 4))}
      </p> */}
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Blog App</Title>
      <Switch/>
    </header>
  );
};

const Page = () => {
  return (
    <div className='Page'>
      <Title>What is lorem Epsum?</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div className='App'
      style={{
      backgroundColor: theme === "light" ? "white" : "black",
    }}>
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  );
}

export default Root;
