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
        <p className='text-2xl sm:text-3xl font-bold text-center pt-5'>Restaurants with online food delivery</p>
      }

      {dishCategory.length > 0 &&
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-around items-center'>
          <p className='text-xl md:text-3xl mb-3 sm:mb-0 font-bold'>Choose the Perfect {dishCategory}</p>
          <Link to='/seller/'> <span className='text-orange-400 font-bold'> Back to Main Menu </span>
          </Link>
        </div>
      }

      {sellerList.length > 0 &&
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center m-6 p-2">
          {sellerList.map((item) => (
            <SellerCard key={item.seller.id} item={item} />
          ))}
        </div>
      }
    </div >
  )
}

export default SellerHighlights
