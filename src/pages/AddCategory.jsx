import React from 'react'
import toast from 'react-hot-toast';
import { FaClosedCaptioning, FaEdit, FaPowerOff, FaTrash, FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function AddCategory() {
  const handleAddCategory = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const imageUrl = form.get("image-url");

    const category = { name, imageUrl };
    // console.log(category);

    fetch("https://bookshopbackend-kk5q.onrender.com/addCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Category Added Successfully", {
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
              Add new category
            </h1>
            &nbsp;&nbsp;&nbsp;
            <Link to="/dashboard/categoriesList">

            <button
              className="bg-transparent w-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
           h-12 p-1 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
            >Close
            </button>
            </Link>
          </div>
          <form onSubmit={handleAddCategory} className="w-full ">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Category Name
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Category name"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Category Image Url
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="image-url"
                  type="text"
                  name="image-url"
                  placeholder="Enter image Url"
                />
              </div>
            </div>

            <div className="md:flex md:items-center p-6">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 items-center">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
              font-bold py-2 px-4 rounded items-center"
                  type="submit"
                >
                  Add Category
                </button>
              </div>
            </div>
          </form>
        </div>


      </div>



    </div>
  )
}
