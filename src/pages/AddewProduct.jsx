import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddewProduct = () => {
  const [productName, setProductName] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryObject, setCategoryObject] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://bookshopbackend-kk5q.onrender.com/categories');
        const data = await res.json();
        setCategories(data);

        const tempCategoryObject = {};
        data.forEach(category => {
          tempCategoryObject[category.name] = category._id;
        });
        setCategoryObject(tempCategoryObject);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();


    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const imageUrl = form.get("img-url");
    const price = form.get("price");
    const rating = form.get("rating");
    const categoryId = categoryObject[category];

    const product = { name, imageUrl, price, rating, categoryId };
    // console.log("product info", product);
    event.target.reset();
    setRating('');


    fetch("https://bookshopbackend-kk5q.onrender.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added Successfully", {
            position: "top-right",
          });
        }
        event.target.reset();
      });
  };





  return (

    <div>

      <div class="bg-gray-100">
        <div class="header bg-white h-20 px-10 py-10 border-b-2 border-gray-200 flex items-center justify-between">
        </div>

        <div className="mx-auto mt-20">
          <div className="flex justify-center justify-items-center">
            <h1 className="text-3xl font-bold text-center mb-20">
              Add new Product
            </h1>
            &nbsp;&nbsp;&nbsp;
            <Link to="/dashboard/productsList">

              <button
                className="bg-transparent w-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
           h-12 p-1 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
              >Close
              </button>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="w-full ">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Product Name
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Prodcut name"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Product Image Url
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="img-url"
                  type="text"
                  name="img-url"
                  placeholder="Enter image Url"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Product Price
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Product Price"
                />
              </div>

            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Product Rating
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                  name="rating"
                  placeholder="Enter Product Rating"
                />
              </div>

            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Select Category
                </label>
              </div>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white"
              >
                <option value="">Select category</option>
                {Object.keys(categoryObject).map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>

            </div>
            <div className="md:flex md:items-center p-6">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 items-center">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
              font-bold py-2 px-4 rounded items-center"
                  type="submit"
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>


      </div>



    </div>
  );
};

export default AddewProduct;
