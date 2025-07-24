import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addOrder, removeOrder } from '../redux/slice/orderSlice';

function ProductCard(props) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const dish = props.dish;
    const seller = props.seller;

    const increment = () => {      
        const orderDish = {seller, dish}
        dispatch(addOrder(orderDish))
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);    
        dispatch(removeOrder(dish))   
        if (count == 1 || count == 0) {            
            setCount(0);
            setAddToCart(false);
        }
    };

    const[addToCart, setAddToCart] = useState(false)
    const onClickAddToCart = () => {
        setAddToCart(true)                
    }
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 justify-items-center md:flex-row md:max-w-6xl bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col lg:col-span-2 justify-between p-4 leading-normal">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dish.name}</h5>
                <div className="flex items-center mt-2.5 mb-2">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div className="flex items-center mb-20">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{dish.price}</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className="object-cover rounded-t-lg h-auto w-48 md:rounded-none md:rounded-s-lg" src={dish.photo} alt="" />
                {!addToCart &&
                    <div className='pt-2'>
                        <button onClick={onClickAddToCart} className="justify-center text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Add to cart</button>
                    </div>}
                {addToCart &&
                    <div class="flex items-center pt-2">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline" onClick={decrement}>-</button>
                        <h4  className="text-center w-16 py-2 border-t border-b border-gray-200 focus:outline-none" > {count} </h4>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" onClick={increment}>+</button>
                    </div>}
            </div>
        </div>
    )
}

export default ProductCard
