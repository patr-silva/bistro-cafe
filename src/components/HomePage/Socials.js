import React from "react";

import { socialData } from "../../data";

const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((item, index) => {
        return (
          <a
            className='border border-white rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm text-white hover:border-bordeux transition-all'
            href={item.href}
            key={index}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
