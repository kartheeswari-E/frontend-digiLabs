import React, { useEffect, useState } from 'react'
import "./Testimonial.css"
import image from "../Assests/Images/Image.svg"
import Nuxt from "../Assests/Images/Nuxt.png";
import Wise from "../Assests/Images/Wise.png";
import dribble from "../Assests/Images/dribble.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function Testimonial() {
  const[pagination,setpagination]=useState(0);
  const people=[{
    company:Wise,
    content:"I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.",
    img:image,
    name:"Nick Babich",
    role:"Lead Designer",
    star:"⭐⭐⭐⭐"
  },
  {
    company:Nuxt,
    content:"I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.",
    img:image,
    name:"demo name",
    role:"Tester",
    star:"⭐⭐⭐"
  }
  ,
  {
    company:dribble,
    content:"I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.",
    img:image,
    name:"demo name2",
    role:"Developer",
    star:"⭐⭐⭐⭐⭐"
  }]
 
useEffect(()=>{
  const lastIndex=people.length - 1;
  if(pagination < 0){
    setpagination(lastIndex);
  }
  if(pagination>lastIndex){
    setpagination(0);
  }
},[pagination,people])


useEffect(()=>{
  const slider=setInterval(() => {
    setpagination(pagination + 1)
  }, 3000);
  return()=>{
    clearInterval(slider)
  }
},[pagination])



  return <>
<section className='testimonial-slider'>

 {people.map((data,index)=>{
  let position="nextslide";
  if(pagination === index){
    position="activeslide";
  }
  if(index === pagination - 1 || (pagination === 0 && index === people.length - 1)){
    position="lastslide";
  }
  return(
 <article  key={index} className={position}>
  <img className='company-testi' src={data.company}></img>
  <div className='testi-content'>{data.content}</div>
  <div className='avathar'>
  <img className='img-testi' src={data.img}></img>
  <div className='avathar-name'>{data.name}</div>
  <div className='avathar-role'>{data.role}</div>
  <div className='avathar-rating'>{data.star}</div>
</div>
 </article>


)})}

<button className="prev" onClick={() => setpagination(pagination - 1)}>
          < ChevronLeftIcon className='i'/>
        </button>
        <button className="next" onClick={() => setpagination(pagination + 1)}>
<ChevronRightIcon/>
        </button>
</section>
  </>
}

export default Testimonial