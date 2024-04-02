import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import AboutImg from "../src/assets/img/about/plate.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.png";
import MenuImg2 from "../src/assets/img/menu/2.png";
import MenuImg3 from "../src/assets/img/menu/3.png";
import MenuImg4 from "../src/assets/img/menu/4.png";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";

export const navData = [
  { href: "#home", name: "home" },
  { href: "#about", name: "about us" },
  { href: "#menu", name: "menu" },
  { href: "#reservation", name: "reservations" },
  { href: "#team", name: "team" },
  { href: "#testimonials", name: "reviews" },
  { href: "#contact", name: "contacts" },
];

export const heroData = {
  pretitle: "Nothing brings people together like",
  title: "Bistro Café",
  subtitle:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  btnText: "Menu",
};

export const socialData = [
  { href: "https://www.facebook.com/", icon: <FaFacebookF /> },
  { href: "https://www.instagram.com/", icon: <FaInstagram /> },
  { href: "https://tiktok.com/", icon: <FaTiktok /> },
];

export const aboutData = {
  title: "More than a restaurant...",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus.",
  btnText: "Reservations",
  image: AboutImg,
};

export const menuData = {
  title: "Menu",
  subtitle: "Check out our menu and make your order",
  modelImg: ModelWhiteImg,
  btnText: "Order",
  menuItems: [
    {
      image: MenuImg1,
      name: "Chocolate Cake",
      price: 7.99,
      description: "Lorem ipsum dolor sit amet, consectetur.",
      id: 1,
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: 9.49,
      description: "Lorem ipsum dolor sit amet.",
      id: 2,
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: 8.55,
      description: "Lorem ipsum dolor sit amet, consectetur.",
      id: 3,
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: 9.99,
      description: "Lorem ipsum dolor sit amet, consectetur.",
      id: 4,
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "meet our chef",
  sub1: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.",
  sub2: "Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.",
  name: "john doe",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "Reviews",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus.",
      image: Avatar1,
      name: "Rick Thompson",
    },
    {
      message:
        "Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar2,
      name: "John Doe",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus.",
      image: Avatar3,
      name: "Henry A.",
    },
  ],
};

export const reservationData = {
  title: "Reservations",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily.",
  modelImg: ModelBlackImg,
  btnText: "make your reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "3784 patterson road, #8 new york, CA 69000",
    phone: "(201)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 10:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "https://www.facebook.com/", icon: <FaFacebookF /> },
      { href: "https://www.instagram.com/", icon: <FaInstagram /> },
      { href: "https://www.tiktok.com/", icon: <FaTiktok /> },
    ],
  },
};
