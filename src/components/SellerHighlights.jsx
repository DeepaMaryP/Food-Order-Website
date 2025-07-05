import React from 'react'
import SellerCard from './SellerCard';
import { getActiveSellersAndDefaultDish } from '../helpers/sellerHelper';
import { Link } from 'react-router-dom';

function SellerHighlights({ sellers, dishCategory = '' }) {
  const sellerList =
    Array.isArray(sellers) && sellers.length > 0 // if passed use the prop else default
      ? sellers
      : getActiveSellersAndDefaultDish();

  return (
    <div>
      {dishCategory.length == 0 &&
        <p className='text-3xl font-bold text-center'>Restaurants with online food delivery</p>
      }

      {dishCategory.length > 0 &&
        <div className='flex w-3/4 justify-around items-center'>
          <p className='text-3xl font-bold'>Choose the Perfect {dishCategory}</p>
          <Link to='/seller/'> <span className='text-orange-400 font-bold'> Back to Main Menu </span>
          </Link>
        </div>
      }

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-between mx-6 p-2 mt-6">
        {sellerList.map((item) => (
          <SellerCard key={item.seller.id} item={item} />
        ))}
      </div>
    </div >
  )
}

export default SellerHighlights
