import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import Faq from './Faq'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate();
  // const user = useLoaderData();

  const loadedCategories = useLoaderData();

  const [category, setCategory] = useState(loadedCategories);
console.log("home page",loadedCategories.count);
//   useEffect(() => {
//     const fetchCategories = async () => {
//         try {
//             const res = await fetch('http://localhost:5001/categories');
//             const data = await res.json();
//         console.log("categories are", data.count);
//         console.log(data);

//             // Create category object after fetching categories
//             // as we need to insert category._id while adding product into DB.
//             const tempCategoryObject = {};
//             data.forEach(category => {
//                 tempCategoryObject[category.name] = category._id;
//                 console.log(category.name);
//             });
//             // setCategoryObject(tempCategoryObject);
//              setCategory([data]);

//         } catch (error) {
//             console.error('Error fetching categories:', error);
//         }
//     };

//     fetchCategories();
// }, []);






  return (
    <>
      <Helmet>
        <title>BookMania</title>
      </Helmet>
      <div >
        <div className="carousel w-full h-96 scroll-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="banner1.jpg"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="banner2.avif"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="banner3.avif"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="banner4.avif"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <br /> <hr />
        <hr />
        <hr />

        <h3 className="text-3xl bold text-center p-2 ">"Unleashing the Reader in You"</h3>
        <br /> <hr />
        <hr />
        <hr />
        <br />

        <div
          className="hero "
          style={{
            backgroundImage: "url(banner2.avif",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Your Next Great Read Awaits</h1>
              <p className="mb-5">
                Discover a curated selection of books that inspire, entertain, and educate. Whether you're a lifelong bibliophile or just beginning your reading journey, Book Mania is here to ignite your love for literature. Explore stories that speak to your soul and unlock the joy of reading like never before..
              </p>
              <Link to="/product">
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <br /> <hr />
        <hr />
        <hr />
        <h3 className="text-3xl bold text-center p-2 ">Categories</h3>
        <br /> <hr />
        <hr />
        <hr />
        <br />
        {/* category */}
        {/* {loadedCategories.map((cat) => { */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          {/* })}  */}


        <br /> <hr />
        <hr />
        <hr />
        <h3 className="text-3xl bold text-center p-2 ">FAQ Section</h3>
        <br /> <hr />
        <hr />
        <hr />
        <br />
        <Faq></Faq>
      </div>
    </>
  )
}
