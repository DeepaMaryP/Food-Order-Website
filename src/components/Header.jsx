import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../assets/logo.png'
import searchLogo from '../assets/search.png'
import cartLogo from '../assets/cart.png'
import userLogo from '../assets/userLogo.png'

function Header() {
  const orderCount = useSelector(state => state.order.orderCount)
  const user = useSelector(state => state.user);

  return (
    <div>
      <div className='p-0 m-0 box-border flex'>
        <div className='w-1/4'>
          <img src={logo} className='h-20' alt="logo" />
        </div>
        {!user.isLoggedIn &&
          <div className='flex w-1/2 gap-1 sm:gap-x-9 text-orange-500 text-lg font-bold items-center'>
            <Link to='/'>
              <span>Home</span></Link>
            <Link to='/seller' >
              <span>Dishes</span> </Link>
            <Link to='/orders'>
              <span>Orders</span></Link>
            <Link to='/about'>
              <span>About Us</span></Link>
            <Link to='/contact'>
              <span>Contact Us</span></Link>
          </div>}

        {user.isLoggedIn &&
         <div className='flex w-1/2 gap-1 sm:gap-x-9 text-orange-500 text-lg font-bold items-center'>
            <Link to='/admin/dishes'>
              <span>Manage Dish</span></Link>
            <Link to='/users' >
              <span>Manage Users</span> </Link>           
          </div>
        }
        <div className='w-1/4 flex gap-3 items-center justify-center'>
          {/* <img src={searchLogo} className='h-10' alt="Search" /> */}
          <div className="relative w-10 h-10">
            <Link to='/orders'>
              <img src={cartLogo} className='h-8' alt="Cart" />
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
              <img src={userLogo} className='h-9' alt="Login" />
              {!user.isLoggedIn &&
                <span className='font-bold text-lg'>Sign In</span>
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
