import React from "react";

function Categories() {

// для отображения списка категорий и выбора категории
  const [activeIndex, setActiveIndex] = React.useState(0);

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

// для выбора категории
const onClickCategory = (index) => {
  setActiveIndex(index);
};

  return (
<div className ="categories">
              <ul>
                {categories.map((name, index) => (
                  <li key={index} onClick = {() => onClickCategory(index)} className = {activeIndex == index ? 'active' : ''}>{name}</li>
                ))}
              </ul> 
            </div>
    );
}

export default Categories;