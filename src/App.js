import './App.css';
// import ModeToggler from './ModeToggler';
// import MealsProvider from "./providers/MealsProvider";
// import MealsList from "./components/MealsList";
// import Counter from "./components/Counter";
// import Homepage from './Homepage';
// import AboutMe from "./AboutMe";
// import { Routes, Route, Link } from 'react-router-dom';
// import ReactPlayer from "react-player";
import React from 'react';
// import DessertsList from "./DessertsList"
// import { UserProvider, useUser } from './UserContext';
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

function GoalForm(props) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1> My Goals </h1>
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" name="goal" placeholder='Goal' value={formData.goal} onChange={changeHandler} />
        </div>
        <div>
          <input type="text" name="by" placeholder='By...' value={formData.by} onChange={changeHandler} />
        </div>
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  );
}

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
  const [allGoals, updateAllGoals] = React.useState([]);
  const [user, setUser] = React.useState([]);

  function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className='App'
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white", // for changing the text overall
    }}>
      <Header />
      <Page />

      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />

      <h1>Data Returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
      <img src={user.results[0].picture.large} width="300" height="300" alt=""/>
    </div>
  ) : (
      <h1>Data Pending...</h1>
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
