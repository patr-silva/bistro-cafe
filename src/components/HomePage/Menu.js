import { menuData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";
import { Link } from "react-router-dom";

import MenuItem from "./MenuItem";

const Menu = () => {
  const { title, menuItems, btnText } = menuData;
  return (
    <section className='min-h-[780px]' id='menu'>
      <div className='h-[1080px] bg-menu absolute w-full max-w-[1800px] -z-0'></div>
      <div className='relative z-10 top-36 lg:py-[30px]'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className='container mx-auto flex flex-col items-center text-center '
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className='h2 capitalize text-dark max-w-[400px] text-center'
          >
            {title}
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className='relative top-20 lg:top-40 mt-24'
      >
        <div className='container mx-auto'>
          <div className='lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 min-h-[590px]'>
              {menuItems.map((item, index) => {
                return <MenuItem item={item} key={index} />;
              })}
            </div>
          </div>
          <Link to='/order'>
            <button className='btn mx-auto capitalize'>{btnText}</button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
