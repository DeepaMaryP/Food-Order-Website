import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../assets/logo.png'
import searchLogo from '../assets/search.png'
import cartLogo from '../assets/cart.png'
import userLogo from '../assets/userLogo.png'

function Header() {
  const orderCount = useSelector(state => state.order.orderCount)
  const user = useSelector(state => state.user);

  return (
    <div>
      <div className='p-0 m-0 box-border grid grid-cols-3 sm:grid-cols-4  xl:grid-cols-5'>
        <div className='col-span-2 xl:col-span-1'>
          <img src={logo} className='h-20' alt="logo" /> 
        </div>
        {!user.isLoggedIn &&
          <div className='col-span-3 grid grid-cols-5 lg:grid-cols-7 mt-3 pl-2 text-orange-500 text-medium xl:text-xl font-bold items-center'>
            <Link to='/'>
              <span className='sm:pl-1 text-sm sm:text-base'>Home</span></Link>
            <Link to='/seller' >
              <span className='sm:pl-1 text-sm sm:text-base'>Dishes</span> </Link>
            <Link to='/orders'>
              <span className='sm:pl-1 text-sm sm:text-base'>Orders</span></Link>
            <Link to='/about'>
              <span className='sm:pl-1 text-xs sm:text-base'>About Us</span></Link>
            <Link to='/contact'>
              <span className='sm:pl-1 text-xs sm:text-base'>Contact Us</span></Link>
          </div>}

        {user.isLoggedIn &&
         <div className='col-span-3 pl-3 grid grid-cols-3 md:grid-cols-5 gap-1 pt-5 sm:pt-0 sm:gap-x-9 text-orange-500 text-lg font-bold items-center'>
            <Link to='/admin/dishes'>
              <span className='text-sm sm:text-base'>Manage Dish</span></Link>
            <Link to='/users' >
              <span className='text-sm sm:text-base'>Manage Users</span> </Link>           
          </div>
        }
        <div className='flex gap-3 col-span-4 lg:col-span-1 pr-5 mt-5 items-center justify-end'>
          {/* <img src={searchLogo} className='h-10' alt="Search" /> */}
          <div className="relative w-10 ">
            <Link to='/orders'>
               <img src={cartLogo} className='h-5 sm:h-8' alt="Cart" /> 
              {orderCount > 0 && (
                <span
                  className="absolute -top-1 -right-1  bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {orderCount}
                </span>
              )}
              {orderCount == 0 && (
                <span
                  className="absolute -top-1 -right-1 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {orderCount}
                </span>
              )}
            </Link>
          </div>
          <Link to='/login' >
            <div className='flex items-center gap-2'>
              <img src={userLogo} className='h-6 sm:h-9' alt="Login" />
              {!user.isLoggedIn &&
                <span className='font-bold text-sm md:text-base'>Sign In</span>
              }
              {user.isLoggedIn &&
                <span className='font-medium text-md'>{user.name}</span>
              }
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
