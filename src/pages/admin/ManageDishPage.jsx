import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getDishList } from '../../helpers/dishHelper'

function ManageDishPage() {
    const dishesList = getDishList();

    const deleteDish = (id) => {
      //  console.log(id);
        deleteDish(id);
    }

    return (
        <div>
            <div className="flex justify-end px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
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
                            <th scope="col" className="pl-5 pr-6 py-3">
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
                            dishesList.map(dish =>
                                <tr key={dish.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={dish.photo} alt="Dish image" />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{dish.name}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {dish.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dish.seller}
                                    </td>
                                    <td className="px-6 py-4">
                                        ₹{dish.price}
                                    </td>
                                    <td className="relative p-2 md:p-4 space-x-2">
                                        <Link to={`/admin/adddish/${dish.id}`}>
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">Edit</button>
                                        </Link>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm" onClick={() => deleteDish(dish.id)}>Delete</button>
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
