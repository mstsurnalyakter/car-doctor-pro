import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './ServicesSection'

const Homepage = () => {
  return (
    <div className='space-y-16'>
      <Banner/>
      <About/>
      <Services/>
    </div>
  )
}

export default Homepage