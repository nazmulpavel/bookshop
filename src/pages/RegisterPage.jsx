import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { AuthContext } from '../provider/Authprovider'
import { Helmet } from 'react-helmet';


export default function RegisterPage() {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) =>{
        console.log("name");
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        console.log(form);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name,photo,email,password);
    

        createUser(email,password,name,photo).then((result)=>{
            console.log("yyyyyy",result.user);
            handleUserProfile(name, photo);
            navigate("/");
        }).catch((error)=>{
            console.log(error);

        });

        const handleUserProfile = (name, photo) => {
            const profile = { displayName: name, photoURL: photo };
        
            updateUserProfile(profile)
              .then(() => {
                console.log("pppppppp");
                // navigate("/login");
              })
              .catch((error) => {
                console.log(error);
              });
          };

    }
  return (
    <>
            <Helmet>
            <title>BookMania | Register</title>
        </Helmet>
    <div>
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input id ="name" name = "name" type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id ="email" name = "email"  placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" id ="photo" name = "photo" placeholder="Your photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  id ="password" name = "password" placeholder="password" className="input input-bordered" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className= "">
                        Already have an Account? 
                       <Link  className="text-blue-500 underline hover:text-blue-600" to ="/login">Login Here </Link>
                     </div>
                </form>

            </div>
        </div>
    </div>
</div>
</>
  )
}
