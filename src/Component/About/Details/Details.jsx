import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Capital from './Capital';
import Mission from './Mission';
import Board from './Board';
import Management from './Management';
import Circulation from './Circulation';
import Career from './Career';
import Contact from '../../Contact/Contact';

const Details = () => {
    const [display, setDisplay] = useState("capital");

    return (
        <main className="flex w-full h-full">
            <aside className=" w-60 h-full" id="toogleDashboard">
                <div className="flex flex-col justify-between h-full w-60 p-4">
                    <div className="text-md">
                        <button
                            onClick={() => setDisplay("capital")}
                            className="p-2 rounded cursor-pointer hover:text-orange-600 focus:text-orange-600 w-full block font-semibold text-left">
                            <FontAwesomeIcon icon={faCaretRight} className="text-orange-600 mr-2" />
                            <span>Capital Profile</span>
                        </button>
                        <button
                            onClick={() => setDisplay("mission")}
                            className=" p-2 rounded cursor-pointer hover:text-orange-600 focus:text-orange-600 w-full block font-semibold text-left">
                            <FontAwesomeIcon icon={faCaretRight} className="text-orange-600 mr-2" />
                            <span> Mission & Vission</span>
                        </button>
                        <button
                            onClick={() => setDisplay("board")}
                            className="p-2 rounded cursor-pointer hover:text-orange-600 focus:text-orange-600 w-full block font-semibold text-left">
                            <FontAwesomeIcon icon={faCaretRight} className="text-orange-600 mr-2" />
                            <span>Board Of Directors</span>
                        </button>
                        <button
                            onClick={() => setDisplay("management")}
                            className="p-2 rounded cursor-pointer hover:text-orange-600 focus:text-orange-600 w-full block font-semibold text-left">
                            <FontAwesomeIcon icon={faCaretRight} className="text-orange-600 mr-2" />
                            <span>Management/Executive</span>
                        </button>
                        <button
                            onClick={() => setDisplay("circulation")}
                            className="p-2 rounded cursor-pointer hover:text-orange-600 focus:text-orange-600 w-full block font-semibold text-left">
                            <FontAwesomeIcon icon={faCaretRight} className="text-orange-600 mr-2" />
                            <span>Circulation</span>
                        </button>
                        <button
                            onClick={() => setDisplay("career")}
                            className="p-2 rounded cursor-pointer hover:text-orange-600 focus:text-orange-600 w-full block font-semibold text-left">
                            <FontAwesomeIcon icon={faCaretRight} className="text-orange-600 mr-2" />
                            <span>Career Opportunity</span>
                        </button>
                        <button
                            onClick={() => setDisplay("contact")}
                            className="p-2 rounded cursor-pointer hover:text-orange-600 focus:text-orange-600 w-full block font-semibold text-left">
                            <FontAwesomeIcon icon={faCaretRight} className="text-orange-600 mr-2" />
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </aside>
            <section className="w-full">
                {display === "capital" && <Capital />}
                {display === "mission" && <Mission />}
                {display === "board" && <Board />}
                {display === "management" && <Management />}
                {display === "circulation" && <Circulation />}
                {display === "career" && <Career />}
                {display === "contact" && <Contact />}
            </section>
        </main>
    );
};

export default Details;