import React from 'react'

import { useLoaderData, useLocation } from "react-router-dom";




export default function BookDetails() {
    const location = useLocation();

    const { item } = location.state || {};
    console.log("item is--",item);
    const pageNumber = Math.floor(Math.random() * 100) + 200;
    const yearNumber = Math.floor(Math.random() * 100) + 1924;


    const handleClick = (index) => {

        let text1 = item.name + " " + item._id;
        let text2 = (index == 1) ? " is added to wish to read" : " is added to your cart";
        let result = text1.concat(text2);

        alert(text1);
    }


    return (
        
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={item.imageUrl}
                        className="w-1/2 h-80 rounded-lg shadow-2xl" />
                    <div className="w-1/2" >
                        <h1 className="text-2xl font-bold ml-10">{item.name}</h1>
                        <div className="flex  p-4 m-4">
                            <h1 className="m-2"> Tootal Page: <span className=" text-orange-600">{pageNumber}</span> </h1>
                            <h1 className="m-2" > Rating: <span className="text-green-500">{item.rating}</span> </h1>
                        </div>
                        <p className="m-10"> Year of Publishing:: <span className="text-green-500">{yearNumber}</span> </p>
                        <div className="flex items-center ">

                            {/* <div className="badge badge-primary badge-outline m-2  h-10">{item.tags[0]}</div>
                            <div className="badge badge-secondary badge-outline m-2  h-10">{item.tags[1]}</div>
                            <div className="badge badge badge-accent m-2  h-10">{item.tags[2]}</div> */}
                        </div>


                        <div className="flex items-center justify-center w-full mx-auto">
                            {/* <p className="m-4 p-4 w-40 "> Item length:  <br /> {item.totalPages}  Page </p>
                            <p className="m-4 p-4"> Publishing year:<br /> {item.yearOfPublishing} </p>
                            <p className="m-4 p-4"> Publishers: <br /> {item.publisher} </p> */}
                        </div>

                        <div className="flex items-center">
                            <button onClick={() => handleClick(1)} className="btn btn-primary m-10 p-4">Wish to Read</button>
                            <button onClick={() => handleClick(2)} className="btn btn-secondary m-10 p-4">Add to cart</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
