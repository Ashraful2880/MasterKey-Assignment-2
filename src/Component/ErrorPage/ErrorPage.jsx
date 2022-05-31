import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center pt-12 pb-20">
            <div className="flex items-center justify-center mx-4 md:w-2/3 ">
                <div className="py-16">
                    <img
                        className="px-4"
                        src="https://i.ibb.co/ThGcj8s/404.png"
                        alt="NotFound" />
                    <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800"> OOPS! </h1>
                    <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">We Cannot Find The Page You Are Looking For </p>
                    <button
                        className="mx-4 px-10 py-2 border border-orange-600 rounded-md text-orange-600 hover:text-white text-lg font-bold bg-transparent hover:bg-orange-600 duration-200">
                        <Link to="/home"> Back to Home </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;