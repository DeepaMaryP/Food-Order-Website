import { storeToLocal } from "./genericHelper";

const dishCategory = ["Appetizers", "Starters", "Rice", "Biriyani", "Bread", "South Indian", "North Indian", "Chinese", "Burger", "Specials", "Desserts"]

let dishes = [
    {
        id: "a1",
        name: "Dosa",
        category: "Bread",
        seller: "Aryaas Vegeterian",
        rating: "4.0",
        photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 70,
        discount: "0",
        createdAt: ""
    },
    {
        id: "a2",
        name: "Biriyani",
        category: "Biriyani",
        seller: "Apsara Food",
        rating: "4.6",
        photo: "https://yummyies.com/wp-content/uploads/2021/03/chiken-biriyani.jpg",
        price: 150,
        discount: 0,
        createdAt: ""
    },
    {
        id: "a3",
        name: "Burger",
        category: "Burger",
        seller: "Chickins",
        rating: "4.5",
        photo: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
        price: 150,
        discount: 0,
        createdAt: ""
    }
]

export function getCategories() {
    const categoryList = dishCategory.map(category =>
        ({ value: category, label: category })
    )
    return categoryList;
}

export function getDish() {
    let dish = {
        id: 0,
        name: "",
        category: "",
        seller: "",
        rating: "",
        photo: null,
        price: "",
        discount: "",
        createdAt: ""
    }
    return dish;
}

export function getDishList() {
    let dishList = [];
    const storedDishes = localStorage.getItem("dishList");
    if (storedDishes) {
        dishList = JSON.parse(storedDishes)
    }
    return JSON.parse(dishList);
}

export function getDishById(id) {
    const dishList = getDishList();
    const dish = (dishList) ? dishList.find(item => item.id == id) : dish
    return dish;
}

export function getDishesBySeller(seller) {
    const dishesList = getDishList(); // get dish list
    const selDishes = dishesList.filter(dish => dish.seller == seller)
    return selDishes;
}

export function getOrderCount(seldishes) {
    const grouped = new Map();
    seldishes.forEach(item => {
     const key = `${item.id}-${item.name}`; // unique key based on id + name
      if (grouped.has(key)) { 
        const existing = grouped.get(key);
        existing.count += 1;
        existing.totalPrice += item.price;
      } else {       
        grouped.set(key, { ...item, count: 1, totalPrice : item.price});
      }
    });
    const uniqueDishes = Array.from(grouped.values());
    return uniqueDishes
  }

function addDish(dish) {
    const storedDishes = getDishList();
    const newDishes = [
        ...storedDishes,
        dish // and one new item at the end
    ]    
   
    storeToLocal("dishList", JSON.stringify(newDishes))
}

export function addUpdateDish(dish, dishId) {
    if (dish.id != 0) {
        updateDish(dish)
    } else {
        dish.id = dishId
        addDish(dish)
    }
}

export function updateDish(dish) {
    const storedDishes = getDishList();
    const newDishes = storedDishes.map(item => {
        if (item.id != dish.id) return item
        return dish
    }
    )
    storeToLocal("dishList", JSON.stringify(newDishes))
}

export function deleteDish(dishId) {
    const storedDishes = getDishList();
    const newDishes = storedDishes.filter(item => item.id !== dishId);
    storeToLocal("dishList", JSON.stringify(newDishes))
    return newDishes;
}

export const storeDefaultDish = () => {
    localStorage.clear();
    storeToLocal("dishList", JSON.stringify(dishes))
}