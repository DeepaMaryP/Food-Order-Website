import React, { useState } from "react";
import { Link } from "react-router-dom";

import biriyaniImg from "../assets/food/Biriyani.png"
import chineseiImg from "../assets/food/Chinese.png"
import northIndianImg from "../assets/food/NorthIndian.png"
import pizzaImg from "../assets/food/Pizza.png"
import burgerImg from "../assets/food/Burger.png"
import dosaiImg from "../assets/food/Dosa.png"
import pastryImg from "../assets/food/Pastry.png"
import riceImg from "../assets/food/Rice.png"

const itemsPerSlide = 4;
const dishesList = [
     {
        id: "1",
        category: "Rice",       
        photo: riceImg
    },
    {
        id: "2",
        category: "Biriyani",
        photo: biriyaniImg
    },
    {
        id: "3",
        category: "Chinese",
        photo: chineseiImg
    },
    {
        id: "4",
        category: "North Indian",
        photo: northIndianImg
    }, 
    {
        id: "5",
        category: "Pizza",
        photo: pizzaImg
    },
    {
        id: "6",
        category: "Burger",
        photo: burgerImg
    },
    {
        id: "7",
        category: "Dosa",
        photo: dosaiImg
    },
    {
        id: "8",
        category: "Pastry",
        photo: pastryImg
    }
]

export default function DishHighlights() {
   
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = Math.ceil(dishesList.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getVisibleSlides = () => {
        const start = currentIndex * itemsPerSlide;
        return dishesList.slice(start, start + itemsPerSlide);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {getVisibleSlides().map(dish =>
                    <div key={dish.id} className="h-96 md:h-64 rounded-lg shadow-lg">
                        <Link to={`/seller/${dish.category}`}>
                            <img
                                src={dish.photo}
                                alt={dish.text}
                                className="w-full h-full object-cover"
                            /></Link>
                        <div>
                            <p className="text-lg font-semibold text-center px-2">
                                {dish.category}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-0 transform -translate-y-1/2 bg-orange-500 font-bold h-12 w-12 text-white text-lg rounded-full shadow hover:bg-orange-700"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-0 transform -translate-y-1/2 bg-orange-500 h-12 w-12 font-bold text-white text-lg rounded-full shadow hover:bg-orange-700"
            >
                &gt;
            </button>
        </div>
    );
}
