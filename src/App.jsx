import menu from "./data.js";
import {useState} from "react";
import MenuCard from "./menu-card.jsx";
import Title from "./Title.jsx";
import Categories from "./categories.jsx";
const allCategories = ['all', ...new Set(menu.map((item) =>
    item.category))]

const App = () => {
  const [meals, setMeals] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if(category === 'all') {
      setMeals(menu);
      return;
    }
    const newItems = menu.filter((item) =>
    item.category === category)
    setMeals(newItems);
  }

  return <div className="main">
    <Title />
    <Categories categories={categories} filterItems={filterItems} />
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
