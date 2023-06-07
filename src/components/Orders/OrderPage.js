import { useState } from "react";

import OrderHeader from "./OrderHeader";
import AvailableMeals from "./AvailableMeals";
import Cart from "../Cart/Cart";

import CartProvider from "../../store/CartProvider";

const OrderPage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <section className='min-h-[980px] bg-hero bg-cover bg-right'>
        <OrderHeader />

        <section className='top-35 z-30 pb-10 lg:py-[50px]'>
          <div className='container mx-auto '>
            <div className='items-center'>
              <div className='flex-1'>
                <h2 className='h2 capitalize text-center text-white'>Menu</h2>
              </div>
            </div>
          </div>
          <div className='container mx-auto'>
            <AvailableMeals onShowCart={showCartHandler} />
          </div>
        </section>
      </section>
    </CartProvider>
  );
};

export default OrderPage;
