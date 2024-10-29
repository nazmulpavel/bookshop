import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router-dom';

export default function CategoriesList() {
    const loadedCategories = useLoaderData();

    const [category, setCategory] = useState(loadedCategories);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5001/category/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Category Deleted Successfully", {
                        position: "top-right",
                    });

                    const remainingCategories = category.filter((category) => category._id !== _id);
                    console.log("Remaing", remainingCategories);

                    setCategory(remainingCategories);
                    window.location.reload();


                }
            });
    };

    return (

        <div className="mt-14">
            <div className="flex justify-center justify-items-center">
                <h1 className="text-3xl font-bold text-center mb-10">
                    All Cateories List: {loadedCategories.count}
                </h1>
                &nbsp;&nbsp;&nbsp;
                <Link to="/dashboard/AddCategory">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
                          py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                    >
                        Add a category
                    </button>
                </Link>
            </div>
            <table className="border-collapse w-2/3 mx-auto">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Category
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Image
                        </th>

                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {loadedCategories.map((cat) => (
                        <tr
                            key={cat._id}
                            className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                        >
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    name
                                </span>
                                {cat.name}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    {" "}
                                    email
                                </span>
                                <img className="w-40 h-40 items-center" src={cat.imageUrl} alt="category Image" />
                                {/* {cat.imageUrl.substring(0, 50)} */}
                            </td>

                            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                    Actions
                                </span>
                                <div class="flex justify-center">
                                    <a href="#" class="rounded-md hover:bg-green-100 text-green-600 p-2 flex justify-between items-center">
                                        <span><FaEdit class="w-4 h-4 mr-1" />
                                        </span> Edit
                                    </a>
                                    <button onClick={() => handleDelete(cat._id)}
                                        class="rounded-md hover:bg-red-100 text-red-600 p-2 flex justify-between items-center">
                                        <span><FaTrash class="w-4 h-4 mr-1" /></span> Delete
                                    </button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}