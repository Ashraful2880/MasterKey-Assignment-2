import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Partners = () => {
    const [partners, setPartners] = useState([])
    useEffect(() => {
        fetch("./Partners.json")
            .then(res => res.json())
            .then(data => setPartners(data))
    }, [])

    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-4xl text-orange-500 font-bold">Our Partners</h1>
            <p className="text-2xl font-semibold mb-4">People Behind Our Success</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8 p-10">
                {
                    partners.map(partner =>
                        <div className="lg:flex md:block sm:block justify-between items-center gap-10 hover:shadow-2xl py-3 rounded-lg duration-300 cursor-pointer" key={partner?.id}>
                            <img src={partner?.image} alt="partner Profile" className="rounded-full w-40 mx-auto" />
                            <div className="lg:text-left text-center">
                                <h4 className="text-xl font-semibold">{partner?.name}</h4>
                                <h5 className=" font-semibold text-orange-500 mb-2">{partner?.designation}</h5>
                                <h5 className="text-gray-500 mb-2 pr-2">{partner?.details}</h5>
                                <a href="https://www.facebook.com/ashrafonline706/" target="blank">
                                    <FontAwesomeIcon icon={faFacebook} className="text-sky-600 hover:text-orange-500 duration-200 text-xl mx-2" />
                                </a>
                                <a href="https://www.instagram.com/ashraful.islam706/" target="blank">
                                    <FontAwesomeIcon icon={faInstagram} className="text-sky-600 hover:text-orange-500 duration-200 text-xl mx-2" />
                                </a>
                                <a href="https://twitter.com/IslamAshraful80" target="blank">
                                    <FontAwesomeIcon icon={faTwitter} className="text-sky-600 hover:text-orange-500 duration-200 text-xl mx-2" />
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Partners;