import React from 'react'
import { useState } from 'react';

import DynamicDropdown from './DynamicDropdown';
import SellerHighlights from './SellerHighlights';

const sortByList = [
    { value: "Name", label: "Name" },
    { value: "Price", label: "Price" },
]

function SellerDisplay(props) {
    const sellerswithDish = props.sellerswithDish;   // get the seller object and dish object  
    const dishCategory = props.dishCategory

    const sellerCategory = sellerswithDish.map(sellerDish => //get the seller details from seller object
        ({ value: sellerDish.seller.name, label: sellerDish.seller.name }))

    const [sellerDishList, setSellerDishList] = useState(sellerswithDish);

    const [sortType, setsortType] = useState("")

    function sortProductList(selectedType) {
        setsortType(selectedType)
        let productsToSort = [...sellerDishList]
        sortProducts(productsToSort, selectedType)
        setSellerDishList(productsToSort)
    }

    function sortProducts(productsToSort, selectedType) {
        switch (selectedType) {
            case "Price": {
                productsToSort.sort((a, b) => {
                    if (a.dish.price < b.dish.price) return -1
                    if (a.dish.price > b.dish.price) return 1
                })
                break;
            }
            case "Name": {
                productsToSort.sort((a, b) => {
                    if (a.seller.name.toLowerCase() < b.seller.name.toLowerCase()) return -1
                    if (a.seller.name.toLowerCase() > b.seller.name.toLowerCase()) return 1
                })
                break;
            }
        }
    }

    function searchProductsBySeller(selectedItem) {
        getSellers(selectedItem)
    }

    function getSellers(sellerName) {
        let selectedSellers = []
        if (sellerName != "") { // filter the SellerwithDish list to get the matched seller
            selectedSellers = (sellerswithDish.filter(sellerDish =>
                sellerDish.seller.name.toLowerCase().includes(sellerName.toLowerCase())
            ))
        }
        else {
            selectedSellers = sellerswithDish;
        }

        setSellerDishList(selectedSellers)
        sortProducts(selectedSellers, sortType)
    }
    return (
        <div>
            <div id="sellerList">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 align-middle justify-items-center sm:my-5">
                        <div className="sm:mx-auto ">
                            <DynamicDropdown item={sellerCategory} onData={searchProductsBySeller} name='Select Seller' />
                        </div>

                        <div className="sm:mx-auto py-5 sm:py-0">
                            <DynamicDropdown item={sortByList} onData={sortProductList} name='Sort By' />
                        </div>
                    </div>
                </div>

                <SellerHighlights sellers={sellerDishList} dishCategory={dishCategory} />
            </div>
        </div>
    )
}

export default SellerDisplay
