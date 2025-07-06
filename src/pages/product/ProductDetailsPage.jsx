import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { getDishesBySeller } from '../../helpers/dishHelper'
import ProductCard from '../../components/ProductCard';
import { getSellerByName } from '../../helpers/sellerHelper';
import DynamicDropdown from '../../components/DynamicDropdown';

const sortByList = [
    { value: "Name", label: "Name" },
    { value: "Price", label: "Price" },
]

function ProductDetailsPage() {
    const sellerName = useParams().seller;
    const dishes = getDishesBySeller(sellerName);
    const seller = getSellerByName(sellerName)

    const [sortType, setsortType] = useState("")
    const [dishList, setDishList] = useState(dishes);
    const [selectedName, setSelectedName] = useState("")

    function searchDishByName(event) {
        setSelectedName(event.target.value)
        getDishes(event.target.value)
    }

    function getDishes(name) {
        let selectedDishes = []      
        if (name != "") {
            selectedDishes = (dishes.filter(dish => dish.name.toLowerCase().includes(name.toLowerCase())))
        }
        else {
            selectedDishes = (dishes)
        }
        setDishList(selectedDishes) 

        sortProducts(selectedDishes, sortType)
    }

    function sortProductList(selectedType) {
        setsortType(selectedType)
        let productsToSort = [...dishes]
        sortProducts(productsToSort, selectedType)
        setDishList(productsToSort)
    }

    function sortProducts(productsToSort, selectedType) {
        switch (selectedType) {
            case "Price": {
                productsToSort.sort((a, b) => {
                    if (a.price < b.price) return -1
                    if (a.price > b.price) return 1
                })
                break;
            }
            case "Name": {
                productsToSort.sort((a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                })
                break;
            }
        }
    }

    return (
        <div className='mt-8'>
            <div className='flex w-3/4 mx-auto mb-10 flex-col justify-center items-center font-bold'>
                <h1 className='text-3xl'>{seller.name}</h1>
                <h2>{seller.Location}</h2>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 align-middle justify-items-center sm:my-5 ">
                    <div className="sm:mx-auto">
                        <input type="text" name="search" value={selectedName} className="w-full md:w-3/4" id="search" placeholder="Search By Name" onChange={searchDishByName} />
                    </div>

                    <div className="sm:mx-auto py-5 sm:py-0">
                        <DynamicDropdown item={sortByList} onData={sortProductList} name='Sort By' />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mr-20 mb-3'>
                <Link to='/seller'>
                    <span className='text-orange-500 font-bold'>Back to Restaurants</span></Link>
            </div>
            {dishList.map(dish =>
                <ProductCard key={dish.id} dish={dish} seller={seller} />
            )}
        </div>
    )
}

export default ProductDetailsPage
