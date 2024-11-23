import React from 'react'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscribe'
import BannerSecond from './Components/Banner/BannerSecond'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
        <Hero />
        <Services />
        <Banner />
        <Subscribe />
        <BannerSecond />
        <Footer />
    </main>
  )
}

export default App