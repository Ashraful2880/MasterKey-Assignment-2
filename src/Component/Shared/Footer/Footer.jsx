import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/Main-Logo.png';

const Footer = () => {
    return (
        <footer className="text-center lg:text-left text-gray-300 bg-gray-900 pt-10" >
            <div className="container mx-auto">
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <Link to="/home">
                                <img className="mb-2 w-36 mx-auto lg:mx-0" src={logo} alt="footer logo" />
                                <p className="text-xl text-white font-semibold mb-4">
                                    <span className="text-orange-600">M</span>r <span className="text-orange-600">M</span>odernistic
                                </p>
                            </Link>
                            <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-orange-600 duration-150 hover:scale-125" icon={faFacebook} />
                            <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-orange-600 duration-150 hover:scale-125" icon={faInstagram} />
                            <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-orange-600 duration-150 hover:scale-125" icon={faTwitter} />
                            <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-orange-600 duration-150 hover:scale-125" icon={faGithub} />
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-600">
                                About Us
                            </h6>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> Monthly Ad Fees </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> All Ad List List </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> Privacy Policy </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> Sitemap </Link>
                            </p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-600">
                                Useful links
                            </h6>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> Our Services </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> Guidelines for Users </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> Post Rules </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-600">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                <Link to="/home"> Help </Link>
                            </p>
                        </div>
                        <div className="contact-area">
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-600">
                                Contact
                            </h6>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-600 cursor-pointer">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                Jhenaidah, Dhaka, Bangladesh
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-600 cursor-pointer">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                contact.ashraful1@gmail.com
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-600 cursor-pointer">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                + 88-01764238487
                            </p>
                            <p className="flex items-center justify-center md:justify-start hover:text-orange-600 cursor-pointer">
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                + 88-01974238487
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-8">
                    <span>Copyright; © 2022 - </span>
                    <a className="text-orange-600 font-semibold" href="https://ashrafulislam.netlify.app"> Mr. Modernistic</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;