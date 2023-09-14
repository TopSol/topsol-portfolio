import React from 'react'
import AddressSection from '../../components/addressSection'
import LifeTopsol from './components/pages/lifeAtTopsol/LifeTopsol'
import Process from './components/pages/recruitmentProcess/Process'
import JoinTopSol from './components/pages/joinUs/JoinTopSol'
import AllOpenings from './components/pages/allOpenings'

function Careers() {
  return (
    <div>
      <JoinTopSol/>
      <LifeTopsol/>
      <AllOpenings/>
      <Process/>
      <AddressSection/>
    </div>
  )
}

export default Careers
