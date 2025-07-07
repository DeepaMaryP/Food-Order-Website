import React from 'react'
import { useParams } from 'react-router-dom';

import SellerDisplay from '../../components/SellerDisplay';
import { getActiveSellers } from '../../helpers/sellerHelper';
import { isObjectEmpty } from '../../helpers/genericHelper';

function SellerListPage() {
  const dishCategory = useParams().dish;
  const sellers = getActiveSellers(dishCategory);// distinct sellers
 
  return (
    <div className='mt-5'>
      {(!sellers || isObjectEmpty(sellers)) &&
        <div className='mt-10 text-center text-lg font-bold'>
          <p className='p-3'>Uh-oh! No Outlets is accepting orders at the moment. They should be back soon</p>
        </div>}

      {sellers.length > 0 && (
        <SellerDisplay sellerswithDish={sellers} dishCategory ={dishCategory}/>
      )}

    </div>
  )
}

export default SellerListPage
