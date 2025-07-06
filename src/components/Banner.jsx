import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='grid grid-cols-2 my-10 bg-orange-50'>
      <div className='px-10 content-center'>
        <h1 className="mb-4 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We Offer </h1>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Fresh & Delicious <span className='text-orange-400'>Food</span>  </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">Healthy eating made simple—choose, order, and enjoy fresh meals from our eateries to your plate.
        </p>      
      </div>

      <img src="/src/assets/FoodBanner.jpg" className='w-3/4 p-5 justify-center rounded-full' alt="" />
    </div>
  )
}

export default Banner
