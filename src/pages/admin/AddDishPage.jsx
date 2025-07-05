import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useId } from 'react';

import DynamicDropdown from '../../components/DynamicDropdown'
import { getCategories, getDish, getDishById, addUpdateDish } from '../../helpers/dishHelper'
import { getSellers } from '../../helpers/sellerHelper';

function AddDishPage() {
  const categoryList = getCategories();
  const sellerList = getSellers();
  const dishId = useParams().dishId
  const navigate = useNavigate()
  const newId = useId();

  const [dish, setDish] = useState(getDish());
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  let selectedCategory = dish?.category;

  const getSelectedCategory = (selectedItem) => {
    dish.category = selectedItem;
  }

  useEffect(() => {
    let selDish;
    (dishId) ? selDish = getDishById(dishId) : selDish = getDish();
    setPreviewImage(selDish.photo);
    setDish(selDish);
  }, [dishId])

  const handleChange = (name, value) => {
    setDish(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  };

  const [errorObject, setErrorObject] = useState({ category: "", seller: "", price: "", photo: "" })

  const validateInputs = () => {
    let isValid = true;
    setErrorObject({ category: "", seller: "", price: "", photo: "" })
    if (dish.category.length == 0) {
      setErrorObject((prevValue) => ({
        ...prevValue,
        category: "Please select Category"
      }))
      isValid = false;
    }
    if (dish.seller.length == 0) {
      setErrorObject((prevValue) => ({
        ...prevValue,
        seller: "Please select Seller"
      }))
      isValid = false;
    }
    if (dish.price == 0) {
      setErrorObject((prevValue) => ({
        ...prevValue,
        price: "Please enter valid price"
      }))
      isValid = false;
    }
    if (dish.photo == null) {
      setErrorObject((prevValue) => ({
        ...prevValue,
        photo: "Please select image"
      }))
      isValid = false;
    }
    return isValid;
  }

  const getSelectedSeller = (selectedItem) => {
    dish.seller = selectedItem;
  }

  const saveDish = (event) => {
    if (validateInputs()) {
      addUpdateDish(dish, newId);
      navigate("/admin/dishes")
    } else {
      event.preventDefault();
    }
  }

  const cancelAddDish = () => {
    navigate("/admin/dishes")
  }

  const handleFileChange = (event) => {
    let file = event.target.files[0]
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result; // This is the Base64 encoded string
        setPreviewImage(dataURL)
        dish.photo = dataURL
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage("")
    }
  }

  return (
    <div className='m-10'>
      <div className='flex justify-around mb-5 items-center'>
        <h1 className='text-xl font-bold'>Add dishes to display at Home page based on Category and Seller</h1>
        <Link to='/admin/dishes' >
          <span className='text-orange-400 font-bold'>Back to Manage Dish</span></Link>
      </div>
      <form className='border rounded p-5' onSubmit={saveDish} >
        <div className=''>
          <div className='flex items-start'>
            <label htmlFor="name" className='pr-20'>Name :</label>
            <input type="text" id="name" value={dish?.name} required name="name" className='border w-1/2' onChange={((event) => handleChange(event.target.name, event.target.value))} placeholder='Enter Name' />
          </div>

          <div className="flex my-5">
            <label htmlFor="category" className='pr-14' >Category :</label>
            <DynamicDropdown className="w-56" onData={getSelectedCategory} selectedItem={selectedCategory} item={categoryList} id="category" name='Select Category' />
            {errorObject.category.length > 0 && <label htmlFor="category" className='text-red-500 pl-2'>{errorObject.category}</label>}
          </div>

          <div className="flex my-5">
            <label htmlFor="seller" className='pr-20' >Seller :</label>
            <DynamicDropdown className="w-56" onData={getSelectedSeller} item={sellerList} selectedItem={dish?.seller} id="seller" name='Select Seller' />
            {errorObject.seller.length > 0 && <label htmlFor="seller" className='text-red-500 pl-2'>{errorObject.seller}</label>}
          </div>

          <div className="flex my-5">
            <label htmlFor="price" className='pr-20 mr-1' >Price : </label>
            <input type="number" id="price" name="price" required min="0" max="9999999999999999" value={dish?.price} onChange={((event) => handleChange(event.target.name, event.target.value))} className='border w-1/2' placeholder='Enter Price' />
            {errorObject.price.length > 0 && <label htmlFor="price" className='text-red-500 pl-2'>{errorObject.price}</label>}
          </div>

          <div className="flex my-5">
            <label htmlFor="discount" className='pr-14' >Discount :</label>
            <input type="number" id="discount" name="discount" min="0" max="9999999999999999" value={dish?.discount} onChange={((event) => handleChange(event.target.name, event.target.value))} className='border w-1/2' placeholder='Enter Discount' />
          </div>

          <div className="col-span-full">
            {!previewImage && <div id="newImage">
              <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                Photo
              </label>
              <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
            </div>
            }
            {errorObject.photo.length > 0 && <label htmlFor="photo" className='text-red-500 pl-2'>{errorObject.photo}</label>}

            <div className="mt-2 flex items-center gap-x-3">
              {previewImage && <div >
                <img id="image_preview" src={previewImage} className="mt-2 w-52" />
              </div>
              }
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
              >
                {previewImage && <span>Change</span>}
                {!previewImage && <span>Upload a file</span>}
                <input id="file-upload" name="file-upload" type="file" accept="image/*" className="sr-only" onChange={handleFileChange} />
              </label>
            </div>
          </div>


          {selectedFile && (
            <div>
              <p>Selected File: {selectedFile.name}</p>
              <p>File Type: {selectedFile.type}</p>
              <p>File Size: {selectedFile.size} bytes</p>
            </div>
          )}

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-md font-semibold text-gray-900" onClick={cancelAddDish}>
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-orange-600 px-3 py-2 text-md font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddDishPage
