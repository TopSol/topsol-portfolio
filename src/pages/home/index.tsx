import React from 'react'
import Hero from './hero'
import CardSection from './cardSection'
import ServicesOffers from './servisesOffers'
import TopSolExperts from './topSolExpert'
import OurPortfolio from './ourPortfolio'
import RatingSection from './ratingSection'
import Awards from './awards'
import GetInTouch from './getInTouch'

function Home() {
  return (
    <div>
      <Hero/>
      <CardSection/>
      <ServicesOffers/>
      <TopSolExperts/>
      <OurPortfolio/>
      <RatingSection/>
      <Awards/>
      <GetInTouch/>
    </div>
  )
}

export default Home
