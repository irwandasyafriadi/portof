'use client';

import Link from "next/link"; 
import { Button } from "./ui/button";

// import swiper compoent
import {Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

// components 
// import WawancaraCard from '@/components/WawancaraCard';

const DataTim = [
    {
        image : 'url(/tim/daffa.jpg)',
    },
    {
        image : '/tim/raihan.jpg',
    },
    {
        image : '/tim/jenny.jpg',
    },
    {
        image : '/tim/nasya.jpg',
    },
    {
        image : '/tim/chyntia.jpg',
    },
    {
        image : '/tim/olin.jpg',
    },
    {
        image : '/tim/zacky.jpg',
    },
    {
        image : '/tim/raihan.jpg',
    },
    {
        image : '/tim/raihan.jpg',
    },
    {
        image : '/tim/raihan.jpg',
    },
];

const Tim = () => {
    return  <section>
        <div className="container mx-auto space-y-10">
            {/* text */}
            <div className="">
                <h2 className="section-title ">
                    Tim Kami
                </h2>
            </div>
            <div>
                <Swiper className="h-[480px] "
                        slidesPerView={1}
                        breakpoints={{
                         640:{
                            slidesPerView: 2,
                         },   
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{clickable: true}}
                        >

                    {DataTim.slice(0.4).map(( tim,index) => {
                        return <SwiperSlide >
                            {tim.image}
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
};

export default Tim;