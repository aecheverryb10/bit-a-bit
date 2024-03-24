"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

//Swiper
import { Swiper, SwiperSlide, } from "swiper/react";

import "swiper/css";
import "swiper/css/keyboard";

import { Keyboard } from "swiper/modules";

const Slider = (props) => {
    const { slides = [] } = props;
    const swiperRef = useRef();

    //States
    const [isDisabled, setIsDisabled] = useState({ prev: swiperRef.current?.isBeginning, next: swiperRef.current?.isEnd });

    useEffect(() => {
        if (swiperRef.current) {
            updateStateControllers()
        }
    }, []);

    const updateStateControllers = () => {
        setIsDisabled({
            prev:swiperRef.current.isBeginning, 
            next:swiperRef.current.isEnd
        });
    }

    return (
        <div>
            <Swiper
                keyboard={{
                    enabled: true,
                }}
                onKeyPress={(swiper, code) => {
                    const AVAILABLE_KEYS =[37,39]
                    if(AVAILABLE_KEYS.includes(code) ){
                        updateStateControllers()
                    }
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
                <button
                    className="disabled:opacity-50"
                    disabled={isDisabled.prev}
                    onClick={() => {
                        swiperRef.current.slidePrev();
                        updateStateControllers()
                    }}
                >
                    Prev
                </button>
                <button
                    className="disabled:opacity-50"
                    disabled={isDisabled.next}
                    onClick={() => {
                        swiperRef.current.slideNext();
                        updateStateControllers()
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slider