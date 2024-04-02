import Copyright from "./Copyright";
import Socials from "../HomePage/Socials";

import { footerData } from "../../data";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";

const Footer = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer
      className='relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat lg:pt-32'
      id='contact'
    >
      <div className='container mx-auto h-full'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={"show"}
          className='h-full flex flex-col gap-y-4'
        >
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}></motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className='flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12'
          >
            <div className='flex-1 lg:max-w-[170px]'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px] underline'>
                {contact.title}
              </div>
              <div className='capitalize text-white font-primary text-[16px] lg:text-[18px] leading-10'>
                {contact.address}
              </div>
              <div className='capitalize text-white font-primary text-[16px] lg:text-[18px]'>
                {contact.phone}
              </div>
            </div>
            <div className='flex-1'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px] underline'>
                {hours.title}
              </div>
              <div className='flex gap-x-[46px]'>
                {hours.program.map((item, index) => {
                  return (
                    <div
                      className='capitalize font-primary text-[16px] lg:text-[18px] text-white'
                      key={index}
                    >
                      <div>
                        <div>{item.days}</div>
                        <div className='text-[18px] leading-10'>
                          {item.hours}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='flex-1 lg:max-w-[280px] mb-12'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px] underline'>
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
