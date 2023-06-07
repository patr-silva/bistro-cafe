import TestimonialCarousel from "../UI/TestimonialCarousel";

import { testimonialData } from "../../data";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonial = () => {
  const { title, modelImg, slider } = testimonialData;
  return (
    <section
      className='bg-testimonial bg-cover bg-no-repeat relative top-[200px] lg:top-[230px] z-10 h-[800px] pt-[60px] md:pt-[120px]'
      id='testimonials'
    >
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial='hidden'
          whileInView={"show"}
          className='text-center capitalize flex flex-col items-center'
        >
          <h2 className='h2 text-white'>{title}</h2>
          <div className='mb-12'>
            <img src={modelImg} alt='' />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial='hidden'
          whileInView={"show"}
          className='flex justify-center items-center'
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
