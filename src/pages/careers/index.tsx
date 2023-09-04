import React from 'react'
import AddressSection from '../../components/addressSection'
import LifeTopsol from './components/recruitmentProcess/lifeAtTopsol/LifeTopsol'
import Process from './components/recruitmentProcess/recruitmentProcess/Process'
import JoinTopSol from './components/recruitmentProcess/joinUs/JoinTopSol'
import AllOpenings from './components/recruitmentProcess/allOpenings'

function Careers() {
  return (
    <div>
      <JoinTopSol/>
      <LifeTopsol/>
      <AllOpenings/>
      <Process/>
      <div className='sm:px-20'>
      <AddressSection/>
      </div>
    </div>
  )
}

export default Careers
