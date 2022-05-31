import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/Main-Logo.png";

const Header = () => {
    const toogleMenu = () => {
        const toggleButton = document.getElementById("toogle");
        if (toggleButton.style.display === "none") {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    }
    return (
        <nav className="bg-gray-900 sm:px-4 py-2.5 sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/home" className='flex items-center'>
                    <img src={logo} className="mr-3 h-9 w-9 sm:h-9 rounded-full" alt="Main Logo" />
                    <p className="self-center text-xl text-white font-semibold whitespace-nowrap">
                        <span className="text-orange-600">M</span>r <span className="text-orange-600">M</span>odernistic
                    </p>
                </Link>
                <div className="flex md:order-2">
                    <Link to="/">
                        <img src="https://avatars.githubusercontent.com/u/86690202?v=4" alt="userImage" className="w-10 h-10 rounded-full border border-orange-500" />
                    </Link>
                    <button onClick={toogleMenu} type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-orange-600 focus:outline-none focus:ring-0 ml-4">
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="toogle">
                    <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/home" className="block py-1 text-white text-lg border-y-2 border-y-transparent hover:border-orange-600 hover:text-orange-600 px-2 duration-500 focus:border-y-orange-600 focus:text-orange-600 mx-2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-1 text-white text-lg border-y-2 border-y-transparent hover:border-orange-600 hover:text-orange-600 px-2 duration-500 focus:border-y-orange-600 focus:text-orange-600 mx-2">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-1 text-white text-lg border-y-2 border-y-transparent hover:border-orange-600 hover:text-orange-600 px-2 duration-500 focus:border-y-orange-600 focus:text-orange-600 mx-2">
                                Contact
                            </Link>
                        </li>
                        <div className="lg:flex block gap-x-2">
                            <li>
                                <Link to="/register" className="block py-1 text-white text-lg border-y-2 border-y-transparent hover:border-orange-600 hover:text-orange-600 px-2 duration-500 focus:border-y-orange-600 focus:text-orange-600 mx-2">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="block py-1 text-white text-lg border-y-2 border-y-transparent hover:border-orange-600 hover:text-orange-600 px-2 duration-500 focus:border-y-orange-600 focus:text-orange-600 mx-2">
                                    Login
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;