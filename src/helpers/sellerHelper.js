import { getDishList } from "./dishHelper";

const sellers = [
    {
        id: "1",
        name: "Tawa Restuarant",
        category: "South Indian, NorthIndian, Chinese",
        Location: "Kadapakada Kollam",
        rating: "4.0"
    },
    {
        id: "2",
        name: "Apsara Food",
        category: "Arabian, Biriyani",
        Location: "RP Mall Kollam",
        rating: "4.5"
    },
    {
        id: "3",
        name: "Chickins",
        category: "Burger, Fast Food, Rolls",
        Location: "Thampanoor Thiruvananthapuram",
        rating: "4.6"
    },
    {
        id: "4",
        name: "Pizza Hut",
        category: "Pizza, Italian Pasta, Dessert",
        Location: "Vazhuthakadu Thiruvananthapuram",
        rating: "4.7"
    },
    {
        id: "5",
        name: "Aryaas Vegeterian",
        category: "South Indian, North Indian, Snacks",
        Location: "Kottiyam Kollam",
        rating: "4.2",
    },
    {
        id: "6",
        name: "KFC",
        category: "Burgers, Beverages",
        Location: "Kollam City",
        rating: "4.8"
    },
    {
        id: "7",
        name: "Penguin Eateries",
        category: "South Indian, North Indian, Chinese, Grills, Desserts, Juices",
        Location: "Kesavadasapuram Thiruvanathapuram",
        rating: "4.0"
    }
]

export function getSellers() {
    const sellerList = sellers.map(seller =>
        ({ value: seller.name, label: seller.name })
    )
    return sellerList;
}

export function getSellerByName(sellerName) {
    const selSeller = sellers.find(seller => seller.name == sellerName)
    return selSeller;
}

export function getActiveSellers(dishCategory) {
    const dishesList = getDishList(); // get whole dish list    
    const selDishes = dishesList.filter(dish => dish.category == dishCategory); // get matching dishes 

    if (selDishes.length == 0) { return } selDishes;

    const sellersOfDish = sellers.map(seller => {
        let curDish = selDishes.find(dish => dish.seller == seller.name) //get first dish of the seller
        if (curDish) {
            return { seller, dish: curDish };
        }
        return null;
    }).filter(Boolean)

    return sellersOfDish;
}

export function getActiveSellersAndDefaultDish() {
    const dishesList = getDishList(); // get dish list
    const dishSellerList = [...new Set(dishesList.map(dish => dish.seller))]; // get distinct sellers from dish list    
    const sellerList = sellers.filter(seller => (dishSellerList.includes(seller.name))) // get seller objects of active sellers   

    const sellersAndDefaultDish = sellerList.map(seller => {
        let curDish = dishesList.find(dish => dish.seller == seller.name) //get first dish of the seller
        return { seller, dish: curDish };
    }
    )
    return sellersAndDefaultDish;
}
