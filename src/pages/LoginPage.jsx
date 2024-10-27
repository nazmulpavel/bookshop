import React, { useContext } from 'react'
import { AuthContext } from '../provider/Authprovider';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const { loginWithGoogle, signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleGoogleLogIn = () => {
        loginWithGoogle().then((res) => {
            console.log(res)
            navigate("/");

        }).catch((err) => console.log(err));

    }

    const handleLogin = (event) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        // console.log(form);

        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Log in successfull', {
                    position: "top-right"
                  })
                navigate(location?.state ? location.state : "/dashboard");
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <Helmet>
                <title>BookMania | Login</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" id="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <button onClick={handleGoogleLogIn} class="card-body" className="btn btn-secondary">login with Google</button>
                                <div className="">
                                    Don't have an Account?
                                    <Link className="text-blue-500 underline hover:text-blue-600" to="/register">Register Here </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
