import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Student from './Student'
import HomeIntro from '../components/HomeIntro';

function Home() {

  return (
    <div>
      <HeroCarousel/>
      <HomeIntro/>
      <Student/>
    </div>
  )
}

export default Home;