import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./drag.css"

import slider_img1 from "../../assets/images/img1.webp"
import slider_img2 from "../../assets/images/img2.jpg"
import slider_img3 from "../../assets/images/deluxesuite.jpg"
function Drag() {
    return (
        <div className="containerslider">

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slider_img1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_img2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider_img3} alt="slide_image" />
                </SwiperSlide>
                <div className="buttonslider">
                    <button>
                        <Nav.Link href='#content'>
                            <span className='btnslide'>
                                <img src="https://www.lottehotel.com/content/dam/lottehotel/components/common/content/common/s501-main-image/icon-pagedown.gif" alt="" />
                            </span>
                        </Nav.Link>
                    </button>
                </div>
                
            </Swiper>
            <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>



        </div>
    )
}

export default Drag