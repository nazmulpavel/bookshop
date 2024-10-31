import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/Authprovider'
import { FaDashcube, FaDeviantart, FaEdit, FaToggleOn } from 'react-icons/fa';
import { FaPersonRifle } from 'react-icons/fa6';

export default function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState('light'); // Initial theme

  console.log(user);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser().then((res) => {
      navigate("/");
    });
  }
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Set data-theme attribute
};


  return (
    <div >
      <div className="navbar bg-emerald-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link to="/"><a >Home</a></Link>
              <Link to="/product"><a>All Product</a></Link>
            </ul>
          </div>
          <img className="w-10 rounded-full" src="icon.png" alt="logo  " />
          <Link to="/">
            <a className="btn btn-ghost text-xl  hover:text-orange-700">BookMania</a>
          </Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  space-x-5  ">
            <Link to="/" ><a className=" hover:text-orange-700">Home</a></Link>
            <Link to="/product"><a className=" hover:text-orange-700">All Products</a></Link>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user ? (<>
              <div class="flex items-center gap-3">
                <img class="w-7 rounded-full" src={user?.photoUrl} alt="" />
                <span>{user?.displayName}</span>
                <span>     
                <button onClick={toggleTheme}  className="btn btn-outline  hover:bg-green-600 btn-success"><FaToggleOn/>{
 theme === 'light' ? 'Dark' : 'Light'
                }</button>           
                </span>
                <Link to="/dashboard">  <button  className="btn btn-outline  hover:bg-green-600 btn-success"><FaEdit/>Dashboard</button></Link>
              </div>
            </>) : (<Link to="/login"> <a className="btn  hover:text-orange-700">LogIn</a> </Link>)
          }
          {
            user ? <></> : (<Link to="/register"> <a className="btn  hover:text-orange-700">Register</a> </Link>)
          }
        </div>
      </div>
    </div>
  )
}
