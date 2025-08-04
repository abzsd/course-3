import './App.css';
// import ModeToggler from './ModeToggler';
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";

const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
