import React from 'react'
import Carousel from '../components/section1/Example'
import PopularCourses from '../components/section2/PopularCourses'
import RegisterNow from '../components/section3/RegisterNow'
import OurServices from '../components/section4/OurServices'
import UpcomingEvents from '../components/section5/UpcomingEvents'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <PopularCourses/>
      <RegisterNow/>
      <OurServices/>
      <UpcomingEvents/>
    </div>
  )
}

export default Home
