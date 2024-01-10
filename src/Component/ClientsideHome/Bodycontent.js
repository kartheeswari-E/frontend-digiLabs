import React from 'react'
import Hero from '../Herosection/Hero'
import Swiper from '../Swiper/Swiper'
import Feature from '../Features/Feature'
import Division from '../Featuredivision/Division'
import Mobile from '../Mobilecomponent/Mobile'
import Call from '../Callaction/Call'
import Testimonial from '../Testimonal/Testimonial'
import Pricing from '../Pricing/Pricing'
function Bodycontent() {
  return<>
    <Hero />
      <Swiper />
      <Feature />
      <Division />
      <Feature />
      <Mobile />
      <Call />
      <Testimonial />
      <Pricing /></>
}

export default Bodycontent