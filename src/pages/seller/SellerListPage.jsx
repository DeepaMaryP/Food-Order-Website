import React from 'react'
import { useParams } from 'react-router-dom';

import SellerDisplay from '../../components/SellerDisplay';
import { getActiveSellers } from '../../helpers/sellerHelper';

function SellerListPage() {
  const dishCategory = useParams().dish;
  const sellers = getActiveSellers(dishCategory);// distinct sellers

  return (
    <div className='mt-5'>
      {!sellers &&
        <div className='mt-10 text-center text-lg font-bold'>
          <p>Uh-oh! No Outlets is accepting orders at the moment. They should be back soon</p>
        </div>}

      {sellers && (
        <SellerDisplay sellerswithDish={sellers} dishCategory ={dishCategory}/>
      )}

    </div>
  )
}

export default SellerListPage
