"use client";
import { useRef } from "react";
import Image from "next/image";

//Swiper
import { Swiper, SwiperSlide, } from "swiper/react";

import "swiper/css";
import "swiper/css/keyboard";

import { Keyboard } from "swiper/modules";

const Slider = (props) => {
    const { slides = [] } = props;

    const swiperRef = useRef();

    return (
        <div>
            <Swiper
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                modules={[Keyboard]}
                onSwiper={swiper => swiperRef.current = swiper}
                spaceBetween={50}
                slidesPerView={3}
            >
                {
                    slides.length !== 0 && slides.map(slide => {
                        const { src, alt, caption } = slide;
                        return (
                            <SwiperSlide key={alt}>
                                <div style={{ position: "relative" }}>
                                    <Image
                                        alt={alt}
                                        src={src}
                                        width={100}
                                        height={100}
                                        style={{
                                            width: "fit-content"
                                        }}
                                    />
                                </div>
                                {
                                    caption && (
                                        <figcaption>
                                            {caption}
                                        </figcaption>
                                    )
                                }
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <div>
                <button onClick={() => {
                    swiperRef.current.slidePrev();
                }}>
                    Prev
                </button>
                <button onClick={() => {
                    swiperRef.current.slideNext();
                }}>
                    Next
                </button>
            </div>
        </div>
    );
};


export default Slider;;