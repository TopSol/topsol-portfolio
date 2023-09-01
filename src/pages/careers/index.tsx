import React from 'react'
import JoinTopSol from './joinUs/JoinTopSol'
import AddressSection from '../../components/addressSection'
import LifeTopsol from './lifeAtTopsol/LifeTopsol'
import Process from './components/recruitmentProcess/Process'

function Careers() {
  return (
    <div>
      <JoinTopSol/>
      <LifeTopsol/>
      <Process/>
      <div className='sm:px-20'>
      <AddressSection/>
      </div>
    </div>
  )
}

export default Careers
