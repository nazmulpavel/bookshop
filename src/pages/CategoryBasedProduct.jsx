import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

export default function CategoryBasedProduct() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const user = useLoaderData();
  const location = useLocation();

  const { catId } = location.state|| {};
  console.log("catId is--",catId);

  useEffect(() => {
    fetch(`https://bookshopbackend-kk5q.onrender.com/category/products/${catId}`).
      then((res) => res.json()).
      then((data) => setBooks(data))
  }, [])

//   console.log(books)



  const handleClick = (book) => {
      const { } = book;
    //   console.log("book name", book.name);

      const url = '/bookdetails/' + book._id;
      navigate(url, { state: { item: book}});

  };


  return (
    <div className="grid lg:grid-cols-3 sm: grid-cols-1  md:grid-cols-2 gap-5" >
      {/* <hr /> */}

      {books.map((book) => {
        const pageNumber = Math.floor(Math.random() * 100) + 200;
        const yearNumber = Math.floor(Math.random() * 100) + 1924;

        return (
          <div className="grid grid-cols-2 items-center" key={book.id}>
            {/* <p>Book  Name: {book.bookName}</p>
            <p>Book rating: {book.rating}</p> */}
            <div className="card bg-base-100 w-96 shadow-xl mt-2">
              <figure>
                <img
                  src={book.imageUrl}
                  alt={book.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {book.name}
                </h2>
                <p className="badge badge-secondary">Rating: {book.rating}</p>
                <div className="card-actions justify-centre">
                  <div className="badge badge-outline font-bold">Total Pages: {pageNumber}                  </div>
                  <div className="badge badge-outline font-bold ">Published: {yearNumber}</div>

                </div>
              </div>
              <div className= "mx-auto pb-4 ">
                <button onClick={() => handleClick(book)} className="btn btn-outline btn-accent text-center ">Buy Now</button>
              </div>
            </div>
          </div>
        )
      })}






    </div>
  )
}
