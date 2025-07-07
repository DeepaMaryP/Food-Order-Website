import React from 'react'
import { Link } from 'react-router-dom';
import starImg from "../assets/star.png"

function SellerCard(props) {
    const dish = props.item.dish;
    const seller = props.item.seller;

    return (
        <div className="p-4">
            {<div className="relative max-w-sm rounded overflow-hidden shadow-lg">
                <Link to={`/product/${seller.name}`}>
                    <img className="w-72 h-60" src={dish.photo} alt="Sunset in the mountains" />
                    <div className='absolute bottom-2/3 left-0 right-0 bg-black bg-opacity-50 '>
                        <h4 className='text-white text-xl font-bold  px-4 text-center'>ITEMS AT ₹{dish.price}</h4>
                    </div>
                </Link>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">{seller.name}</div>
                    <div className="items-baseline text-gray-900 dark:text-black">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center'>
                                <img src={starImg} className='h-6' alt="" />
                                <span className="ml-1 text-lg text-gray-900 dark:text-white"> {seller.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-700 text-base">
                        {seller.category}
                    </div>
                    <div className="text-gray-700 text-base">
                        {seller.Location}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default SellerCard
