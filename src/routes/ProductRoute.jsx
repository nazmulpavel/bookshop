import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/Authprovider';
import { Navigate, useLocation } from "react-router-dom";

export default function ProductRoute({children}) {
   const navigate = useNavigate();
   const {user} = useContext(AuthContext);
  if(user){
    console.log(user);
    return children;

  }
    console.log("ollll");
    // return navigate("/login");

    return <Navigate state={location.pathname} to="/login"></Navigate>


}
