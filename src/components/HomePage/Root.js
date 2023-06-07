import React from "react";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Booking from "./Booking";
import Footer from "../UI/Footer";

import CartProvider from "../../store/CartProvider";

const Root = () => {
  return (
    <CartProvider>
      <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
        <Hero />
        <About />
        <Menu />
        <Booking />
        <Team />
        <Testimonial />
        <Footer />
        <div className='h-[380px] md:h-[370px]'></div>
      </div>
    </CartProvider>
  );
};

export default Root;
