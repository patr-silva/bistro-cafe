import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../variants";
import { Link } from "react-router-dom";

import Socials from "../HomePage/Socials";
import LogoWhite from "../../assets/img/header/logo-white.png";

const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  
  return (
    <motion.header
      variants={headerVariants}
      initial='hidden'
      animate={isActive ? "show" : ""}
      className='bg-pink-200/20 w-full max-w-[1800px] z-50 py-2'
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial='hidden'
        animate={"show"}
        className='container mx-auto'
      >
        <div className='flex justify-between items-center px-4 lg:px-0 relative text-white'>
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className='order-1 lg:order-none lg:ml-[5rem]'
          >
            <Link to='/'>
              <img
                className={`${
                  isActive ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"
                }`}
                src={LogoWhite}
                alt='logo'
              />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.4, 1.4)}
            className='hidden lg:flex'
          >
            <Socials />
          </motion.div>

    
        </div>
      </motion.div>
    </motion.header>
  );
};


export default Header;
