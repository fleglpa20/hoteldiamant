import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
    let jednicka;
    jednicka = "src/png/room.png"
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={jednicka}/></SwiperSlide>
                <SwiperSlide><img src={jednicka}/></SwiperSlide>
                <SwiperSlide><img src={jednicka}/></SwiperSlide>
                <SwiperSlide><img src={jednicka}/></SwiperSlide>
                <SwiperSlide><img src={jednicka}/></SwiperSlide>
                <SwiperSlide><img src={jednicka}/></SwiperSlide>
            </Swiper>
        </>
    );
}
