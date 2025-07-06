import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { deleteDish, getDishList } from '../../helpers/dishHelper'

function ManageDishPage() {

    const [dishList, setDishList] = useState(getDishList());

    const doDeleteDish = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            const newDishList = deleteDish(id);
            setDishList(newDishList);
            console.log("Item deleted.");
        } else {
            // User cancelled
            console.log("Deletion cancelled.");
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-2 sm:flex-row justify-around items-center px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                <h1 className='text-xl font-bold'>Manage Dishes</h1>
                <h6 className='text-red-500'>NB-Three dishes are added to local storage on admin login for display purpose</h6>
                <div>
                    <Link to={`/admin/adddish`}>
                        <button className="text-white block bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">Add New</button>
                    </Link>
                </div>
            </div>

            <div className="relative overflow-x-auto">
                <table className="w-full my-10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 text-justify uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="pl-7 py-3">
                                Dish
                            </th>
                            <th scope="col" className="text-center">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seller
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dishList.map(dish =>
                                <tr key={dish.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="flex flex-col sm:flex-row items-center justify-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={dish.photo} alt="Dish image" />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{dish.name}</div>
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        {dish.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dish.seller}
                                    </td>
                                    <td className="px-6 py-4">
                                        ₹{dish.price}
                                    </td>
                                    <td className="relative flex flex-col items-center sm:flex-row p-2 sm:p-4 sm:space-x-2">
                                        <Link to={`/admin/adddish/${dish.id}`}>
                                            <button className="bg-blue-500 text-white px-3 py-1 mb-2 sm:mb-0 rounded-md text-xs md:text-sm">Edit</button>
                                        </Link>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm" onClick={() => doDeleteDish(dish.id)}>Delete</button>
                                    </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageDishPage
