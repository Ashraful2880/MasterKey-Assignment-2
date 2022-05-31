import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Images/Main-Logo.png";

const Register = () => {
    return (
        <div className="bg-style">
            <div className="container mx-auto">
                <div className="w-[50%] rounded-md py-10 mx-auto">
                    <p className="text-orange-600 text-3xl mb-4 font-semibold">Please Signup</p>
                    <img className="w-20 mx-auto" src={logo} alt="logo" />
                    <p className="text-2xl text-white font-semibold mb-6">
                        <span className="text-orange-600">M</span>r <span className="text-orange-600">M</span>odernistic
                    </p>
                    <form className="w-[40%] mx-auto">
                        <div className="mb-4">
                            <p className="text-lg text-white font-semibold text-left block">Your Name</p>
                            <input
                                type="name"
                                className="w-full px-5 py-3 rounded-md my-1 mx-auto"
                                placeholder="Your Name " />
                        </div>
                        <div className="mb-4">
                            <p className="text-lg text-white font-semibold text-left block">Your Email</p>
                            <input
                                type="email"
                                className="w-full px-5 py-3 rounded-md my-1 mx-auto"
                                placeholder="example@gmail.com" required />
                        </div>
                        <div className="mb-4">
                            <p className="text-lg text-white font-semibold text-left block">Your Password</p>
                            <input
                                type="password"
                                className="w-full px-5 py-3 rounded-md my-1 mx-auto"
                                placeholder="Your Password" required />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-orange-600 text-xl px-5 py-2 w-full border border-orange-600 rounded-md duration-200 hover:bg-transparent">
                            Signup
                        </button>
                    </form>
                    <p className="text-white text-xl mt-5 ">Already Register?
                        <Link
                            className="ml-4 text-orange-500"
                            to="/login">
                            Sign in here
                        </Link>
                    </p>
                    <button
                        className="w-[40%] mx-auto flex justify-evenly items-center my-6 px-10 py-2 border border-orange-600 rounded-md duration-200 bg-white hover:bg-orange-600 hover:text-white text-lg font-bold">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg2.svg" alt="google" />
                        <p>
                            Continue with Google
                        </p>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Register;