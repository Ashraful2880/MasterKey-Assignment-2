import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const Team = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch("./TEstimonials.json")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-3xl font-bold text-orange-600">What Our Students Have To Say</h1>
            <p className="text-2xl font-semibold mb-8">Discover Your Perfect Program.</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                centeredSlides={true}
                autoplay={{ delay: 9500, disableOnInteraction: false, }}
                navigation={true}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    550: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    1020: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper min-h-[30vh]">
                {
                    testimonials.map(item =>
                        <SwiperSlide key={item?.id} >
                            <div className="border p-5 bg-white rounded-lg">
                                <div className="flex items-center gap-5 mb-4">
                                    <img src={item?.image} alt="TeamImage" className="rounded-full" />
                                    <div className="text-left font-semibold">
                                        <h4 className="text-xl">{item?.name}</h4>
                                        <h5 className="text-orange-500">{item?.designation}</h5>
                                    </div>
                                </div>
                                <p className="text-left">{item?.comment}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div >
    );
};

export default Team;