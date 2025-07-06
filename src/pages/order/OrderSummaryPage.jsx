import React from 'react'
import { useSelector } from 'react-redux'
import { getOrderCount } from '../../helpers/dishHelper';

export default function OrderSummaryPage() {

  const order = useSelector(state => state.order)
  const items = order.items;

  const dishes = (items.length > 0) ? (items.map(item => item.dish)) : []; // get dishes from order 

  const sellers = (items.length > 0) ? items.map(item => item.seller) : [] // get seller from order

  let defaultDish = { id: 0, photo: "" };
  if (dishes.length > 0) {
    defaultDish = dishes[0]  // get first dish to display image
  }

  let seller = []
  if (sellers.length > 0) {
    seller = sellers[0]
  }

  const uniqueDishes = getOrderCount(dishes);
  const totalCartPrice = uniqueDishes.reduce((sum, item) => sum + item.totalPrice, 0);
  
  return (
    <div>
      {uniqueDishes.length == 0 &&
         <div className='mt-10 text-center text-xl font-bold'> No orders are placed</div>
      }
  {uniqueDishes.length > 0 && 
      <div>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center m-5'>
            <img className="object-cover rounded-t-lg h-auto w-32 md:rounded-none md:rounded-s-lg" src={defaultDish.photo} alt="" />
          </div>

          <div class="flex flex-col mt-2 justify-center">
            <h4 class="font-bold text-xl" > {seller.name}</h4>
            <h4 class="" > {seller.Location}</h4>
          </div>
        </div>

        <div className='mt-8'>
          <div className="flex mx-3 lg:mx-auto lg:flex-col lg:max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {uniqueDishes.map(dish =>
              <div key={dish.id} className="flex w-full justify-between mb-5 items-center">
                <h6 className="text-lg font-bold">{dish.name} * {dish.count}</h6>
                <h6 className="text-lg text-right">₹{dish.totalPrice}</h6>
              </div>
            )}
          </div>
        </div>

        <div className="flex mx-3 lg:mx-auto lg:flex-col lg:max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex w-full justify-between mb-5 items-center">
            <h6 className="text-lg font-bold">Sub Total :</h6>
            <h6 className="text-lg font-bold">₹{totalCartPrice}</h6>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <a href="#" className="px-5 py-3 w-48 text-base font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900">
            CHECKOUT
          </a>
        </div>
      </div> }

    </div>
  )
}
