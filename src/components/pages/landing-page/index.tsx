import React from 'react'
import HeroSection from './herosection'
import Landing from './page'


type Props = {}

const LandingPage = (props: Props) => {
  return (
    <main className=' flex flex-col w-full min-h-screen'>
     {/* <HeroSection /> */}
     <Landing/>
    </main>
  )
}

export default LandingPage