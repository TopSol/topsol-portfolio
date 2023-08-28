import React from 'react'
import Location from '../../components/Location'
import VideoHero from '../../components/VidoeHero'
import RatingSection from '../../components/ratingSection'
import FooterSection from '../../components/footerSection'
import ServicesOffers from '../../components/servisesOffers'

function Services() {
  return (
    <div>
        <VideoHero />
        <RatingSection />
        <ServicesOffers />
        <Location />
        <FooterSection />
    </div>
  )
}

export default Services