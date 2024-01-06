import React from "react";
import "./Swiper.css";
import angellist from "../Assests/Images/Angellist.png";
import Behance from "../Assests/Images/Behance.png";
import Kin from "../Assests/Images/Kin.png";
import Lottie from "../Assests/Images/Lottie.png";
import Micro from "../Assests/Images/Micro.png";
import Nuxt from "../Assests/Images/Nuxt.png";
import Wise from "../Assests/Images/Wise.png";
import dribble from "../Assests/Images/dribble.png";
function Swiper() {
  const data = [
   {
      image: Nuxt,
    }, {
      image: Micro,
    }, {
      image: Lottie,
    },
    {
      image: Wise,
    },
    {
      image: dribble,
    } ,{
      image: Kin,
    }, {
      image: angellist,
    },
    {
      image: Behance,
    },
  ];
  return (
    <>
      <section className="swiper-container">
        {data.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt="swiper-image"
            className="swiper-image"
          />
        ))}
      </section>
    </>
  );
}

export default Swiper;
