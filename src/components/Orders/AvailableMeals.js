import React from "react";
import { menuData } from "../../data";

import CartButton from "../Cart/CartButton";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const itemsAvailable = menuData.menuItems;
  const { btnText } = menuData;

  return (
    <div className='container mx-auto bg-gray-50/20 min-h-screen p-8 mt-7 antialiased'>
      <CartButton onClick={props.onShowCart} />
      <div>
        {itemsAvailable.map((elem) => {
          return <MealItem meal={elem} key={elem.id} />;
        })}
        <button
          className='btn mx-auto capitalize mt-6 bg-golden hover:bg-golden'
          onClick={props.onShowCart}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default AvailableMeals;
