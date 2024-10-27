import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function ProductsPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const user = useLoaderData();

  useEffect(() => {
    fetch(`https://boighorbackend.vercel.app/books`).
      then((res) => res.json()).
      then((data) => setBooks(data))
  }, [])

  console.log(books)



  const handleClick = (book) => {
      const { } = book;
      console.log("book name", book.bookName);

      const url = '/bookdetails/' + book.bookId;
      console.log("ooooo",url)
      navigate(url, { state: { item: book}});

  };


  return (
    <div className="grid lg:grid-cols-3 sm: grid-cols-1  md:grid-cols-2 gap-5" >
      {/* <hr /> */}

      {books.map((book) => {
        return (
          <div className="grid grid-cols-2 items-center" key={book.id}>
            {/* <p>Book  Name: {book.bookName}</p>
            <p>Book rating: {book.rating}</p> */}
            <div className="card bg-base-100 w-96 shadow-xl mt-2">
              <figure>
                <img
                  src={book.image}
                  alt={book.bookName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {book.bookName}
                  <div className="badge badge-secondary">{book.rating}</div>
                </h2>
                <p>{book.review}</p>
                <div className="card-actions justify-centre">
                  <div className="badge badge-outline font-bold">Total Pages: {book.totalPages}</div>
                  <div className="badge badge-outline font-bold ">Published: {book.yearOfPublishing}</div>

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
