import React from 'react'

import Banner from '../components/Banner'
import DishHighlights from '../components/DishHighlights'
import SellerHighlights from '../components/SellerHighlights'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <div>
      <Banner />
      <DishHighlights />  
      <div className='my-28'>
         <SellerHighlights />
      </div>           
      <Footer />
    </div>
  )
}

export default Home
