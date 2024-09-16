import menu from "./data.js";
import {useState} from "react";
import MenuCard from "./menu-card.jsx";
const App = () => {
  const [meals, setMeals] = useState(menu);
  const filterAll = () => {
    setMeals(menu)
  }
  const filterBreakfast = () => {
   const filteredMeals = menu.filter((meal) => {
      return meal.category === 'breakfast'
    })
    setMeals(filteredMeals);
  }
  const filterLunch = () => {
    const filteredMeals = menu.filter((meal) => {
      return meal.category === 'lunch'
    })
    setMeals(filteredMeals);
  }
  const filterShakes = () => {
    const filteredMeals = menu.filter((meal) => {
      return meal.category === 'shakes'
    })
    setMeals(filteredMeals);
  }
  return <div className="main">
    <h1>Our Menu</h1>
    <div className="line"></div>
    <div className="buttons">
      <button onClick={filterAll}>All</button>
      <button onClick={filterBreakfast}>Breakfast</button>
      <button onClick={filterLunch}>Lunch</button>
      <button onClick={filterShakes}>Shakes</button>
    </div>
    <div className="menu">
      {meals.map((meal) => {
        return <div key={meal.id}>
           <MenuCard {...meal} />
        </div>
      })}
    </div>
  </div>;
};
export default App;
