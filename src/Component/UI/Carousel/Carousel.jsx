import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);



export const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const activeSlide = index => {

        if (activeIndex === index) {
            return {
                WebkitTransform: 'scale(1.1)',
                MozTransform: 'scale(1.1)',
                transform: 'scale(1.1)',
            }
        }

        return {
            padding: '2%'
        }

    }

    return (
        <section className="pb-32 w-full">
            <div className="w-full">
                <Swiper slidesPerView={2} spaceBetween={30} pagination={{ "clickable": true }} loop={true} loopedSlides={6} className="mySwiper" centeredSlides={true} slideActiveClass={'swiper-slide-active'}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    simulateTouch={true}
                    autoplay={{ delay: 5000 }}
                    slideToClickedSlide={true}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide style={activeSlide(0)} ><img src="/assets/meka_01.jpg" alt="meka01" className="2xl:m-auto" /></SwiperSlide>

                    <SwiperSlide style={activeSlide(1)}><img src="/assets/meka_02.jpg" alt="meka01" className="2xl:m-auto" /></SwiperSlide>

                    <SwiperSlide style={activeSlide(2)}><img src="/assets/meka_03.jpg" alt="meka01" className="2xl:m-auto" /></SwiperSlide>

                    <SwiperSlide style={activeSlide(3)}><img src="/assets/meka_04.jpg" alt="meka01" className="2xl:m-auto" /></SwiperSlide>

                    <SwiperSlide style={activeSlide(4)}><img src="/assets/meka_05.jpg" alt="meka01" className="2xl:m-auto" /></SwiperSlide>

                    <SwiperSlide style={activeSlide(5)}><img src="/assets/meka_06.jpg" alt="meka01" className="2xl:m-auto" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}




