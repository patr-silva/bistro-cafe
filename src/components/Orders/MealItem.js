import React, { useContext } from "react";
import OrderItemForm from "./OrderItemForm";
import CartContext from "../../store/cartContext";

const MealItem = (props) => {
  const { id, name, image, description, price } = props.meal;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <div
      className='bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30'
      key={id}
    >
      <div className='flex p-3 border-l-8 border-yellow-600'>
        <div className='space-y-1 border-r-2 pr-3'>
          <img src={image} alt={name} className='image' />
        </div>
        <div className='flex-1'>
          <div className='ml-3 space-y-1  pr-3'>
            <div className='text-base leading-6 font-normal'>
              <h4 className='h4 text-bordeux'>{name}</h4>
            </div>
            <div className='text-sm leading-10 font-normal'>{description}</div>
            <div className='leading-10 font-normal text-lg'>{`$ ${price}`}</div>
          </div>
        </div>

        <div>
          <div className='my-5  p-1 w-40'>
            <OrderItemForm onAddToCart={addToCartHandler} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
