import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
import Skeleton from "../components/PizzaBlock/Skeleton";


const Home = () => {

  // для отображения списка пицц и загрузки пицц
  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selected, setSelected] = React.useState(0);

  // для отображения списка сортировки и выбора сортировки через fetch
  React.useEffect(() => {
    fetch('https://67e3389497fc65f5353912f7.mockapi.io/Items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoaded(false);
      });
      window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className ="content">
        <div className ="container">
          <div className ="content__top">
          <Categories />
            <Sort />
          </div>
          <h2 className ="content__title">Все пиццы</h2>
          <div className ="content__items">
            {isLoaded ?[...new Array(6)].map((_, index) => ( <Skeleton key={index} /> )) 
            : items.map((obj) => ( <PizzaBlock key={obj.id} {...obj} /> ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;